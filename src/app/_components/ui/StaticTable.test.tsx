import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import StaticTable from "./StaticTable";

describe("StaticTable", () => {
    const headerCells = [{ text: "Header 1" }, { text: "Header 2" }];
    const dataRows = [
        { cells: [{ text: "Data 1" }, { text: "Data 2" }] },
        { cells: [{ text: "Data 3" }, { text: "Data 4" }] },
    ];
    const caption = { title: "Caption Title", desc: "Test Caption" };

    it("renders without crashing", () => {
        render(
            <StaticTable
                headerRow={{ cells: headerCells }}
                dataRows={dataRows}
            />,
        );
    });

    it("renders the correct number of header cells", () => {
        render(
            <StaticTable
                headerRow={{ cells: headerCells }}
                dataRows={dataRows}
            />,
        );
        const items = screen.getAllByRole("columnheader");
        expect(items).toHaveLength(headerCells.length);
    });

    it("renders the correct header cells", () => {
        render(
            <StaticTable
                headerRow={{ cells: headerCells }}
                dataRows={dataRows}
            />,
        );
        headerCells.forEach(headerCell => {
            expect(screen.getByText(headerCell.text)).toBeInTheDocument();
        });
    });

    it("renders the correct number of data rows", () => {
        render(
            <StaticTable
                headerRow={{ cells: headerCells }}
                dataRows={dataRows}
            />,
        );
        const items = screen.getAllByRole("row");
        // Subtract 1 for the header row
        expect(items).toHaveLength(dataRows.length + 1);
    });

    it("renders the correct data cells", () => {
        render(
            <StaticTable
                headerRow={{ cells: headerCells }}
                dataRows={dataRows}
            />,
        );
        dataRows.forEach(dataRow => {
            dataRow.cells.forEach(dataCell => {
                expect(screen.getByText(dataCell.text)).toBeInTheDocument();
            });
        });
    });

    it("renders the caption correctly", () => {
        render(
            <StaticTable
                headerRow={{ cells: headerCells }}
                dataRows={dataRows}
                caption={caption}
            />,
        );
        expect(screen.getByText(caption.desc)).toBeInTheDocument();
    });
});
