import { Card, CardBody, Link } from "@/src/lib/next-ui";

import type { FC } from "react";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

type Props = {
    title: string;
    link: string;
};

const DownloadablePdfCard: FC<Props> = ({ title, link }) => {
    return (
        <Card isPressable radius="lg" shadow="none">
            <CardBody className="flex flex-col items-center gap-4">
                <BsFillFileEarmarkPdfFill className="h-16 w-16 text-red-600" />
                <Link
                    showAnchorIcon
                    isExternal
                    underline="hover"
                    href={link}
                    download
                >
                    {title}
                </Link>
            </CardBody>
        </Card>
    );
};

export default DownloadablePdfCard;
