import NextImage from "next/image";
import type { FC, ReactNode } from "react";
import { Link, Navbar, NavbarBrand, NavbarContent } from "~/app/next-ui";
import BackButton from "./_components/BackButton";

const LoginPageLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="relative h-screen w-full md:grid md:place-content-center">
            <div className="inset-0 -z-10 hidden md:absolute md:block">
                <NextImage
                    src="/images/login-page-side-img.jpg"
                    alt="Login Page Side Image"
                    priority
                    fill
                    quality={95}
                    className="object-cover opacity-90 blur-sm"
                />
            </div>
            <div className="h-full w-full md:z-10 md:rounded-xl md:bg-white md:p-2">
                <div className="mx-auto h-full w-full bg-opacity-80 p-8 md:space-y-4">
                    <Navbar
                        position="static"
                        className=""
                        classNames={{ wrapper: "pl-0 justify-start lg:gap-12" }}
                    >
                        <NavbarContent
                            className="flex flex-grow"
                            justify="start"
                        >
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
                    </Navbar>
                    <div className="space-y-8">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default LoginPageLayout;
