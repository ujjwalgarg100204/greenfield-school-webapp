import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHeader,
    TableHeaderCell,
    TableRow,
} from "./Table";

describe("TableCaption", () => {
    const title = "Test Title";
    const desc = "Test Description";

    it("renders without crashing", () => {
        render(
            <table>
                <TableCaption title={title} />
            </table>,
        );
    });

    it("renders the title correctly", () => {
        render(
            <table>
                <TableCaption title={title} />
            </table>,
        );
        expect(screen.getByText(title)).toBeInTheDocument();
    });

    it("renders the description correctly when provided", () => {
        render(
            <table>
                <TableCaption title={title} desc={desc} />
            </table>,
        );
        expect(screen.getByText(desc)).toBeInTheDocument();
    });

    it("does not render the description when not provided", () => {
        render(
            <table>
                <TableCaption title={title} />
            </table>,
        );
        expect(screen.queryByText(desc)).not.toBeInTheDocument();
    });

    it("applies the className to the caption element", () => {
        const testClassName = "test-class";
        render(
            <table>
                <TableCaption title={title} className={testClassName} />
            </table>,
        );
        const captionElement = screen.getByRole("caption");
        expect(captionElement).toHaveClass(testClassName);
    });
});

describe("TableRow", () => {
    const testChildren = <td>Test</td>;

    it("renders without crashing", () => {
        render(
            <table>
                <tbody>
                    <TableRow>{testChildren}</TableRow>
                </tbody>
            </table>,
        );
    });

    it("renders its children correctly", () => {
        render(
            <table>
                <tbody>
                    <TableRow>{testChildren}</TableRow>
                </tbody>
            </table>,
        );
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("applies the className to the row element", () => {
        const testClassName = "test-class";
        render(
            <table>
                <tbody>
                    <TableRow className={testClassName}>
                        {testChildren}
                    </TableRow>
                </tbody>
            </table>,
        );
        const rowElement = screen.getByRole("row");
        expect(rowElement).toHaveClass(testClassName);
    });
});

describe("TableBody", () => {
    const testChildren = (
        <tr>
            <td>Test</td>
        </tr>
    );

    it("renders without crashing", () => {
        render(
            <table>
                <TableBody>{testChildren}</TableBody>
            </table>,
        );
    });

    it("renders its children correctly", () => {
        render(
            <table>
                <TableBody>{testChildren}</TableBody>
            </table>,
        );
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("applies the className to the tbody element", () => {
        const testClassName = "test-class";
        render(
            <table>
                <TableBody className={testClassName}>{testChildren}</TableBody>
            </table>,
        );
        const bodyElement = screen.getByRole("rowgroup");
        expect(bodyElement).toHaveClass(testClassName);
    });
});

describe("TableCell", () => {
    const testChildren = "Test";

    it("renders without crashing", () => {
        render(
            <table>
                <tbody>
                    <tr>
                        <TableCell>{testChildren}</TableCell>
                    </tr>
                </tbody>
            </table>,
        );
    });

    it("renders its children correctly", () => {
        render(
            <table>
                <tbody>
                    <tr>
                        <TableCell>{testChildren}</TableCell>
                    </tr>
                </tbody>
            </table>,
        );
        expect(screen.getByText(testChildren)).toBeInTheDocument();
    });

    it("applies the className to the td element", () => {
        const testClassName = "test-class";
        render(
            <table>
                <tbody>
                    <tr>
                        <TableCell className={testClassName}>
                            {testChildren}
                        </TableCell>
                    </tr>
                </tbody>
            </table>,
        );
        const cellElement = screen.getByRole("cell");
        expect(cellElement).toHaveClass(testClassName);
    });

    it("passes rowSpan and colSpan to the td element", () => {
        const testRowSpan = 2;
        const testColSpan = 3;
        render(
            <table>
                <tbody>
                    <tr>
                        <TableCell rowSpan={testRowSpan} colSpan={testColSpan}>
                            {testChildren}
                        </TableCell>
                    </tr>
                </tbody>
            </table>,
        );
        const cellElement = screen.getByRole("cell");
        expect(cellElement).toHaveAttribute("rowspan", String(testRowSpan));
        expect(cellElement).toHaveAttribute("colspan", String(testColSpan));
    });
});

describe("TableHeaderCell", () => {
    const testChildren = "Test";

    it("renders without crashing", () => {
        render(
            <table>
                <thead>
                    <tr>
                        <TableHeaderCell>{testChildren}</TableHeaderCell>
                    </tr>
                </thead>
            </table>,
        );
    });

    it("renders its children correctly", () => {
        render(
            <table>
                <thead>
                    <tr>
                        <TableHeaderCell>{testChildren}</TableHeaderCell>
                    </tr>
                </thead>
            </table>,
        );
        expect(screen.getByText(testChildren)).toBeInTheDocument();
    });

    it("applies the className to the th element", () => {
        const testClassName = "test-class";
        render(
            <table>
                <thead>
                    <tr>
                        <TableHeaderCell className={testClassName}>
                            {testChildren}
                        </TableHeaderCell>
                    </tr>
                </thead>
            </table>,
        );
        const headerCellElement = screen.getByRole("columnheader");
        expect(headerCellElement).toHaveClass(testClassName);
    });

    it("passes rowSpan and colSpan to the th element", () => {
        const testRowSpan = 2;
        const testColSpan = 3;
        render(
            <table>
                <thead>
                    <tr>
                        <TableHeaderCell
                            rowSpan={testRowSpan}
                            colSpan={testColSpan}
                        >
                            {testChildren}
                        </TableHeaderCell>
                    </tr>
                </thead>
            </table>,
        );
        const headerCellElement = screen.getByRole("columnheader");
        expect(headerCellElement).toHaveAttribute(
            "rowspan",
            String(testRowSpan),
        );
        expect(headerCellElement).toHaveAttribute(
            "colspan",
            String(testColSpan),
        );
    });
});

describe("TableHeader", () => {
    const testChildren = (
        <tr>
            <th>Test</th>
        </tr>
    );

    it("renders without crashing", () => {
        render(
            <table>
                <TableHeader>{testChildren}</TableHeader>
            </table>,
        );
    });

    it("renders its children correctly", () => {
        render(
            <table>
                <TableHeader>{testChildren}</TableHeader>
            </table>,
        );
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("applies the className to the thead element", () => {
        const testClassName = "test-class";
        render(
            <table>
                <TableHeader className={testClassName}>
                    {testChildren}
                </TableHeader>
            </table>,
        );
        const headerElement = screen.getByRole("rowgroup");
        expect(headerElement).toHaveClass(testClassName);
    });
});

describe("Table", () => {
    const testChildren = (
        <tbody>
            <tr>
                <td>Test</td>
            </tr>
        </tbody>
    );

    it("renders without crashing", () => {
        render(<Table>{testChildren}</Table>);
    });

    it("renders its children correctly", () => {
        render(<Table>{testChildren}</Table>);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("applies the className to the table element", () => {
        const testClassName = "test-class";
        render(<Table className={testClassName}>{testChildren}</Table>);
        const tableElement = screen.getByRole("table");
        expect(tableElement).toHaveClass(testClassName);
    });
});
