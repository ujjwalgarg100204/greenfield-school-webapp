"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type FC } from "react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { type z } from "zod";
import { Button, Input, Link, Radio, RadioGroup } from "~/app/next-ui";
import { USER_ROLE } from "~/server/model/User";
import { UserValidator } from "~/server/model/validator/UserValidator";

const SignInFormSchema = UserValidator.getUserSignInFormSchema();

type Props = {
    onSuccessfulSubmission: (
        data: z.infer<typeof SignInFormSchema>,
    ) => Promise<void>;
};
const SignInForm: FC<Props> = ({ onSuccessfulSubmission }) => {
    const {
        register,
        handleSubmit,
        control,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<z.infer<typeof SignInFormSchema>>({
        resolver: zodResolver(SignInFormSchema),
    });

    const successfulFormSubmissionHandler: SubmitHandler<
        z.infer<typeof SignInFormSchema>
    > = async data => {
        try {
            await onSuccessfulSubmission(data);
        } catch (err) {
            console.error(err);
            setError("root.serverError", { message: (err as Error).message });
        }
    };
    return (
        <form
            className="space-y-8"
            onSubmit={handleSubmit(successfulFormSubmissionHandler)}
        >
            <Controller
                control={control}
                name="role"
                render={({ fieldState, field: { value, onChange } }) => (
                    <RadioGroup
                        label="I am a/an"
                        color="primary"
                        classNames={{
                            wrapper:
                                "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2",
                        }}
                        isInvalid={fieldState.invalid}
                        value={value}
                        onValueChange={onChange}
                        errorMessage={fieldState.error?.message}
                    >
                        {USER_ROLE.map(role => (
                            <Radio
                                classNames={{
                                    base: "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-3 border-2 border-default data-[selected=true]:border-primary data-[selected=true]:bg-primary data-[invalid=true]:border-rose-600",
                                    label: "capitalize group-data-[selected=true]:text-white group-data-[selected=true]:font-bold",
                                    wrapper:
                                        "group-data-[selected=true]:bg-white group-data-[selected=true]:border-slate-400",
                                }}
                                key={role}
                                value={role}
                            >
                                {role.replace("_", "/")}
                            </Radio>
                        ))}
                    </RadioGroup>
                )}
            />

            <div className="flex items-center justify-center gap-4">
                <hr className="h-0.5 flex-grow rounded-full bg-default" />
                <span className="text-sm text-foreground-500">&</span>
                <hr className="h-0.5 flex-grow rounded-full bg-default" />
            </div>

            <div className="space-y-4 md:space-y-2">
                <p className="pb-2 text-foreground-500">My credentials are</p>

                <div className="space-y-9">
                    <Input
                        type="text"
                        radius="sm"
                        label="User ID"
                        variant="bordered"
                        labelPlacement="outside"
                        placeholder="Enter your user id"
                        isInvalid={errors.username !== undefined}
                        errorMessage={errors.username?.message}
                        classNames={{ label: "font-semibold" }}
                        {...register("username")}
                    />
                    <Input
                        radius="sm"
                        type="password"
                        label="Password"
                        variant="bordered"
                        labelPlacement="outside"
                        placeholder="Enter your password"
                        isInvalid={errors.password !== undefined}
                        errorMessage={errors.password?.message}
                        classNames={{ label: "font-semibold" }}
                        {...register("password")}
                    />
                </div>

                <div className="flex justify-end">
                    <Link
                        size="sm"
                        underline="always"
                        href="/login/forget-password"
                    >
                        Forget Password ?
                    </Link>
                </div>
            </div>
            {errors?.root?.serverError && (
                <div className="rounded-lg border-2 border-danger-600 px-2 py-1.5 text-danger-600">
                    {errors.root.serverError.message}
                </div>
            )}
            <Button
                type="submit"
                color="primary"
                variant="solid"
                className="w-full font-semibold"
                disabled={isSubmitting}
                isDisabled={isSubmitting}
            >
                Login
            </Button>
        </form>
    );
};

export default SignInForm;
