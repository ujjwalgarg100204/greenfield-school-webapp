"use client";

// Use 'next' instead of 'use' in the import statement

// NavProvider.tsx

// NavProvider.tsx

// NavProvider.tsx

import { Dispatch, SetStateAction, createContext, useState } from "react";

interface NavContextProps {
  activeLinkId: string;
  setActiveLinkId: Dispatch<SetStateAction<string>>;
}

export const NavContext = createContext<NavContextProps | undefined>(undefined);

interface NavProviderProps {
  children: React.ReactNode;
}

const NavProvider: React.FC<NavProviderProps> = ({ children }) => {
  const [activeLinkId, setActiveLinkId] = useState("");

  const providerValue: NavContextProps = {
    activeLinkId,
    setActiveLinkId,
  };

  return (
    <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
  );
};

export default NavProvider;
