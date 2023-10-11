import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import Carousel from "@/components/ui/Carousel";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const images = [
  <Image
    key={uuid()}
    src="https://picsum.photos/id/1020/1920/1080"
    alt="bear"
    className="object-cover object-top"
    quality={95}
    fill
    priority
  />,
  <Image
    key={uuid()}
    src="https://picsum.photos/id/1025/1920/1080"
    alt="adorable dob"
    className="object-cover object-top"
    quality={95}
    fill
    priority
  />,
  <Image
    key={uuid()}
    src="https://picsum.photos/id/642/1920/1080"
    alt="Image"
    className="object-cover object-top"
    quality={95}
    fill
    priority
  />,
  <Image
    key={uuid()}
    src="https://picsum.photos/id/743/1920/1080"
    alt="Image"
    className="object-cover object-top"
    quality={95}
    fill
  />,
  <Image
    key={uuid()}
    src="https://picsum.photos/id/1060/1920/1080"
    alt="Image"
    className="object-cover object-top"
    quality={95}
    fill
  />,
  <Image
    key={uuid()}
    src="https://picsum.photos/id/377/1920/1080"
    alt="Image"
    className="object-cover object-top"
    quality={95}
    fill
  />,
  <Image
    key={uuid()}
    src="https://picsum.photos/id/684/1920/1080"
    alt="Image"
    className="object-cover object-top"
    quality={95}
    fill
  />,
  <Image
    key={uuid()}
    src="https://picsum.photos/id/242/1920/1080"
    alt="Image"
    className="object-cover object-top"
    quality={95}
    fill
  />,
  <Image
    key={uuid()}
    src="https://picsum.photos/id/525/1920/1080"
    alt="Image"
    className="object-cover object-top"
    quality={95}
    fill
  />,
];

const HeroCarouselThree = () => {
  return (
    <Carousel
      showArrows
      showIndicators
      infiniteLoop
      centerMode
      centerSlidePercentage={30}
      swipeable
      autoPlay
      emulateTouch
      showThumbs={false}
      showStatus={false}
      className="group"
      renderArrowNext={clickHandler => (
        <button
          onClick={clickHandler}
          className="absolute right-0 top-0 z-10 flex h-full items-center justify-center rounded-l-sm bg-black/20 px-2 transition md:px-6 md:opacity-0 md:group-hover:opacity-100"
        >
          <BiRightArrow className="h-4 w-4 text-white/80 md:h-6 md:w-6" />
        </button>
      )}
      renderArrowPrev={clickHandler => (
        <button
          onClick={clickHandler}
          className="absolute left-0 top-0 z-10 flex h-full items-center justify-center rounded-r-sm bg-black/20 px-2 transition md:px-6 md:opacity-0 md:group-hover:opacity-100"
        >
          <BiLeftArrow className="h-4 w-4 text-white/80 md:h-6 md:w-6" />
        </button>
      )}
    >
      {images.map(image => (
        <div
          key={uuid()}
          className="relative h-52 m-2 sm:h-64 md:h-72 lg:h-[26rem]"
        >
          {image}
        </div>
      ))}
    </Carousel>
  );
};

export default HeroCarouselThree;
