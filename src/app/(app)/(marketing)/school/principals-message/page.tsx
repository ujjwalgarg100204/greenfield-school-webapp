import NextImage from "next/image";
import { Avatar } from "~/app/next-ui";
import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";

const PrincipalsMessage = () => {
    return (
        <TwoSectionPage linkTitle="School" currentLink="Principal's Message">
            <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
                <div className="flex-grow">
                    <H1 className="mb-4">Principal&apos;s Message</H1>
                    <div className="space-y-4">
                        <p className="text-justify">
                            As the Principal of Green Fields school, it is my
                            privilege to welcome you to our vibrant learning
                            community. At Green Fields school, we are guided by
                            a vision of excellence, innovation, inclusivity,
                            community engagement, and personal growth. Our
                            mission is to create a dynamic and inclusive
                            environment where every student has the opportunity
                            to thrive, grow, and make a positive impact on the
                            world around them.
                        </p>
                        <p className="text-justify">
                            As educators, we are committed to providing our
                            students with the highest quality education,
                            equipping them with the knowledge, skills, and
                            mindset necessary to excel in an ever-changing
                            world. We believe in nurturing a culture of
                            curiosity, critical thinking, and creativity,
                            empowering our students to become lifelong learners
                            and problem solvers.
                        </p>
                        <p className="text-justify">
                            Central to our mission is a commitment to diversity
                            and inclusion. We celebrate the unique talents,
                            backgrounds, and perspectives of each member of our
                            community, recognizing that diversity is not only a
                            source of strength but also a catalyst for
                            innovation and growth. We are dedicated to creating
                            a welcoming and supportive environment where every
                            individual feels valued, respected, and empowered to
                            be their authentic selves.
                        </p>
                        <p className="text-justify">
                            At Green Fields school, we believe in the power of
                            community engagement and social responsibility. We
                            encourage our students to actively participate in
                            service-learning initiatives, community
                            partnerships, sports events and extracurricular
                            activities that promote social justice, equity,
                            broader mindset and sustainability. Through these
                            experiences, our students develop empathy,
                            compassion, and a sense of civic responsibility,
                            preparing them to become compassionate leaders and
                            changemakers in their communities.
                        </p>

                        <p className="text-justify">
                            Above all, we are committed to fostering a culture
                            of personal growth and excellence. We believe in
                            supporting our students as they strive to reach
                            their full potential, both academically and
                            personally. We provide the resources, support, and
                            guidance necessary for our students to set ambitious
                            goals, overcome challenges, and succeed in their
                            endeavors.
                        </p>
                        <p className="text-justify">
                            As we embark on this journey together, I invite you
                            to join us in realizing our vision of a brighter
                            future for our students, our community, and our
                            world. Together, we can inspire excellence, foster
                            innovation, and empower every individual to make a
                            positive impact on the world around them.
                        </p>
                        <p className="text-justify">
                            Thank you for choosing Green Fields school as your
                            partner in education. Together, let us shape the
                            leaders of tomorrow and create a more just,
                            equitable, and sustainable world for all.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <Avatar
                        size="lg"
                        isBordered
                        imgProps={{
                            width: 600,
                            height: 400,
                        }}
                        name="Sam"
                        color="success"
                        ImgComponent={NextImage}
                        classNames={{
                            img: "object-cover object-top",
                        }}
                        className="h-40 w-40"
                        src="/images/sam-sir.jpeg"
                    />
                    <p className="flex flex-col items-center justify-center gap-1">
                        <span className="text-xl font-bold leading-6 lg:leading-5">
                            Mr. Sam
                        </span>
                        <span className="text-sm lg:text-base">
                            Prinicpal of Greenfield
                        </span>
                    </p>
                </div>
            </div>
        </TwoSectionPage>
    );
};

export default PrincipalsMessage;
