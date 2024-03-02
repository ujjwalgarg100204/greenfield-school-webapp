import {
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/react";
import NextImage from "next/image";
import { redirect } from "next/navigation";
import { type FC, type ReactNode } from "react";
import GreenfieldLogo from "~/../public/images/logo.png";
import AccountDropdown from "~/app/_components/AccountDropdown";
import { getServerAuthSession, logout } from "~/server/auth";
import AcademicYearDropdown from "./_components/AcademicYearDropdown";
import { CurrAcademicYearProvider } from "./_contexts/currAcademicYear";

type Props = { children: ReactNode };

const DashboardLayout: FC<Props> = async ({ children }) => {
    const session = await getServerAuthSession();
    const logoutHandler = async () => {
        "use server";
        await logout();
        redirect("/");
    };

    return (
        <CurrAcademicYearProvider>
            <div className="flex min-h-screen flex-col">
                <Navbar
                    position="static"
                    maxWidth="full"
                    className="bg-gray-50"
                >
                    <NavbarBrand as={Link} href="/" className="gap-2 md:gap-3">
                        <NextImage
                            src={GreenfieldLogo}
                            alt="Greenfield School Logo"
                            quality={95}
                            className="h-10 w-10 rounded-full md:h-16 md:w-16"
                            priority
                        />
                        <p className="font-bold text-primary">
                            <span className="hidden text-xl sm:block md:text-3xl">
                                Greenfield Campus
                            </span>
                            <span className="hidden md:block md:text-base lg:text-2xl">
                                [V.C.S.M Matric. Hr. Sec. School]
                            </span>
                        </p>
                    </NavbarBrand>
                    <NavbarContent
                        justify="end"
                        className="items-center gap-4 lg:gap-5"
                    >
                        <NavbarItem>
                            <AcademicYearDropdown />
                        </NavbarItem>
                        <NavbarItem>
                            <AccountDropdown
                                user={session!.user}
                                logoutHandler={logoutHandler}
                            />
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
                <div className="flex flex-grow">{children}</div>
            </div>
        </CurrAcademicYearProvider>
    );
};

export default DashboardLayout;
