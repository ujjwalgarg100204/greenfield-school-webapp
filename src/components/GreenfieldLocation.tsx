import type { FC } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

const GreenfieldLocation: FC<Props> = ({ className }) => {
  return (
    <iframe
      className={twMerge(
        "h-32 w-full rounded-md border-0 outline-none",
        className,
      )}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.7155168074796!2d76.94687797475602!3d11.05994248910661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f626ffc42147%3A0xf398a88ed4aed02b!2sGreenfields%20Matriculation%20School!5e0!3m2!1sen!2sin!4v1696784362822!5m2!1sen!2sin"
      loading="lazy"
    ></iframe>
  );
};

export default GreenfieldLocation;
