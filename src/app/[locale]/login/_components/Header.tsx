import {
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
} from "@/src/app/_lib/next-ui";

import LanguageSwitcher from "@/src/app/_components/ui/LanguageSwitcher";
import NextImage from "next/image";
import type { FC } from "react";
import BackButton from "./BackButton";

const Header: FC = () => {
    return (
        <Navbar position="static" className="flex bg-yellow-400">
            <NavbarContent className="flex items-center justify-between bg-red-500 px-4 py-2">
                <BackButton />
                <NavbarBrand
                    as={Link}
                    href="/"
                    className="flex items-center gap-4"
                >
                    <NextImage
                        src={"images/logo.png"}
                        alt="Greenfield Logo"
                        className="h-12 w-12 rounded-full object-cover object-center"
                        priority
                    />
                    <h1 className="flex-grow font-bold text-black/80 md:text-xl">
                        Greenfield Campus <br /> [V.C.S.M matric. Hr. sec.
                        School]
                    </h1>
                </NavbarBrand>
                <LanguageSwitcher />
            </NavbarContent>
        </Navbar>
    );
};

export default Header;
