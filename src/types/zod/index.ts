//@ts-nocheck
import type { Prisma } from "@prisma/client";
import { z } from "zod";

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum([
  "ReadUncommitted",
  "ReadCommitted",
  "RepeatableRead",
  "Serializable",
]);

export const UserScalarFieldEnumSchema = z.enum([
  "id",
  "role",
  "username",
  "password",
]);

export const OtpScalarFieldEnumSchema = z.enum([
  "id",
  "mobile",
  "otp",
  "updatedAt",
  "expiresAt",
]);

export const SortOrderSchema = z.enum(["asc", "desc"]);

export const UserRolesSchema = z.enum([
  "student",
  "teacher",
  "parent",
  "admin",
]);

export type UserRolesType = `${z.infer<typeof UserRolesSchema>}`;

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  role: UserRolesSchema,
  id: z.string().cuid(),
  username: z
    .string()
    .min(6, { message: "short-input" })
    .max(16, { message: "long-input" }),
  password: z
    .string()
    .min(6, { message: "short-input" })
    .max(16, { message: "long-input" }),
});

export type User = z.infer<typeof UserSchema>;

/////////////////////////////////////////
// OTP SCHEMA
/////////////////////////////////////////

export const OtpSchema = z.object({
  id: z.string().cuid(),
  /**
   * ,
   */
  mobile: z
    .string()
    .min(10, { message: "short-input" })
    .max(10, { message: "long-input" })
    .regex(/^\d+$/, { message: "wrong-input" }),
  /**
   * ,
   */
  otp: z
    .string()
    .min(6, { message: "short-input" })
    .max(6, { message: "long-input" })
    .regex(/^\d+$/, { message: "wrong-input" }),
  updatedAt: z.coerce.date(),
  expiresAt: z.coerce.date(),
});

export type Otp = z.infer<typeof OtpSchema>;

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z
  .object({
    id: z.boolean().optional(),
    role: z.boolean().optional(),
    username: z.boolean().optional(),
    password: z.boolean().optional(),
  })
  .strict();

// OTP
//------------------------------------------------------

export const OtpSelectSchema: z.ZodType<Prisma.OtpSelect> = z
  .object({
    id: z.boolean().optional(),
    mobile: z.boolean().optional(),
    otp: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
  })
  .strict();

/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputSchema),
        z.lazy(() => UserWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputSchema),
        z.lazy(() => UserWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    role: z
      .union([
        z.lazy(() => EnumUserRolesFilterSchema),
        z.lazy(() => UserRolesSchema),
      ])
      .optional(),
    username: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    password: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      role: z.lazy(() => SortOrderSchema).optional(),
      username: z.lazy(() => SortOrderSchema).optional(),
      password: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> =
  z
    .union([
      z.object({
        id: z.string().cuid(),
        username: z
          .string()
          .min(6, { message: "short-input" })
          .max(16, { message: "long-input" }),
      }),
      z.object({
        id: z.string().cuid(),
      }),
      z.object({
        username: z
          .string()
          .min(6, { message: "short-input" })
          .max(16, { message: "long-input" }),
      }),
    ])
    .and(
      z
        .object({
          id: z.string().cuid().optional(),
          username: z
            .string()
            .min(6, { message: "short-input" })
            .max(16, { message: "long-input" })
            .optional(),
          AND: z
            .union([
              z.lazy(() => UserWhereInputSchema),
              z.lazy(() => UserWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => UserWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => UserWhereInputSchema),
              z.lazy(() => UserWhereInputSchema).array(),
            ])
            .optional(),
          role: z
            .union([
              z.lazy(() => EnumUserRolesFilterSchema),
              z.lazy(() => UserRolesSchema),
            ])
            .optional(),
          password: z
            .union([
              z.lazy(() => StringFilterSchema),
              z
                .string()
                .min(6, { message: "short-input" })
                .max(16, { message: "long-input" }),
            ])
            .optional(),
        })
        .strict(),
    );

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      role: z.lazy(() => SortOrderSchema).optional(),
      username: z.lazy(() => SortOrderSchema).optional(),
      password: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
          z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => UserScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
          z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      role: z
        .union([
          z.lazy(() => EnumUserRolesWithAggregatesFilterSchema),
          z.lazy(() => UserRolesSchema),
        ])
        .optional(),
      username: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      password: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const OtpWhereInputSchema: z.ZodType<Prisma.OtpWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => OtpWhereInputSchema),
        z.lazy(() => OtpWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => OtpWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => OtpWhereInputSchema),
        z.lazy(() => OtpWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    mobile: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    otp: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    expiresAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
  })
  .strict();

