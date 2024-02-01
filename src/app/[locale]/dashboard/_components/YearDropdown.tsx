"use client";

import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@nextui-org/react";

import React from "react";
import useResponsiveScreen from "@hooks/useResponsiveScreen";

export default function App() {
    const screen = useResponsiveScreen();
    const [selectedKeys, setSelectedKeys] = React.useState(
        new Set(["Acedemic Year"]),
    );

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys],
    );

    return (
        <Dropdown>
            {/* <DropdownTrigger>
        <Button variant="bordered" className="border-green-700  capitalize  ">
          {selectedValue}
        </Button>
      </DropdownTrigger> */}

            <DropdownTrigger>
                {screen === "sm" ? (
                    <Button
                        color="primary"
                        variant="bordered"
                        // isDisabled={isPending}
                        size="sm"
                        isIconOnly
                    >
                        📅
                    </Button>
                ) : (
                    <Button
                        color="primary"
                        variant="bordered"
                        className="font-semibold"
                    >
                        {selectedValue}
                    </Button>
                )}
            </DropdownTrigger>

            <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                <DropdownItem key="2023-2024">2023-2024</DropdownItem>
                <DropdownItem key="2022-2023">2022-2023</DropdownItem>
                <DropdownItem key="2021-2022">2021-2022</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

// "use client";

// import {
//     Button,
//     Dropdown,
//     DropdownItem,
//     DropdownMenu,
//     DropdownTrigger,
// } from "@nextui-org/react";

// import React from "react";

// export default function App() {
//   const [selectedKeys, setSelectedKeys] = React.useState(
//     new Set(["Academic Year"]),
//   );

//   const selectedValue = React.useMemo(
//     () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
//     [selectedKeys],
//   );

//   return (
//     <div className="lg:inline-flex">
//       <Button
//         variant="bordered"
//         className="border-green-700 p-1 text-xs capitalize md:text-lg lg:hidden"
//       >
//         📅
//       </Button>

//       <Dropdown className="hidden lg:inline-flex">
//         <DropdownTrigger>
//           <Button variant="bordered" className="border-green-700  capitalize ">
//             {selectedValue}
//           </Button>
//         </DropdownTrigger>
//         <DropdownMenu
//           aria-label="Single selection example"
//           variant="flat"
//           disallowEmptySelection
//           selectionMode="single"
//           selectedKeys={selectedKeys}
//           onSelectionChange={setSelectedKeys}
//         >
//           <DropdownItem key="2023-2024">2023-2024</DropdownItem>
//           <DropdownItem key="2022-2023">2022-2023</DropdownItem>
//           <DropdownItem key="2021-2022">2021-2022</DropdownItem>
//         </DropdownMenu>
//       </Dropdown>
//     </div>
//   );
// }

// "use client";

// import {
//     Button,
//     Dropdown,
//     DropdownItem,
//     DropdownMenu,
//     DropdownTrigger,
// } from "@nextui-org/react";

// import React from "react";

// export default function App() {
//   const [selectedKeys, setSelectedKeys] = React.useState(
//     new Set(["Academic Year"]),
//   );

//   const selectedValue = React.useMemo(
//     () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
//     [selectedKeys],
//   );

//   return (
//     <Dropdown responsive>
//       <DropdownTrigger>
//         <Button variant="bordered" className="border-green-700 capitalize">
//           {selectedValue}
//         </Button>
//       </DropdownTrigger>
//       <DropdownMenu
//         aria-label="Single selection example"
//         variant="flat"
//         disallowEmptySelection
//         selectionMode="single"
//         selectedKeys={selectedKeys}
//         onSelectionChange={setSelectedKeys}
//       >
//         <DropdownItem key="2023-2024">2023-2024</DropdownItem>
//         <DropdownItem key="2022-2023">2022-2023</DropdownItem>
//         <DropdownItem key="2021-2022">2021-2022</DropdownItem>
//       </DropdownMenu>
//     </Dropdown>
//   );
// }
