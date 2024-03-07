import UpdateAcademicYearGrid from "./_components/UpdateAcademicYearGrid";

const AcademicYearUpdatePage = async () => {
    return (
        <div className="space-y-4 pt-4">
            <h2 className="text-lg sm:text-[1.5rem]">
                Update an Academic Year
            </h2>
            <UpdateAcademicYearGrid />
        </div>
    );
};

export default AcademicYearUpdatePage;
