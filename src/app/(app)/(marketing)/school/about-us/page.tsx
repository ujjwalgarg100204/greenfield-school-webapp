import { type FC } from "react";
import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";

const AboutUsPage: FC = () => {
    return (
        <TwoSectionPage linkTitle="School" currentLink="About Us">
            <H1>About Us</H1>
            <div className="space-y-4">
                <p className="text-justify">
                    At Our School, Education is looked upon as a holistic
                    learning experience to help children develop those
                    attributes and qualities which will make them self-reliant.
                    Conscious effort is made to foster pride in and love for the
                    country and its great heritage.
                </p>
                <p className="text-justify">
                    The School provides facilities for Drawing(SUPW), Music &
                    Dance classes at least once a week as part of the regular
                    time table. Besides academic excellence and intellectual
                    development, the school helps each child to discover and
                    develop his innate talents and abilities. It seeks to
                    instill in the children good habits and values such as
                    truthfulness, self respect, sense of duty, discipline, and
                    punctuality. The School provides a pleasing learning
                    environment with a spirit of sharing and caring and with
                    close bonds between teachers and students. They are trained
                    to participate in inter-house and inter school competition
                    in declamation, debates, recitations and quiz. We also
                    provide adequate games and sports facilities to our
                    students.
                </p>
            </div>
        </TwoSectionPage>
    );
};

export default AboutUsPage;
