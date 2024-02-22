import { Button, Link } from "@nextui-org/react";
import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";

const AdmissionPortalPage = () => {
    return (
        <TwoSectionPage linkTitle="Admission" currentLink="Admission Portal">
            <H1>Welcome to Admission Portal of Greenfield School</H1>
            <div className="space-y-4">
                <p>
                    For smooth experience while taking online admission, we
                    recommend having availability of these documents beforehand
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Nunc faucibus a pellentesque sit amet porttitor eget
                    dolor morbi. Lorem donec massa sapien faucibus. Leo vel
                    fringilla est
                </p>
            </div>
            <Button
                size="md"
                radius="sm"
                as={Link}
                color="primary"
                href="/admission/admission-application"
                className="w-full font-semibold"
            >
                Get Started
            </Button>
        </TwoSectionPage>
    );
};

export default AdmissionPortalPage;
