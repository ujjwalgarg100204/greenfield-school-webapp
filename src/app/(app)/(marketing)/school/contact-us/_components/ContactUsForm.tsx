"use client";

import { Button, Input, Textarea } from "~/app/next-ui";

import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const ContactUsFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    phone: z.string().regex(/^(\+?91|0)?[6789]\d{9}$/, "Invalid phone number"),
    query: z.string().min(5, "Query is required"),
});

const ContactUsForm: FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<z.infer<typeof ContactUsFormSchema>>({
        resolver: zodResolver(ContactUsFormSchema),
    });

    const onSubmit: SubmitHandler<
        z.infer<typeof ContactUsFormSchema>
    > = data => {
        reset();
        console.log(data);
        toast.success(
            "Query submitted successfully\nWe will get back to you shortly.",
        );
    };

    return (
        <section className="space-y-10">
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
                    type="button"
                    radius="sm"
                    onClick={handleSubmit(onSubmit)}
                >
                    Submit Query
                </Button>
            </div>
        </section>
    );
};

export default ContactUsForm;