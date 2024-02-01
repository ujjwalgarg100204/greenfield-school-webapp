"use client";

import useNav from "@/src/app/_hooks/useNav";

const Academic = () => {
    const AcademicRef = useNav("Academics");
    return (
        <section ref={AcademicRef} id="academicsSection">
            <h1>Academic page is under construction</h1>
        </section>
    );
};

export default Academic;
