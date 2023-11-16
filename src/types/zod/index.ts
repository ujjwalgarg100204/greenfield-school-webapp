import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','role','username','password']);

export const GalleryFolderScalarFieldEnumSchema = z.enum(['id','name','thumbnail','createdAt','updatedAt']);

export const GalleryImageScalarFieldEnumSchema = z.enum(['id','filename','folderId','createdAt','updatedAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const UserRolesSchema = z.enum(['student','teacher','parent','admin']);

export type UserRolesType = `${z.infer<typeof UserRolesSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  role: UserRolesSchema,
  id: z.string().cuid(),
  username: z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),
  password: z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// GALLERY FOLDER SCHEMA
/////////////////////////////////////////

export const GalleryFolderSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  thumbnail: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type GalleryFolder = z.infer<typeof GalleryFolderSchema>

/////////////////////////////////////////
// GALLERY IMAGE SCHEMA
/////////////////////////////////////////

export const GalleryImageSchema = z.object({
  id: z.string().cuid(),
  filename: z.string(),
  folderId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type GalleryImage = z.infer<typeof GalleryImageSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  role: z.boolean().optional(),
  username: z.boolean().optional(),
  password: z.boolean().optional(),
}).strict()

// GALLERY FOLDER
//------------------------------------------------------

export const GalleryFolderIncludeSchema: z.ZodType<Prisma.GalleryFolderInclude> = z.object({
  images: z.union([z.boolean(),z.lazy(() => GalleryImageFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => GalleryFolderCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const GalleryFolderArgsSchema: z.ZodType<Prisma.GalleryFolderDefaultArgs> = z.object({
  select: z.lazy(() => GalleryFolderSelectSchema).optional(),
  include: z.lazy(() => GalleryFolderIncludeSchema).optional(),
}).strict();

export const GalleryFolderCountOutputTypeArgsSchema: z.ZodType<Prisma.GalleryFolderCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => GalleryFolderCountOutputTypeSelectSchema).nullish(),
}).strict();

export const GalleryFolderCountOutputTypeSelectSchema: z.ZodType<Prisma.GalleryFolderCountOutputTypeSelect> = z.object({
  images: z.boolean().optional(),
}).strict();

export const GalleryFolderSelectSchema: z.ZodType<Prisma.GalleryFolderSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  thumbnail: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  images: z.union([z.boolean(),z.lazy(() => GalleryImageFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => GalleryFolderCountOutputTypeArgsSchema)]).optional(),
}).strict()

// GALLERY IMAGE
//------------------------------------------------------

export const GalleryImageIncludeSchema: z.ZodType<Prisma.GalleryImageInclude> = z.object({
  folder: z.union([z.boolean(),z.lazy(() => GalleryFolderArgsSchema)]).optional(),
}).strict()

export const GalleryImageArgsSchema: z.ZodType<Prisma.GalleryImageDefaultArgs> = z.object({
  select: z.lazy(() => GalleryImageSelectSchema).optional(),
  include: z.lazy(() => GalleryImageIncludeSchema).optional(),
}).strict();

export const GalleryImageSelectSchema: z.ZodType<Prisma.GalleryImageSelect> = z.object({
  id: z.boolean().optional(),
  filename: z.boolean().optional(),
  folderId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  folder: z.union([z.boolean(),z.lazy(() => GalleryFolderArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumUserRolesFilterSchema),z.lazy(() => UserRolesSchema) ]).optional(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    username: z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" })
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    username: z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  username: z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }).optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  role: z.union([ z.lazy(() => EnumUserRolesFilterSchema),z.lazy(() => UserRolesSchema) ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }) ]).optional(),
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumUserRolesWithAggregatesFilterSchema),z.lazy(() => UserRolesSchema) ]).optional(),
  username: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const GalleryFolderWhereInputSchema: z.ZodType<Prisma.GalleryFolderWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GalleryFolderWhereInputSchema),z.lazy(() => GalleryFolderWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GalleryFolderWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GalleryFolderWhereInputSchema),z.lazy(() => GalleryFolderWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  thumbnail: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  images: z.lazy(() => GalleryImageListRelationFilterSchema).optional()
}).strict();

export const GalleryFolderOrderByWithRelationInputSchema: z.ZodType<Prisma.GalleryFolderOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  thumbnail: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  images: z.lazy(() => GalleryImageOrderByRelationAggregateInputSchema).optional()
}).strict();

export const GalleryFolderWhereUniqueInputSchema: z.ZodType<Prisma.GalleryFolderWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    name: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => GalleryFolderWhereInputSchema),z.lazy(() => GalleryFolderWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GalleryFolderWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GalleryFolderWhereInputSchema),z.lazy(() => GalleryFolderWhereInputSchema).array() ]).optional(),
  thumbnail: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  images: z.lazy(() => GalleryImageListRelationFilterSchema).optional()
}).strict());

export const GalleryFolderOrderByWithAggregationInputSchema: z.ZodType<Prisma.GalleryFolderOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  thumbnail: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => GalleryFolderCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GalleryFolderMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GalleryFolderMinOrderByAggregateInputSchema).optional()
}).strict();

export const GalleryFolderScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GalleryFolderScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => GalleryFolderScalarWhereWithAggregatesInputSchema),z.lazy(() => GalleryFolderScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => GalleryFolderScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GalleryFolderScalarWhereWithAggregatesInputSchema),z.lazy(() => GalleryFolderScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  thumbnail: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const GalleryImageWhereInputSchema: z.ZodType<Prisma.GalleryImageWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GalleryImageWhereInputSchema),z.lazy(() => GalleryImageWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GalleryImageWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GalleryImageWhereInputSchema),z.lazy(() => GalleryImageWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  filename: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  folderId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  folder: z.union([ z.lazy(() => GalleryFolderRelationFilterSchema),z.lazy(() => GalleryFolderWhereInputSchema) ]).optional(),
}).strict();

export const GalleryImageOrderByWithRelationInputSchema: z.ZodType<Prisma.GalleryImageOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  folderId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  folder: z.lazy(() => GalleryFolderOrderByWithRelationInputSchema).optional()
}).strict();

export const GalleryImageWhereUniqueInputSchema: z.ZodType<Prisma.GalleryImageWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    filename_folderId: z.lazy(() => GalleryImageFilenameFolderIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    filename_folderId: z.lazy(() => GalleryImageFilenameFolderIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  filename_folderId: z.lazy(() => GalleryImageFilenameFolderIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => GalleryImageWhereInputSchema),z.lazy(() => GalleryImageWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GalleryImageWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GalleryImageWhereInputSchema),z.lazy(() => GalleryImageWhereInputSchema).array() ]).optional(),
  filename: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  folderId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  folder: z.union([ z.lazy(() => GalleryFolderRelationFilterSchema),z.lazy(() => GalleryFolderWhereInputSchema) ]).optional(),
}).strict());

export const GalleryImageOrderByWithAggregationInputSchema: z.ZodType<Prisma.GalleryImageOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  folderId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => GalleryImageCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GalleryImageMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GalleryImageMinOrderByAggregateInputSchema).optional()
}).strict();

export const GalleryImageScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GalleryImageScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => GalleryImageScalarWhereWithAggregatesInputSchema),z.lazy(() => GalleryImageScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => GalleryImageScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GalleryImageScalarWhereWithAggregatesInputSchema),z.lazy(() => GalleryImageScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  filename: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  folderId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  role: z.lazy(() => UserRolesSchema),
  username: z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),
  password: z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" })
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  role: z.lazy(() => UserRolesSchema),
  username: z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),
  password: z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" })
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRolesSchema),z.lazy(() => EnumUserRolesFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRolesSchema),z.lazy(() => EnumUserRolesFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  role: z.lazy(() => UserRolesSchema),
  username: z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),
  password: z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" })
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRolesSchema),z.lazy(() => EnumUserRolesFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRolesSchema),z.lazy(() => EnumUserRolesFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GalleryFolderCreateInputSchema: z.ZodType<Prisma.GalleryFolderCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  thumbnail: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  images: z.lazy(() => GalleryImageCreateNestedManyWithoutFolderInputSchema).optional()
}).strict();

export const GalleryFolderUncheckedCreateInputSchema: z.ZodType<Prisma.GalleryFolderUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  thumbnail: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  images: z.lazy(() => GalleryImageUncheckedCreateNestedManyWithoutFolderInputSchema).optional()
}).strict();

export const GalleryFolderUpdateInputSchema: z.ZodType<Prisma.GalleryFolderUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thumbnail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.lazy(() => GalleryImageUpdateManyWithoutFolderNestedInputSchema).optional()
}).strict();

export const GalleryFolderUncheckedUpdateInputSchema: z.ZodType<Prisma.GalleryFolderUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thumbnail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.lazy(() => GalleryImageUncheckedUpdateManyWithoutFolderNestedInputSchema).optional()
}).strict();

export const GalleryFolderCreateManyInputSchema: z.ZodType<Prisma.GalleryFolderCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  thumbnail: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const GalleryFolderUpdateManyMutationInputSchema: z.ZodType<Prisma.GalleryFolderUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thumbnail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GalleryFolderUncheckedUpdateManyInputSchema: z.ZodType<Prisma.GalleryFolderUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thumbnail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GalleryImageCreateInputSchema: z.ZodType<Prisma.GalleryImageCreateInput> = z.object({
  id: z.string().cuid().optional(),
  filename: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  folder: z.lazy(() => GalleryFolderCreateNestedOneWithoutImagesInputSchema)
}).strict();

export const GalleryImageUncheckedCreateInputSchema: z.ZodType<Prisma.GalleryImageUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  filename: z.string(),
  folderId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const GalleryImageUpdateInputSchema: z.ZodType<Prisma.GalleryImageUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  folder: z.lazy(() => GalleryFolderUpdateOneRequiredWithoutImagesNestedInputSchema).optional()
}).strict();

export const GalleryImageUncheckedUpdateInputSchema: z.ZodType<Prisma.GalleryImageUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  folderId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GalleryImageCreateManyInputSchema: z.ZodType<Prisma.GalleryImageCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  filename: z.string(),
  folderId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const GalleryImageUpdateManyMutationInputSchema: z.ZodType<Prisma.GalleryImageUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GalleryImageUncheckedUpdateManyInputSchema: z.ZodType<Prisma.GalleryImageUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  folderId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const EnumUserRolesFilterSchema: z.ZodType<Prisma.EnumUserRolesFilter> = z.object({
  equals: z.lazy(() => UserRolesSchema).optional(),
  in: z.lazy(() => UserRolesSchema).array().optional(),
  notIn: z.lazy(() => UserRolesSchema).array().optional(),
  not: z.union([ z.lazy(() => UserRolesSchema),z.lazy(() => NestedEnumUserRolesFilterSchema) ]).optional(),
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const EnumUserRolesWithAggregatesFilterSchema: z.ZodType<Prisma.EnumUserRolesWithAggregatesFilter> = z.object({
  equals: z.lazy(() => UserRolesSchema).optional(),
  in: z.lazy(() => UserRolesSchema).array().optional(),
  notIn: z.lazy(() => UserRolesSchema).array().optional(),
  not: z.union([ z.lazy(() => UserRolesSchema),z.lazy(() => NestedEnumUserRolesWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumUserRolesFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumUserRolesFilterSchema).optional()
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const GalleryImageListRelationFilterSchema: z.ZodType<Prisma.GalleryImageListRelationFilter> = z.object({
  every: z.lazy(() => GalleryImageWhereInputSchema).optional(),
  some: z.lazy(() => GalleryImageWhereInputSchema).optional(),
  none: z.lazy(() => GalleryImageWhereInputSchema).optional()
}).strict();

export const GalleryImageOrderByRelationAggregateInputSchema: z.ZodType<Prisma.GalleryImageOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GalleryFolderCountOrderByAggregateInputSchema: z.ZodType<Prisma.GalleryFolderCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  thumbnail: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GalleryFolderMaxOrderByAggregateInputSchema: z.ZodType<Prisma.GalleryFolderMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  thumbnail: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GalleryFolderMinOrderByAggregateInputSchema: z.ZodType<Prisma.GalleryFolderMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  thumbnail: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const GalleryFolderRelationFilterSchema: z.ZodType<Prisma.GalleryFolderRelationFilter> = z.object({
  is: z.lazy(() => GalleryFolderWhereInputSchema).optional(),
  isNot: z.lazy(() => GalleryFolderWhereInputSchema).optional()
}).strict();

export const GalleryImageFilenameFolderIdCompoundUniqueInputSchema: z.ZodType<Prisma.GalleryImageFilenameFolderIdCompoundUniqueInput> = z.object({
  filename: z.string(),
  folderId: z.string()
}).strict();

export const GalleryImageCountOrderByAggregateInputSchema: z.ZodType<Prisma.GalleryImageCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  folderId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GalleryImageMaxOrderByAggregateInputSchema: z.ZodType<Prisma.GalleryImageMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  folderId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GalleryImageMinOrderByAggregateInputSchema: z.ZodType<Prisma.GalleryImageMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  folderId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const EnumUserRolesFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumUserRolesFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => UserRolesSchema).optional()
}).strict();

export const GalleryImageCreateNestedManyWithoutFolderInputSchema: z.ZodType<Prisma.GalleryImageCreateNestedManyWithoutFolderInput> = z.object({
  create: z.union([ z.lazy(() => GalleryImageCreateWithoutFolderInputSchema),z.lazy(() => GalleryImageCreateWithoutFolderInputSchema).array(),z.lazy(() => GalleryImageUncheckedCreateWithoutFolderInputSchema),z.lazy(() => GalleryImageUncheckedCreateWithoutFolderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GalleryImageCreateOrConnectWithoutFolderInputSchema),z.lazy(() => GalleryImageCreateOrConnectWithoutFolderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GalleryImageCreateManyFolderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GalleryImageWhereUniqueInputSchema),z.lazy(() => GalleryImageWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const GalleryImageUncheckedCreateNestedManyWithoutFolderInputSchema: z.ZodType<Prisma.GalleryImageUncheckedCreateNestedManyWithoutFolderInput> = z.object({
  create: z.union([ z.lazy(() => GalleryImageCreateWithoutFolderInputSchema),z.lazy(() => GalleryImageCreateWithoutFolderInputSchema).array(),z.lazy(() => GalleryImageUncheckedCreateWithoutFolderInputSchema),z.lazy(() => GalleryImageUncheckedCreateWithoutFolderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GalleryImageCreateOrConnectWithoutFolderInputSchema),z.lazy(() => GalleryImageCreateOrConnectWithoutFolderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GalleryImageCreateManyFolderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GalleryImageWhereUniqueInputSchema),z.lazy(() => GalleryImageWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const GalleryImageUpdateManyWithoutFolderNestedInputSchema: z.ZodType<Prisma.GalleryImageUpdateManyWithoutFolderNestedInput> = z.object({
  create: z.union([ z.lazy(() => GalleryImageCreateWithoutFolderInputSchema),z.lazy(() => GalleryImageCreateWithoutFolderInputSchema).array(),z.lazy(() => GalleryImageUncheckedCreateWithoutFolderInputSchema),z.lazy(() => GalleryImageUncheckedCreateWithoutFolderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GalleryImageCreateOrConnectWithoutFolderInputSchema),z.lazy(() => GalleryImageCreateOrConnectWithoutFolderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => GalleryImageUpsertWithWhereUniqueWithoutFolderInputSchema),z.lazy(() => GalleryImageUpsertWithWhereUniqueWithoutFolderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GalleryImageCreateManyFolderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => GalleryImageWhereUniqueInputSchema),z.lazy(() => GalleryImageWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => GalleryImageWhereUniqueInputSchema),z.lazy(() => GalleryImageWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => GalleryImageWhereUniqueInputSchema),z.lazy(() => GalleryImageWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => GalleryImageWhereUniqueInputSchema),z.lazy(() => GalleryImageWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => GalleryImageUpdateWithWhereUniqueWithoutFolderInputSchema),z.lazy(() => GalleryImageUpdateWithWhereUniqueWithoutFolderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => GalleryImageUpdateManyWithWhereWithoutFolderInputSchema),z.lazy(() => GalleryImageUpdateManyWithWhereWithoutFolderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => GalleryImageScalarWhereInputSchema),z.lazy(() => GalleryImageScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const GalleryImageUncheckedUpdateManyWithoutFolderNestedInputSchema: z.ZodType<Prisma.GalleryImageUncheckedUpdateManyWithoutFolderNestedInput> = z.object({
  create: z.union([ z.lazy(() => GalleryImageCreateWithoutFolderInputSchema),z.lazy(() => GalleryImageCreateWithoutFolderInputSchema).array(),z.lazy(() => GalleryImageUncheckedCreateWithoutFolderInputSchema),z.lazy(() => GalleryImageUncheckedCreateWithoutFolderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GalleryImageCreateOrConnectWithoutFolderInputSchema),z.lazy(() => GalleryImageCreateOrConnectWithoutFolderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => GalleryImageUpsertWithWhereUniqueWithoutFolderInputSchema),z.lazy(() => GalleryImageUpsertWithWhereUniqueWithoutFolderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GalleryImageCreateManyFolderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => GalleryImageWhereUniqueInputSchema),z.lazy(() => GalleryImageWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => GalleryImageWhereUniqueInputSchema),z.lazy(() => GalleryImageWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => GalleryImageWhereUniqueInputSchema),z.lazy(() => GalleryImageWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => GalleryImageWhereUniqueInputSchema),z.lazy(() => GalleryImageWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => GalleryImageUpdateWithWhereUniqueWithoutFolderInputSchema),z.lazy(() => GalleryImageUpdateWithWhereUniqueWithoutFolderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => GalleryImageUpdateManyWithWhereWithoutFolderInputSchema),z.lazy(() => GalleryImageUpdateManyWithWhereWithoutFolderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => GalleryImageScalarWhereInputSchema),z.lazy(() => GalleryImageScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const GalleryFolderCreateNestedOneWithoutImagesInputSchema: z.ZodType<Prisma.GalleryFolderCreateNestedOneWithoutImagesInput> = z.object({
  create: z.union([ z.lazy(() => GalleryFolderCreateWithoutImagesInputSchema),z.lazy(() => GalleryFolderUncheckedCreateWithoutImagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GalleryFolderCreateOrConnectWithoutImagesInputSchema).optional(),
  connect: z.lazy(() => GalleryFolderWhereUniqueInputSchema).optional()
}).strict();

export const GalleryFolderUpdateOneRequiredWithoutImagesNestedInputSchema: z.ZodType<Prisma.GalleryFolderUpdateOneRequiredWithoutImagesNestedInput> = z.object({
  create: z.union([ z.lazy(() => GalleryFolderCreateWithoutImagesInputSchema),z.lazy(() => GalleryFolderUncheckedCreateWithoutImagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GalleryFolderCreateOrConnectWithoutImagesInputSchema).optional(),
  upsert: z.lazy(() => GalleryFolderUpsertWithoutImagesInputSchema).optional(),
  connect: z.lazy(() => GalleryFolderWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GalleryFolderUpdateToOneWithWhereWithoutImagesInputSchema),z.lazy(() => GalleryFolderUpdateWithoutImagesInputSchema),z.lazy(() => GalleryFolderUncheckedUpdateWithoutImagesInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedEnumUserRolesFilterSchema: z.ZodType<Prisma.NestedEnumUserRolesFilter> = z.object({
  equals: z.lazy(() => UserRolesSchema).optional(),
  in: z.lazy(() => UserRolesSchema).array().optional(),
  notIn: z.lazy(() => UserRolesSchema).array().optional(),
  not: z.union([ z.lazy(() => UserRolesSchema),z.lazy(() => NestedEnumUserRolesFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
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
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedEnumUserRolesWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumUserRolesWithAggregatesFilter> = z.object({
  equals: z.lazy(() => UserRolesSchema).optional(),
  in: z.lazy(() => UserRolesSchema).array().optional(),
  notIn: z.lazy(() => UserRolesSchema).array().optional(),
  not: z.union([ z.lazy(() => UserRolesSchema),z.lazy(() => NestedEnumUserRolesWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumUserRolesFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumUserRolesFilterSchema).optional()
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const GalleryImageCreateWithoutFolderInputSchema: z.ZodType<Prisma.GalleryImageCreateWithoutFolderInput> = z.object({
  id: z.string().cuid().optional(),
  filename: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const GalleryImageUncheckedCreateWithoutFolderInputSchema: z.ZodType<Prisma.GalleryImageUncheckedCreateWithoutFolderInput> = z.object({
  id: z.string().cuid().optional(),
  filename: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const GalleryImageCreateOrConnectWithoutFolderInputSchema: z.ZodType<Prisma.GalleryImageCreateOrConnectWithoutFolderInput> = z.object({
  where: z.lazy(() => GalleryImageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GalleryImageCreateWithoutFolderInputSchema),z.lazy(() => GalleryImageUncheckedCreateWithoutFolderInputSchema) ]),
}).strict();

export const GalleryImageCreateManyFolderInputEnvelopeSchema: z.ZodType<Prisma.GalleryImageCreateManyFolderInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => GalleryImageCreateManyFolderInputSchema),z.lazy(() => GalleryImageCreateManyFolderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const GalleryImageUpsertWithWhereUniqueWithoutFolderInputSchema: z.ZodType<Prisma.GalleryImageUpsertWithWhereUniqueWithoutFolderInput> = z.object({
  where: z.lazy(() => GalleryImageWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => GalleryImageUpdateWithoutFolderInputSchema),z.lazy(() => GalleryImageUncheckedUpdateWithoutFolderInputSchema) ]),
  create: z.union([ z.lazy(() => GalleryImageCreateWithoutFolderInputSchema),z.lazy(() => GalleryImageUncheckedCreateWithoutFolderInputSchema) ]),
}).strict();

export const GalleryImageUpdateWithWhereUniqueWithoutFolderInputSchema: z.ZodType<Prisma.GalleryImageUpdateWithWhereUniqueWithoutFolderInput> = z.object({
  where: z.lazy(() => GalleryImageWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => GalleryImageUpdateWithoutFolderInputSchema),z.lazy(() => GalleryImageUncheckedUpdateWithoutFolderInputSchema) ]),
}).strict();

export const GalleryImageUpdateManyWithWhereWithoutFolderInputSchema: z.ZodType<Prisma.GalleryImageUpdateManyWithWhereWithoutFolderInput> = z.object({
  where: z.lazy(() => GalleryImageScalarWhereInputSchema),
  data: z.union([ z.lazy(() => GalleryImageUpdateManyMutationInputSchema),z.lazy(() => GalleryImageUncheckedUpdateManyWithoutFolderInputSchema) ]),
}).strict();

export const GalleryImageScalarWhereInputSchema: z.ZodType<Prisma.GalleryImageScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GalleryImageScalarWhereInputSchema),z.lazy(() => GalleryImageScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GalleryImageScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GalleryImageScalarWhereInputSchema),z.lazy(() => GalleryImageScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  filename: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  folderId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const GalleryFolderCreateWithoutImagesInputSchema: z.ZodType<Prisma.GalleryFolderCreateWithoutImagesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  thumbnail: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const GalleryFolderUncheckedCreateWithoutImagesInputSchema: z.ZodType<Prisma.GalleryFolderUncheckedCreateWithoutImagesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  thumbnail: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const GalleryFolderCreateOrConnectWithoutImagesInputSchema: z.ZodType<Prisma.GalleryFolderCreateOrConnectWithoutImagesInput> = z.object({
  where: z.lazy(() => GalleryFolderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GalleryFolderCreateWithoutImagesInputSchema),z.lazy(() => GalleryFolderUncheckedCreateWithoutImagesInputSchema) ]),
}).strict();

export const GalleryFolderUpsertWithoutImagesInputSchema: z.ZodType<Prisma.GalleryFolderUpsertWithoutImagesInput> = z.object({
  update: z.union([ z.lazy(() => GalleryFolderUpdateWithoutImagesInputSchema),z.lazy(() => GalleryFolderUncheckedUpdateWithoutImagesInputSchema) ]),
  create: z.union([ z.lazy(() => GalleryFolderCreateWithoutImagesInputSchema),z.lazy(() => GalleryFolderUncheckedCreateWithoutImagesInputSchema) ]),
  where: z.lazy(() => GalleryFolderWhereInputSchema).optional()
}).strict();

export const GalleryFolderUpdateToOneWithWhereWithoutImagesInputSchema: z.ZodType<Prisma.GalleryFolderUpdateToOneWithWhereWithoutImagesInput> = z.object({
  where: z.lazy(() => GalleryFolderWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GalleryFolderUpdateWithoutImagesInputSchema),z.lazy(() => GalleryFolderUncheckedUpdateWithoutImagesInputSchema) ]),
}).strict();

export const GalleryFolderUpdateWithoutImagesInputSchema: z.ZodType<Prisma.GalleryFolderUpdateWithoutImagesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thumbnail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GalleryFolderUncheckedUpdateWithoutImagesInputSchema: z.ZodType<Prisma.GalleryFolderUncheckedUpdateWithoutImagesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thumbnail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GalleryImageCreateManyFolderInputSchema: z.ZodType<Prisma.GalleryImageCreateManyFolderInput> = z.object({
  id: z.string().cuid().optional(),
  filename: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const GalleryImageUpdateWithoutFolderInputSchema: z.ZodType<Prisma.GalleryImageUpdateWithoutFolderInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GalleryImageUncheckedUpdateWithoutFolderInputSchema: z.ZodType<Prisma.GalleryImageUncheckedUpdateWithoutFolderInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GalleryImageUncheckedUpdateManyWithoutFolderInputSchema: z.ZodType<Prisma.GalleryImageUncheckedUpdateManyWithoutFolderInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const GalleryFolderFindFirstArgsSchema: z.ZodType<Prisma.GalleryFolderFindFirstArgs> = z.object({
  select: GalleryFolderSelectSchema.optional(),
  include: GalleryFolderIncludeSchema.optional(),
  where: GalleryFolderWhereInputSchema.optional(),
  orderBy: z.union([ GalleryFolderOrderByWithRelationInputSchema.array(),GalleryFolderOrderByWithRelationInputSchema ]).optional(),
  cursor: GalleryFolderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GalleryFolderScalarFieldEnumSchema,GalleryFolderScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GalleryFolderFindFirstOrThrowArgsSchema: z.ZodType<Prisma.GalleryFolderFindFirstOrThrowArgs> = z.object({
  select: GalleryFolderSelectSchema.optional(),
  include: GalleryFolderIncludeSchema.optional(),
  where: GalleryFolderWhereInputSchema.optional(),
  orderBy: z.union([ GalleryFolderOrderByWithRelationInputSchema.array(),GalleryFolderOrderByWithRelationInputSchema ]).optional(),
  cursor: GalleryFolderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GalleryFolderScalarFieldEnumSchema,GalleryFolderScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GalleryFolderFindManyArgsSchema: z.ZodType<Prisma.GalleryFolderFindManyArgs> = z.object({
  select: GalleryFolderSelectSchema.optional(),
  include: GalleryFolderIncludeSchema.optional(),
  where: GalleryFolderWhereInputSchema.optional(),
  orderBy: z.union([ GalleryFolderOrderByWithRelationInputSchema.array(),GalleryFolderOrderByWithRelationInputSchema ]).optional(),
  cursor: GalleryFolderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GalleryFolderScalarFieldEnumSchema,GalleryFolderScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GalleryFolderAggregateArgsSchema: z.ZodType<Prisma.GalleryFolderAggregateArgs> = z.object({
  where: GalleryFolderWhereInputSchema.optional(),
  orderBy: z.union([ GalleryFolderOrderByWithRelationInputSchema.array(),GalleryFolderOrderByWithRelationInputSchema ]).optional(),
  cursor: GalleryFolderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const GalleryFolderGroupByArgsSchema: z.ZodType<Prisma.GalleryFolderGroupByArgs> = z.object({
  where: GalleryFolderWhereInputSchema.optional(),
  orderBy: z.union([ GalleryFolderOrderByWithAggregationInputSchema.array(),GalleryFolderOrderByWithAggregationInputSchema ]).optional(),
  by: GalleryFolderScalarFieldEnumSchema.array(),
  having: GalleryFolderScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const GalleryFolderFindUniqueArgsSchema: z.ZodType<Prisma.GalleryFolderFindUniqueArgs> = z.object({
  select: GalleryFolderSelectSchema.optional(),
  include: GalleryFolderIncludeSchema.optional(),
  where: GalleryFolderWhereUniqueInputSchema,
}).strict() ;

export const GalleryFolderFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.GalleryFolderFindUniqueOrThrowArgs> = z.object({
  select: GalleryFolderSelectSchema.optional(),
  include: GalleryFolderIncludeSchema.optional(),
  where: GalleryFolderWhereUniqueInputSchema,
}).strict() ;

export const GalleryImageFindFirstArgsSchema: z.ZodType<Prisma.GalleryImageFindFirstArgs> = z.object({
  select: GalleryImageSelectSchema.optional(),
  include: GalleryImageIncludeSchema.optional(),
  where: GalleryImageWhereInputSchema.optional(),
  orderBy: z.union([ GalleryImageOrderByWithRelationInputSchema.array(),GalleryImageOrderByWithRelationInputSchema ]).optional(),
  cursor: GalleryImageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GalleryImageScalarFieldEnumSchema,GalleryImageScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GalleryImageFindFirstOrThrowArgsSchema: z.ZodType<Prisma.GalleryImageFindFirstOrThrowArgs> = z.object({
  select: GalleryImageSelectSchema.optional(),
  include: GalleryImageIncludeSchema.optional(),
  where: GalleryImageWhereInputSchema.optional(),
  orderBy: z.union([ GalleryImageOrderByWithRelationInputSchema.array(),GalleryImageOrderByWithRelationInputSchema ]).optional(),
  cursor: GalleryImageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GalleryImageScalarFieldEnumSchema,GalleryImageScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GalleryImageFindManyArgsSchema: z.ZodType<Prisma.GalleryImageFindManyArgs> = z.object({
  select: GalleryImageSelectSchema.optional(),
  include: GalleryImageIncludeSchema.optional(),
  where: GalleryImageWhereInputSchema.optional(),
  orderBy: z.union([ GalleryImageOrderByWithRelationInputSchema.array(),GalleryImageOrderByWithRelationInputSchema ]).optional(),
  cursor: GalleryImageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GalleryImageScalarFieldEnumSchema,GalleryImageScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GalleryImageAggregateArgsSchema: z.ZodType<Prisma.GalleryImageAggregateArgs> = z.object({
  where: GalleryImageWhereInputSchema.optional(),
  orderBy: z.union([ GalleryImageOrderByWithRelationInputSchema.array(),GalleryImageOrderByWithRelationInputSchema ]).optional(),
  cursor: GalleryImageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const GalleryImageGroupByArgsSchema: z.ZodType<Prisma.GalleryImageGroupByArgs> = z.object({
  where: GalleryImageWhereInputSchema.optional(),
  orderBy: z.union([ GalleryImageOrderByWithAggregationInputSchema.array(),GalleryImageOrderByWithAggregationInputSchema ]).optional(),
  by: GalleryImageScalarFieldEnumSchema.array(),
  having: GalleryImageScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const GalleryImageFindUniqueArgsSchema: z.ZodType<Prisma.GalleryImageFindUniqueArgs> = z.object({
  select: GalleryImageSelectSchema.optional(),
  include: GalleryImageIncludeSchema.optional(),
  where: GalleryImageWhereUniqueInputSchema,
}).strict() ;

export const GalleryImageFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.GalleryImageFindUniqueOrThrowArgs> = z.object({
  select: GalleryImageSelectSchema.optional(),
  include: GalleryImageIncludeSchema.optional(),
  where: GalleryImageWhereUniqueInputSchema,
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const GalleryFolderCreateArgsSchema: z.ZodType<Prisma.GalleryFolderCreateArgs> = z.object({
  select: GalleryFolderSelectSchema.optional(),
  include: GalleryFolderIncludeSchema.optional(),
  data: z.union([ GalleryFolderCreateInputSchema,GalleryFolderUncheckedCreateInputSchema ]),
}).strict() ;

export const GalleryFolderUpsertArgsSchema: z.ZodType<Prisma.GalleryFolderUpsertArgs> = z.object({
  select: GalleryFolderSelectSchema.optional(),
  include: GalleryFolderIncludeSchema.optional(),
  where: GalleryFolderWhereUniqueInputSchema,
  create: z.union([ GalleryFolderCreateInputSchema,GalleryFolderUncheckedCreateInputSchema ]),
  update: z.union([ GalleryFolderUpdateInputSchema,GalleryFolderUncheckedUpdateInputSchema ]),
}).strict() ;

export const GalleryFolderCreateManyArgsSchema: z.ZodType<Prisma.GalleryFolderCreateManyArgs> = z.object({
  data: z.union([ GalleryFolderCreateManyInputSchema,GalleryFolderCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const GalleryFolderDeleteArgsSchema: z.ZodType<Prisma.GalleryFolderDeleteArgs> = z.object({
  select: GalleryFolderSelectSchema.optional(),
  include: GalleryFolderIncludeSchema.optional(),
  where: GalleryFolderWhereUniqueInputSchema,
}).strict() ;

export const GalleryFolderUpdateArgsSchema: z.ZodType<Prisma.GalleryFolderUpdateArgs> = z.object({
  select: GalleryFolderSelectSchema.optional(),
  include: GalleryFolderIncludeSchema.optional(),
  data: z.union([ GalleryFolderUpdateInputSchema,GalleryFolderUncheckedUpdateInputSchema ]),
  where: GalleryFolderWhereUniqueInputSchema,
}).strict() ;

export const GalleryFolderUpdateManyArgsSchema: z.ZodType<Prisma.GalleryFolderUpdateManyArgs> = z.object({
  data: z.union([ GalleryFolderUpdateManyMutationInputSchema,GalleryFolderUncheckedUpdateManyInputSchema ]),
  where: GalleryFolderWhereInputSchema.optional(),
}).strict() ;

export const GalleryFolderDeleteManyArgsSchema: z.ZodType<Prisma.GalleryFolderDeleteManyArgs> = z.object({
  where: GalleryFolderWhereInputSchema.optional(),
}).strict() ;

export const GalleryImageCreateArgsSchema: z.ZodType<Prisma.GalleryImageCreateArgs> = z.object({
  select: GalleryImageSelectSchema.optional(),
  include: GalleryImageIncludeSchema.optional(),
  data: z.union([ GalleryImageCreateInputSchema,GalleryImageUncheckedCreateInputSchema ]),
}).strict() ;

export const GalleryImageUpsertArgsSchema: z.ZodType<Prisma.GalleryImageUpsertArgs> = z.object({
  select: GalleryImageSelectSchema.optional(),
  include: GalleryImageIncludeSchema.optional(),
  where: GalleryImageWhereUniqueInputSchema,
  create: z.union([ GalleryImageCreateInputSchema,GalleryImageUncheckedCreateInputSchema ]),
  update: z.union([ GalleryImageUpdateInputSchema,GalleryImageUncheckedUpdateInputSchema ]),
}).strict() ;

export const GalleryImageCreateManyArgsSchema: z.ZodType<Prisma.GalleryImageCreateManyArgs> = z.object({
  data: z.union([ GalleryImageCreateManyInputSchema,GalleryImageCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const GalleryImageDeleteArgsSchema: z.ZodType<Prisma.GalleryImageDeleteArgs> = z.object({
  select: GalleryImageSelectSchema.optional(),
  include: GalleryImageIncludeSchema.optional(),
  where: GalleryImageWhereUniqueInputSchema,
}).strict() ;

export const GalleryImageUpdateArgsSchema: z.ZodType<Prisma.GalleryImageUpdateArgs> = z.object({
  select: GalleryImageSelectSchema.optional(),
  include: GalleryImageIncludeSchema.optional(),
  data: z.union([ GalleryImageUpdateInputSchema,GalleryImageUncheckedUpdateInputSchema ]),
  where: GalleryImageWhereUniqueInputSchema,
}).strict() ;

export const GalleryImageUpdateManyArgsSchema: z.ZodType<Prisma.GalleryImageUpdateManyArgs> = z.object({
  data: z.union([ GalleryImageUpdateManyMutationInputSchema,GalleryImageUncheckedUpdateManyInputSchema ]),
  where: GalleryImageWhereInputSchema.optional(),
}).strict() ;

export const GalleryImageDeleteManyArgsSchema: z.ZodType<Prisma.GalleryImageDeleteManyArgs> = z.object({
  where: GalleryImageWhereInputSchema.optional(),
}).strict() ;