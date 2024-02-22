import { type FC } from "react";
import HeroCarousel from "./_components/HeroCarousel";
import PremiumFacilitiesCarousel from "./_components/PremimumFacilitiesCarousel";
import { Button, Card, CardBody, CardHeader, Link } from "~/app/next-ui";
import NextImage from "next/image";
import Lottie from "~/app/_components/ui/Lottie";

const PHOTO_GALLERY_CARDS = [
    {
        heading: "What to watch",
        desc: "Stream the Acme event",
        image: {
            url: "/images/photo-gallery-landingPage/1.jpg",
            alt: "adorable dog",
        },
    },
    {
        heading: "What to watch",
        desc: "Stream the Acme event",
        image: {
            url: "/images/photo-gallery-landingPage/2.jpg",
            alt: "boy studying",
        },
    },
    {
        heading: "What to watch",
        desc: "Stream the Acme event",
        image: {
            url: "/images/photo-gallery-landingPage/3.jpg",
            alt: "students in classroom",
        },
    },
    {
        heading: "What to watch",
        desc: "Stream the Acme event",
        image: {
            url: "/images/photo-gallery-landingPage/4.jpg",
            alt: "students in classroom",
        },
    },
] as const;

const KEY_CHARACTERISTICS = [
    {
        heading: "Tomorrow's Leaders",
        desc: "Here with us, students develop a sense of self, social skills, and independence, preparing them to take on leadership roles in the future.",
        lottie: "https://lottie.host/3b570408-327f-41f4-9f50-27d9f9babb65/ZkWM5SdPGZ.json",
    },
    {
        heading: "Noteworthy technology acquisitions 2021",
        desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        lottie: "https://lottie.host/57a7603e-9f49-41f9-b8b0-84f27dec2d1b/DHSDaYQzrH.json",
    },
    {
        heading: "Tomorrow's Leaders",
        desc: "Here with us, students develop a sense of self, social skills, and independence, preparing them to take on leadership roles in the future.",
        lottie: "https://lottie.host/0965ef1d-8246-43c7-83a2-aad231cb117e/T5DIee22dX.json",
    },
    {
        heading: "Tomorrow's Leaders",
        desc: "Here with us, students develop a sense of self, social skills, and independence, preparing them to take on leadership roles in the future.",
        lottie: "https://lottie.host/c1935571-8ef7-45f2-8365-66687e1646b9/vVo20iC8Vl.json",
    },
] as const;

const PREMIUM_FACILITIES = [
    {
        heading: "Frontend Radio",
        "sub-heading": "Daily Mix",
        subtitle: "12 tracks",
        desc: "Here with us, students develop a sense of self, social skills, and independence, preparing them to take on leadership roles in the future.",
        img: {
            url: "/images/premium-facilities-landingPage/1.jpg",
            alt: "image",
        },
    },
    {
        heading: "Frontend Radio",
        "sub-heading": "Daily Mix",
        subtitle: "12 tracks",
        desc: "Here with us, students develop a sense of self, social skills, and independence, preparing them to take on leadership roles in the future.",
        img: {
            url: "/images/premium-facilities-landingPage/2.jpg",
            alt: "image",
        },
    },
    {
        heading: "Frontend Radio",
        "sub-heading": "Daily Mix",
        subtitle: "12 tracks",
        desc: "Here with us, students develop a sense of self, social skills, and independence, preparing them to take on leadership roles in the future.",
        img: {
            url: "/images/premium-facilities-landingPage/3.jpg",
            alt: "image",
        },
    },
    {
        heading: "Frontend Radio",
        "sub-heading": "Daily Mix",
        subtitle: "12 tracks",
        desc: "Here with us, students develop a sense of self, social skills, and independence, preparing them to take on leadership roles in the future.",
        img: {
            url: "/images/premium-facilities-landingPage/4.jpg",
            alt: "image",
        },
    },
    {
        heading: "Frontend Radio",
        "sub-heading": "Daily Mix",
        subtitle: "12 tracks",
        desc: "Here with us, students develop a sense of self, social skills, and independence, preparing them to take on leadership roles in the future.",
        img: {
            url: "/images/premium-facilities-landingPage/5.jpg",
            alt: "image",
        },
    },
    {
        heading: "Frontend Radio",
        "sub-heading": "Daily Mix",
        subtitle: "12 tracks",
        desc: "Here with us, students develop a sense of self, social skills, and independence, preparing them to take on leadership roles in the future.",
        img: {
            url: "/images/premium-facilities-landingPage/6.jpg",
            alt: "image",
        },
    },
    {
        heading: "Frontend Radio",
        "sub-heading": "Daily Mix",
        subtitle: "12 tracks",
        desc: "Here with us, students develop a sense of self, social skills, and independence, preparing them to take on leadership roles in the future.",
        img: {
            url: "/images/premium-facilities-landingPage/7.jpg",
            alt: "image",
        },
    },
];

