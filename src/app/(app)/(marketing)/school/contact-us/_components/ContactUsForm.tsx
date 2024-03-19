"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { type z } from "zod";
import { Button, Input, Textarea } from "~/app/next-ui";
import { ContactUsFormValidator } from "~/server/model/validator/contact-us.validator";
import { api } from "~/trpc/react";



const ContactUsFormSchema = ContactUsFormValidator.getBaseSchema();

const ContactUsForm: FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<z.infer<typeof ContactUsFormSchema>>({
        resolver: zodResolver(ContactUsFormSchema),
    });
    const { mutate, isLoading } = api.contactUsForm.newApplication.useMutation({
        onSuccess() {
            reset();
            toast.success(
                "Query submitted successfully\nWe will get back to you shortly.",
            );
        },
        onError() {
            toast.error(
                "Your query couldn't be submitted successfully\nPlease try again",
            );
        },
    });

    return (
        <form
            className="space-y-10"
            onSubmit={handleSubmit(data => mutate(data))}
        >
            <h3 className="text-2xl font-bold">Got a Query?</h3>
            <div className="space-y-10">
                <Input
                    isRequired
                    type="text"
                    radius="sm"
                    label="Name"
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Your name, ex: John Doe"
                    isInvalid={!!errors.name}
                    errorMessage={errors.name?.message}
                    {...register("name")}
                />
                <Input
                    isRequired
                    type="text"
                    radius="sm"
                    label="Phone"
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Your phone, ex: +911234567890"
                    isInvalid={!!errors.phone}
                    errorMessage={errors.phone?.message}
                    {...register("phone")}
                />
                <div>
                    <Textarea
                        isRequired
                        type="text"
                        radius="sm"
                        label="Query"
                        variant="bordered"
                        labelPlacement="outside"
                        placeholder="Your query"
                        isInvalid={!!errors.query}
                        errorMessage={errors.query?.message}
                        className="-mt-6"
                        {...register("query")}
                    />
                </div>
                <Button
                    color="primary"
                    className="w-full font-semibold"
                    type="submit"
                    radius="sm"
                    isDisabled={isLoading}
                >
                    Submit Query
                </Button>
            </div>
        </form>
    );
};

export default ContactUsForm;
