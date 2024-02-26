import NextImage from "next/image";
import { type FC } from "react";
import { Image } from "~/app/next-ui";
import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";

const MissionAndVisionPage: FC = () => {
    return (
        <TwoSectionPage linkTitle="School" currentLink="Mission and Vision">
            <section className="space-y-6">
                <H1>Mission</H1>
                <div className="space-y-4">
                    <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-start">
                        <p className="flex-grow md:flex-grow-0 md:text-justify">
                            At Green Fields school, our mission is to cultivate
                            a community where education thrives as a beacon of
                            opportunity for all. We believe in Education for
                            All, championing a nurturing, empowering, and
                            intellectually enriching environment where every
                            student has the chance to shine. Each individual
                            carries within them a unique blend of talents,
                            passions, and potential waiting to be unlocked. Our
                            duty is to foster an atmosphere where these gifts
                            can flourish.
                        </p>
                        <Image
                            isBlurred
                            src="/images/exclusive-2.jpeg"
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
                        Central to our mission are the following guiding
                        principles:
                    </p>
                    <ul className="list-inside list-decimal space-y-3">
                        <li className="pl-2">
                            <span className="font-bold">
                                Individualized Attention:
                            </span>
                            We recognize that every student is distinct, with
                            their own strengths, challenges, and aspirations.
                            Thus, we are committed to providing personalized
                            support and guidance to each learner, ensuring that
                            they feel seen, valued, and empowered to pursue
                            their dreams.
                        </li>
                        <li className="pl-2">
                            <span className="font-bold">
                                Holistic Development:
                            </span>
                            Education extends beyond the boundaries of the
                            classroom. We strive to cultivate well-rounded
                            individuals by nurturing their academic pursuits
                            alongside their co-curricular and extra-curricular
                            interests. Through a balanced approach, we aim to
                            foster not only intellectual growth but also social,
                            emotional, and physical well-being.
                        </li>
                        <li className="pl-2">
                            <span className="font-bold">
                                Curiosity and Inquiry:
                            </span>
                            Questions are the building blocks of knowledge. We
                            encourage our students to ask, explore, and seek
                            answers, fostering a culture of curiosity and
                            critical thinking. By nurturing their natural
                            inquisitiveness, we empower them to become lifelong
                            learners, equipped to navigate an ever-changing
                            world.
                        </li>
                        <li className="pl-2">
                            <span className="font-bold">
                                Self-directed Learning:
                            </span>
                            Learning is a journey, and each student is the
                            captain of their own ship. We provide the tools,
                            resources, and guidance necessary for students to
                            take ownership of their education, fostering
                            independence, resilience, and a love for learning.
                        </li>
                        <li className="pl-2">
                            <span className="font-bold">
                                Social Responsibility:
                            </span>
                            Education is not just about personal growth; it is
                            also about contributing positively to the world
                            around us. We instill in our students a sense of
                            social responsibility, encouraging them to be active
                            participants in their communities, advocates for
                            change, and stewards of the environment.
                        </li>
                    </ul>
                    <p>
                        At Green Fields school, our mission is more than just
                        words on paper; it is a commitment to fostering a
                        community where every individual has the opportunity to
                        thrive, grow, and make their mark on the world.
                        Together, let us embark on this journey of discovery,
                        empowerment, and transformation, as we strive to unlock
                        the boundless potential within each and every one of us.
                    </p>
                </div>
            </section>
            <section className="space-y-6">
                <H1>Vision</H1>
                <div className="space-y-4">
                    <div className="flex flex-col-reverse items-center gap-8 md:flex-row-reverse md:items-start">
                        <p className="flex-grow text-justify md:flex-grow-0">
                            At Green Fields school, our vision is to create a
                            dynamic and inclusive learning community that
                            inspires excellence, fosters innovation, and
                            empowers every individual to reach their full
                            potential. We envision a future where education
                            transcends boundaries, where knowledge is a gateway
                            to endless possibilities, and where every student
                            emerges as a confident, compassionate, and competent
                            global citizen.
                        </p>
                        {/* FIXME: Replace the image */}
                        <Image
                            isBlurred
                            src="/images/logo_pixel_plus.png"
                            alt="Greenfield vision"
                            as={NextImage}
                            className="object-cover object-center md:w-[50rem]"
                            height={500}
                            width={500}
                            quality={95}
                        />
                    </div>
                    <p>Key elements of our vision include:</p>
                    <ul className="list-inside list-decimal space-y-3">
                        <li className="pl-2">
                            <span className="font-bold">
                                Excellence in Education:{" "}
                            </span>
                            1. We aspire to be a beacon of academic excellence,
                            where rigorous standards and innovative teaching
                            methodologies converge to cultivate the highest
                            levels of achievement. Through a commitment to
                            continuous improvement and a culture of excellence,
                            we strive to equip our students with the knowledge,
                            skills, and mindset necessary to excel in an
                            increasingly complex and interconnected world.
                        </li>
                        <li className="pl-2">
                            <span className="font-bold">
                                Innovation and Adaptability:{" "}
                            </span>
                            The landscape of education is constantly evolving,
                            driven by rapid advancements in technology,
                            globalization, and changing societal needs. We
                            embrace innovation as a catalyst for growth,
                            creativity, and adaptation, continuously seeking new
                            ways to engage, inspire, and empower our students.
                            By fostering a culture of curiosity,
                            experimentation, and resilience, we prepare our
                            students to thrive in an ever-changing environment
                            and to become architects of positive change in
                            society.
                        </li>
                        <li className="pl-2">
                            <span className="font-bold">
                                Diversity and Inclusion:{" "}
                            </span>
                            We celebrate the rich tapestry of human experience,
                            recognizing that diversity is not only a source of
                            strength but also a fundamental cornerstone of
                            learning and growth. Our vision is one of
                            inclusivity, where every voice is heard, every
                            perspective is valued, and every individual is
                            empowered to contribute to the collective tapestry
                            of our community. By embracing diversity in all its
                            forms, we cultivate empathy, understanding, and
                            global citizenship, preparing our students to
                            navigate and thrive in an increasingly
                            interconnected and multicultural world.
                        </li>
                        <li className="pl-2">
                            <span className="font-bold">
                                Community Engagement and Social Responsibility:{" "}
                            </span>
                            Education is not just about personal growth; it is
                            also about making a positive impact on the world
                            around us. We envision our school as a hub of
                            community engagement, where students, parents,
                            teachers, and school management come together to
                            address pressing societal challenges, promote social
                            justice, and enact positive change. Through
                            service-learning initiatives, community
                            partnerships, and experiential learning
                            opportunities, we empower our students to become
                            compassionate leaders and active agents of social
                            change, committed to building a more just,
                            equitable, and sustainable world for all.
                        </li>
                        <li className="pl-2">
                            <span className="font-bold">
                                Lifelong Learning and Personal Growth:{" "}
                            </span>
                            Education is a lifelong journey of discovery,
                            growth, and self-transformation. We envision our
                            school as a nurturing environment where curiosity is
                            celebrated, where learning knows no bounds, and
                            where every individual is supported in their quest
                            for personal and intellectual growth. By fostering a
                            love of learning, a growth mindset, and a commitment
                            to self-reflection and self-improvement, we empower
                            our students to embrace challenges, seize
                            opportunities, and realize their fullest potential,
                            both within and beyond the classroom.
                        </li>
                    </ul>
                    <p>
                        In summary, our vision for Green Fields school is one of
                        excellence, innovation, inclusivity, community
                        engagement, and personal growth. It is a vision that
                        inspires us, guides us, and drives us forward as we work
                        together to create a brighter future for our students,
                        our community, and our world.
                    </p>
                </div>
            </section>
        </TwoSectionPage>
    );
};

export default MissionAndVisionPage;
