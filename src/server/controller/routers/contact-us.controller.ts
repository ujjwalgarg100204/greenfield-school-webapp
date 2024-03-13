import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/controller/trpc";
import { ContactUsFormValidator } from "~/server/model/validator/contact-us.validator";
import {
    type ContactUsFormService,
    ContactUsFormServiceImpl,
} from "~/server/service/contact-us.service";

const contactUsSvc: ContactUsFormService = new ContactUsFormServiceImpl();

export const contactUsController = createTRPCRouter({
    newApplication: publicProcedure
        .input(ContactUsFormValidator.getBaseSchema())
        .mutation(async ({ input }) => {
            try {
                await contactUsSvc.sendEmail(
                    input.name,
                    input.query,
                    input.phone,
                );
            } catch (err) {
                throw new TRPCError({
                    message: (err as Error).message,
                    code: "INTERNAL_SERVER_ERROR",
                });
            }
        }),
});
