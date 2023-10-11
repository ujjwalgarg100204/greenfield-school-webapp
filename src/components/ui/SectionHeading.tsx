import { HTMLAttributes } from "react";
import clsx from "clsx";

const SectionHeading = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      className={clsx(
        "text-center text-3xl font-bold md:text-left md:text-4xl",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export default SectionHeading;
