import NextImage from "next/image";
import { redirect } from "next/navigation";
import GreenfieldLogo from "~/../public/images/logo.png";
import { RiContactsFill } from "react-icons/ri";
import {
    Button,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "~/app/next-ui";
import { getServerAuthSession, logout } from "~/server/auth";
import AccountDropdown from "../../../_components/AccountDropdown";
import AdmissionButton from "./AdmissionButton";
import MarketingLinksDropdown from "./MarketingLinksDropdown";

// TODO: Add achievements and gallery page later on
export const NAV_LINKS = {
    ["School"]: [
        { title: "About Us", link: "/school/about-us", hidden: false },
        {
            title: "Mission and Vision",
            link: "/school/mission-and-vision",
            hidden: false,
        },
        {
            title: "Principal's Message",
            link: "/school/principals-message",
            hidden: false,
        },
        { title: "Our Pledge", link: "/school/our-pledge", hidden: false },
        {
            title: "Infrastructure",
            link: "/school/infrastructure",
            hidden: false,
        },
        { title: "Achievements", link: "/school/achievements", hidden: true },
        //  FIXME: add this page later after we have  received some data
        { title: "Gallery", link: "/school/gallery", hidden: false },
        //  FIXME: add this page later after we have  received some data
        { title: "In the News", link: "/school/in-the-news", hidden: true },
        {
            title: "School Transport",
            link: "/school/school-transport",
            hidden: false,
        },
        { title: "Contact Us", link: "/school/contact-us", hidden: false },
    ],
    ["Campus Life"]: [
        { title: "Timings", link: "/misc/school-timings", hidden: false },
        {
            title: "Code of Conduct",
            link: "/misc/code-of-conduct",
            hidden: false,
        },
        {
            title: "Positive Behavior Management",
            link: "/misc/positive-behavior-management",
            hidden: false,
        },
        { title: "Uniform", link: "/misc/school-uniform", hidden: false },
    ],
} as const;

const MarketingNavbar = async () => {
    const session = await getServerAuthSession();
    const logoutHandler = async () => {
        "use server";
        await logout();
        redirect("/");
    };

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
                            href="/school/contact-us"
                            variant="ghost"
                            color="primary"
                            className="hidden font-semibold sm:flex"
                        >
                            Contact Us
                        </Button>
                        <Button
                            as={Link}
                            href="/school/contact-us"
                            variant="ghost"
                            color="primary"
                            size="sm"
                            className="font-semibold sm:hidden"
                            isIconOnly
                        >
                            <RiContactsFill className="size-3.5" />
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <AdmissionButton />
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
                            <AccountDropdown
                                user={session.user}
                                logoutHandler={logoutHandler}
                            />
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
