"use client";

import NextImage from "next/image";
import type { FC } from "react";
import { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import Carousel from "~/app/_components/ui/Carousel";
import useResponsiveScreen, {
    type ScreenSize,
} from "~/app/_hooks/useResponsiveScreen";
import { Button, Card, CardBody, CardHeader } from "~/app/next-ui";

const getCarouselPercentage = (screenSize: ScreenSize): number => {
    switch (screenSize) {
        case "sm":
            return 100;
        case "md":
            return 70;
        case "lg":
            return 50;
        default:
            return 30;
    }
};

type BtnProps = { onClick: () => void; className?: string };
const CarouselPrevBtn: FC<BtnProps> = ({ onClick, className }) => {
    return (
        <Button
            isIconOnly
            color="secondary"
            radius="full"
            onClick={onClick}
            className={className}
        >
            <BiLeftArrow className="h-1/2 w-1/2 text-amber-950/50" />
        </Button>
    );
};

const CarouselNextBtn: FC<BtnProps> = ({ onClick, className }) => {
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

type Props = {
    facilities: {
        heading: string;
        img: {
            url: string;
            alt: string;
        };
    }[];
};
const PremiumFacilitiesCarousel: FC<Props> = ({ facilities }) => {
    const screenSize = useResponsiveScreen();
    const [currSlideIndex, setCurrSlideIndex] = useState(0);
    const centerSlidePercentage = getCarouselPercentage(screenSize);

    const handleSlideChange = (index: number) => {
        setCurrSlideIndex(index);
    };
    const handlePrevSlide = () => {
        setCurrSlideIndex(prev =>
            prev - 1 === 0 ? facilities.length - 1 : prev - 1,
        );
    };
    const handleNextSlide = () => {
        setCurrSlideIndex(prev => (prev + 1) % facilities.length);
    };

    return (
        <div className="flex flex-col items-center justify-between gap-0 sm:flex-row">
            <CarouselPrevBtn
                className="hidden sm:flex"
                onClick={handlePrevSlide}
            />
            <Carousel
                autoPlay
                swipeable
                centerMode
                infiniteLoop
                emulateTouch
                useKeyboardArrows
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                transitionTime={200}
                showIndicators={false}
                onChange={handleSlideChange}
                selectedItem={currSlideIndex}
                className="w-full sm:w-[80%] lg:w-[90%]"
                centerSlidePercentage={centerSlidePercentage}
            >
                {facilities.map(facility => (
                    <Card key={facility.heading} className="m-4 py-4">
                        <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
                            <h4 className="text-large font-bold">
                                {facility.heading}
                            </h4>
                        </CardHeader>
                        <CardBody className="py-2">
                            <NextImage
                                alt={facility.img.alt}
                                className="h-52 rounded-xl object-cover"
                                src={facility.img.url}
                                height={270}
                                width={270}
                            />
                        </CardBody>
                    </Card>
                ))}
            </Carousel>
            <CarouselNextBtn
                className="hidden sm:flex"
                onClick={handleNextSlide}
            />
            <div className="space-x-16 sm:hidden">
                <CarouselPrevBtn onClick={handlePrevSlide} />
                <CarouselNextBtn onClick={handleNextSlide} />
            </div>
        </div>
    );
};

export default PremiumFacilitiesCarousel;
