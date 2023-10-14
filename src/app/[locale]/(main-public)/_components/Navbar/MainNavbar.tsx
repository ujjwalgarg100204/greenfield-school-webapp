import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@lib/next-ui";
import { SignIn, SignInButton, SignUpButton, useUser } from "@clerk/nextjs";

import { useState, type FC } from "react";
import GreenfieldLogo from "@/../public/images/logo.png";
import Image from "next/image";
import LanguageSwitcher from "@components/ui/LanguageSwither";
import Link from "next/link";
import { getScopedI18n } from "@/locales/server";

const MainNavbar: FC = async () => {
  // const { isLoaded: userLoaded, isSignedIn } = useUser();
  // const [showSignIn, setShowSignIn] = useState(false);

  const t = await getScopedI18n("Root.main-navbar");
  return (
    <Navbar position="static" maxWidth="full">
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
            Greenfield School,
            <br /> Tamil Nadu
          </p>
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end" className="gap-1 md:gap-4">
        <NavbarItem>
          <LanguageSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Button
            variant="ghost"
            color="primary"
            className="hidden font-semibold sm:flex"
          >
            {t("admission-portal")}
          </Button>
          <Button
            variant="ghost"
            color="primary"
            size="sm"
            className="font-semibold sm:hidden"
          >
            {t("admission-portal")}
          </Button>
        </NavbarItem>
        <NavbarItem>
          {/* <SignUpButton >
              <Button
                color="primary"
                variant="solid"
                className="font-semibold text-white sm:hidden"
                radius="sm"
                size="sm"
              >
                {t("login")}
              </Button>
            </SignUpButton>
            
         
          <SignUpButton >
            <Button
              color="primary"
              variant="solid"
              className="hidden font-semibold text-white sm:flex"
              radius="sm"
            >
              {t("login")}
            </Button>
          </SignUpButton> */}

          {/* <SignUpButton /> */}
          <div>
            <h1> Sign in </h1>
            <SignInButton />
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default MainNavbar;
