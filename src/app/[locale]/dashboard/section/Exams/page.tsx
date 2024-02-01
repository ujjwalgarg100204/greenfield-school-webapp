"use client";

import useNav from "@/src/app/_hooks/useNav";

const Exams = () => {
    const ExamsRef = useNav("Exams");
    return (
        <section ref={ExamsRef} id="examsSection">
            <h1>Exam page is under construction</h1>
        </section>
    );
};

export default Exams;
