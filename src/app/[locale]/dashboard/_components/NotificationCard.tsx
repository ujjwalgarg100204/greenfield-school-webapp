import { Card, CardBody, CardHeader } from "@lib/next-ui";

import { AiOutlineInfoCircle } from "react-icons/ai";
import type { FC } from "react";
import type { Notification } from "@/src/types";
import { twMerge } from "tailwind-merge";

const NotificationCard: FC<Notification> = ({
  title,
  description,  
  isUrgent,
}) => {
  return (
    <Card
      className={twMerge(
        "flex-row gap-3 bg-white px-2 transition-colors group-data-[hover=true]:bg-primary group-data-[hover=true]:text-white",
        isUrgent && "bg-[#e5f6fd] group-data-[hover=true]:bg-[#9eddf8]",
      )}
      radius="sm"
    >
      <CardHeader className="max-w-fit p-0.5">
        <AiOutlineInfoCircle
          className={twMerge("h-5 w-5", isUrgent && "text-[#1e94d6]")}
        />
      </CardHeader>
      <CardBody className="py-2 pl-0">
        <h6
          className={twMerge(
            "font-semibold",
            isUrgent && "group-data-[hover=true]:text-black/60",
          )}
        >
          {title}
        </h6>
        <p
          className={twMerge(
            "text-sm text-gray-500 group-data-[hover=true]:text-gray-200",
            isUrgent && "group-data-[hover=true]:text-gray-700",
          )}
        >
          {description}
        </p>
      </CardBody>
    </Card>
  );
};

export default NotificationCard;
