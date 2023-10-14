"use client";

import type { FC } from "react";
import { Radio } from "@lib/next-ui";
import type { RadioProps } from "@nextui-org/react";

const CustomRadio: FC<RadioProps> = ({ children, ...props }) => {
  return (
    <Radio
      classNames={{
        base: "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-3 border-2 border-default data-[selected=true]:border-primary data-[selected=true]:bg-primary data-[invalid=true]:border-rose-600",
        label:
          "capitalize group-data-[selected=true]:text-white group-data-[selected=true]:font-bold",
        wrapper:
          "group-data-[selected=true]:bg-white group-data-[selected=true]:border-slate-400",
      }}
      {...props}
    >
      {children}
    </Radio>
  );
};

export default CustomRadio;
