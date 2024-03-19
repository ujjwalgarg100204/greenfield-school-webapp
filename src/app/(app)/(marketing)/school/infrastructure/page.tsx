import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";
import InfrastructureCard from "./_components/InfrastructureCard";

import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "Infrastructure",
    description:
        "Modern & spacious classrooms with Interactive TV,Outdoor Facility for Football,Volleyball, Cricket, Badminton, Yoga, kabadi, athletics and other sports,  Dance room for Indian Classical, Folk Dance, Contemporary and Modern Creative Dance etc. Spacious well equipped Art room to enlarge the creative minds. Computer lab with latest machines for every student to practice hands on learning with modern technology.Library to cater for students with well equipped with 5,000+ books, numerous magazines, journals and newspapers with more than DVDs / CDs to browse through. It has excellent collection of latest Reference books for Competitive Entrance Examinations. School is under CCTV surveillance & 24×7 Security Guards to take care of the safety of students. School also has the latest system for fire safety and detection. Twenty-First Century Science Labs to emphasise the modern infrastructure of the school Prime city location meets tranquil greenery, offering the perfect balance of urban convenience and natural serenity. Fire Control Panel, Smoke Detectors, Hooters, Manual Call Point, Water Pump, Reservoir.",
    keywords: [
        "Modern classrooms",
        "Spacious facilities",
        "Interactive TV",
        "Outdoor sports",
        "Football",
        "Volleyball",
        "Cricket",
        "Badminton",
        "Yoga",
        "Dance room",
        "Art room",
        "Computer lab",
        "Library",
        "CCTV surveillance",
        "Fire safety",
    ],
};

const INFRASTRUCTURES = [
    {
        title: "Smart Classes rooms",
        desc: "Modern & spacious classrooms with Interactive TV",
        image: {
            src: "/images/infrastructure/1.png",
            alt: "smart class",
        },
    },
    {
        title: "Sports facilities",
        desc: "Outdoor Facility for Football,Volleyball, Cricket, Badminton, Yoga, kabadi, athletics and other sports.",
        image: {
            src: "/images/infrastructure/2.jpeg",
            alt: "Sports facilities",
        },
    },
    {
        title: "Dance Room",
        desc: "Dance room for Indian Classical, Folk Dance, Contemporary and Modern Creative Dance etc.",
        image: {
            src: "/images/infrastructure/3.jpeg",
            alt: "Dance Room",
        },
    },
    {
        title: "Art Room",
        desc: "Spacious well equipped Art room to enlarge the creative minds.",
        image: {
            src: "/images/infrastructure/4.jpeg",
            alt: "Art Room",
        },
    },
    {
        title: "Computer Lab",
        desc: "Computer lab with latest machines for every student to practice hands on learning with modern technology.",
        image: {
            src: "/images/infrastructure/5.webp",
            alt: "Computer Lab",
        },
    },
    {
        title: "Library",
        desc: "Library to cater for students with well equipped with 5,000+ books, numerous magazines, journals and newspapers with more than DVDs / CDs to browse through. It has excellent collection of latest Reference books for Competitive Entrance Examinations.",
        image: {
            src: "/images/infrastructure/6.jpeg",
            alt: "Library",
        },
    },
    {
        title: "CCTV surveillance system",
        desc: "School is under CCTV surveillance & 24×7 Security Guards to take care of the safety of students. School also has the latest system for fire safety and detection.",
        image: {
            src: "/images/infrastructure/7.jpeg",
            alt: "CCTV surveillance system",
        },
    },
    {
        title: "Science Lab",
        desc: "Twenty-First Century Science Labs to emphasise the modern infrastructure of the school",
        image: {
            src: "/images/infrastructure/8.png",
            alt: "Science Lab",
        },
    },
    {
        title: "Prime City Location with Greenery",
        desc: "Prime city location meets tranquil greenery, offering the perfect balance of urban convenience and natural serenity",
        image: {
            src: "/images/infrastructure/9.jpeg",
            alt: "Prime City Location and Greenery",
        },
    },
    {
        title: "Fire-Fighting Devices",
        desc: "Fire Control Panel, Smoke Detectors, Hooters, Manual Call Point, Water Pump, Reservoir.",
        image: {
            src: "/images/infrastructure/10.jpeg",
            alt: "Fire-Fighting Devices",
        },
    },
] as const;

const InfrastructurePage = () => {
    return (
        <TwoSectionPage linkTitle="School" currentLink="Infrastructure">
            <H1>Infrastructure</H1>
            {INFRASTRUCTURES.length > 0 ? (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <InfrastructureCard dark={false} {...INFRASTRUCTURES[0]} />
                    {INFRASTRUCTURES.slice(1).map((item, i) => (
                        <InfrastructureCard
                            key={item.title}
                            dark={[0, 1].includes(i % 4)}
                            {...item}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-lg font-semibold text-danger-600">
                    Oops, no infrastructure data found, why don&apos;t you come
                    later
                </p>
            )}
        </TwoSectionPage>
    );
};

export default InfrastructurePage;
