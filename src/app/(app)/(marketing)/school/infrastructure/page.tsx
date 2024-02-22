import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";
import InfrastructureCard from "./_components/InfrastructureCard";

const DEMO_INFRASTRUCTURE_DATA = [
    {
        title: "Smart Classes rooms",
        desc: "Modern & spacious classrooms with Interactive TV",
        image: {
            src: "https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb",
            alt: "smart class",
        },
    },
    {
        bigScreen: true,
        title: "Sports facilities",
        desc: "Outdoor Facility for Football, Basketball and Cricket. Indoor Facility for Chess, Gymnastics, Badminton, Yoga & Table Tennis.",
        image: {
            src: "https://images.pexels.com/photos/18644293/pexels-photo-18644293/free-photo-of-aerial-drone-view-of-a-rugby-stadium-from-top.jpeg?auto=compress&cs=tinysrgb",
            alt: "Sports facilities",
        },
    },
    {
        bigScreen: true,
        title: "Dance Room",
        desc: "Indian Classical, Folk Dance, Contemporary and Modern Creative Dance etc.",
        image: {
            src: "https://images.pexels.com/photos/358010/pexels-photo-358010.jpeg?auto=compress&cs=tinysrgb",
            alt: "Dance Room",
        },
    },
    {
        title: "Art Room",
        desc: "Spacious Air-conditioned well equipped Art Studio to enlarge the creative minds.",
        image: {
            src: "https://images.pexels.com/photos/383568/pexels-photo-383568.jpeg?auto=compress&cs=tinysrgb",
            alt: "Art Room",
        },
    },
    {
        bigScreen: false,
        title: "Music Room",
        desc: "Facilities for learning Piano, Guitar, Tabla, Violin, Vocal - Indian & Western",
        image: {
            src: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb",
            alt: "Music Room",
        },
    },
    {
        title: "Computer Lab",
        desc: "7 fully Air-conditioned Computer Labs with 1:1 computer for every student. tie-up with NIIT",
        image: {
            src: "https://images.pexels.com/photos/3747486/pexels-photo-3747486.jpeg?auto=compress&cs=tinysrgb",
            alt: "Computer Lab",
        },
    },
    {
        bigScreen: true,
        title: "Library",
        desc: "5 airconditioned library to cater 200 students at a time. It is well equipped with 50,000 books, numerous magazines, journals and newspapers with more than 1000 DVDs / CDs to browse through. It has excellent collection of latest Reference books for Competitive Entrance Examinations.",
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
        title: "Infirmary",
        desc: "An airconditioned efficient Infirmary with trained nurse to cater daily medical emergencies. Provision for online medical consultation with trained Doctors of the city.",
        image: {
            src: "https://images.pexels.com/photos/13427358/pexels-photo-13427358.jpeg?auto=compress&cs=tinysrgb",
            alt: "Infirmary",
        },
    },
    {
        title: "Internet and WIFI facility",
        desc: "Wi-Fi Campus for conducting Online Exams to prepare students for Competitive Exams.",
        image: {
            src: "https://images.pexels.com/photos/13092788/pexels-photo-13092788.jpeg?auto=compress&cs=tinysrgb",
            alt: "Internet and WIFI facility",
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
