import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";
import NewsletterAccordion from "./_components/NewsletterAccordion";

const DEMO_NEWSLETTERS = [
    {
        category: "2022 - 23",
        letters: [
            {
                title: "October 2022 - March 2023",
                link: "/public/newsletters/2022-23/October 2022 - March 2023.pdf",
            },
            {
                title: "April - July 2022",
                link: "/public/newsletters/2022-23/April - July 2022.pdf",
            },
        ],
    },
    {
        category: "2020 - 21",
        letters: [
            {
                title: "April - June 2021",
                link: "/public/newsletters/2020-21/April - June 2021.pdf",
            },
        ],
    },
    {
        category: "2019 - 20",
        letters: [
            {
                title: "May - November 2020",
                link: "/public/newsletters/2019-20/May - November 2020.pdf",
            },
        ],
    },
    {
        category: "2018 - 19",
        letters: [
            {
                title: "July - September 2018",
                link: "/public/newsletters/2018-19/July - September 2018.pdf",
            },
            {
                title: "April - June 2018",
                link: "/public/newsletters/2018-19/April - June 2018.pdf",
            },
        ],
    },
];

const NewsletterPage = () => {
    return (
        <TwoSectionPage linkTitle="School" currentLink="Newsletter">
            <H1>Newsletter</H1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                magnam hic eveniet totam accusantium modi iusto nemo dolor,
                veniam eos aspernatur possimus voluptate aperiam laudantium
                deleniti suscipit alias tempore fuga?
            </p>
            {DEMO_NEWSLETTERS.length > 0 ? (
                <NewsletterAccordion newsletters={DEMO_NEWSLETTERS} />
            ) : (
                <p className="text-lg font-semibold text-danger-600">
                    Oops, no newsletter found
                </p>
            )}
        </TwoSectionPage>
    );
};

export default NewsletterPage;
