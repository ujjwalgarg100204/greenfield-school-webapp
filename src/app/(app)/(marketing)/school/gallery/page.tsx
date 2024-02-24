import { Card, CardFooter, Image, Link } from "@nextui-org/react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import NextImage from "next/image";
import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";

// TODO: Complete gallery page part
// FIXME:similar to blurred footer card image, where footer woould contain link to insta and stuff
// FIXME: put images here which are already on website
const GalleryPage = () => {
    return (
        <TwoSectionPage linkTitle="School" currentLink="Gallery">
            <H1>Gallery</H1>
            <p>
                While we work on getting you latest picture follow us on
                instagram, facebook
            </p>
            <div>
                <Card isFooterBlurred radius="lg" className="w-fit border-none">
                    <Image
                        alt="Woman listing to music"
                        className="object-cover"
                        height={200}
                        src="/images/logo_pixel_plus.png"
                        width={200}
                        as={NextImage}
                    />
                    <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-center overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
                        <p className="flex gap-2 text-yellow-800">
                            <Link href="https://www.instagram.com/greenfieldcampus?igsh=MzRlODBiNWFlZA==">
                                <AiFillInstagram className="size-8" />
                            </Link>
                            <Link href="https://www.facebook.com/vcsm.mat.hr.sec.school">
                                <FaFacebook className="size-8" />
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </TwoSectionPage>
    );
};

export default GalleryPage;