export const OtpOrderByWithRelationInputSchema: z.ZodType<Prisma.OtpOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      mobile: z.lazy(() => SortOrderSchema).optional(),
      otp: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      expiresAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const OtpWhereUniqueInputSchema: z.ZodType<
  Omit<Prisma.OtpWhereUniqueInput, "expiresAt">
> = z
  .union([
    z.object({
      id: z.string().cuid(),
      mobile: z
        .string()
        .min(10, { message: "short-input" })
        .max(10, { message: "long-input" })
        .regex(/^\d+$/, { message: "wrong-input" }),
    }),
    z.object({
      id: z.string().cuid(),
    }),
    z.object({
      mobile: z
        .string()
        .min(10, { message: "short-input" })
        .max(10, { message: "long-input" })
        .regex(/^\d+$/, { message: "wrong-input" }),
    }),
  ])
  .and(
    z
      .object({
        id: z.string().cuid().optional(),
        mobile: z
          .string()
          .min(10, { message: "short-input" })
          .max(10, { message: "long-input" })
          .regex(/^\d+$/, { message: "wrong-input" })
          .optional(),
        AND: z
          .union([
            z.lazy(() => OtpWhereInputSchema),
            z.lazy(() => OtpWhereInputSchema).array(),
          ])
          .optional(),
        OR: z
          .lazy(() => OtpWhereInputSchema)
          .array()
          .optional(),
        NOT: z
          .union([
            z.lazy(() => OtpWhereInputSchema),
            z.lazy(() => OtpWhereInputSchema).array(),
          ])
          .optional(),
        otp: z
          .union([
            z.lazy(() => StringFilterSchema),
            z
              .string()
              .min(6, { message: "short-input" })
              .max(6, { message: "long-input" })
              .regex(/^\d+$/, { message: "wrong-input" }),
          ])
          .optional(),
        updatedAt: z
          .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
          .optional(),
        // omitted: expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
      })
      .strict(),
  );

