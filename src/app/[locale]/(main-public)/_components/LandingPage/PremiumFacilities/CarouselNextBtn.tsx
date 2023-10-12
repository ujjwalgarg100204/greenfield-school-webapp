"use client";

import { Button } from "@nextui-org/react";
import type { FC } from "react";
import { BiRightArrow } from "react-icons/bi";

type Props = { onClick: () => void; className?: string };

const CarouselNextBtn: FC<Props> = ({ onClick, className }) => {
  return (
    <Button
      isIconOnly
      radius="full"
      color="secondary"
      onClick={onClick}
      className={className}
    >
      <BiRightArrow className="h-1/2 w-1/2 text-amber-950/50" />
    </Button>
  );
};

export default CarouselNextBtn;
