interface Cache<T> {
    get: () => Promise<T>;
    set: (data: T) => void;
    revalidate: () => Promise<void>;
}

export class CacheInMemory<T> implements Cache<T> {
    private data: T | null;
    private revalidatingFunction: () => Promise<T>;
    private revalidateAfter: number;

    private lastRevalidated: Date;

    constructor(
        revalidatingFunction: () => Promise<T>,
        revalidateAfter: number,
    ) {
        this.revalidatingFunction = revalidatingFunction;
        this.revalidateAfter = revalidateAfter;

        // initially no data
        this.data = null;
        this.lastRevalidated = new Date(0);
    }

    get = async () => {
        if (this.shouldRevalidate()) await this.revalidate();
        return this.data!;
    };

    set = (data: T) => {
        this.data = data;
        this.updateLastRevalidated();
    };

    revalidate = async () => {
        this.data = await this.revalidatingFunction();
        if (this.data === null) {
            throw Error("Data is null after calling revalidating function");
        }
        this.updateLastRevalidated();
    };

    private shouldRevalidate = () => {
        // should revalidate when data is null or when the last revalidation was more than revalidateAfter ago
        const now = new Date();
        const diff = now.getTime() - this.lastRevalidated.getTime();
        return this.data === null || diff > this.revalidateAfter;
    };

    private updateLastRevalidated = (time: Date = new Date()) => {
        this.lastRevalidated = time;
    };
}
