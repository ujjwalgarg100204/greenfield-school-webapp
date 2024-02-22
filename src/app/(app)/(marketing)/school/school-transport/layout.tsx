import type { FC, ReactNode } from "react";
import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";
import TransportTabs from "./_components/TransportTabs";

type Props = { children: ReactNode };
const SchoolTransportPageLayout: FC<Props> = ({ children }) => {
    return (
        <TwoSectionPage linkTitle="School" currentLink="School Transport">
            <H1>School Transport</H1>
            <TransportTabs />
            {children}
        </TwoSectionPage>
    );
};

export default SchoolTransportPageLayout;
