import type { ReactNode } from "react";

export type NextPageProps = { params: { locale: string } };
export type LayoutProps = { children: ReactNode };

export type Notification = {
  title: string;
  description: string;
  isUrgent: boolean;
};
