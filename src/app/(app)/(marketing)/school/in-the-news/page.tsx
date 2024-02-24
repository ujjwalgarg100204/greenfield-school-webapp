import { Suspense } from "react";
import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";
import NewsSection from "./_components/NewsSection";

const InTheNewsPage = () => {
    return (
        <TwoSectionPage linkTitle="School" currentLink="In the News">
            <H1>Greenfield Latest News</H1>
            {/* FIXME: there should be a loading state passed in the suspense boundry */}
            <Suspense>
                <NewsSection />
            </Suspense>
        </TwoSectionPage>
    );
};

export default InTheNewsPage;