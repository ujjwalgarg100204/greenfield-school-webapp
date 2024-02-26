import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";
import InfrastructureCard from "./_components/InfrastructureCard";

const DEMO_INFRASTRUCTURE_DATA = [
    {
        title: "Smart Classes rooms",
        desc: "Modern & spacious classrooms with Interactive TV",
        image: {
            src: "/images/hero-carousel/4.png",
            alt: "smart class",
        },
    },
    {
        title: "Sports facilities",
        desc: "Outdoor Facility for Football,Volleyball, Cricket, Badminton, Yoga, kabadi, athletics and other sports.",
        image: {
            src: "/images/sports facility.jpeg",
            alt: "Sports facilities",
        },
    },
    {
        title: "Dance Room",
        desc: "Dance room for Indian Classical, Folk Dance, Contemporary and Modern Creative Dance etc.",
        image: {
            src: "/images/dance class.jpeg",
            alt: "Dance Room",
        },
    },
    {
        title: "Art Room",
        desc: "Spacious well equipped Art room to enlarge the creative minds.",
        image: {
            src: "https://images.pexels.com/photos/383568/pexels-photo-383568.jpeg?auto=compress&cs=tinysrgb",
            alt: "Art Room",
        },
    },
    {
        title: "Computer Lab",
        desc: "Computer lab with latest machines for every student to practice hands on learning with modern technology.",
        image: {
            src: "https://images.pexels.com/photos/3747486/pexels-photo-3747486.jpeg?auto=compress&cs=tinysrgb",
            alt: "Computer Lab",
        },
    },
    {
        title: "Library",
        desc: "Library to cater for students with well equipped with 5,000+ books, numerous magazines, journals and newspapers with more than DVDs / CDs to browse through. It has excellent collection of latest Reference books for Competitive Entrance Examinations.",
        image: {
            src: "https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb",
            alt: "Library",
        },
    },
    {
        title: "CCTV surveillance system",
        desc: "School is under CCTV surveillance & 24×7 Security Guards to take care of the safety of students. School also has the latest system for fire safety and detection.",
        image: {
            src: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb",
            alt: "CCTV surveillance system",
        },
    },
    {
        title: "Science Lab",
        desc: "Twenty-First Century Science Labs to emphasise the modern infrastructure of the school",
        image: {
            src: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb",
            alt: "Science Lab",
        },
    },
    {
        title: "Prime City Location with Greenery",
        desc: "Prime city location meets tranquil greenery, offering the perfect balance of urban convenience and natural serenity",
        image: {
            src: "/images/greenery.jpeg",
            alt: "Prime City Location and Greenery",
        },
    },
    {
        title: "Fire-Fighting Devices",
        desc: "Fire Control Panel, Smoke Detectors, Hooters, Manual Call Point, Water Pump, Reservoir.",
        image: {
            src: "https://images.pexels.com/photos/189474/pexels-photo-189474.jpeg?auto=compress&cs=tinysrgb",
            alt: "Fire-Fighting Devices",
        },
    },
] as const;

const InfrastructurePage = () => {
    return (
        <TwoSectionPage linkTitle="School" currentLink="Infrastructure">
            <H1>Infrastructure</H1>
            {DEMO_INFRASTRUCTURE_DATA.length > 0 ? (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <InfrastructureCard
                        dark={false}
                        {...DEMO_INFRASTRUCTURE_DATA[0]}
                    />
                    {DEMO_INFRASTRUCTURE_DATA.slice(1).map((item, i) => (
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
