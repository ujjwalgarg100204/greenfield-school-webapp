"use client";
import { useContext, useEffect, useRef } from "react";

import { NavContext } from "@/src/app/_contexts/NavContext";
import useOnScreen from "./useOnScreen";

const useNav = (navLinkId: string) => {
    const ref = useRef(null);
    const contextValue = useContext(NavContext);

    if (!contextValue) {
        throw new Error(
            "NavProvider not found. Make sure it wraps your component tree.",
        );
    }

    const { setActiveLinkId } = contextValue;

    const isOnScreen = useOnScreen(ref);

    useEffect(() => {
        if (isOnScreen) {
            setActiveLinkId(navLinkId);
        }
    }, [isOnScreen, setActiveLinkId, navLinkId]);

    return ref;
};

export default useNav;
