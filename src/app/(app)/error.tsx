"use client";

import { type FC, useEffect } from "react";

type Props = {
    error: Error & { digest?: string };
    reset: () => void;
};
const ErrorPage: FC<Props> = ({ error, reset }) => {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    );
};

export default ErrorPage;
