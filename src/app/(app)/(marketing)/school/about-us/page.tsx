import { type FC } from "react";
import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";

const AboutUsPage: FC = () => {
    return (
        <TwoSectionPage linkTitle="School" currentLink="About Us">
            <H1>About Us</H1>
            <div className="space-y-4">
                <p className="text-justify">
                    Greenfield Campus is a vibrant school where curiosity meets
                    education and each and every student is valued. In Our
                    school, we foster a dynamic learning environment that sparks
                    curiosity, encourages critical thinking, and unleashes
                    creativity. Sports facilities in our school are designed to
                    nurture physical health, teamwork and sportsmanship. Our
                    dedicated management and teachers is committed to nurturing
                    the intellectual and emotional growth of each student,
                    preparing them for a future filled with endless
                    possibilities.
                </p>
                <p className="text-justify">
                    In addition to fostering academic excellence, we prioritize
                    the holistic development of each student, emphasizing
                    essential life skills that extend beyond the classroom.
                    Resilience, adaptability, and creativity are integral
                    aspects of our educational philosophy. Together, we
                    celebrate diversity, promote inclusiveness, and create a
                    supportive atmosphere where students feel empowered to
                    thrive.
                </p>
                <p className="text-justify">
                    Join us on this educational journey, where sports facilities
                    complement intellectual growth, creating a comprehensive and
                    empowering foundation for every student&apos;s future
                    success. Together, we embrace each day as an opportunity for
                    exploration, discovery, and personal and physical growth.
                </p>
            </div>
        </TwoSectionPage>
    );
};

export default AboutUsPage;
