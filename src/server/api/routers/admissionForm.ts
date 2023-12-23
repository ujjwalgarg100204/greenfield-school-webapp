import { createTRPCRouter, publicProcedure } from "../trpc";

import { z } from "zod";

export const admissionForm = createTRPCRouter({
  submitHandler: publicProcedure
    .input(
      z.object({
        saddress: z.string(),
        saadhar: z.string(),
        
        smobilenumber: z
          .string()
          .min(10, { message: "short-input" })
          .max(10, { message: "long-input" }),
        spob: z.string(),
        sdob: z.string(),
        sgender: z.string(),
        smothertoungue: z.string(),
        sbg: z.string(),
        scaste: z.string(),
        scommunity: z.string(),
        sreligion: z.string(),
        snationality: z.string(),
        sname: z.string(),
        sclass: z.string(),
        academic_year: z.string(),
        maadhar: z.string(),
        
        memail: z.string(),
        mmobilenumber: z.string(),
        
        mothers_name: z.string(),
        faadhar: z
          .string()
          .min(12, { message: "short-input" })
          .max(12, { message: "long-input" }),
       
        fmaiil: z.string(),
        fmobilenumber: z
          .string()
          .min(10, { message: "short-input" })
          .max(10, { message: "long-input" }),
        fprofession: z.string(),
        fathers_name: z.string(),
      }),
    )
    .mutation(
      async ({
        ctx: { db },
        input: {
          academic_year,
          faadhar,
          fathers_name,
          fmaiil,
          fmobilenumber,
          fprofession,
          maadhar,
          memail,
          mmobilenumber,
          mothers_name,
          saadhar,
          saddress,
          sbg,
          sclass,
          scaste,
          scommunity,
          sdob,
          sgender,
          smobilenumber,
          smothertoungue,
          sname,
          snationality,
          spob,
          sreligion,
        },
      }) => {
        await db.admissionForm.create({
          data: {
            academic_year,
            faadhar,
            fathers_name,
            fmaiil,
            fmobilenumber,
            fprofession,
            maadhar,
            memail,
            mmobilenumber,
            mothers_name,
            saadhar,
            saddress,
            sbg,
            scaste,
            sclass,
            scommunity,
            sdob,
            sgender,
            smobilenumber,
            smothertoungue,
            sname,
            snationality,
            spob,
            sreligion,
          },
        });
      },
    ),
});
