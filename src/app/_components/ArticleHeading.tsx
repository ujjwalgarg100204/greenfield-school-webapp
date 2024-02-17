import type { FC, HTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

const ArticleHeading: FC<HTMLAttributes<HTMLHeadingElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <h1
            className={twMerge(
                "text-center text-3xl font-bold sm:text-[2rem] md:text-left md:text-4xl",
                className,
            )}
            {...props}
        >
            {children}
        </h1>
    );
};

export default ArticleHeading;
