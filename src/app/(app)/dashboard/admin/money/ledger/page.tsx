import { type FC } from "react";
import H1 from "~/app/(app)/(marketing)/_components/H1";
import LedgerTable from "./_components/LedgerTable";

const FeesLedgerPage: FC = () => {
    return (
        <main className="space-y-4">
            <H1 className="pt-2">Ledger</H1>
            <LedgerTable />
        </main>
    );
};

export default FeesLedgerPage;
