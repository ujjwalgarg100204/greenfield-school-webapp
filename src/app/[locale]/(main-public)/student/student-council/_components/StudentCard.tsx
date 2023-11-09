import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@lib/next-ui";

import type { FC } from "react";
import NextImage from "next/image";

type Props = {
  designation: string;
  name: string;
  avatar: string;
  grade: string;
};

const StudentCard: FC<Props> = ({ avatar, designation, grade, name }) => {
  return (
    <Card>
      <CardHeader className="pb-0">
        <Chip
          as="h2"
          color="primary"
          classNames={{
            content:
              "uppercase tracking-wider font-semibold text-xs sm:font-bold sm:text-sm",
            base: "mx-auto",
          }}
        >
          {designation}
        </Chip>
      </CardHeader>
      <CardBody className="p-4">
        <Avatar
          src={avatar}
          ImgComponent={NextImage}
          imgProps={{
            width: 500,
            height: 500,
            fetchPriority: "high",
          }}
          className="mx-auto h-28 w-28 sm:h-40 sm:w-40"
          radius="lg"
          fallback={name}
        />
      </CardBody>
      <CardFooter className="flex-col pt-0">
        <h3 className="text-center font-semibold">{name}</h3>
        <p className="text-center">{grade}</p>
      </CardFooter>
    </Card>
  );
};

export default StudentCard;
