"use client";

import type { IPlayerProps } from "@lottiefiles/react-lottie-player";
import { Player } from "@lottiefiles/react-lottie-player";
import type { FC } from "react";

const Lottie: FC<IPlayerProps> = props => {
    return <Player {...props} />;
};

export default Lottie;
