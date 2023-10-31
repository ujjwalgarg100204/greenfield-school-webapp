import { Card, CardBody } from "@/src/lib/next-ui";

import { addOrSubtractDays } from "@/src/utils";
import type { FC } from "react";
import type holidaysList from "../holidays-list";

const formatDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const HolidayCard: FC<(typeof holidaysList)[number]> = ({
  title,
  duration,
  endDate,
  startDate,
}) => {
  return (
    <Card key={title} shadow="sm">
      <CardBody>
        <h2 className="mb-4 text-center text-xl font-extrabold tracking-wider">
          {title}
        </h2>
        <div className="space-y-1">
          <p>
            Duration: <span className="font-bold text-primary">{duration}</span>
          </p>
          <p>
            <span className="font-bold text-primary">
              {formatDate(startDate)}
            </span>{" "}
            -{" "}
            <span className="font-bold text-primary">
              {formatDate(endDate)}
            </span>
          </p>
          <p>
            <span className="font-bold">Last Working Day</span>:{" "}
            {formatDate(addOrSubtractDays(startDate, -1))}
          </p>
          <p>
            <span className="font-bold">Reopens on</span>:{" "}
            {formatDate(addOrSubtractDays(endDate, 1))}
          </p>
          <p className="text-center text-sm font-semibold text-primary-300">
            BOTH DAYS COMPULSORY ATTENDANCE
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

export default HolidayCard;
