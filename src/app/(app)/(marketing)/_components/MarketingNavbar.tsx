import NextImage from "next/image";
import GreenfieldLogo from "~/../public/images/logo_pixel_plus.png";
import {
    Button,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "~/app/next-ui";
import AccountDropdown from "./AccountDropdown";
import MarketingLinksDropdown from "./MarketingLinksDropdown";

export const NAV_LINKS = {
    ["School"]: [
        { title: "About Us", link: "/school/about-us" },
        { title: "Mission and Vision", link: "/school/mission-and-vision" },
        { title: "Principal's Message", link: "/school/principals-message" },
        { title: "Our Pledge", link: "/school/our-pledge" },
        { title: "Infrastructure", link: "/school/infrastructure" },
        { title: "Achievements", link: "/school/achievements" },
        { title: "Gallery", link: "/school/gallery" },
        { title: "In the News", link: "/school/in-the-news" },
        { title: "School Transport", link: "/school/school-transport" },
        { title: "Newsletter", link: "/school/newsletter" },
        { title: "Contact Us", link: "/school/contact-us" },
    ],
    ["Admission"]: [
        { title: "Admission Procedure", link: "/admission/procedure" },
        {
            title: "General Instructions for Admission",
            link: "/admission/general-instructions-for-admission",
        },
        { title: "Admission Portal", link: "/admission/portal" },
    ],
    ["Miscellaneous"]: [
        { title: "Timings", link: "/misc/school-timings" },
        { title: "Code of Conduct", link: "/misc/code-of-conduct" },
        {
            title: "Positive Behavior Management",
            link: "/misc/positive-behavior-management",
        },
        { title: "Uniform", link: "/misc/school-uniform" },
        { title: "School Hours", link: "/misc/school-hours" },
    ],
} as const;

const MarketingNavbar = async () => {
    // const session = await getServerAuthSession();
    const session = null;

    return (
        <>
            <Navbar position="static" maxWidth="full">
                <NavbarBrand as={Link} href="/" className="gap-2 md:gap-3">
                    <NextImage
                        src={GreenfieldLogo}
                        alt="Greenfield School Logo"
                        quality={95}
                        className="h-10 w-10 rounded-full md:h-16 md:w-16"
                        priority
                    />
                    <p className="font-bold text-primary">
                        <span className="-gap-4 flex flex-col text-sm sm:hidden">
                            <span>Greenfield</span>
                            <span>Campus</span>
                        </span>
                        <span className="hidden text-xl sm:block md:text-3xl">
                            Greenfield Campus
                        </span>
                        <span className="hidden md:block md:text-base lg:text-2xl">
                            [V.C.S.M Matric. Hr. Sec. School]
                        </span>
                    </p>
                </NavbarBrand>
                <NavbarContent justify="end" className="gap-2 md:gap-4">
                    <NavbarItem>
                        <Button
                            as={Link}
                            href="/admission/portal"
                            variant="ghost"
                            color="primary"
                            className="hidden font-semibold sm:flex"
                        >
                            Admission Portal
                        </Button>
                        <Button
                            as={Link}
                            href="/admission/portal"
                            variant="ghost"
                            color="primary"
                            size="sm"
                            className="font-semibold sm:hidden"
                        >
                            Admission
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        {session === null ? (
                            <>
                                <Button
                                    as={Link}
                                    href="/login"
                                    color="primary"
                                    variant="solid"
                                    className="font-semibold text-white sm:hidden"
                                    radius="sm"
                                    size="sm"
                                >
                                    Login
                                </Button>

                                <Button
                                    as={Link}
                                    href="/login"
                                    color="primary"
                                    variant="solid"
                                    className="hidden font-semibold text-white sm:flex"
                                    radius="sm"
                                >
                                    Login
                                </Button>
                            </>
                        ) : (
                            <AccountDropdown />
                        )}
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            {/* Marketing Quick Links Navbar */}
            <Navbar
                height="3"
                className="grid place-content-start"
                isBordered
                isBlurred
            >
                <NavbarContent
                    className="flex flex-wrap gap-y-0 sm:gap-x-8"
                    justify="center"
                >
                    <Button
                        as={Link}
                        href="/"
                        className="bg-slate-400 bg-transparent p-0 text-xs data-[hover=true]:bg-transparent sm:text-sm md:text-base"
                    >
                        Home
                    </Button>
                    {Object.entries(NAV_LINKS).map(([title, links]) => (
                        <MarketingLinksDropdown
                            key={title}
                            title={title}
                            links={links}
                        />
                    ))}
                </NavbarContent>
            </Navbar>
        </>
    );
};

export default MarketingNavbar;
