import {
    Button,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@/src/app/_lib/next-ui";

import LanguageSwitcher from "@/src/app/_components/ui/LanguageSwitcher";
import { getScopedI18n } from "@/src/app/_locales/server";
import Image from "next/image";
import type { FC } from "react";
import PrimaryAction from "./PrimaryAction";

const MainNavbar: FC = async () => {
    const t = await getScopedI18n("Root.main-navbar");

    return (
        <Navbar position="static" maxWidth="full">
            <NavbarBrand>
                <Link href="/" className="flex h-full w-full gap-4">
                    <Image
                        src={"/images/logo.png"}
                        alt="Greenfield School Logo"
                        quality={95}
                        width={50}
                        height={50}
                        className="rounded-full"
                        priority
                    />
                    <p className="hidden text-sm font-bold text-primary md:block md:text-xl">
                        Greenfield Campus
                        <br /> [V.C.S.M matric. Hr. sec. School]
                    </p>
                </Link>
            </NavbarBrand>

            <NavbarContent justify="end" className="gap-2 md:gap-4">
                <NavbarItem>
                    <LanguageSwitcher />
                </NavbarItem>
                <NavbarItem>
                    <Button
                        as={Link}
                        href="/admission/portal"
                        variant="ghost"
                        color="primary"
                        className="hidden font-semibold sm:flex"
                    >
                        {t("admission-portal")}
                    </Button>
                    <Button
                        as={Link}
                        href="/admission/portal"
                        variant="ghost"
                        color="primary"
                        size="sm"
                        className="font-semibold sm:hidden"
                    >
                        {t("admission-portal")}
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <PrimaryAction />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};

export default MainNavbar;
