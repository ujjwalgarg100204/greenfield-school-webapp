"use client";

import { Card, CardFooter, Chip, Image } from "@lib/next-ui";

import NextImage from "next/image";
import type { FC } from "react";

type Props = {
  uniformData: Record<string, string>;
  uniformImages: {
    summer: { src: string };
    winter: { src: string };
  };
};

const UniformList: FC<Props> = ({ uniformImages, uniformData }) => {
  return (
    <div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-24">
      <ul className="w-full flex-grow space-y-8 lg:w-2/3 lg:space-y-12">
        {Object.entries(uniformData).map(([key, value]) => (
          <li key={key} className="space-y-1">
            <h4 className="font-semibold">{key}</h4>
            <hr className="h-1 w-full border-t-2 border-dashed border-primary" />
            <p className="text-sm">{value}</p>
          </li>
        ))}
      </ul>

      <div className="w-full lg:w-1/3">
        <div className="sticky top-2 w-full max-w-xs space-y-4">
          <Card isFooterBlurred>
            <Image
              as={NextImage}
              src={uniformImages.summer.src}
              quality={95}
              priority
              width={900}
              height={900}
              alt="Summer Uniform"
              className="z-0 h-full w-full"
            />
            <CardFooter className="absolute bottom-0 z-10 grid place-content-center">
              <Chip
                classNames={{
                  content: "font-semibold text-white",
                  base: "bg-black/40",
                }}
              >
                Summer Uniform ☀️
              </Chip>
            </CardFooter>
          </Card>
          <Card isFooterBlurred>
            <Image
              as={NextImage}
              src={uniformImages.winter.src}
              quality={95}
              priority
              width={900}
              height={900}
              alt="Winter uniform"
              className="z-0 h-full w-full"
            />
            <CardFooter className="absolute bottom-0 z-10 grid place-content-center">
              <Chip
                classNames={{
                  content: "font-semibold text-white",
                  base: "bg-black/40",
                }}
              >
                Winter Uniform ❄️
              </Chip>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UniformList;
