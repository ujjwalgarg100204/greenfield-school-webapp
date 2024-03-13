import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/controller/trpc";
import { ContactUsFormValidator } from "~/server/model/validator/contact-us.validator";
import {
    type ContactUsFormService,
    ContactUsFormServiceImpl,
} from "~/server/service/contact-us.service";

export const contactUsFormRouter = createTRPCRouter({
    newApplication: publicProcedure
        .input(ContactUsFormValidator.getBaseSchema())
        .mutation(async ({ input }) => {
            const contactUsService: ContactUsFormService =
                new ContactUsFormServiceImpl();
            try {
                await contactUsService.sendEmail(
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
