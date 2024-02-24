import { render, screen } from "@testing-library/react";
import DownloadablePdfCard from "./DownloadablePdfCard";
import { expect, describe, it } from "vitest";

describe("DownloadablePdfCard", () => {
    const testTitle = "Test Title";
    const testLink = "https://test.com";

    it("renders without crashing", () => {
        render(<DownloadablePdfCard title={testTitle} link={testLink} />);
    });

    it("renders the title correctly", () => {
        render(<DownloadablePdfCard title={testTitle} link={testLink} />);
        expect(screen.getByText(testTitle)).toBeInTheDocument();
    });

    it("renders the link correctly", () => {
        render(<DownloadablePdfCard title={testTitle} link={testLink} />);
        const linkElement = screen.getByRole("link");
        expect(linkElement).toHaveAttribute("href", testLink);
    });
});