const Home: FC = () => {
    const currYear = new Date().getFullYear();

    return (
        <main className="mb-8 text-center">
            <div className="space-y-4">
                <HeroCarousel />
                <div className="space-y-20 p-4 sm:p-6 md:p-10 lg:p-12">
                    <section className="gap-20 rounded-lg border border-gray-200 bg-white p-8 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:flex md:max-w-full md:items-center md:p-10">
                        <div className="flex-grow space-y-6 text-center lg:max-w-md lg:text-left xl:max-w-xl 2xl:max-w-3xl">
                            <h5 className="mb-2 scroll-mt-24 text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl">
                                Welcome to Greenfield International School
                            </h5>
                            <p className="mb-3 text-justify font-normal text-gray-700 dark:text-gray-400">
                                At Our School, Education is looked upon as a
                                holistic learning experience to help children
                                develop those attributes and qualities which
                                will make them self-reliant. Conscious effort is
                                made to foster pride in and love for the country
                                and its great heritage.The School provides
                                facilities for Drawing(SUPW), Music & Dance
                                classes at least once a week as part of the
                                regular time table. Besides academic excellence
                                and intellectual development, the school helps
                                each child to discover and develop his innate
                                talents and abilities. It seeks to instill in
                                the children good habits and values such as
                                truthfulness, self respect, sense of duty,
                                discipline, and punctuality.
                            </p>
                            <Button
                                as={Link}
                                size="lg"
                                color="primary"
                                variant="shadow"
                                className="font-bold"
                                href="/school/about-us"
                            >
                                About us
                            </Button>
                        </div>
                        <NextImage
                            priority
                            quality={95}
                            width={500}
                            height={500}
                            src={"/images/landing-page-about-us.png"}
                            alt="Girl Studying in Greenfield school"
                            className="hidden h-72 w-full rounded-lg object-cover lg:block"
                        />
                    </section>

                    {/* Photo Gallery Section */}
                    <section className="space-y-12 rounded-xl bg-slate-100 p-8 md:p-10">
                        <header>
                            <h1 className="scroll-mt-24 text-3xl font-bold md:text-4xl">
                                Photo Gallery
                            </h1>
                        </header>
                        <div className="grid max-w-full grid-rows-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                            {PHOTO_GALLERY_CARDS.map(
                                ({ image, heading, desc }) => (
                                    <Card
                                        key={heading}
                                        className="group h-[300px] w-full"
                                    >
                                        <CardHeader className="absolute top-1/2 z-10 w-full -translate-y-1/2 flex-col items-start text-center">
                                            <p className="w-full text-center text-tiny font-bold uppercase text-white/60">
                                                {heading}
                                            </p>
                                            <h4 className="w-full text-center text-lg font-bold text-slate-50 lg:font-medium">
                                                {desc}
                                            </h4>
                                        </CardHeader>
                                        <NextImage
                                            src={image.url}
                                            alt={image.alt}
                                            className="z-0 object-cover object-top brightness-[.4] transition-all duration-500 group-hover:hover:scale-110"
                                            quality={95}
                                            fill
                                        />
                                    </Card>
                                ),
                            )}
                        </div>
                    </section>

                    {/* KeyCharacteristics Section */}
                    <section className="space-y-12 rounded-xl bg-slate-100 p-8 md:p-10">
                        <h2 className="scroll-mt-24 text-3xl font-bold md:text-3xl">
                            Key differentiating characteristics of the School
                        </h2>

                        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {KEY_CHARACTERISTICS.map(
                                ({ heading, desc, lottie }) => (
                                    <Card
                                        as={"li"}
                                        key={heading}
                                        className="hover:bg-gray-100 md:p-3"
                                    >
                                        <CardHeader className="justify-center">
                                            <Lottie
                                                src={lottie}
                                                className="h-32 w-32"
                                                autoplay
                                                loop
                                            />
                                        </CardHeader>
                                        <CardBody className="space-y-4 text-center">
                                            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                {heading}
                                            </h5>
                                            <p className="text-center text-sm font-normal text-gray-700 dark:text-gray-400 lg:text-justify">
                                                {desc}
                                            </p>
                                        </CardBody>
                                    </Card>
                                ),
                            )}
                        </ul>
                    </section>

                    {/* AdmissionOpen Banner */}
                    <section className="grid grid-cols-1 gap-6 rounded-xl bg-primary-400 p-8 text-slate-50 sm:grid-flow-row sm:grid-cols-2 md:p-10 lg:grid-flow-col lg:grid-cols-3 lg:items-center lg:gap-x-16">
                        <h3 className="order-1 text-3xl font-bold lg:self-end lg:text-4xl">
                            {`Admission Open for ${currYear} - ${currYear + 1}`}
                        </h3>
                        <Button
                            href="/admission/portal"
                            as={Link}
                            variant="shadow"
                            color="secondary"
                            className="order-3 font-bold text-amber-950 lg:order-2"
                        >
                            Enroll Now
                        </Button>
                        <div className="order-2 w-full self-end justify-self-end text-center font-semibold sm:row-span-2 sm:self-center lg:order-3 lg:text-lg lg:font-normal">
                            Get your kid the best experience of education at
                            Greenfield School,Tamil Nadu. Best for your child
                        </div>
                        <NextImage
                            width={500}
                            height={500}
                            quality={95}
                            src={"/images/landing-page-admission-banner.png"}
                            alt="Students Studying"
                            className="order-4 row-span-2 ml-auto hidden max-w-xs rounded-lg object-cover object-center shadow-2xl lg:block"
                        />
                    </section>

                    {/* PremiumFacilities */}
                    <section className="space-y-8 rounded-xl bg-slate-100 p-8 md:p-10">
                        <h3 className="scroll-mt-24 text-3xl font-bold md:text-4xl">
                            Premium Facilities
                        </h3>
                        <PremiumFacilitiesCarousel
                            facilities={PREMIUM_FACILITIES}
                        />
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Home;
