import type { FC, ReactNode } from "react";

import Header from "./_components/Header";
import LoginPageSideImage from "@/../public/images/login-page-side-img.jpg";
import NextImage from "next/image";

type Props = { children: ReactNode };

const LoginLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen w-full">
      <div className="mx-auto w-full space-y-8 py-8 lg:w-1/3">
        <Header />
        <div className="space-y-8 px-6">{children}</div>
      </div>
      <NextImage
        src={LoginPageSideImage}
        alt="Login Page Side Image"
        className="hidden h-full object-cover object-center lg:block lg:w-2/3"
        priority
        quality={95}
      />
    </div>
  );
};

export default LoginLayout;
