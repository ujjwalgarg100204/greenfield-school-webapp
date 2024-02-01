import type { FC, ReactNode } from "react";

import NextImage from "next/image";
import Header from "./_components/Header";

type Props = { children: ReactNode };

const LoginLayout: FC<Props> = ({ children }) => {
    return (
        <div className="relative h-screen w-full">
            <div className="absolute inset-0">
                <NextImage
                    src={"images/login-page-side-img.jpg"}
                    alt="Login Page Side Image"
                    layout="fill"
                    objectFit="cover"
                    priority
                    quality={95}
                    className="opacity-30"
                />
            </div>
            <div className=" h-full w-full">
                <div className="w-full ">
                    <div className="mx-auto h-full w-full bg-white bg-opacity-80 p-8">
                        <Header />
                        <div className="space-y-8">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginLayout;
