import type { ReactNode } from "react";

export type NextPageProps = { params: { locale: string } };
export type Notification = {
  title: string;
  description: string;
  isUrgent: boolean;
};
declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    directory?: string;
    webkitdirectory?: string;
  }
}

export type LayoutProps = { children: ReactNode };
