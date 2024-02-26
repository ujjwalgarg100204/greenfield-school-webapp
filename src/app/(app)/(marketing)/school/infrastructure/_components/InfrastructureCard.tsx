import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { type FC } from "react";

type Props = {
    image: { src: string; alt: string };
    title: string;
    desc: string;
    dark: boolean;
};

const InfrastructureCardHeader: FC<Pick<Props, "title" | "desc" | "dark">> = ({
    title,
    desc,
    dark,
}) => {
    return (
        <CardHeader
            className={`h-64 flex-col items-start p-6 ${dark ? "bg-slate-500 text-white" : ""}`}
        >
            <h3 className="my-4 text-2xl font-bold">{title}</h3>
            <p className="">{desc}</p>
        </CardHeader>
    );
};

const InfrastructureCardBody: FC<Pick<Props, "image" | "dark">> = ({
    image,
    dark,
}) => {
    return (
        <CardBody className={`overflow-visible ${dark ? "bg-slate-300" : ""}`}>
            <Image
                alt={image.alt}
                classNames={{
                    wrapper: "h-full rounded-xl",
                    img: "h-56 object-center object-cover",
                }}
                src={image.src}
                shadow="sm"
                radius="lg"
                width="100%"
                height="100%"
            />
        </CardBody>
    );
};

const InfrastructureCard: FC<Props> = props => {
    return (
        <Card className="transition-transform duration-700 hover:scale-110 hover:shadow-2xl">
            {props.dark ? (
                <>
                    <InfrastructureCardHeader {...props} />
                    <InfrastructureCardBody {...props} />
                </>
            ) : (
                <>
                    <InfrastructureCardBody {...props} />
                    <InfrastructureCardHeader {...props} />
                </>
            )}
        </Card>
    );
};

export default InfrastructureCard;
