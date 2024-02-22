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
                            Empowerment of students for their all-round
                            development through education is our cherished
                            motto. Today education means much more than merely
                            acquiring knowledge. It is acquisition of knowledge
                            and skills, building character and improving
                            employability of our young talent, the future
                            leadership.
                        </p>
                        <p className="text-justify">
                            Measures initiated by the Management, steps taken by
                            the school administration, the willing contribution
                            of the teaching and non-teaching staff and
                            overwhelming response and enthusiastic participation
                            of my dear students in the school activities in the
                            recent past all vouch for this. When all the
                            constituents come together and work in unison, the
                            expected results are bound to flow. Wishing you all
                            a happy learning experience.
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
                        className="h-40 w-40"
                        src="https://images.pexels.com/photos/756484/pexels-photo-756484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
