"use client";

import {
    createContext,
    useContext,
    useState,
    type Dispatch,
    type SetStateAction,
} from "react";

type TNavContext = {
    activeLinkId: string;
    setActiveLinkId: Dispatch<SetStateAction<string>>;
};
export const NavContext = createContext<TNavContext | undefined>(undefined);

type NavProviderProps = {
    children: React.ReactNode;
};
const NavProvider: React.FC<NavProviderProps> = ({ children }) => {
    const [activeLinkId, setActiveLinkId] = useState("");
    const providerValue = {
        activeLinkId,
        setActiveLinkId,
    } satisfies TNavContext;

    return (
        <NavContext.Provider value={providerValue}>
            {children}
        </NavContext.Provider>
    );
};

export default NavProvider;

export const useNavContext = () => {
    const contextValue = useContext(NavContext);
    if (!contextValue) {
        throw new Error(
            "NavProvider not found. Make sure it wraps your component tree.",
        );
    }

    return contextValue;
};
