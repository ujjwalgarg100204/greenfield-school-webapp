"use client";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Button,
    Checkbox,
    Input,
    Select,
    SelectItem,
    Textarea,
} from "@nextui-org/react";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { type z } from "zod";
import { AdmissionApplicationValidator } from "~/server/model/validator/AdmissionApplicationValidator";
import { api } from "~/trpc/react";
import { Fragment } from "react";

const ApplicationFormSchema =
    AdmissionApplicationValidator.getApplicationFormSchema();

const AdmissionApplicationForm = () => {
    const {
        register,
        setError,
        reset,
        control,
        formState: { errors },
        handleSubmit,
    } = useForm<z.infer<typeof ApplicationFormSchema>>({
        resolver: zodResolver(ApplicationFormSchema),
        mode: "onBlur",
        reValidateMode: "onBlur",
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "siblings",
    });
    const handleAppendSibling = () => append({ name: "", grade: "1" });
    const handleRemoveLastSibling = (index: number) => remove(index);
    const { mutate, isLoading } =
        api.admissionApplication.newApplication.useMutation({
            onSuccess() {
                toast.success(
                    "🎉 Your Application was successfully submitted 🎉",
                );
                reset();
            },
            onError(err) {
                setError("root.serverError", { message: err.message });
            },
        });

    return (
        <form
            className="space-y-6"
            onSubmit={handleSubmit(data => mutate(data))}
        >
            <section className="space-y-4">
                <h4 className="rounded-sm border-3 bg-green-50 py-2 pl-2 text-xl font-bold">
                    Student&apos;s Particulars
                </h4>
                <div className="grid grid-cols-1 gap-x-4 gap-y-2 px-2 pb-4 text-xl md:grid-cols-2">
                    <Select
                        variant="underlined"
                        label="Academic Year"
                        placeholder="Select academic year applying for"
                        color="primary"
                        size="lg"
                        isInvalid={errors.academicYear !== undefined}
                        errorMessage={errors.academicYear?.message}
                        isRequired
                        {...register("academicYear")}
                    >
                        <SelectItem key="2023-2024" value="2023-2024">
                            2023-2024
                        </SelectItem>
                        <SelectItem key="2024-2025" value="2024-2025">
                            2024-2025
                        </SelectItem>
                    </Select>
                    <Select
                        variant="underlined"
                        label="Grade"
                        placeholder="Select grade applying for"
                        color="primary"
                        size="lg"
                        isRequired
                        isInvalid={errors.grade !== undefined}
                        errorMessage={errors.grade?.message}
                        {...register("grade")}
                    >
                        {[
                            "PreKG",
                            "LKG",
                            "UKG",
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6",
                            "7",
                            "8",
                            "9",
                            "10",
                            "11",
                            "12",
                        ].map(grade => (
                            <SelectItem key={grade} value={grade}>
                                {grade}
                            </SelectItem>
                        ))}
                    </Select>
                    <Input
                        type="text"
                        label="Student's Name"
                        variant="underlined"
                        isInvalid={errors.studentName !== undefined}
                        errorMessage={errors.studentName?.message}
                        placeholder="Ex: John Doe"
                        className="md:col-span-2"
                        size="lg"
                        color="primary"
                        isRequired
                        {...register("studentName")}
                    />
                    <Input
                        type="text"
                        label="Student's Nationality"
                        variant="underlined"
                        isInvalid={errors.studentNationality !== undefined}
                        errorMessage={errors.studentNationality?.message}
                        placeholder="Ex: Indian"
                        size="lg"
                        color="primary"
                        isRequired
                        {...register("studentNationality")}
                    />
                    <Input
                        type="text"
                        label="Student's Community"
                        variant="underlined"
                        isInvalid={errors.studentCommunity !== undefined}
                        errorMessage={errors.studentCommunity?.message}
                        placeholder="Ex: EWS"
                        color="primary"
                        size="lg"
                        {...register("studentCommunity")}
                    />
                    <Input
                        type="text"
                        label="Student's Caste"
                        variant="underlined"
                        isInvalid={errors.studentCaste !== undefined}
                        errorMessage={errors.studentCaste?.message}
                        placeholder="Ex: Baniya"
                        color="primary"
                        size="lg"
                        {...register("studentCaste")}
                    />
                    <Input
                        type="text"
                        label="Student's Blood Group"
                        variant="underlined"
                        isInvalid={errors.studentBloodGroup !== undefined}
                        errorMessage={errors.studentBloodGroup?.message}
                        placeholder="Ex: B+"
                        color="primary"
                        size="lg"
                        isRequired
                        {...register("studentBloodGroup")}
                    />
                    <Input
                        type="text"
                        label="Student's Mother Tongue"
                        variant="underlined"
                        isInvalid={errors.studentMotherTongue !== undefined}
                        errorMessage={errors.studentMotherTongue?.message}
                        placeholder="Ex: Tamil"
                        color="primary"
                        size="lg"
                        {...register("studentMotherTongue")}
                    />
                    <Select
                        variant="underlined"
                        label="Student's Gender"
                        placeholder="Select gender"
                        color="primary"
                        size="lg"
                        isRequired
                        isInvalid={errors.studentGender !== undefined}
                        errorMessage={errors.studentGender?.message}
                        {...register("studentGender")}
                    >
                        <SelectItem key="male" value="male">
                            Male
                        </SelectItem>
                        <SelectItem key="female" value="female">
                            Female
                        </SelectItem>
                    </Select>
                    <Input
                        type="date"
                        label="Student's Date of Birth"
                        variant="underlined"
                        isInvalid={errors.studentDateOfBirth !== undefined}
                        errorMessage={errors.studentDateOfBirth?.message}
                        placeholder="Choose Date"
                        color="primary"
                        size="lg"
                        isRequired
                        {...register("studentDateOfBirth")}
                    />
                    <Input
                        type="text"
                        label="Student's Place of Birth"
                        variant="underlined"
                        isInvalid={errors.studentPlaceOfBirth !== undefined}
                        errorMessage={errors.studentPlaceOfBirth?.message}
                        placeholder="Ex: Coimbatore, Tamil Nadu"
                        size="lg"
                        isRequired
                        {...register("studentPlaceOfBirth")}
                    />
                    <Input
                        type="text"
                        label="Mobile Number for Communication"
                        variant="underlined"
                        isInvalid={errors.mobileNumComm !== undefined}
                        errorMessage={errors.mobileNumComm?.message}
                        placeholder="Ex: +91 xxxxxxxxxx"
                        color="primary"
                        size="lg"
                        isRequired
                        {...register("mobileNumComm")}
                    />
                    <Input
                        type="text"
                        label="Student's Aadhar Card"
                        variant="underlined"
                        isInvalid={errors.studentAadharNumber !== undefined}
                        errorMessage={errors.studentAadharNumber?.message}
                        placeholder="Ex: xxxxxxxxxxxx"
                        color="primary"
                        size="lg"
                        {...register("studentAadharNumber")}
                    />
                    <Textarea
                        type="text"
                        minRows={1}
                        label="Current Address"
                        variant="underlined"
                        isInvalid={errors.address !== undefined}
                        errorMessage={errors.address?.message}
                        placeholder="EX: No. 123, ABC Street, Coimbatore, Chennai, Tamil Nadu, 600001, India"
                        size="lg"
                        className="md:col-span-2"
                        classNames={{ label: "pb-2" }}
                        color="primary"
                        isRequired
                        {...register("address")}
                    />
                </div>
            </section>
            <section className="space-y-4">
                <h3 className="rounded-sm border-3 bg-green-50 py-2 pl-2 text-xl font-bold">
                    Sibling Information
                </h3>
                <div className="grid grid-cols-1 gap-x-4 gap-y-4 px-2 pb-4 text-xl md:grid-cols-2">
                    <Button
                        className="col-span-2"
                        color="primary"
                        startContent={<FaPlus />}
                        onClick={handleAppendSibling}
                    >
                        Add Sibling
                    </Button>
                    {fields.map((field, index) => (
                        <Fragment key={field.id}>
                            <Input
                                type="text"
                                label="Sibling's Name"
                                variant="underlined"
                                isInvalid={
                                    errors?.siblings?.[index]?.name !==
                                    undefined
                                }
                                errorMessage={
                                    errors?.siblings?.[index]?.name?.message
                                }
                                placeholder="Ex: John Doe"
                                size="lg"
                                color="primary"
                                className="col-span-2 md:col-span-1"
                                isRequired
                                {...register(`siblings.${index}.name`)}
                            />
                            <Select
                                variant="underlined"
                                label="Sibling's Grade"
                                placeholder="Select grade"
                                className="col-span-2 md:col-span-1"
                                color="primary"
                                size="lg"
                                isRequired
                                isInvalid={
                                    errors?.siblings?.[index]?.grade !==
                                    undefined
                                }
                                errorMessage={
                                    errors?.siblings?.[index]?.grade?.message
                                }
                                {...register(`siblings.${index}.grade`)}
                            >
                                {[
                                    "PreKG",
                                    "LKG",
                                    "UKG",
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8",
                                    "9",
                                    "10",
                                    "11",
                                    "12",
                                ].map(grade => (
                                    <SelectItem key={grade} value={grade}>
                                        {grade}
                                    </SelectItem>
                                ))}
                            </Select>
                            <Button
                                className="col-span-2 mx-auto w-fit"
                                color="primary"
                                startContent={<FaMinus />}
                                onClick={handleRemoveLastSibling.bind(
                                    null,
                                    index,
                                )}
                            >
                                Remove Sibling
                            </Button>
                        </Fragment>
                    ))}
                </div>
            </section>
            <section className="space-y-4">
                <h3 className="rounded-sm border-3 bg-green-50 py-2 pl-2 text-xl font-bold">
                    Parent&apos;s Particulars
                </h3>
                <div className="grid grid-cols-1 gap-x-4 gap-y-2 px-2 pb-4 text-xl md:grid-cols-2">
                    <h4 className="text-left font-semibold md:col-span-2">
                        Father&apos;s Details
                    </h4>
                    <Input
                        type="text"
                        label="Father's Name"
                        variant="underlined"
                        isInvalid={errors.fatherName !== undefined}
                        errorMessage={errors.fatherName?.message}
                        placeholder="Ex: John Doe"
                        className="md:col-span-2"
                        size="lg"
                        color="primary"
                        isRequired
                        {...register("fatherName")}
                    />
                    <Input
                        type="text"
                        label="Father's Profession"
                        variant="underlined"
                        isInvalid={errors.fatherProfession !== undefined}
                        errorMessage={errors.fatherProfession?.message}
                        placeholder="Ex: Engineer"
                        size="lg"
                        color="primary"
                        isRequired
                        {...register("fatherProfession")}
                    />
                    <Input
                        type="text"
                        label="Father's Mobile Number"
                        variant="underlined"
                        isInvalid={errors.fatherMobileNumber !== undefined}
                        errorMessage={errors.fatherMobileNumber?.message}
                        placeholder="Ex: +91 xxxxxxxxxx"
                        color="primary"
                        size="lg"
                        {...register("fatherMobileNumber")}
                    />
                    <Input
                        type="text"
                        label="Father's Aadhar Number"
                        variant="underlined"
                        isInvalid={errors.fatherAadharNumber !== undefined}
                        errorMessage={errors.fatherAadharNumber?.message}
                        placeholder="Ex: xxxxxxxxxxxx"
                        color="primary"
                        size="lg"
                        {...register("fatherAadharNumber")}
                    />
                    <Input
                        type="text"
                        label="Father's Email ID"
                        variant="underlined"
                        isInvalid={errors.fatherEmailId !== undefined}
                        errorMessage={errors.fatherEmailId?.message}
                        placeholder="Ex: johndoe@gmail.com"
                        color="primary"
                        size="lg"
                        {...register("fatherEmailId")}
                    />
                    <h4 className="pt-4 text-xl font-semibold md:col-span-2">
                        Mother&apos;s Details
                    </h4>
                    <Input
                        type="text"
                        label="Mother's Name"
                        variant="underlined"
                        isInvalid={errors.motherName !== undefined}
                        errorMessage={errors.motherName?.message}
                        placeholder="Ex: John Doe"
                        className="md:col-span-2"
                        size="lg"
                        color="primary"
                        isRequired
                        {...register("motherName")}
                    />
                    <Input
                        type="text"
                        label="Mother's Profession"
                        variant="underlined"
                        isInvalid={errors.motherProfession !== undefined}
                        errorMessage={errors.motherProfession?.message}
                        placeholder="Ex: Engineer"
                        size="lg"
                        color="primary"
                        isRequired
                        {...register("motherProfession")}
                    />
                    <Input
                        type="text"
                        label="Mother's Mobile Number"
                        variant="underlined"
                        isInvalid={errors.motherMobileNumber !== undefined}
                        errorMessage={errors.motherMobileNumber?.message}
                        placeholder="Ex: +91 xxxxxxxxxx"
                        color="primary"
                        size="lg"
                        {...register("motherMobileNumber")}
                    />
                    <Input
                        type="text"
                        label="Mother's Aadhar Number"
                        variant="underlined"
                        isInvalid={errors.motherAadharNumber !== undefined}
                        errorMessage={errors.motherAadharNumber?.message}
                        placeholder="Ex: xxxxxxxxxxxx"
                        color="primary"
                        size="lg"
                        {...register("motherAadharNumber")}
                    />
                    <Input
                        type="text"
                        label="Mother's Email ID"
                        variant="underlined"
                        isInvalid={errors.motherEmailId !== undefined}
                        errorMessage={errors.motherEmailId?.message}
                        placeholder="Ex: johndoe@gmail.com"
                        color="primary"
                        size="lg"
                        {...register("motherEmailId")}
                    />
                </div>
            </section>
            <section>
                {errors?.root?.serverError && (
                    <div className="font-bolder border-2 border-danger-700 px-4 py-2 text-danger-600">
                        {errors.root.serverError.message}
                    </div>
                )}
            </section>
            <section>
                <h4 className="border-3 bg-green-50 py-2 pl-2 text-lg font-bold text-danger-500 md:text-base">
                    Declaration:
                </h4>
                <div className="flex flex-col gap-4 px-2 py-4">
                    <Checkbox color="primary" isRequired className="font-bold">
                        <span className="px-1 font-bold text-danger-500">
                            *
                        </span>{" "}
                        <span className="text-justify text-sm md:text-base">
                            I agree that all the information provided above is
                            absolutely correct to the best of my knowledge.
                        </span>
                    </Checkbox>
                    <Button
                        color="primary"
                        type="submit"
                        className="max-w-fit font-bold"
                        disabled={isLoading}
                        isDisabled={isLoading}
                    >
                        Submit My Application
                    </Button>
                </div>
            </section>
        </form>
    );
};

export default AdmissionApplicationForm;
