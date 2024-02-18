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
        <Navbar
            position="static"
            className=""
            classNames={{ wrapper: "pl-0 justify-start lg:gap-12" }}
        >
            <NavbarContent className="flex flex-grow" justify="start">
                <BackButton />
                <NavbarBrand
                    as={Link}
                    href="/"
                    className="flex items-center gap-3 md:gap-4"
                >
                    <NextImage
                        src={"/images/logo.png"}
                        alt="Greenfield Logo"
                        className="h-10 w-10 rounded-full object-cover object-center md:h-12 md:w-12"
                        width={30}
                        height={30}
                        priority
                    />
                    <h1 className="flex flex-grow flex-col font-bold text-black/80">
                        <span className="text-xl leading-5 md:hidden">
                            Greenfield <br />
                            Campus
                        </span>
                        <span className="hidden text-2xl md:block lg:text-3xl">
                            Greenfield Campus
                        </span>
                        <span className="hidden text-sm md:block lg:text-base">
                            [V.C.S.M Matric. Hr. Sec. School]
                        </span>
                    </h1>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="end">
                <LanguageSwitcher />
            </NavbarContent>
        </Navbar>
    );
};

export default Header;
