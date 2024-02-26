import { Resend } from "resend";
import { env } from "~/env";
import { ContactUsFormValidator } from "../model/validator/ContactUsFormValidator";

export interface ContactUsFormService {
    sendEmail(name: string, query: string, phone: string): Promise<void>;
}

export class ContactUsFormServiceImpl implements ContactUsFormService {
    public async sendEmail(name: string, query: string, phone: string): Promise<void> {
        // verify all the details
        ContactUsFormValidator.getBaseSchema().parse({name, query, phone});
        
        const resend = new Resend(env.EMAIL_SECRET);
        try {
            await resend.emails.send({
                from: "onboarding@resend.dev",
                to: "campusgreenfield@gmail.com",
                subject: "Message from contact form",
                html: `<p> <strong> Greenfield School New Contact Query from the parents</strong> </p> <p><strong>Name: ${name} </strong> </p> <p><strong>Phone number: ${phone}</strong>!</p> <p><strong>Query : ${query}</strong></p>`,
            });
        } catch (err) {
            throw new Error("Something went wrong, while sending email");
        }
    }
}
