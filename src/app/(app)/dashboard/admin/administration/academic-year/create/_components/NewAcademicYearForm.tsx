"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import { Button, Input } from "~/app/next-ui";
import { AcademicYearValidator } from "~/server/model/validator/academic-year.validator";
import { api } from "~/trpc/react";

const NewFormSchema = AcademicYearValidator.getBaseSchema();
type TNewFormSchema = z.infer<typeof NewFormSchema>;

const NewAcademicYearForm = () => {
    const {
        register,
        setError,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm<TNewFormSchema>({
        mode: "onBlur",
        resolver: zodResolver(NewFormSchema),
        reValidateMode: "onBlur",
    });
    const utils = api.useUtils();
    const { mutate, isLoading } = api.academicYear.newAcademicYear.useMutation({
        async onSuccess() {
            toast.success("🎉 Academic Year successfully created submitted 🎉");
            reset();
            await utils.academicYear.getAll.invalidate();
        },
        onError(err) {
            console.error(err);
            setError("root.serverError", { message: err.message });
        },
    });

    return (
        <form
            className="space-y-2"
            onSubmit={handleSubmit(data => mutate(data))}
        >
            <div className="grid grid-cols-1 gap-x-4 gap-y-2 px-2 pb-4 text-xl md:grid-cols-2">
                <Input
                    type="date"
                    label="Start Date of Academic Year"
                    variant="underlined"
                    isInvalid={errors.startDate !== undefined}
                    errorMessage={errors.startDate?.message}
                    placeholder="Choose Date"
                    size="lg"
                    color="primary"
                    isRequired
                    {...register("startDate")}
                />
                <Input
                    type="date"
                    label="End Date of Academic Year"
                    variant="underlined"
                    isInvalid={errors.endDate !== undefined}
                    errorMessage={errors.endDate?.message}
                    placeholder="Choose Date"
                    size="lg"
                    color="primary"
                    isRequired
                    {...register("endDate")}
                />
            </div>
            {errors?.root?.serverError && (
                <div className="font-bolder border-2 border-danger-700 px-4 py-2 text-danger-600">
                    {errors.root.serverError.message}
                </div>
            )}
            <Button
                color="primary"
                type="submit"
                className="font-bold"
                disabled={isLoading}
                isDisabled={isLoading}
            >
                Create
            </Button>
        </form>
    );
};

export default NewAcademicYearForm;