export const OtpOrderByWithAggregationInputSchema: z.ZodType<Prisma.OtpOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      mobile: z.lazy(() => SortOrderSchema).optional(),
      otp: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      expiresAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => OtpCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => OtpMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => OtpMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const OtpScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OtpScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => OtpScalarWhereWithAggregatesInputSchema),
          z.lazy(() => OtpScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => OtpScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => OtpScalarWhereWithAggregatesInputSchema),
          z.lazy(() => OtpScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      mobile: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      otp: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      expiresAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    id: z.string().cuid().optional(),
    role: z.lazy(() => UserRolesSchema),
    username: z
      .string()
      .min(6, { message: "short-input" })
      .max(16, { message: "long-input" }),
    password: z
      .string()
      .min(6, { message: "short-input" })
      .max(16, { message: "long-input" }),
  })
  .strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      role: z.lazy(() => UserRolesSchema),
      username: z
        .string()
        .min(6, { message: "short-input" })
        .max(16, { message: "long-input" }),
      password: z
        .string()
        .min(6, { message: "short-input" })
        .max(16, { message: "long-input" }),
    })
    .strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z
  .object({
    id: z
      .union([
        z.string().cuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    role: z
      .union([
        z.lazy(() => UserRolesSchema),
        z.lazy(() => EnumUserRolesFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    username: z
      .union([
        z
          .string()
          .min(6, { message: "short-input" })
          .max(16, { message: "long-input" }),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    password: z
      .union([
        z
          .string()
          .min(6, { message: "short-input" })
          .max(16, { message: "long-input" }),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      role: z
        .union([
          z.lazy(() => UserRolesSchema),
          z.lazy(() => EnumUserRolesFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      username: z
        .union([
          z
            .string()
            .min(6, { message: "short-input" })
            .max(16, { message: "long-input" }),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z
            .string()
            .min(6, { message: "short-input" })
            .max(16, { message: "long-input" }),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      role: z.lazy(() => UserRolesSchema),
      username: z
        .string()
        .min(6, { message: "short-input" })
        .max(16, { message: "long-input" }),
      password: z
        .string()
        .min(6, { message: "short-input" })
        .max(16, { message: "long-input" }),
    })
    .strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      role: z
        .union([
          z.lazy(() => UserRolesSchema),
          z.lazy(() => EnumUserRolesFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      username: z
        .union([
          z
            .string()
            .min(6, { message: "short-input" })
            .max(16, { message: "long-input" }),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z
            .string()
            .min(6, { message: "short-input" })
            .max(16, { message: "long-input" }),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      role: z
        .union([
          z.lazy(() => UserRolesSchema),
          z.lazy(() => EnumUserRolesFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      username: z
        .union([
          z
            .string()
            .min(6, { message: "short-input" })
            .max(16, { message: "long-input" }),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z
            .string()
            .min(6, { message: "short-input" })
            .max(16, { message: "long-input" }),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const OtpCreateInputSchema: z.ZodType<
  Omit<Prisma.OtpCreateInput, "expiresAt">
> = z
  .object({
    id: z.string().cuid().optional(),
    mobile: z
      .string()
      .min(10, { message: "short-input" })
      .max(10, { message: "long-input" })
      .regex(/^\d+$/, { message: "wrong-input" }),
    otp: z
      .string()
      .min(6, { message: "short-input" })
      .max(6, { message: "long-input" })
      .regex(/^\d+$/, { message: "wrong-input" }),
    updatedAt: z.coerce.date().optional(),
    // omitted: expiresAt: z.coerce.date()
  })
  .strict();

export const OtpUncheckedCreateInputSchema: z.ZodType<
  Omit<Prisma.OtpUncheckedCreateInput, "expiresAt">
> = z
  .object({
    id: z.string().cuid().optional(),
    mobile: z
      .string()
      .min(10, { message: "short-input" })
      .max(10, { message: "long-input" })
      .regex(/^\d+$/, { message: "wrong-input" }),
    otp: z
      .string()
      .min(6, { message: "short-input" })
      .max(6, { message: "long-input" })
      .regex(/^\d+$/, { message: "wrong-input" }),
    updatedAt: z.coerce.date().optional(),
    // omitted: expiresAt: z.coerce.date()
  })
  .strict();

export const OtpUpdateInputSchema: z.ZodType<
  Omit<Prisma.OtpUpdateInput, "expiresAt">
> = z
  .object({
    id: z
      .union([
        z.string().cuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    mobile: z
      .union([
        z
          .string()
          .min(10, { message: "short-input" })
          .max(10, { message: "long-input" })
          .regex(/^\d+$/, { message: "wrong-input" }),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    otp: z
      .union([
        z
          .string()
          .min(6, { message: "short-input" })
          .max(6, { message: "long-input" })
          .regex(/^\d+$/, { message: "wrong-input" }),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    // omitted: expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  })
  .strict();

export const OtpUncheckedUpdateInputSchema: z.ZodType<
  Omit<Prisma.OtpUncheckedUpdateInput, "expiresAt">
> = z
  .object({
    id: z
      .union([
        z.string().cuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    mobile: z
      .union([
        z
          .string()
          .min(10, { message: "short-input" })
          .max(10, { message: "long-input" })
          .regex(/^\d+$/, { message: "wrong-input" }),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    otp: z
      .union([
        z
          .string()
          .min(6, { message: "short-input" })
          .max(6, { message: "long-input" })
          .regex(/^\d+$/, { message: "wrong-input" }),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    // omitted: expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  })
  .strict();

export const OtpCreateManyInputSchema: z.ZodType<
  Omit<Prisma.OtpCreateManyInput, "expiresAt">
> = z
  .object({
    id: z.string().cuid().optional(),
    mobile: z
      .string()
      .min(10, { message: "short-input" })
      .max(10, { message: "long-input" })
      .regex(/^\d+$/, { message: "wrong-input" }),
    otp: z
      .string()
      .min(6, { message: "short-input" })
      .max(6, { message: "long-input" })
      .regex(/^\d+$/, { message: "wrong-input" }),
    updatedAt: z.coerce.date().optional(),
    // omitted: expiresAt: z.coerce.date()
  })
  .strict();

export const OtpUpdateManyMutationInputSchema: z.ZodType<
  Omit<Prisma.OtpUpdateManyMutationInput, "expiresAt">
> = z
  .object({
    id: z
      .union([
        z.string().cuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    mobile: z
      .union([
        z
          .string()
          .min(10, { message: "short-input" })
          .max(10, { message: "long-input" })
          .regex(/^\d+$/, { message: "wrong-input" }),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    otp: z
      .union([
        z
          .string()
          .min(6, { message: "short-input" })
          .max(6, { message: "long-input" })
          .regex(/^\d+$/, { message: "wrong-input" }),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    // omitted: expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  })
  .strict();

export const OtpUncheckedUpdateManyInputSchema: z.ZodType<
  Omit<Prisma.OtpUncheckedUpdateManyInput, "expiresAt">
> = z
  .object({
    id: z
      .union([
        z.string().cuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    mobile: z
      .union([
        z
          .string()
          .min(10, { message: "short-input" })
          .max(10, { message: "long-input" })
          .regex(/^\d+$/, { message: "wrong-input" }),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    otp: z
      .union([
        z
          .string()
          .min(6, { message: "short-input" })
          .max(6, { message: "long-input" })
          .regex(/^\d+$/, { message: "wrong-input" }),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    // omitted: expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  })
  .strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  })
  .strict();

export const EnumUserRolesFilterSchema: z.ZodType<Prisma.EnumUserRolesFilter> =
  z
    .object({
      equals: z.lazy(() => UserRolesSchema).optional(),
      in: z
        .lazy(() => UserRolesSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => UserRolesSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => UserRolesSchema),
          z.lazy(() => NestedEnumUserRolesFilterSchema),
        ])
        .optional(),
    })
    .strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      role: z.lazy(() => SortOrderSchema).optional(),
      username: z.lazy(() => SortOrderSchema).optional(),
      password: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      role: z.lazy(() => SortOrderSchema).optional(),
      username: z.lazy(() => SortOrderSchema).optional(),
      password: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      role: z.lazy(() => SortOrderSchema).optional(),
      username: z.lazy(() => SortOrderSchema).optional(),
      password: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const EnumUserRolesWithAggregatesFilterSchema: z.ZodType<Prisma.EnumUserRolesWithAggregatesFilter> =
  z
    .object({
      equals: z.lazy(() => UserRolesSchema).optional(),
      in: z
        .lazy(() => UserRolesSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => UserRolesSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => UserRolesSchema),
          z.lazy(() => NestedEnumUserRolesWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedEnumUserRolesFilterSchema).optional(),
      _max: z.lazy(() => NestedEnumUserRolesFilterSchema).optional(),
    })
    .strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z
  .object({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
      .optional(),
  })
  .strict();

export const OtpCountOrderByAggregateInputSchema: z.ZodType<Prisma.OtpCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      mobile: z.lazy(() => SortOrderSchema).optional(),
      otp: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      expiresAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const OtpMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OtpMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      mobile: z.lazy(() => SortOrderSchema).optional(),
      otp: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      expiresAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const OtpMinOrderByAggregateInputSchema: z.ZodType<Prisma.OtpMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      mobile: z.lazy(() => SortOrderSchema).optional(),
      otp: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      expiresAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> =
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.coerce.date().array().optional(),
      notIn: z.coerce.date().array().optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    })
    .strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> =
  z
    .object({
      set: z.string().optional(),
    })
    .strict();

export const EnumUserRolesFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumUserRolesFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => UserRolesSchema).optional(),
    })
    .strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> =
  z
    .object({
      set: z.coerce.date().optional(),
    })
    .strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  })
  .strict();

export const NestedEnumUserRolesFilterSchema: z.ZodType<Prisma.NestedEnumUserRolesFilter> =
  z
    .object({
      equals: z.lazy(() => UserRolesSchema).optional(),
      in: z
        .lazy(() => UserRolesSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => UserRolesSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => UserRolesSchema),
          z.lazy(() => NestedEnumUserRolesFilterSchema),
        ])
        .optional(),
    })
    .strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
  })
  .strict();

export const NestedEnumUserRolesWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumUserRolesWithAggregatesFilter> =
  z
    .object({
      equals: z.lazy(() => UserRolesSchema).optional(),
      in: z
        .lazy(() => UserRolesSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => UserRolesSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => UserRolesSchema),
          z.lazy(() => NestedEnumUserRolesWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedEnumUserRolesFilterSchema).optional(),
      _max: z.lazy(() => NestedEnumUserRolesFilterSchema).optional(),
    })
    .strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> =
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.coerce.date().array().optional(),
      notIn: z.coerce.date().array().optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
        .optional(),
    })
    .strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> =
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.coerce.date().array().optional(),
      notIn: z.coerce.date().array().optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    })
    .strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithRelationInputSchema.array(),
        UserOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> =
  z
    .object({
      select: UserSelectSchema.optional(),
      where: UserWhereInputSchema.optional(),
      orderBy: z
        .union([
          UserOrderByWithRelationInputSchema.array(),
          UserOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: UserWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()])
        .optional(),
    })
    .strict();

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithRelationInputSchema.array(),
        UserOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z
  .object({
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithRelationInputSchema.array(),
        UserOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z
  .object({
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithAggregationInputSchema.array(),
        UserOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: UserScalarFieldEnumSchema.array(),
    having: UserScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    where: UserWhereUniqueInputSchema,
  })
  .strict();

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> =
  z
    .object({
      select: UserSelectSchema.optional(),
      where: UserWhereUniqueInputSchema,
    })
    .strict();

export const OtpFindFirstArgsSchema: z.ZodType<Prisma.OtpFindFirstArgs> = z
  .object({
    select: OtpSelectSchema.optional(),
    where: OtpWhereInputSchema.optional(),
    orderBy: z
      .union([
        OtpOrderByWithRelationInputSchema.array(),
        OtpOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: OtpWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([OtpScalarFieldEnumSchema, OtpScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const OtpFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OtpFindFirstOrThrowArgs> =
  z
    .object({
      select: OtpSelectSchema.optional(),
      where: OtpWhereInputSchema.optional(),
      orderBy: z
        .union([
          OtpOrderByWithRelationInputSchema.array(),
          OtpOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: OtpWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([OtpScalarFieldEnumSchema, OtpScalarFieldEnumSchema.array()])
        .optional(),
    })
    .strict();

export const OtpFindManyArgsSchema: z.ZodType<Prisma.OtpFindManyArgs> = z
  .object({
    select: OtpSelectSchema.optional(),
    where: OtpWhereInputSchema.optional(),
    orderBy: z
      .union([
        OtpOrderByWithRelationInputSchema.array(),
        OtpOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: OtpWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([OtpScalarFieldEnumSchema, OtpScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const OtpAggregateArgsSchema: z.ZodType<Prisma.OtpAggregateArgs> = z
  .object({
    where: OtpWhereInputSchema.optional(),
    orderBy: z
      .union([
        OtpOrderByWithRelationInputSchema.array(),
        OtpOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: OtpWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const OtpGroupByArgsSchema: z.ZodType<Prisma.OtpGroupByArgs> = z
  .object({
    where: OtpWhereInputSchema.optional(),
    orderBy: z
      .union([
        OtpOrderByWithAggregationInputSchema.array(),
        OtpOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: OtpScalarFieldEnumSchema.array(),
    having: OtpScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const OtpFindUniqueArgsSchema: z.ZodType<Prisma.OtpFindUniqueArgs> = z
  .object({
    select: OtpSelectSchema.optional(),
    where: OtpWhereUniqueInputSchema,
  })
  .strict();

export const OtpFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OtpFindUniqueOrThrowArgs> =
  z
    .object({
      select: OtpSelectSchema.optional(),
      where: OtpWhereUniqueInputSchema,
    })
    .strict();

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    data: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
  })
  .strict();

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    where: UserWhereUniqueInputSchema,
    create: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
    update: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
  })
  .strict();

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z
  .object({
    data: z.union([
      UserCreateManyInputSchema,
      UserCreateManyInputSchema.array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    where: UserWhereUniqueInputSchema,
  })
  .strict();

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    data: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
    where: UserWhereUniqueInputSchema,
  })
  .strict();

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z
  .object({
    data: z.union([
      UserUpdateManyMutationInputSchema,
      UserUncheckedUpdateManyInputSchema,
    ]),
    where: UserWhereInputSchema.optional(),
  })
  .strict();

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z
  .object({
    where: UserWhereInputSchema.optional(),
  })
  .strict();

export const OtpCreateArgsSchema: z.ZodType<
  Omit<Prisma.OtpCreateArgs, "data"> & {
    data:
      | z.infer<typeof OtpCreateInputSchema>
      | z.infer<typeof OtpUncheckedCreateInputSchema>;
  }
> = z
  .object({
    select: OtpSelectSchema.optional(),
    data: z.union([OtpCreateInputSchema, OtpUncheckedCreateInputSchema]),
  })
  .strict();

export const OtpUpsertArgsSchema: z.ZodType<
  Omit<Prisma.OtpUpsertArgs, "create" | "update"> & {
    create:
      | z.infer<typeof OtpCreateInputSchema>
      | z.infer<typeof OtpUncheckedCreateInputSchema>;
    update:
      | z.infer<typeof OtpUpdateInputSchema>
      | z.infer<typeof OtpUncheckedUpdateInputSchema>;
  }
> = z
  .object({
    select: OtpSelectSchema.optional(),
    where: OtpWhereUniqueInputSchema,
    create: z.union([OtpCreateInputSchema, OtpUncheckedCreateInputSchema]),
    update: z.union([OtpUpdateInputSchema, OtpUncheckedUpdateInputSchema]),
  })
  .strict();

export const OtpCreateManyArgsSchema: z.ZodType<
  Omit<Prisma.OtpCreateManyArgs, "data"> & {
    data:
      | z.infer<typeof OtpCreateManyInputSchema>
      | z.infer<typeof OtpCreateManyInputSchema>[];
  }
> = z
  .object({
    data: z.union([OtpCreateManyInputSchema, OtpCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const OtpDeleteArgsSchema: z.ZodType<Prisma.OtpDeleteArgs> = z
  .object({
    select: OtpSelectSchema.optional(),
    where: OtpWhereUniqueInputSchema,
  })
  .strict();

export const OtpUpdateArgsSchema: z.ZodType<
  Omit<Prisma.OtpUpdateArgs, "data"> & {
    data:
      | z.infer<typeof OtpUpdateInputSchema>
      | z.infer<typeof OtpUncheckedUpdateInputSchema>;
  }
> = z
  .object({
    select: OtpSelectSchema.optional(),
    data: z.union([OtpUpdateInputSchema, OtpUncheckedUpdateInputSchema]),
    where: OtpWhereUniqueInputSchema,
  })
  .strict();

export const OtpUpdateManyArgsSchema: z.ZodType<
  Omit<Prisma.OtpUpdateManyArgs, "data"> & {
    data:
      | z.infer<typeof OtpUpdateManyMutationInputSchema>
      | z.infer<typeof OtpUncheckedUpdateManyInputSchema>;
  }
> = z
  .object({
    data: z.union([
      OtpUpdateManyMutationInputSchema,
      OtpUncheckedUpdateManyInputSchema,
    ]),
    where: OtpWhereInputSchema.optional(),
  })
  .strict();

export const OtpDeleteManyArgsSchema: z.ZodType<Prisma.OtpDeleteManyArgs> = z
  .object({
    where: OtpWhereInputSchema.optional(),
  })
  .strict();
