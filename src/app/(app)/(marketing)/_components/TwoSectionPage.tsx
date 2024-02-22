import { Button, Divider, Link } from "@nextui-org/react";
import { type FC, type ReactNode } from "react";
import { NAV_LINKS } from "./MarketingNavbar";

type Props = {
    children: ReactNode;
    linkTitle: keyof typeof NAV_LINKS;
    currentLink: (typeof NAV_LINKS)[keyof typeof NAV_LINKS][number]["title"];
};
const TwoSectionPage: FC<Props> = ({ children, linkTitle, currentLink }) => {
    return (
        <div className="container mx-auto my-12 flex justify-between gap-16 px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="w-2/3 flex-grow">
                <section className="max-w-xl space-y-6 lg:max-w-4xl">
                    {children}
                </section>
            </div>
            <div className="hidden w-1/3 lg:block">
                <aside className="sticky top-16 ml-auto w-full max-w-xs space-y-3 rounded-lg border-2 bg-white p-4">
                    <h3 className="text-lg font-semibold capitalize">
                        Other {linkTitle} Links
                    </h3>
                    <Divider className="h-0.5 rounded-full" />
                    <nav>
                        <ul className="space-y-0.5">
                            {NAV_LINKS[linkTitle].map(({ link, title }) => (
                                <li key={title}>
                                    <Button
                                        className="w-full justify-start "
                                        radius="sm"
                                        as={Link}
                                        href={link}
                                        variant={
                                            currentLink === title
                                                ? "solid"
                                                : "light"
                                        }
                                        color={
                                            currentLink === title
                                                ? "primary"
                                                : "default"
                                        }
                                    >
                                        {title}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
            </div>
        </div>
    );
};

export default TwoSectionPage;
