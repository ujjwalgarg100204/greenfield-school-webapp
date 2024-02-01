import NavProvider from "@/src/app/_contexts/NavContext";
import { getServerAuthSession } from "@/src/server/auth";
import { type FC } from "react";
import Academic from "../section/Academics/page";
import Exams from "../section/Exams/page";
import Fees from "../section/Money/page";
import Profile from "../section/Profile/page";
import LinkNavbar from "./LinkNavbar";

const DashboardPageInDevelopment: FC = async () => {
    const session = await getServerAuthSession();

    return (
        <NavProvider>
            <div className="w-full">
                <div className=" fixed top-10 m-5 w-[83.69%] md:m-5 ">
                    <LinkNavbar />
                </div>

                <div className="my-7 h-[83vh] overflow-y-auto  md:my-7 md:h-[83vh]">
                    <div className="my-7 h-[83vh] bg-red-500 text-center md:m-5 md:h-[83vh] md:p-4 md:py-5">
                        <Academic />
                    </div>

                    <div className="my-7 h-[83vh] bg-yellow-100 text-center md:m-5 md:h-[83vh] md:p-4">
                        <Exams />
                    </div>
                    <div className="my-7 h-fit  text-center md:m-5 md:h-fit md:p-4">
                        <Fees />
                    </div>
                    <div className="my-7 h-[83vh] bg-violet-400 text-center md:m-5 md:h-[83vh] md:p-4">
                        <Profile />
                    </div>
                </div>
            </div>
        </NavProvider>
    );
};

export default DashboardPageInDevelopment;
