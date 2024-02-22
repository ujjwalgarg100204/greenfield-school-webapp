import { type FC } from "react";
import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";

const OurPledgePage: FC = () => {
    return (
        <TwoSectionPage linkTitle="School" currentLink="Our Pledge">
            <H1>Our Pledge</H1>
            <div className="space-y-2 rounded-md bg-gradient-to-r from-orange-500 via-white to-primary p-6 text-center font-semibold text-slate-700/80">
                <p>
                    India is my country and all Indians are my brothers and
                    sisters.
                </p>
                <p>
                    I love my country and I am proud of its rich and varied
                    heritage.
                </p>
                <p>I shall always strive to be worthy of it.</p>
                <p>
                    I shall give respect to my parents, teachers and elders and
                    treat everyone with courtesy.
                </p>
                <p>To my country and my people, I pledge my devotion.</p>
                <p>
                    In their well being and prosperity alone, lies my happiness.
                </p>
                <p>Jai Hind!</p>
            </div>
        </TwoSectionPage>
    );
};

export default OurPledgePage;
