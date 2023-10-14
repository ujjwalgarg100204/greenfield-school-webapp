import ArticlePage from "../../_components/ArticlePage";
import { Button } from "@lib/next-ui";
import type { FC } from "react";
import NextLink from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const AdmissionPortal: FC = () => {
  return (
    <ArticlePage
      linkType="admission"
      selected={{ translationKey: "admission-portal" }}
    >
      <SectionHeading>
        Welcome to Admission Portal of Greenfield School
      </SectionHeading>
      <div className="space-y-4">
        <p>
          For smooth experience while taking online admission, we recommend
          having availability of these documents beforehand{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
          faucibus a pellentesque sit amet porttitor eget dolor morbi. Lorem
          donec massa sapien faucibus. Leo vel fringilla est{" "}
        </p>
      </div>
      <Button
        size="md"
        radius="sm"
        as={NextLink}
        color="primary"
        href="/admission/portal"
        className="w-full font-semibold"
      >
        Get Started
      </Button>
    </ArticlePage>
  );
};

export default AdmissionPortal;
