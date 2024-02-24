import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import StaticList from "./StaticList";

describe("StaticList", () => {
    const listItems = ["Item 1", "Item 2", "Item 3"];

    it("renders without crashing", () => {
        render(<StaticList list={listItems} />);
    });

    it("renders the correct number of list items", () => {
        render(<StaticList list={listItems} />);
        const items = screen.getAllByRole("listitem");
        expect(items).toHaveLength(listItems.length);
    });

    it("renders the correct list items", () => {
        render(<StaticList list={listItems} />);
        listItems.forEach(item => {
            expect(screen.getByText(item)).toBeInTheDocument();
        });
    });

    it("applies the containerClassName to the ul element", () => {
        const testClassName = "test-class";
        render(
            <StaticList list={listItems} containerClassName={testClassName} />,
        );
        const ulElement = screen.getByRole("list");
        expect(ulElement).toHaveClass(testClassName);
    });

    it("applies the itemClassName to the li elements", () => {
        const testClassName = "test-class";
        render(<StaticList list={listItems} itemClassName={testClassName} />);
        const liElements = screen.getAllByRole("listitem");
        liElements.forEach(liElement => {
            expect(liElement).toHaveClass(testClassName);
        });
    });

    it("renders children correctly", () => {
        const testChild = <div>Test Child</div>;
        render(<StaticList list={listItems}>{testChild}</StaticList>);
        expect(screen.getByText("Test Child")).toBeInTheDocument();
    });
});
