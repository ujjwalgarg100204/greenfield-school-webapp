import {
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { type FC, type ReactNode } from "react";
import GreenfieldLogo from "~/../public/images/logo.png";
import AccountDropdown from "~/app/_components/AccountDropdown";
import { getServerAuthSession, logout } from "~/server/auth";
import AcademicYearDropdown from "./_components/AcademicYearDropdown";

type Props = { children: ReactNode };

const DashboardLayout: FC<Props> = async ({ children }) => {
    const session = await getServerAuthSession();
    const logoutHandler = async () => {
        "use server";
        await logout();
        redirect("/");
    };

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar position="static" maxWidth="full" className="bg-gray-50">
                <NavbarBrand>
                    <Link href="/" className="flex h-full w-full gap-4">
                        <Image
                            src={GreenfieldLogo}
                            alt="Greenfield School Logo"
                            quality={95}
                            className="rounded-full"
                            priority
                        />
                        <p className="hidden text-sm font-bold text-primary md:block md:text-xl">
                            Greenfield Campus
                            <br /> [V.C.S.M Matric. Hr. Sec. School]
                        </p>
                    </Link>
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
    );
};

export default DashboardLayout;
