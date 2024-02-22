import NextImage from "next/image";
import { type FC } from "react";
import { Image } from "~/app/next-ui";
import StaticList from "../../../../_components/ui/StaticList";
import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";

const DEMO_MISSIONS = [
    "Giving the young learners individualized attention and recognizing their latent talent.",
    "Emphasizing holistic development as we ensure a healthy balance between academic, co-curricular, and extra-curricular activities.",
    "Catering to the students’ queries, raising the degree of inquisitiveness in them.",
    "Creating and sustaining an environment of self-learning, analytical thinking and practising social skills.",
    "Igniting conscience and propensity in the students towards the conservation of nature, maintaining harmony and giving back to the communities",
] as const;

const MissionAndVisionPage: FC = () => {
    return (
        <TwoSectionPage linkTitle="School" currentLink="Mission and Vision">
            <section className="space-y-6">
                <H1>Mission and Vision</H1>
                <div className="space-y-4">
                    <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-start">
                        <p className="flex-grow md:flex-grow-0 md:text-justify">
                            Our mission is Education for All, so we promote a
                            calm, energizing, and intellectually stimulating
                            environment where every student stands an equal
                            chance to showcase their talents. Every child is
                            born with a unique potential & ability and does not
                            necessarily have to follow in the footsteps of
                            others. We need to support them as they cultivate
                            and harness the inherent strength they are blessed
                            with.
                        </p>
                        <Image
                            isBlurred
                            src="/images/school-pages/mission-and-vision/mission.jpg"
                            alt="Greenfield mission"
                            as={NextImage}
                            className="object-cover object-center md:w-[120rem]"
                            height={500}
                            width={500}
                            quality={95}
                            priority
                        />
                    </div>
                    <p>
                        We strengthen our mission through the following
                        practices:
                    </p>
                    <StaticList list={DEMO_MISSIONS} itemClassName="pl-3" />
                </div>
            </section>
            <section className="space-y-6">
                <H1>Vision</H1>
                <div className="space-y-4">
                    <div className="flex flex-col-reverse items-center gap-8 md:flex-row-reverse md:items-start">
                        <p className="flex-grow text-justify md:flex-grow-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Nunc faucibus a pellentesque
                            sit amet porttitor eget dolor morbi. Vulputate mi
                            sit amet mauris commodo quis imperdiet massa
                            tincidunt. Non pulvinar neque laoreet suspendisse
                            interdum. enean sed adipiscing diam donec adipiscing
                            tristique risus nec.
                        </p>
                        <Image
                            isBlurred
                            src="/images/school-pages/mission-and-vision/vision.jpg"
                            alt="Greenfield vision"
                            as={NextImage}
                            className="object-cover object-center md:w-[120rem]"
                            height={500}
                            width={500}
                            quality={95}
                        />
                    </div>
                    <p className="text-justify">
                        Ut sem viverra aliquet eget sit amet tellus. Et egestas
                        quis ipsum suspendisse ultrices gravida. Aenean sed
                        adipiscing diam donec adipiscing tristique risus nec.
                        Morbi tristique senectus et netus et. Lectus vestibulum
                        mattis ullamcorper velit sed ullamcorper morbi.
                        Convallis tellus id interdum velit laoreet id donec
                        ultrices tincidunt. Mollis aliquam ut porttitor leo a
                        diam sollicitudin tempor id. Nam at lectus urna duis
                        convallis. Vulputate mi sit amet mauris commodo quis
                        imperdiet massa tincidunt. Non pulvinar neque laoreet
                        suspendisse interdum.
                    </p>
                </div>
            </section>
        </TwoSectionPage>
    );
};

export default MissionAndVisionPage;
