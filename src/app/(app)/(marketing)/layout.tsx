import { Link } from "@nextui-org/react";
import { type FC, type ReactNode } from "react";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import GreenfieldLocation from "~/app/_components/GreenfieldLocation";
import MarketingNavbar from "./_components/MarketingNavbar";
import QRCode from "react-qr-code";

type Props = { children: ReactNode };
const MarketingSiteLayout: FC<Props> = ({ children }) => {
    return (
        <div>
            <MarketingNavbar />
            {children}
            <footer className="rounded-t-md bg-primary px-4 py-8 text-sm text-foreground-100 sm:grid-cols-3 md:grid-cols-5 md:px-5 lg:grid-cols-6 lg:px-6 xl:px-7">
                <section className="max-w-md space-y-4 text-center md:col-span-2 md:justify-self-start md:text-left lg:col-span-3">
                    <p className="text-xs font-bold md:text-lg">
                        Greenfield Campus [V.C.S.M matric. Hr. sec. School]
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <GreenfieldLocation />
                        <QRCode
                            className="aspect-square h-32 w-48 rounded-xl border-8 border-gray-200"
                            value="https://www.google.com/maps/place/Greenfields+Matriculation+School/@11.059943,76.949453,14z/data=!4m6!3m5!1s0x3ba8f626ffc42147:0xf398a88ed4aed02b!8m2!3d11.0599425!4d76.9494529!16s%2Fg%2F11fx8r7qn0?hl=en&entry=ttu"
                        />
                    </div>
                    <p className="flex items-center gap-2">
                        <MdOutlineLocationOn />
                        <span>
                            11/34B, Udayampalayam Rd, Gounder Mills, Coimbatore,
                            Tamil Nadu 641029
                        </span>
                    </p>
                    <p className="flex items-center gap-3">
                        <BsTelephone />
                        <Link
                            href="tel://+919894376100"
                            className="text-white"
                            underline="always"
                        >
                            +91 98943 76100
                        </Link>
                    </p>
                </section>
                <hr className="col-span-2 mb-2 mt-4 w-full rounded-full border border-white text-white md:col-span-6" />
                <p className="col-span-2 text-center text-xs font-bold  md:col-span-6">
                    Greenfield Campus [V.C.S.M Matric. Hr. Sec. School]@{" "}
                    {new Date().getFullYear()}. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default MarketingSiteLayout;
