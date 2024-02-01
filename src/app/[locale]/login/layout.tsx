import type { FC, ReactNode } from "react";

import Header from "./_components/Header";
import NextImage from "next/image";

type Props = { children: ReactNode };

const LoginLayout: FC<Props> = ({ children }) => {
    return (
        <div className="relative h-screen w-full md:grid md:place-content-center">
            <div className="inset-0 -z-10 hidden md:absolute md:block">
                <NextImage
                    src={"/images/login-page-side-img.jpg"}
                    alt="Login Page Side Image"
                    objectFit="cover"
                    priority
                    fill
                    quality={95}
                    className="opacity-90 blur-sm"
                />
            </div>
            <div className="h-full w-full md:z-10 md:rounded-xl md:bg-white md:p-2">
                <div className="mx-auto h-full w-full bg-opacity-80 p-8 md:space-y-4">
                    <Header />
                    <div className="space-y-8">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default LoginLayout;
