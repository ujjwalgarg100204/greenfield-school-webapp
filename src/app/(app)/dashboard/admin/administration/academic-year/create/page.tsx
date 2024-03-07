import NewAcademicYearForm from "./_components/NewAcademicYearForm";

const AcademicYearCreatePage = () => {
    return (
        <div className="space-y-4 pt-4">
            <h2 className="text-lg sm:text-[1.5rem]">
                Create a new Academic Year
            </h2>
            <NewAcademicYearForm />
        </div>
    );
};

export default AcademicYearCreatePage;
