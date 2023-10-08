import { PageProps } from "@/types";
import { unstable_setRequestLocale as setRequestLocale } from "next-intl/server";

const IndexPage = ({ params: { locale } }: PageProps) => {
  setRequestLocale(locale);
  return <div className="text-center">IndexPage</div>;
};

export default IndexPage;
