"use client";

import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    type Selection,
} from "@nextui-org/react";
import { useMemo, useState, type FC } from "react";

const AcademicYearDropdown: FC = () => {
    const [selectedKeys, setSelectedKeys] = useState<Set<string | number>>(
        new Set(["2024-2025"]),
    );

    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys],
    );

    const selectionChangeHandler = (keys: Selection) => {
        if (typeof keys === "string") {
            throw new Error("Invalid selection");
        }
        setSelectedKeys(keys);
    };

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="bordered"
                    className="capitalize"
                    color="primary"
                >
                    {selectedValue}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={selectionChangeHandler}
                color="primary"
            >
                <DropdownItem key="2022-2023">2022-2023</DropdownItem>
                <DropdownItem key="2023-2024">2023-2024</DropdownItem>
                <DropdownItem key="2024-2025">2024-2025</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default AcademicYearDropdown;
