"use client";

import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

const SyllabusLayout: FC<Props> = ({ children, modal }) => {
  return (
    <>
      {children}
      {modal}
    </>
  );
};

export default SyllabusLayout;
