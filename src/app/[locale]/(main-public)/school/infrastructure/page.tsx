import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

import ArticleHeading from "@/src/components/ArticleHeading";
import ArticlePage from "../../_components/ArticlePage";
import type { FC } from "react";
import NextImage from "next/image";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";

const infrastructureCards = [
  {
    big_screen: false,

    title: "Smart Classes rooms",
    description: "Modern & spacious classrooms with Interactive TV",
    image: {
      url: "https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "smart class",
    },
  },
  {
    big_screen: true,
    title: "Sports facilities",
    description:
      "Outdoor Facility for Football, Basketball and Cricket. Indoor Facility for Chess, Gymnastics, Badminton, Yoga & Table Tennis.",
    image: {
      url: "https://images.pexels.com/photos/18644293/pexels-photo-18644293/free-photo-of-aerial-drone-view-of-a-rugby-stadium-from-top.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Sports facilities",
    },
  },
  {
    big_screen: true,
    title: "Dance Room",
    description:
      "Indian Classical, Folk Dance, Contemporary and Modern Creative Dance etc.",
    image: {
      url: "https://images.pexels.com/photos/358010/pexels-photo-358010.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Dance Room",
    },
  },
  {
    big_screen: false,
    title: "Art Room",
    description:
      "Spacious Air-conditioned well equipped Art Studio to enlarge the creative minds.",
    image: {
      url: "https://images.pexels.com/photos/383568/pexels-photo-383568.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Art Room",
    },
  },
  {
    big_screen: false,
    title: "Music Room",
    description:
      "Facilities for learning Piano, Guitar, Tabla, Violin, Vocal - Indian & Western",
    image: {
      url: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Music Room",
    },
  },
  {
    big_screen: true,
    title: "Computer Lab",
    description:
      "7 fully Air-conditioned Computer Labs with 1:1 computer for every student. tie-up with NIIT",
    image: {
      url: "https://images.pexels.com/photos/3747486/pexels-photo-3747486.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Computer Lab",
    },
  },
  {
    big_screen: true,
    title: "Library",
    description:
      "5 airconditioned library to cater 200 students at a time. It is well equipped with 50,000 books, numerous magazines, journals and newspapers with more than 1000 DVDs / CDs to browse through. It has excellent collection of latest Reference books for Competitive Entrance Examinations.",
    image: {
      url: "https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Library",
    },
  },
  {
    big_screen: false,
    title: "CCTV surveillance system",
    description:
      "School is under CCTV surveillance & 24×7 Security Guards to take care of the safety of students. School also has the latest system for fire safety and detection.",
    image: {
      url: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "CCTV surveillance system",
    },
  },
  {
    big_screen: false,
    title: "Science Lab",
    description:
      "Twenty-First Century Science Labs to emphasise the modern infrastructure of the school",
    image: {
      url: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Science Lab",
    },
  },
  {
    big_screen: true,
    title: "Infirmary",
    description:
      "An airconditioned efficient Infirmary with trained nurse to cater daily medical emergencies. Provision for online medical consultation with trained Doctors of the city.",
    image: {
      url: "https://images.pexels.com/photos/13427358/pexels-photo-13427358.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Infirmary",
    },
  },
  {
    big_screen: true,
    title: "Internet and WIFI facility",
    description:
      "Wi-Fi Campus for conducting Online Exams to prepare students for Competitive Exams.",
    image: {
      url: "https://images.pexels.com/photos/13092788/pexels-photo-13092788.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Internet and WIFI facility",
    },
  },
  {
    big_screen: false,
    title: "Fire-Fighting Devices",
    description:
      "Fire Control Panel, Smoke Detectors, Hooters, Manual Call Point, Water Pump, Reservoir.",
    image: {
      url: "https://images.pexels.com/photos/189474/pexels-photo-189474.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Fire-Fighting Devices",
    },
  },
] as const;

const Infrastructure: FC<NextPageProps> = async ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage
      linkType="school"
      selected={{ translationKey: "infrastructure" }}
    >
      <div className="flex justify-between">
        <ArticleHeading id="infrastructure">Infrastructure</ArticleHeading>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 ">
        {infrastructureCards.map((card, big_screen) => (
          <div className="rounded p-2 transition-all duration-700 hover:scale-110">
            <Card key={card.image.alt}>
              {card.big_screen === false ? (
                <>
                  <CardHeader className=" flex justify-center ">
                    <Image
                      alt={card.image.alt}
                      className="h-56 w-full rounded-xl object-cover object-center"
                      src={card.image.url}
                      width={1000}
                      height={600}
                      as={NextImage}
                    />
                  </CardHeader>
                  <CardBody className="h-64 p-6">
                    <h2 className="my-3 text-2xl font-bold">{card.title}</h2>
                    <h5>{card.description}</h5>
                  </CardBody>
                </>
              ) : (
                <div className="bg-slate-300">
                  <CardBody className="h-64 bg-slate-500 p-6 text-white">
                    <h2 className="my-3 text-2xl font-bold">{card.title}</h2>
                    <h5>{card.description}</h5>
                  </CardBody>
                  <CardHeader className="flex justify-center">
                    <Image
                      alt={card.image.alt}
                      className="h-56 w-fit rounded-xl object-cover object-center"
                      src={card.image.url}
                      width={1000}
                      height={600}
                      as={NextImage}
                    />
                  </CardHeader>
                </div>
              )}
            </Card>
          </div>
        ))}
      </div>
    </ArticlePage>
  );
};

export default Infrastructure;
