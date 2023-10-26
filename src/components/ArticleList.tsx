import type { FC, ReactNode } from "react";

import { twMerge } from "tailwind-merge";

type Props = {
  list: ReadonlyArray<string>;
  containerClassName?: string;
  itemClassName?: string;
  children?: ReactNode;
};

const ArticleList: FC<Props> = ({
  list,
  containerClassName,
  itemClassName,
  children,
}) => {
  return (
    <ul
      className={twMerge(
        "list-inside list-decimal space-y-3",
        containerClassName,
      )}
    >
      {list.map(listItem => (
        <li key={listItem} className={twMerge("pl-1", itemClassName)}>
          {listItem}
        </li>
      ))}
      {children}
    </ul>
  );
};

export default ArticleList;
