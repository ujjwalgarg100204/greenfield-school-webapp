import NextImage from "next/image";
import { type FC } from "react";
import Lottie from "~/app/_components/ui/Lottie";
import { Button, Card, CardBody, CardHeader, Link } from "~/app/next-ui";
import HeroCarousel from "./_components/HeroCarousel";
import PremiumFacilitiesCarousel from "./_components/PremimumFacilitiesCarousel";

const PHOTO_GALLERY_CARDS = [
    {
        desc: "School Activities",
        image: {
            url: "/images/photo-gallery-images/1.jpeg",
            alt: "School Activities",
        },
    },
    {
        desc: "Student Engagements",
        image: {
            url: "/images/photo-gallery-images/2.jpeg",
            alt: "Student Engagements",
        },
    },
    {
        desc: "Extracurricular Pursuits",
        image: {
            url: "/images/photo-gallery-images/3.jpeg",
            alt: "Extracurricular Pursuits",
        },
    },
    {
        desc: "Cultural Activities",
        image: {
            url: "/images/photo-gallery-images/4.jpeg",
            alt: "Cultural Activities",
        },
    },
] as const;

const KEY_CHARACTERISTICS = [
    {
        heading: "Tomorrow's Leaders",
        desc: "Leadership Development Programs nurturing resilience and adaptability.",
        lottie: "/lotties/key-diff-characterisitcs/1.json",
    },
    {
        heading: "Green Campus Oasis",
        desc: "Heart of city but given top priority for Green campus",
        lottie: "/lotties/key-diff-characterisitcs/2.json",
    },
    {
        heading: "Talent Encouragement Culture",
        desc: "Every student is celebrated for their unique abilities, passions, and interests. We help with self-discovery and empowerment",
        lottie: "/lotties/key-diff-characterisitcs/3.json",
    },
    {
        heading: "State-Level Sports Exposure",
        desc: "Comprehensive Sports Programs and motivate students for State-Level participation. Also Media afflictions for students visibility.",
        lottie: "/lotties/key-diff-characterisitcs/4.json",
    },
] as const;

const EXCLUSIVE_AMENTITIES = [
    {
        heading: "Expansive Campus Grounds for Outdoor Activities",
        img: {
            url: "/images/exclusive-amentities/1.jpeg",
            alt: "Expansive Campus Grounds for Outdoor Activities",
        },
    },
    {
        heading: "Outdoor Learning Areas for Nature Studies",
        img: {
            url: "/images/exclusive-amentities/2.jpeg",
            alt: "Outdoor Learning Areas for Nature Studies",
        },
    },
    {
        heading: "Technologically Advanced Classrooms",
        img: {
            url: "/images/exclusive-amentities/3.jpeg",
            alt: "Technologically Advanced Classrooms",
        },
    },
    {
        heading: "Lush Greenery Surrounding the School",
        img: {
            url: "/images/exclusive-amentities/4.jpeg",
            alt: "Lush Greenery Surrounding the School",
        },
    },
    {
        heading: "Prime City Location for Accessibility and Convenience",
        img: {
            url: "/images/exclusive-amentities/5.jpeg",
            alt: "Prime City Location for Accessibility and Convenience",
        },
    },
    {
        heading: "Dynamic and academic pioneers",
        img: {
            url: "/images/exclusive-amentities/6.jpeg",
            alt: "Dynamic and academic pioneers",
        },
    },
    {
        heading: "Record breaking sport performances",
        img: {
            url: "/images/sports.jpeg",
            alt: "Record breaking sport performances",
        },
    },
    {
        heading: "Innovative way to keep kindergarten engaged",
        img: {
            url: "/images/innovation.jpeg",
            alt: "Innovative way to keep kindergarten engaged",
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
                                Greenfield Campus is a vibrant school where
                                curiosity meets education and each and every
                                student is valued. In Our school, we foster a
                                dynamic learning environment that sparks
                                curiosity, encourages critical thinking, and
                                unleashes creativity. Sports facilities in our
                                school are designed to nature physical health,
                                teamwork and sportsmanship. Our dedicated
                                management and teachers is committed to
                                nurturing the intellectual and emotional growth
                                of each student, preparing them for a future
                                filled with endless possibilities.
                            </p>
                            <Button
                                as={Link}
                                size="lg"
                                color="primary"
                                variant="shadow"
                                className="font-bold"
                                href="/school/about-us"
                            >
                                More about us
                            </Button>
                        </div>
                        <NextImage
                            priority
                            quality={95}
                            width={500}
                            height={500}
                            src={"/images/landing-page-about-us.jpeg"}
                            alt="Staff of Greenfield"
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
                            {PHOTO_GALLERY_CARDS.map(({ image, desc }) => (
                                <Card
                                    key={desc}
                                    className="group h-[300px] w-full"
                                >
                                    <CardHeader className="absolute top-1/2 z-10 w-full -translate-y-1/2 flex-col items-start text-center">
                                        <Link
                                            href="/school/gallery"
                                            underline="always"
                                            className="mx-auto text-center text-tiny font-bold uppercase text-white/60"
                                        >
                                            View More
                                        </Link>
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
                            ))}
                        </div>
                    </section>

                    {/* KeyCharacteristics Section */}
                    <section className="space-y-12 rounded-xl bg-slate-100 p-8 md:p-10">
                        <h2 className="scroll-mt-24 text-3xl font-bold md:text-3xl">
                            Key differentiating characteristics of our School
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
                                            <p className="text-center text-sm font-normal text-gray-700 dark:text-gray-400">
                                                {desc}
                                            </p>
                                        </CardBody>
                                    </Card>
                                ),
                            )}
                        </ul>
                    </section>

                    {/* AdmissionOpen Banner */}
                    <section className="flex gap-6 rounded-xl bg-primary-400 p-8 text-slate-50 md:items-center md:justify-between md:p-10">
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-center md:flex-col">
                            <h3 className="text-3xl font-bold lg:text-4xl">
                                {`Admission Open for ${currYear} - ${currYear + 1}`}
                            </h3>
                            <Button
                                href="/admission"
                                as={Link}
                                variant="shadow"
                                color="secondary"
                                className="w-full font-bold text-amber-950"
                            >
                                Admission
                            </Button>
                        </div>
                        <NextImage
                            width={500}
                            height={500}
                            quality={95}
                            src={"/images/admission-banner.webp"}
                            alt="Students Studying"
                            className="hidden max-w-xs rounded-lg object-cover object-top shadow-2xl md:block"
                        />
                    </section>

                    {/* PremiumFacilities */}
                    <section className="space-y-8 rounded-xl bg-slate-100 p-8 md:p-10">
                        <h3 className="scroll-mt-24 text-3xl font-bold md:text-4xl">
                            Exclusive Amenities
                        </h3>
                        <PremiumFacilitiesCarousel
                            facilities={EXCLUSIVE_AMENTITIES}
                        />
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Home;
