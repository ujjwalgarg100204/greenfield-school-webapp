"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type AcademicYear } from "@prisma/client";
import { useRouter } from "next/navigation";
import { type FC } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { type z } from "zod";
import { Button, Input } from "~/app/next-ui";
import { AcademicYearValidator } from "~/server/model/validator/academic-year.validator";
import { api } from "~/trpc/react";

const AcademicYearUpdateFormSchema = AcademicYearValidator.getBaseSchema();
type TAcademicYearUpdateForm = z.infer<typeof AcademicYearUpdateFormSchema>;

const AcademicYearUpdateForm: FC<{ academicYr: AcademicYear }> = ({
    academicYr,
}) => {
    const {
        setError,
        formState: { errors },
        control,
        handleSubmit,
    } = useForm<TAcademicYearUpdateForm>({
        resolver: zodResolver(AcademicYearUpdateFormSchema),
        reValidateMode: "onBlur",
        defaultValues: academicYr,
    });
    const utils = api.useUtils();
    const router = useRouter();
    const { mutate, isLoading } =
        api.academicYear.updateAcademicYear.useMutation({
            async onSuccess() {
                toast.success("🎉 Academic year successfully Updated 🎉");
                await utils.academicYear.getAll.invalidate();
                router.push("/dashboard/admin/administration/academic-year");
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
                <Controller
                    control={control}
                    name="startDate"
                    render={({
                        field: { value, ...rest },
                        fieldState: { error, invalid },
                    }) => {
                        return (
                            <Input
                                type="date"
                                label="Start Date of Academic Year"
                                variant="underlined"
                                isInvalid={invalid}
                                errorMessage={error?.message}
                                placeholder="Choose Date"
                                size="lg"
                                color="primary"
                                value={
                                    new Date(value).toISOString().split("T")[0]
                                }
                                isRequired
                                {...rest}
                            />
                        );
                    }}
                />

                <Controller
                    control={control}
                    name="endDate"
                    render={({
                        field: { value, ...rest },
                        fieldState: { error, invalid },
                    }) => {
                        return (
                            <Input
                                type="date"
                                label="End Date of Academic Year"
                                variant="underlined"
                                isInvalid={invalid}
                                errorMessage={error?.message}
                                placeholder="Choose Date"
                                size="lg"
                                color="primary"
                                value={
                                    new Date(value).toISOString().split("T")[0]
                                }
                                isRequired
                                {...rest}
                            />
                        );
                    }}
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
                {isLoading ? "Updating" : "Update"}
            </Button>
        </form>
    );
};

export default AcademicYearUpdateForm;
