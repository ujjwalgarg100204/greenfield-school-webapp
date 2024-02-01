import type { NextPageProps } from "@/src/types";
import ArticleHeading from "@components/ArticleHeading";
import { Avatar } from "@lib/next-ui";
import { getScopedI18n } from "@locales/server";
import { setStaticParamsLocale } from "next-international/server";
import NextImage from "next/image";
import type { FC } from "react";
import SideNavbar from "../../_components/Navbar/SideNavbar";

const PrincipalsMessagePage: FC<NextPageProps> = async ({
    params: { locale },
}) => {
    setStaticParamsLocale(locale);
    const t = await getScopedI18n("Pages.school.sub-links.principal");

    return (
        <div className="container mx-auto my-12 flex justify-between gap-16 px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="flex w-2/3 flex-grow flex-col-reverse gap-12 md:flex-row">
                <section className="max-w-lg flex-grow space-y-4 lg:max-w-2xl">
                    <ArticleHeading>{t("title")}</ArticleHeading>
                    <div className="space-y-4">
                        <p className="text-justify">{t("content.para-1")}</p>
                        <p className="text-justify">{t("content.para-2")}</p>
                    </div>
                </section>
                <div className="flex flex-col items-center gap-4">
                    <Avatar
                        size="lg"
                        isBordered
                        imgProps={{
                            width: 600,
                            height: 400,
                        }}
                        name="Sam"
                        color="success"
                        ImgComponent={NextImage}
                        className="h-40 w-40"
                        src="https://images.pexels.com/photos/756484/pexels-photo-756484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <p className="flex flex-col items-center justify-center">
                        <span className="text-xl font-bold leading-6 lg:leading-5">
                            Mr. Sam
                        </span>
                        <span className="text-base lg:text-lg">
                            {t("content.avatar")}
                        </span>
                    </p>
                </div>
            </div>

            <div className="hidden w-1/5 lg:block">
                <SideNavbar
                    linkType="school"
                    selected={{ translationKey: "principal" }}
                />
            </div>
        </div>
    );
};

export default PrincipalsMessagePage;
