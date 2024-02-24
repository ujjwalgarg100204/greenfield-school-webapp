import { Button, Divider, Link } from "@nextui-org/react";
import { type FC, type ReactNode } from "react";

const ADMISSION_NAV_LINKS = [
    {
        title: "Admission Portal",
        link: "/admission/portal",
    },
    {
        title: "General Instructions for Admission",
        link: "/admission/general-instructions-for-admission",
    },
    {
        title: "Admission Procedure",
        link: "/admission/procedure",
    },
] as const;

type Props = {
    children: ReactNode;
    highlightedLink: (typeof ADMISSION_NAV_LINKS)[number]["title"];
};
const TwoSectionAdmissionPage: FC<Props> = ({ children, highlightedLink }) => {
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
                        Other Admission Links
                    </h3>
                    <Divider className="h-0.5 rounded-full" />
                    <nav>
                        <ul className="space-y-0.5">
                            {ADMISSION_NAV_LINKS.map(({ link, title }) => (
                                <li key={title}>
                                    <Button
                                        className="w-full justify-start "
                                        radius="sm"
                                        as={
                                            highlightedLink === title
                                                ? undefined
                                                : Link
                                        }
                                        href={
                                            highlightedLink === title
                                                ? undefined
                                                : link
                                        }
                                        variant={
                                            highlightedLink === title
                                                ? "solid"
                                                : "light"
                                        }
                                        color={
                                            highlightedLink === title
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

export default TwoSectionAdmissionPage;
