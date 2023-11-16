import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

import ArticleHeading from "@/src/components/ArticleHeading";
import ArticlePage from "../../_components/ArticlePage";
import type { FC } from "react";
import NextImage from "next/image";
import type { NextPageProps } from "@/src/types";
import { infrastructureCards } from "./data";
import { setStaticParamsLocale } from "next-international/server";

const Infrastructure: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage
      linkType="school"
      selected={{ translationKey: "infrastructure" }}
    >
      <div className="flex justify-between">
        <ArticleHeading id="infrastructure">Infrastructure</ArticleHeading>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2  ">
        {infrastructureCards.map(card => (
          <div
            key={card.image.alt}
            className="rounded p-2 transition-all duration-700 hover:scale-110"
          >
            <Card>
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
