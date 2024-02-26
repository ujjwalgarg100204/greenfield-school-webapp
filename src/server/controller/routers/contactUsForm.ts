import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/controller/trpc";
import { ContactUsFormValidator } from "~/server/model/validator/ContactUsFormValidator";
import {
    ContactUsFormServiceImpl,
    type ContactUsFormService,
} from "~/server/service/ContactUsFormService";

export const contactUsFormRouter = createTRPCRouter({
    newApplication: publicProcedure
        .input(ContactUsFormValidator.getBaseSchema())
        .mutation(async ({ input }) => {
            const contactUsService: ContactUsFormService =
                new ContactUsFormServiceImpl();
            try {
                await contactUsService.sendEmail(input.name, input.query, input.phone);
            } catch (err) {
                throw new TRPCError({
                    message: (err as Error).message,
                    code: "INTERNAL_SERVER_ERROR",
                });
            }
        }),
});
