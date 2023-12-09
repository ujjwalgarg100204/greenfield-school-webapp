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

export const GalleryFolderScalarFieldEnumSchema = z.enum(['id','name','thumbnailId','createdAt','updatedAt']);

export const GalleryImageScalarFieldEnumSchema = z.enum(['id','filename','folderId']);

export const S3UploadTransactionScalarFieldEnumSchema = z.enum(['id','s3Path','errorMessage','errorCode','createdAt','updatedAt']);

export const OtpScalarFieldEnumSchema = z.enum(['id','mobile','otp','updatedAt','expiresAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullsOrderSchema = z.enum(['first','last']);

export const UserRolesSchema = z.enum(['student','teacher','parent','admin']);

export type UserRolesType = `${z.infer<typeof UserRolesSchema>}`


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
  thumbnail: z.union([z.boolean(),z.lazy(() => GalleryImageArgsSchema)]).optional(),
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
  thumbnailId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  images: z.union([z.boolean(),z.lazy(() => GalleryImageFindManyArgsSchema)]).optional(),
  thumbnail: z.union([z.boolean(),z.lazy(() => GalleryImageArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => GalleryFolderCountOutputTypeArgsSchema)]).optional(),
}).strict()

// GALLERY IMAGE
//------------------------------------------------------

export const GalleryImageIncludeSchema: z.ZodType<Prisma.GalleryImageInclude> = z.object({
  folder: z.union([z.boolean(),z.lazy(() => GalleryFolderArgsSchema)]).optional(),
  thumbnailFor: z.union([z.boolean(),z.lazy(() => GalleryFolderArgsSchema)]).optional(),
}).strict()

export const GalleryImageArgsSchema: z.ZodType<Prisma.GalleryImageDefaultArgs> = z.object({
  select: z.lazy(() => GalleryImageSelectSchema).optional(),
  include: z.lazy(() => GalleryImageIncludeSchema).optional(),
}).strict();

export const GalleryImageSelectSchema: z.ZodType<Prisma.GalleryImageSelect> = z.object({
  id: z.boolean().optional(),
  filename: z.boolean().optional(),
  folderId: z.boolean().optional(),
  folder: z.union([z.boolean(),z.lazy(() => GalleryFolderArgsSchema)]).optional(),
  thumbnailFor: z.union([z.boolean(),z.lazy(() => GalleryFolderArgsSchema)]).optional(),
}).strict()

// S 3 UPLOAD TRANSACTION
//------------------------------------------------------

export const S3UploadTransactionSelectSchema: z.ZodType<Prisma.S3UploadTransactionSelect> = z.object({
  id: z.boolean().optional(),
  s3Path: z.boolean().optional(),
  errorMessage: z.boolean().optional(),
  errorCode: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

// OTP
//------------------------------------------------------

export const OtpSelectSchema: z.ZodType<Prisma.OtpSelect> = z.object({
  id: z.boolean().optional(),
  mobile: z.boolean().optional(),
  otp: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
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
}).strict() as z.ZodType<Prisma.UserWhereInput>;

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.UserOrderByWithRelationInput>;

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
}).strict()) as z.ZodType<Prisma.UserWhereUniqueInput>;

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.UserOrderByWithAggregationInput>;

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumUserRolesWithAggregatesFilterSchema),z.lazy(() => UserRolesSchema) ]).optional(),
  username: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict() as z.ZodType<Prisma.UserScalarWhereWithAggregatesInput>;

export const GalleryFolderWhereInputSchema: z.ZodType<Prisma.GalleryFolderWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GalleryFolderWhereInputSchema),z.lazy(() => GalleryFolderWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GalleryFolderWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GalleryFolderWhereInputSchema),z.lazy(() => GalleryFolderWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  thumbnailId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  images: z.lazy(() => GalleryImageListRelationFilterSchema).optional(),
  thumbnail: z.union([ z.lazy(() => GalleryImageNullableRelationFilterSchema),z.lazy(() => GalleryImageWhereInputSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.GalleryFolderWhereInput>;

export const GalleryFolderOrderByWithRelationInputSchema: z.ZodType<Prisma.GalleryFolderOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  thumbnailId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  images: z.lazy(() => GalleryImageOrderByRelationAggregateInputSchema).optional(),
  thumbnail: z.lazy(() => GalleryImageOrderByWithRelationInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryFolderOrderByWithRelationInput>;

export const GalleryFolderWhereUniqueInputSchema: z.ZodType<Prisma.GalleryFolderWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    name: z.string(),
    thumbnailId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
    name: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    thumbnailId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    name: z.string(),
    thumbnailId: z.string(),
  }),
  z.object({
    name: z.string(),
  }),
  z.object({
    thumbnailId: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional(),
  thumbnailId: z.string().optional(),
  AND: z.union([ z.lazy(() => GalleryFolderWhereInputSchema),z.lazy(() => GalleryFolderWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GalleryFolderWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GalleryFolderWhereInputSchema),z.lazy(() => GalleryFolderWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  images: z.lazy(() => GalleryImageListRelationFilterSchema).optional(),
  thumbnail: z.union([ z.lazy(() => GalleryImageNullableRelationFilterSchema),z.lazy(() => GalleryImageWhereInputSchema) ]).optional().nullable(),
}).strict()) as z.ZodType<Prisma.GalleryFolderWhereUniqueInput>;

export const GalleryFolderOrderByWithAggregationInputSchema: z.ZodType<Prisma.GalleryFolderOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  thumbnailId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => GalleryFolderCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GalleryFolderMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GalleryFolderMinOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryFolderOrderByWithAggregationInput>;

export const GalleryFolderScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GalleryFolderScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => GalleryFolderScalarWhereWithAggregatesInputSchema),z.lazy(() => GalleryFolderScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => GalleryFolderScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GalleryFolderScalarWhereWithAggregatesInputSchema),z.lazy(() => GalleryFolderScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  thumbnailId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict() as z.ZodType<Prisma.GalleryFolderScalarWhereWithAggregatesInput>;

export const GalleryImageWhereInputSchema: z.ZodType<Prisma.GalleryImageWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GalleryImageWhereInputSchema),z.lazy(() => GalleryImageWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GalleryImageWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GalleryImageWhereInputSchema),z.lazy(() => GalleryImageWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  filename: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  folderId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  folder: z.union([ z.lazy(() => GalleryFolderRelationFilterSchema),z.lazy(() => GalleryFolderWhereInputSchema) ]).optional(),
  thumbnailFor: z.union([ z.lazy(() => GalleryFolderNullableRelationFilterSchema),z.lazy(() => GalleryFolderWhereInputSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.GalleryImageWhereInput>;

export const GalleryImageOrderByWithRelationInputSchema: z.ZodType<Prisma.GalleryImageOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  folderId: z.lazy(() => SortOrderSchema).optional(),
  folder: z.lazy(() => GalleryFolderOrderByWithRelationInputSchema).optional(),
  thumbnailFor: z.lazy(() => GalleryFolderOrderByWithRelationInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryImageOrderByWithRelationInput>;

export const GalleryImageWhereUniqueInputSchema: z.ZodType<Prisma.GalleryImageWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => GalleryImageWhereInputSchema),z.lazy(() => GalleryImageWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GalleryImageWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GalleryImageWhereInputSchema),z.lazy(() => GalleryImageWhereInputSchema).array() ]).optional(),
  filename: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  folderId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  folder: z.union([ z.lazy(() => GalleryFolderRelationFilterSchema),z.lazy(() => GalleryFolderWhereInputSchema) ]).optional(),
  thumbnailFor: z.union([ z.lazy(() => GalleryFolderNullableRelationFilterSchema),z.lazy(() => GalleryFolderWhereInputSchema) ]).optional().nullable(),
}).strict()) as z.ZodType<Prisma.GalleryImageWhereUniqueInput>;

export const GalleryImageOrderByWithAggregationInputSchema: z.ZodType<Prisma.GalleryImageOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  folderId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => GalleryImageCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GalleryImageMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GalleryImageMinOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryImageOrderByWithAggregationInput>;

export const GalleryImageScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GalleryImageScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => GalleryImageScalarWhereWithAggregatesInputSchema),z.lazy(() => GalleryImageScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => GalleryImageScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GalleryImageScalarWhereWithAggregatesInputSchema),z.lazy(() => GalleryImageScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  filename: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  folderId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict() as z.ZodType<Prisma.GalleryImageScalarWhereWithAggregatesInput>;

export const S3UploadTransactionWhereInputSchema: z.ZodType<Prisma.S3UploadTransactionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => S3UploadTransactionWhereInputSchema),z.lazy(() => S3UploadTransactionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => S3UploadTransactionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => S3UploadTransactionWhereInputSchema),z.lazy(() => S3UploadTransactionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  s3Path: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  errorMessage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  errorCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict() as z.ZodType<Prisma.S3UploadTransactionWhereInput>;

export const S3UploadTransactionOrderByWithRelationInputSchema: z.ZodType<Prisma.S3UploadTransactionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  s3Path: z.lazy(() => SortOrderSchema).optional(),
  errorMessage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  errorCode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.S3UploadTransactionOrderByWithRelationInput>;

export const S3UploadTransactionWhereUniqueInputSchema: z.ZodType<Prisma.S3UploadTransactionWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    s3Path: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    s3Path: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  s3Path: z.string().optional(),
  AND: z.union([ z.lazy(() => S3UploadTransactionWhereInputSchema),z.lazy(() => S3UploadTransactionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => S3UploadTransactionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => S3UploadTransactionWhereInputSchema),z.lazy(() => S3UploadTransactionWhereInputSchema).array() ]).optional(),
  errorMessage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  errorCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict()) as z.ZodType<Prisma.S3UploadTransactionWhereUniqueInput>;

export const S3UploadTransactionOrderByWithAggregationInputSchema: z.ZodType<Prisma.S3UploadTransactionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  s3Path: z.lazy(() => SortOrderSchema).optional(),
  errorMessage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  errorCode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => S3UploadTransactionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => S3UploadTransactionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => S3UploadTransactionMinOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.S3UploadTransactionOrderByWithAggregationInput>;

export const S3UploadTransactionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.S3UploadTransactionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => S3UploadTransactionScalarWhereWithAggregatesInputSchema),z.lazy(() => S3UploadTransactionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => S3UploadTransactionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => S3UploadTransactionScalarWhereWithAggregatesInputSchema),z.lazy(() => S3UploadTransactionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  s3Path: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  errorMessage: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  errorCode: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict() as z.ZodType<Prisma.S3UploadTransactionScalarWhereWithAggregatesInput>;

export const OtpWhereInputSchema: z.ZodType<Prisma.OtpWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OtpWhereInputSchema),z.lazy(() => OtpWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OtpWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OtpWhereInputSchema),z.lazy(() => OtpWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mobile: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  otp: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict() as z.ZodType<Prisma.OtpWhereInput>;

export const OtpOrderByWithRelationInputSchema: z.ZodType<Prisma.OtpOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  mobile: z.lazy(() => SortOrderSchema).optional(),
  otp: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.OtpOrderByWithRelationInput>;

export const OtpWhereUniqueInputSchema: z.ZodType<Omit<Prisma.OtpWhereUniqueInput, "expiresAt">> = z.union([
  z.object({
    id: z.string().cuid(),
    mobile: z.string().min(10, { message: "short-input" }).max(10, { message: "long-input" }).regex(/^\d+$/, { message: "wrong-input" })
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    mobile: z.string().min(10, { message: "short-input" }).max(10, { message: "long-input" }).regex(/^\d+$/, { message: "wrong-input" }),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  mobile: z.string().min(10, { message: "short-input" }).max(10, { message: "long-input" }).regex(/^\d+$/, { message: "wrong-input" }).optional(),
  AND: z.union([ z.lazy(() => OtpWhereInputSchema),z.lazy(() => OtpWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OtpWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OtpWhereInputSchema),z.lazy(() => OtpWhereInputSchema).array() ]).optional(),
  otp: z.union([ z.lazy(() => StringFilterSchema),z.string().min(6, { message: "short-input" }).max(6, { message: "long-input" }).regex(/^\d+$/, { message: "wrong-input" }) ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  // omitted: expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict()) as z.ZodType<Omit<Prisma.OtpWhereUniqueInput, "expiresAt">>;

export const OtpOrderByWithAggregationInputSchema: z.ZodType<Prisma.OtpOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  mobile: z.lazy(() => SortOrderSchema).optional(),
  otp: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OtpCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OtpMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OtpMinOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.OtpOrderByWithAggregationInput>;

export const OtpScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OtpScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => OtpScalarWhereWithAggregatesInputSchema),z.lazy(() => OtpScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OtpScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OtpScalarWhereWithAggregatesInputSchema),z.lazy(() => OtpScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  mobile: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  otp: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict() as z.ZodType<Prisma.OtpScalarWhereWithAggregatesInput>;

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  role: z.lazy(() => UserRolesSchema),
  username: z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),
  password: z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" })
}).strict() as z.ZodType<Prisma.UserCreateInput>;

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  role: z.lazy(() => UserRolesSchema),
  username: z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),
  password: z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" })
}).strict() as z.ZodType<Prisma.UserUncheckedCreateInput>;

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRolesSchema),z.lazy(() => EnumUserRolesFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.UserUpdateInput>;

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRolesSchema),z.lazy(() => EnumUserRolesFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.UserUncheckedUpdateInput>;

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  role: z.lazy(() => UserRolesSchema),
  username: z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),
  password: z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" })
}).strict() as z.ZodType<Prisma.UserCreateManyInput>;

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRolesSchema),z.lazy(() => EnumUserRolesFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.UserUpdateManyMutationInput>;

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRolesSchema),z.lazy(() => EnumUserRolesFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string().min(6, { message: "short-input" }).max(16, { message: "long-input" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.UserUncheckedUpdateManyInput>;

export const GalleryFolderCreateInputSchema: z.ZodType<Prisma.GalleryFolderCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  images: z.lazy(() => GalleryImageCreateNestedManyWithoutFolderInputSchema).optional(),
  thumbnail: z.lazy(() => GalleryImageCreateNestedOneWithoutThumbnailForInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryFolderCreateInput>;

export const GalleryFolderUncheckedCreateInputSchema: z.ZodType<Prisma.GalleryFolderUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  thumbnailId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  images: z.lazy(() => GalleryImageUncheckedCreateNestedManyWithoutFolderInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryFolderUncheckedCreateInput>;

export const GalleryFolderUpdateInputSchema: z.ZodType<Prisma.GalleryFolderUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.lazy(() => GalleryImageUpdateManyWithoutFolderNestedInputSchema).optional(),
  thumbnail: z.lazy(() => GalleryImageUpdateOneWithoutThumbnailForNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryFolderUpdateInput>;

export const GalleryFolderUncheckedUpdateInputSchema: z.ZodType<Prisma.GalleryFolderUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thumbnailId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.lazy(() => GalleryImageUncheckedUpdateManyWithoutFolderNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryFolderUncheckedUpdateInput>;

export const GalleryFolderCreateManyInputSchema: z.ZodType<Prisma.GalleryFolderCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  thumbnailId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.GalleryFolderCreateManyInput>;

export const GalleryFolderUpdateManyMutationInputSchema: z.ZodType<Prisma.GalleryFolderUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.GalleryFolderUpdateManyMutationInput>;

export const GalleryFolderUncheckedUpdateManyInputSchema: z.ZodType<Prisma.GalleryFolderUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thumbnailId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.GalleryFolderUncheckedUpdateManyInput>;

export const GalleryImageCreateInputSchema: z.ZodType<Prisma.GalleryImageCreateInput> = z.object({
  id: z.string().cuid().optional(),
  filename: z.string(),
  folder: z.lazy(() => GalleryFolderCreateNestedOneWithoutImagesInputSchema),
  thumbnailFor: z.lazy(() => GalleryFolderCreateNestedOneWithoutThumbnailInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryImageCreateInput>;

export const GalleryImageUncheckedCreateInputSchema: z.ZodType<Prisma.GalleryImageUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  filename: z.string(),
  folderId: z.string(),
  thumbnailFor: z.lazy(() => GalleryFolderUncheckedCreateNestedOneWithoutThumbnailInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryImageUncheckedCreateInput>;

export const GalleryImageUpdateInputSchema: z.ZodType<Prisma.GalleryImageUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  folder: z.lazy(() => GalleryFolderUpdateOneRequiredWithoutImagesNestedInputSchema).optional(),
  thumbnailFor: z.lazy(() => GalleryFolderUpdateOneWithoutThumbnailNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryImageUpdateInput>;

export const GalleryImageUncheckedUpdateInputSchema: z.ZodType<Prisma.GalleryImageUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  folderId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thumbnailFor: z.lazy(() => GalleryFolderUncheckedUpdateOneWithoutThumbnailNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryImageUncheckedUpdateInput>;

export const GalleryImageCreateManyInputSchema: z.ZodType<Prisma.GalleryImageCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  filename: z.string(),
  folderId: z.string()
}).strict() as z.ZodType<Prisma.GalleryImageCreateManyInput>;

export const GalleryImageUpdateManyMutationInputSchema: z.ZodType<Prisma.GalleryImageUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.GalleryImageUpdateManyMutationInput>;

export const GalleryImageUncheckedUpdateManyInputSchema: z.ZodType<Prisma.GalleryImageUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  folderId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.GalleryImageUncheckedUpdateManyInput>;

export const S3UploadTransactionCreateInputSchema: z.ZodType<Prisma.S3UploadTransactionCreateInput> = z.object({
  id: z.string().cuid().optional(),
  s3Path: z.string(),
  errorMessage: z.string().optional().nullable(),
  errorCode: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.S3UploadTransactionCreateInput>;

export const S3UploadTransactionUncheckedCreateInputSchema: z.ZodType<Prisma.S3UploadTransactionUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  s3Path: z.string(),
  errorMessage: z.string().optional().nullable(),
  errorCode: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.S3UploadTransactionUncheckedCreateInput>;

export const S3UploadTransactionUpdateInputSchema: z.ZodType<Prisma.S3UploadTransactionUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  s3Path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  errorMessage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  errorCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.S3UploadTransactionUpdateInput>;

export const S3UploadTransactionUncheckedUpdateInputSchema: z.ZodType<Prisma.S3UploadTransactionUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  s3Path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  errorMessage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  errorCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.S3UploadTransactionUncheckedUpdateInput>;

export const S3UploadTransactionCreateManyInputSchema: z.ZodType<Prisma.S3UploadTransactionCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  s3Path: z.string(),
  errorMessage: z.string().optional().nullable(),
  errorCode: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.S3UploadTransactionCreateManyInput>;

export const S3UploadTransactionUpdateManyMutationInputSchema: z.ZodType<Prisma.S3UploadTransactionUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  s3Path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  errorMessage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  errorCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.S3UploadTransactionUpdateManyMutationInput>;

export const S3UploadTransactionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.S3UploadTransactionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  s3Path: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  errorMessage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  errorCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.S3UploadTransactionUncheckedUpdateManyInput>;

export const OtpCreateInputSchema: z.ZodType<Omit<Prisma.OtpCreateInput, "expiresAt">> = z.object({
  id: z.string().cuid().optional(),
  mobile: z.string().min(10, { message: "short-input" }).max(10, { message: "long-input" }).regex(/^\d+$/, { message: "wrong-input" }),
  otp: z.string().min(6, { message: "short-input" }).max(6, { message: "long-input" }).regex(/^\d+$/, { message: "wrong-input" }),
  updatedAt: z.coerce.date().optional(),
  // omitted: expiresAt: z.coerce.date()
}).strict() as z.ZodType<Omit<Prisma.OtpCreateInput, "expiresAt">>;

export const OtpUncheckedCreateInputSchema: z.ZodType<Omit<Prisma.OtpUncheckedCreateInput, "expiresAt">> = z.object({
  id: z.string().cuid().optional(),
  mobile: z.string().min(10, { message: "short-input" }).max(10, { message: "long-input" }).regex(/^\d+$/, { message: "wrong-input" }),
  otp: z.string().min(6, { message: "short-input" }).max(6, { message: "long-input" }).regex(/^\d+$/, { message: "wrong-input" }),
  updatedAt: z.coerce.date().optional(),
  // omitted: expiresAt: z.coerce.date()
}).strict() as z.ZodType<Omit<Prisma.OtpUncheckedCreateInput, "expiresAt">>;

export const OtpUpdateInputSchema: z.ZodType<Omit<Prisma.OtpUpdateInput, "expiresAt">> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mobile: z.union([ z.string().min(10, { message: "short-input" }).max(10, { message: "long-input" }).regex(/^\d+$/, { message: "wrong-input" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  otp: z.union([ z.string().min(6, { message: "short-input" }).max(6, { message: "long-input" }).regex(/^\d+$/, { message: "wrong-input" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  // omitted: expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Omit<Prisma.OtpUpdateInput, "expiresAt">>;

export const OtpUncheckedUpdateInputSchema: z.ZodType<Omit<Prisma.OtpUncheckedUpdateInput, "expiresAt">> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mobile: z.union([ z.string().min(10, { message: "short-input" }).max(10, { message: "long-input" }).regex(/^\d+$/, { message: "wrong-input" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  otp: z.union([ z.string().min(6, { message: "short-input" }).max(6, { message: "long-input" }).regex(/^\d+$/, { message: "wrong-input" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  // omitted: expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Omit<Prisma.OtpUncheckedUpdateInput, "expiresAt">>;

export const OtpCreateManyInputSchema: z.ZodType<Omit<Prisma.OtpCreateManyInput, "expiresAt">> = z.object({
  id: z.string().cuid().optional(),
  mobile: z.string().min(10, { message: "short-input" }).max(10, { message: "long-input" }).regex(/^\d+$/, { message: "wrong-input" }),
  otp: z.string().min(6, { message: "short-input" }).max(6, { message: "long-input" }).regex(/^\d+$/, { message: "wrong-input" }),
  updatedAt: z.coerce.date().optional(),
  // omitted: expiresAt: z.coerce.date()
}).strict() as z.ZodType<Omit<Prisma.OtpCreateManyInput, "expiresAt">>;

export const OtpUpdateManyMutationInputSchema: z.ZodType<Omit<Prisma.OtpUpdateManyMutationInput, "expiresAt">> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mobile: z.union([ z.string().min(10, { message: "short-input" }).max(10, { message: "long-input" }).regex(/^\d+$/, { message: "wrong-input" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  otp: z.union([ z.string().min(6, { message: "short-input" }).max(6, { message: "long-input" }).regex(/^\d+$/, { message: "wrong-input" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  // omitted: expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Omit<Prisma.OtpUpdateManyMutationInput, "expiresAt">>;

export const OtpUncheckedUpdateManyInputSchema: z.ZodType<Omit<Prisma.OtpUncheckedUpdateManyInput, "expiresAt">> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mobile: z.union([ z.string().min(10, { message: "short-input" }).max(10, { message: "long-input" }).regex(/^\d+$/, { message: "wrong-input" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  otp: z.union([ z.string().min(6, { message: "short-input" }).max(6, { message: "long-input" }).regex(/^\d+$/, { message: "wrong-input" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  // omitted: expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Omit<Prisma.OtpUncheckedUpdateManyInput, "expiresAt">>;

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
}).strict() as z.ZodType<Prisma.StringFilter>;

export const EnumUserRolesFilterSchema: z.ZodType<Prisma.EnumUserRolesFilter> = z.object({
  equals: z.lazy(() => UserRolesSchema).optional(),
  in: z.lazy(() => UserRolesSchema).array().optional(),
  notIn: z.lazy(() => UserRolesSchema).array().optional(),
  not: z.union([ z.lazy(() => UserRolesSchema),z.lazy(() => NestedEnumUserRolesFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.EnumUserRolesFilter>;

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.UserCountOrderByAggregateInput>;

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.UserMaxOrderByAggregateInput>;

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.UserMinOrderByAggregateInput>;

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
}).strict() as z.ZodType<Prisma.StringWithAggregatesFilter>;

export const EnumUserRolesWithAggregatesFilterSchema: z.ZodType<Prisma.EnumUserRolesWithAggregatesFilter> = z.object({
  equals: z.lazy(() => UserRolesSchema).optional(),
  in: z.lazy(() => UserRolesSchema).array().optional(),
  notIn: z.lazy(() => UserRolesSchema).array().optional(),
  not: z.union([ z.lazy(() => UserRolesSchema),z.lazy(() => NestedEnumUserRolesWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumUserRolesFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumUserRolesFilterSchema).optional()
}).strict() as z.ZodType<Prisma.EnumUserRolesWithAggregatesFilter>;

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.StringNullableFilter>;

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.DateTimeFilter>;

export const GalleryImageListRelationFilterSchema: z.ZodType<Prisma.GalleryImageListRelationFilter> = z.object({
  every: z.lazy(() => GalleryImageWhereInputSchema).optional(),
  some: z.lazy(() => GalleryImageWhereInputSchema).optional(),
  none: z.lazy(() => GalleryImageWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryImageListRelationFilter>;

export const GalleryImageNullableRelationFilterSchema: z.ZodType<Prisma.GalleryImageNullableRelationFilter> = z.object({
  is: z.lazy(() => GalleryImageWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => GalleryImageWhereInputSchema).optional().nullable()
}).strict() as z.ZodType<Prisma.GalleryImageNullableRelationFilter>;

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict() as z.ZodType<Prisma.SortOrderInput>;

export const GalleryImageOrderByRelationAggregateInputSchema: z.ZodType<Prisma.GalleryImageOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryImageOrderByRelationAggregateInput>;

export const GalleryFolderCountOrderByAggregateInputSchema: z.ZodType<Prisma.GalleryFolderCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  thumbnailId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryFolderCountOrderByAggregateInput>;

export const GalleryFolderMaxOrderByAggregateInputSchema: z.ZodType<Prisma.GalleryFolderMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  thumbnailId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryFolderMaxOrderByAggregateInput>;

export const GalleryFolderMinOrderByAggregateInputSchema: z.ZodType<Prisma.GalleryFolderMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  thumbnailId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryFolderMinOrderByAggregateInput>;

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict() as z.ZodType<Prisma.StringNullableWithAggregatesFilter>;

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
}).strict() as z.ZodType<Prisma.DateTimeWithAggregatesFilter>;

export const GalleryFolderRelationFilterSchema: z.ZodType<Prisma.GalleryFolderRelationFilter> = z.object({
  is: z.lazy(() => GalleryFolderWhereInputSchema).optional(),
  isNot: z.lazy(() => GalleryFolderWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryFolderRelationFilter>;

export const GalleryFolderNullableRelationFilterSchema: z.ZodType<Prisma.GalleryFolderNullableRelationFilter> = z.object({
  is: z.lazy(() => GalleryFolderWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => GalleryFolderWhereInputSchema).optional().nullable()
}).strict() as z.ZodType<Prisma.GalleryFolderNullableRelationFilter>;

export const GalleryImageCountOrderByAggregateInputSchema: z.ZodType<Prisma.GalleryImageCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  folderId: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryImageCountOrderByAggregateInput>;

export const GalleryImageMaxOrderByAggregateInputSchema: z.ZodType<Prisma.GalleryImageMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  folderId: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryImageMaxOrderByAggregateInput>;

export const GalleryImageMinOrderByAggregateInputSchema: z.ZodType<Prisma.GalleryImageMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  filename: z.lazy(() => SortOrderSchema).optional(),
  folderId: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryImageMinOrderByAggregateInput>;

export const S3UploadTransactionCountOrderByAggregateInputSchema: z.ZodType<Prisma.S3UploadTransactionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  s3Path: z.lazy(() => SortOrderSchema).optional(),
  errorMessage: z.lazy(() => SortOrderSchema).optional(),
  errorCode: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.S3UploadTransactionCountOrderByAggregateInput>;

export const S3UploadTransactionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.S3UploadTransactionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  s3Path: z.lazy(() => SortOrderSchema).optional(),
  errorMessage: z.lazy(() => SortOrderSchema).optional(),
  errorCode: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.S3UploadTransactionMaxOrderByAggregateInput>;

export const S3UploadTransactionMinOrderByAggregateInputSchema: z.ZodType<Prisma.S3UploadTransactionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  s3Path: z.lazy(() => SortOrderSchema).optional(),
  errorMessage: z.lazy(() => SortOrderSchema).optional(),
  errorCode: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.S3UploadTransactionMinOrderByAggregateInput>;

export const OtpCountOrderByAggregateInputSchema: z.ZodType<Prisma.OtpCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  mobile: z.lazy(() => SortOrderSchema).optional(),
  otp: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.OtpCountOrderByAggregateInput>;

export const OtpMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OtpMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  mobile: z.lazy(() => SortOrderSchema).optional(),
  otp: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.OtpMaxOrderByAggregateInput>;

export const OtpMinOrderByAggregateInputSchema: z.ZodType<Prisma.OtpMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  mobile: z.lazy(() => SortOrderSchema).optional(),
  otp: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.OtpMinOrderByAggregateInput>;

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict() as z.ZodType<Prisma.StringFieldUpdateOperationsInput>;

export const EnumUserRolesFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumUserRolesFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => UserRolesSchema).optional()
}).strict() as z.ZodType<Prisma.EnumUserRolesFieldUpdateOperationsInput>;

export const GalleryImageCreateNestedManyWithoutFolderInputSchema: z.ZodType<Prisma.GalleryImageCreateNestedManyWithoutFolderInput> = z.object({
  create: z.union([ z.lazy(() => GalleryImageCreateWithoutFolderInputSchema),z.lazy(() => GalleryImageCreateWithoutFolderInputSchema).array(),z.lazy(() => GalleryImageUncheckedCreateWithoutFolderInputSchema),z.lazy(() => GalleryImageUncheckedCreateWithoutFolderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GalleryImageCreateOrConnectWithoutFolderInputSchema),z.lazy(() => GalleryImageCreateOrConnectWithoutFolderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GalleryImageCreateManyFolderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GalleryImageWhereUniqueInputSchema),z.lazy(() => GalleryImageWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.GalleryImageCreateNestedManyWithoutFolderInput>;

export const GalleryImageCreateNestedOneWithoutThumbnailForInputSchema: z.ZodType<Prisma.GalleryImageCreateNestedOneWithoutThumbnailForInput> = z.object({
  create: z.union([ z.lazy(() => GalleryImageCreateWithoutThumbnailForInputSchema),z.lazy(() => GalleryImageUncheckedCreateWithoutThumbnailForInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GalleryImageCreateOrConnectWithoutThumbnailForInputSchema).optional(),
  connect: z.lazy(() => GalleryImageWhereUniqueInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryImageCreateNestedOneWithoutThumbnailForInput>;

export const GalleryImageUncheckedCreateNestedManyWithoutFolderInputSchema: z.ZodType<Prisma.GalleryImageUncheckedCreateNestedManyWithoutFolderInput> = z.object({
  create: z.union([ z.lazy(() => GalleryImageCreateWithoutFolderInputSchema),z.lazy(() => GalleryImageCreateWithoutFolderInputSchema).array(),z.lazy(() => GalleryImageUncheckedCreateWithoutFolderInputSchema),z.lazy(() => GalleryImageUncheckedCreateWithoutFolderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GalleryImageCreateOrConnectWithoutFolderInputSchema),z.lazy(() => GalleryImageCreateOrConnectWithoutFolderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GalleryImageCreateManyFolderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GalleryImageWhereUniqueInputSchema),z.lazy(() => GalleryImageWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.GalleryImageUncheckedCreateNestedManyWithoutFolderInput>;

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput>;

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
}).strict() as z.ZodType<Prisma.GalleryImageUpdateManyWithoutFolderNestedInput>;

export const GalleryImageUpdateOneWithoutThumbnailForNestedInputSchema: z.ZodType<Prisma.GalleryImageUpdateOneWithoutThumbnailForNestedInput> = z.object({
  create: z.union([ z.lazy(() => GalleryImageCreateWithoutThumbnailForInputSchema),z.lazy(() => GalleryImageUncheckedCreateWithoutThumbnailForInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GalleryImageCreateOrConnectWithoutThumbnailForInputSchema).optional(),
  upsert: z.lazy(() => GalleryImageUpsertWithoutThumbnailForInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => GalleryImageWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => GalleryImageWhereInputSchema) ]).optional(),
  connect: z.lazy(() => GalleryImageWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GalleryImageUpdateToOneWithWhereWithoutThumbnailForInputSchema),z.lazy(() => GalleryImageUpdateWithoutThumbnailForInputSchema),z.lazy(() => GalleryImageUncheckedUpdateWithoutThumbnailForInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.GalleryImageUpdateOneWithoutThumbnailForNestedInput>;

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict() as z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput>;

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
}).strict() as z.ZodType<Prisma.GalleryImageUncheckedUpdateManyWithoutFolderNestedInput>;

export const GalleryFolderCreateNestedOneWithoutImagesInputSchema: z.ZodType<Prisma.GalleryFolderCreateNestedOneWithoutImagesInput> = z.object({
  create: z.union([ z.lazy(() => GalleryFolderCreateWithoutImagesInputSchema),z.lazy(() => GalleryFolderUncheckedCreateWithoutImagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GalleryFolderCreateOrConnectWithoutImagesInputSchema).optional(),
  connect: z.lazy(() => GalleryFolderWhereUniqueInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryFolderCreateNestedOneWithoutImagesInput>;

export const GalleryFolderCreateNestedOneWithoutThumbnailInputSchema: z.ZodType<Prisma.GalleryFolderCreateNestedOneWithoutThumbnailInput> = z.object({
  create: z.union([ z.lazy(() => GalleryFolderCreateWithoutThumbnailInputSchema),z.lazy(() => GalleryFolderUncheckedCreateWithoutThumbnailInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GalleryFolderCreateOrConnectWithoutThumbnailInputSchema).optional(),
  connect: z.lazy(() => GalleryFolderWhereUniqueInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryFolderCreateNestedOneWithoutThumbnailInput>;

export const GalleryFolderUncheckedCreateNestedOneWithoutThumbnailInputSchema: z.ZodType<Prisma.GalleryFolderUncheckedCreateNestedOneWithoutThumbnailInput> = z.object({
  create: z.union([ z.lazy(() => GalleryFolderCreateWithoutThumbnailInputSchema),z.lazy(() => GalleryFolderUncheckedCreateWithoutThumbnailInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GalleryFolderCreateOrConnectWithoutThumbnailInputSchema).optional(),
  connect: z.lazy(() => GalleryFolderWhereUniqueInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryFolderUncheckedCreateNestedOneWithoutThumbnailInput>;

export const GalleryFolderUpdateOneRequiredWithoutImagesNestedInputSchema: z.ZodType<Prisma.GalleryFolderUpdateOneRequiredWithoutImagesNestedInput> = z.object({
  create: z.union([ z.lazy(() => GalleryFolderCreateWithoutImagesInputSchema),z.lazy(() => GalleryFolderUncheckedCreateWithoutImagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GalleryFolderCreateOrConnectWithoutImagesInputSchema).optional(),
  upsert: z.lazy(() => GalleryFolderUpsertWithoutImagesInputSchema).optional(),
  connect: z.lazy(() => GalleryFolderWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GalleryFolderUpdateToOneWithWhereWithoutImagesInputSchema),z.lazy(() => GalleryFolderUpdateWithoutImagesInputSchema),z.lazy(() => GalleryFolderUncheckedUpdateWithoutImagesInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.GalleryFolderUpdateOneRequiredWithoutImagesNestedInput>;

export const GalleryFolderUpdateOneWithoutThumbnailNestedInputSchema: z.ZodType<Prisma.GalleryFolderUpdateOneWithoutThumbnailNestedInput> = z.object({
  create: z.union([ z.lazy(() => GalleryFolderCreateWithoutThumbnailInputSchema),z.lazy(() => GalleryFolderUncheckedCreateWithoutThumbnailInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GalleryFolderCreateOrConnectWithoutThumbnailInputSchema).optional(),
  upsert: z.lazy(() => GalleryFolderUpsertWithoutThumbnailInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => GalleryFolderWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => GalleryFolderWhereInputSchema) ]).optional(),
  connect: z.lazy(() => GalleryFolderWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GalleryFolderUpdateToOneWithWhereWithoutThumbnailInputSchema),z.lazy(() => GalleryFolderUpdateWithoutThumbnailInputSchema),z.lazy(() => GalleryFolderUncheckedUpdateWithoutThumbnailInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.GalleryFolderUpdateOneWithoutThumbnailNestedInput>;

export const GalleryFolderUncheckedUpdateOneWithoutThumbnailNestedInputSchema: z.ZodType<Prisma.GalleryFolderUncheckedUpdateOneWithoutThumbnailNestedInput> = z.object({
  create: z.union([ z.lazy(() => GalleryFolderCreateWithoutThumbnailInputSchema),z.lazy(() => GalleryFolderUncheckedCreateWithoutThumbnailInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GalleryFolderCreateOrConnectWithoutThumbnailInputSchema).optional(),
  upsert: z.lazy(() => GalleryFolderUpsertWithoutThumbnailInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => GalleryFolderWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => GalleryFolderWhereInputSchema) ]).optional(),
  connect: z.lazy(() => GalleryFolderWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GalleryFolderUpdateToOneWithWhereWithoutThumbnailInputSchema),z.lazy(() => GalleryFolderUpdateWithoutThumbnailInputSchema),z.lazy(() => GalleryFolderUncheckedUpdateWithoutThumbnailInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.GalleryFolderUncheckedUpdateOneWithoutThumbnailNestedInput>;

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
}).strict() as z.ZodType<Prisma.NestedStringFilter>;

export const NestedEnumUserRolesFilterSchema: z.ZodType<Prisma.NestedEnumUserRolesFilter> = z.object({
  equals: z.lazy(() => UserRolesSchema).optional(),
  in: z.lazy(() => UserRolesSchema).array().optional(),
  notIn: z.lazy(() => UserRolesSchema).array().optional(),
  not: z.union([ z.lazy(() => UserRolesSchema),z.lazy(() => NestedEnumUserRolesFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.NestedEnumUserRolesFilter>;

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
}).strict() as z.ZodType<Prisma.NestedStringWithAggregatesFilter>;

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.NestedIntFilter>;

export const NestedEnumUserRolesWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumUserRolesWithAggregatesFilter> = z.object({
  equals: z.lazy(() => UserRolesSchema).optional(),
  in: z.lazy(() => UserRolesSchema).array().optional(),
  notIn: z.lazy(() => UserRolesSchema).array().optional(),
  not: z.union([ z.lazy(() => UserRolesSchema),z.lazy(() => NestedEnumUserRolesWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumUserRolesFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumUserRolesFilterSchema).optional()
}).strict() as z.ZodType<Prisma.NestedEnumUserRolesWithAggregatesFilter>;

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.NestedStringNullableFilter>;

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.NestedDateTimeFilter>;

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict() as z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter>;

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.NestedIntNullableFilter>;

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
}).strict() as z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter>;

export const GalleryImageCreateWithoutFolderInputSchema: z.ZodType<Prisma.GalleryImageCreateWithoutFolderInput> = z.object({
  id: z.string().cuid().optional(),
  filename: z.string(),
  thumbnailFor: z.lazy(() => GalleryFolderCreateNestedOneWithoutThumbnailInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryImageCreateWithoutFolderInput>;

export const GalleryImageUncheckedCreateWithoutFolderInputSchema: z.ZodType<Prisma.GalleryImageUncheckedCreateWithoutFolderInput> = z.object({
  id: z.string().cuid().optional(),
  filename: z.string(),
  thumbnailFor: z.lazy(() => GalleryFolderUncheckedCreateNestedOneWithoutThumbnailInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryImageUncheckedCreateWithoutFolderInput>;

export const GalleryImageCreateOrConnectWithoutFolderInputSchema: z.ZodType<Prisma.GalleryImageCreateOrConnectWithoutFolderInput> = z.object({
  where: z.lazy(() => GalleryImageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GalleryImageCreateWithoutFolderInputSchema),z.lazy(() => GalleryImageUncheckedCreateWithoutFolderInputSchema) ]),
}).strict() as z.ZodType<Prisma.GalleryImageCreateOrConnectWithoutFolderInput>;

export const GalleryImageCreateManyFolderInputEnvelopeSchema: z.ZodType<Prisma.GalleryImageCreateManyFolderInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => GalleryImageCreateManyFolderInputSchema),z.lazy(() => GalleryImageCreateManyFolderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.GalleryImageCreateManyFolderInputEnvelope>;

export const GalleryImageCreateWithoutThumbnailForInputSchema: z.ZodType<Prisma.GalleryImageCreateWithoutThumbnailForInput> = z.object({
  id: z.string().cuid().optional(),
  filename: z.string(),
  folder: z.lazy(() => GalleryFolderCreateNestedOneWithoutImagesInputSchema)
}).strict() as z.ZodType<Prisma.GalleryImageCreateWithoutThumbnailForInput>;

export const GalleryImageUncheckedCreateWithoutThumbnailForInputSchema: z.ZodType<Prisma.GalleryImageUncheckedCreateWithoutThumbnailForInput> = z.object({
  id: z.string().cuid().optional(),
  filename: z.string(),
  folderId: z.string()
}).strict() as z.ZodType<Prisma.GalleryImageUncheckedCreateWithoutThumbnailForInput>;

export const GalleryImageCreateOrConnectWithoutThumbnailForInputSchema: z.ZodType<Prisma.GalleryImageCreateOrConnectWithoutThumbnailForInput> = z.object({
  where: z.lazy(() => GalleryImageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GalleryImageCreateWithoutThumbnailForInputSchema),z.lazy(() => GalleryImageUncheckedCreateWithoutThumbnailForInputSchema) ]),
}).strict() as z.ZodType<Prisma.GalleryImageCreateOrConnectWithoutThumbnailForInput>;

export const GalleryImageUpsertWithWhereUniqueWithoutFolderInputSchema: z.ZodType<Prisma.GalleryImageUpsertWithWhereUniqueWithoutFolderInput> = z.object({
  where: z.lazy(() => GalleryImageWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => GalleryImageUpdateWithoutFolderInputSchema),z.lazy(() => GalleryImageUncheckedUpdateWithoutFolderInputSchema) ]),
  create: z.union([ z.lazy(() => GalleryImageCreateWithoutFolderInputSchema),z.lazy(() => GalleryImageUncheckedCreateWithoutFolderInputSchema) ]),
}).strict() as z.ZodType<Prisma.GalleryImageUpsertWithWhereUniqueWithoutFolderInput>;

export const GalleryImageUpdateWithWhereUniqueWithoutFolderInputSchema: z.ZodType<Prisma.GalleryImageUpdateWithWhereUniqueWithoutFolderInput> = z.object({
  where: z.lazy(() => GalleryImageWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => GalleryImageUpdateWithoutFolderInputSchema),z.lazy(() => GalleryImageUncheckedUpdateWithoutFolderInputSchema) ]),
}).strict() as z.ZodType<Prisma.GalleryImageUpdateWithWhereUniqueWithoutFolderInput>;

export const GalleryImageUpdateManyWithWhereWithoutFolderInputSchema: z.ZodType<Prisma.GalleryImageUpdateManyWithWhereWithoutFolderInput> = z.object({
  where: z.lazy(() => GalleryImageScalarWhereInputSchema),
  data: z.union([ z.lazy(() => GalleryImageUpdateManyMutationInputSchema),z.lazy(() => GalleryImageUncheckedUpdateManyWithoutFolderInputSchema) ]),
}).strict() as z.ZodType<Prisma.GalleryImageUpdateManyWithWhereWithoutFolderInput>;

export const GalleryImageScalarWhereInputSchema: z.ZodType<Prisma.GalleryImageScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GalleryImageScalarWhereInputSchema),z.lazy(() => GalleryImageScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GalleryImageScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GalleryImageScalarWhereInputSchema),z.lazy(() => GalleryImageScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  filename: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  folderId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict() as z.ZodType<Prisma.GalleryImageScalarWhereInput>;

export const GalleryImageUpsertWithoutThumbnailForInputSchema: z.ZodType<Prisma.GalleryImageUpsertWithoutThumbnailForInput> = z.object({
  update: z.union([ z.lazy(() => GalleryImageUpdateWithoutThumbnailForInputSchema),z.lazy(() => GalleryImageUncheckedUpdateWithoutThumbnailForInputSchema) ]),
  create: z.union([ z.lazy(() => GalleryImageCreateWithoutThumbnailForInputSchema),z.lazy(() => GalleryImageUncheckedCreateWithoutThumbnailForInputSchema) ]),
  where: z.lazy(() => GalleryImageWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryImageUpsertWithoutThumbnailForInput>;

export const GalleryImageUpdateToOneWithWhereWithoutThumbnailForInputSchema: z.ZodType<Prisma.GalleryImageUpdateToOneWithWhereWithoutThumbnailForInput> = z.object({
  where: z.lazy(() => GalleryImageWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GalleryImageUpdateWithoutThumbnailForInputSchema),z.lazy(() => GalleryImageUncheckedUpdateWithoutThumbnailForInputSchema) ]),
}).strict() as z.ZodType<Prisma.GalleryImageUpdateToOneWithWhereWithoutThumbnailForInput>;

export const GalleryImageUpdateWithoutThumbnailForInputSchema: z.ZodType<Prisma.GalleryImageUpdateWithoutThumbnailForInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  folder: z.lazy(() => GalleryFolderUpdateOneRequiredWithoutImagesNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryImageUpdateWithoutThumbnailForInput>;

export const GalleryImageUncheckedUpdateWithoutThumbnailForInputSchema: z.ZodType<Prisma.GalleryImageUncheckedUpdateWithoutThumbnailForInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  folderId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.GalleryImageUncheckedUpdateWithoutThumbnailForInput>;

export const GalleryFolderCreateWithoutImagesInputSchema: z.ZodType<Prisma.GalleryFolderCreateWithoutImagesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  thumbnail: z.lazy(() => GalleryImageCreateNestedOneWithoutThumbnailForInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryFolderCreateWithoutImagesInput>;

export const GalleryFolderUncheckedCreateWithoutImagesInputSchema: z.ZodType<Prisma.GalleryFolderUncheckedCreateWithoutImagesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  thumbnailId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.GalleryFolderUncheckedCreateWithoutImagesInput>;

export const GalleryFolderCreateOrConnectWithoutImagesInputSchema: z.ZodType<Prisma.GalleryFolderCreateOrConnectWithoutImagesInput> = z.object({
  where: z.lazy(() => GalleryFolderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GalleryFolderCreateWithoutImagesInputSchema),z.lazy(() => GalleryFolderUncheckedCreateWithoutImagesInputSchema) ]),
}).strict() as z.ZodType<Prisma.GalleryFolderCreateOrConnectWithoutImagesInput>;

export const GalleryFolderCreateWithoutThumbnailInputSchema: z.ZodType<Prisma.GalleryFolderCreateWithoutThumbnailInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  images: z.lazy(() => GalleryImageCreateNestedManyWithoutFolderInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryFolderCreateWithoutThumbnailInput>;

export const GalleryFolderUncheckedCreateWithoutThumbnailInputSchema: z.ZodType<Prisma.GalleryFolderUncheckedCreateWithoutThumbnailInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  images: z.lazy(() => GalleryImageUncheckedCreateNestedManyWithoutFolderInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryFolderUncheckedCreateWithoutThumbnailInput>;

export const GalleryFolderCreateOrConnectWithoutThumbnailInputSchema: z.ZodType<Prisma.GalleryFolderCreateOrConnectWithoutThumbnailInput> = z.object({
  where: z.lazy(() => GalleryFolderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GalleryFolderCreateWithoutThumbnailInputSchema),z.lazy(() => GalleryFolderUncheckedCreateWithoutThumbnailInputSchema) ]),
}).strict() as z.ZodType<Prisma.GalleryFolderCreateOrConnectWithoutThumbnailInput>;

export const GalleryFolderUpsertWithoutImagesInputSchema: z.ZodType<Prisma.GalleryFolderUpsertWithoutImagesInput> = z.object({
  update: z.union([ z.lazy(() => GalleryFolderUpdateWithoutImagesInputSchema),z.lazy(() => GalleryFolderUncheckedUpdateWithoutImagesInputSchema) ]),
  create: z.union([ z.lazy(() => GalleryFolderCreateWithoutImagesInputSchema),z.lazy(() => GalleryFolderUncheckedCreateWithoutImagesInputSchema) ]),
  where: z.lazy(() => GalleryFolderWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryFolderUpsertWithoutImagesInput>;

export const GalleryFolderUpdateToOneWithWhereWithoutImagesInputSchema: z.ZodType<Prisma.GalleryFolderUpdateToOneWithWhereWithoutImagesInput> = z.object({
  where: z.lazy(() => GalleryFolderWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GalleryFolderUpdateWithoutImagesInputSchema),z.lazy(() => GalleryFolderUncheckedUpdateWithoutImagesInputSchema) ]),
}).strict() as z.ZodType<Prisma.GalleryFolderUpdateToOneWithWhereWithoutImagesInput>;

export const GalleryFolderUpdateWithoutImagesInputSchema: z.ZodType<Prisma.GalleryFolderUpdateWithoutImagesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  thumbnail: z.lazy(() => GalleryImageUpdateOneWithoutThumbnailForNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryFolderUpdateWithoutImagesInput>;

export const GalleryFolderUncheckedUpdateWithoutImagesInputSchema: z.ZodType<Prisma.GalleryFolderUncheckedUpdateWithoutImagesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thumbnailId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.GalleryFolderUncheckedUpdateWithoutImagesInput>;

export const GalleryFolderUpsertWithoutThumbnailInputSchema: z.ZodType<Prisma.GalleryFolderUpsertWithoutThumbnailInput> = z.object({
  update: z.union([ z.lazy(() => GalleryFolderUpdateWithoutThumbnailInputSchema),z.lazy(() => GalleryFolderUncheckedUpdateWithoutThumbnailInputSchema) ]),
  create: z.union([ z.lazy(() => GalleryFolderCreateWithoutThumbnailInputSchema),z.lazy(() => GalleryFolderUncheckedCreateWithoutThumbnailInputSchema) ]),
  where: z.lazy(() => GalleryFolderWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryFolderUpsertWithoutThumbnailInput>;

export const GalleryFolderUpdateToOneWithWhereWithoutThumbnailInputSchema: z.ZodType<Prisma.GalleryFolderUpdateToOneWithWhereWithoutThumbnailInput> = z.object({
  where: z.lazy(() => GalleryFolderWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GalleryFolderUpdateWithoutThumbnailInputSchema),z.lazy(() => GalleryFolderUncheckedUpdateWithoutThumbnailInputSchema) ]),
}).strict() as z.ZodType<Prisma.GalleryFolderUpdateToOneWithWhereWithoutThumbnailInput>;

export const GalleryFolderUpdateWithoutThumbnailInputSchema: z.ZodType<Prisma.GalleryFolderUpdateWithoutThumbnailInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.lazy(() => GalleryImageUpdateManyWithoutFolderNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryFolderUpdateWithoutThumbnailInput>;

export const GalleryFolderUncheckedUpdateWithoutThumbnailInputSchema: z.ZodType<Prisma.GalleryFolderUncheckedUpdateWithoutThumbnailInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.lazy(() => GalleryImageUncheckedUpdateManyWithoutFolderNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryFolderUncheckedUpdateWithoutThumbnailInput>;

export const GalleryImageCreateManyFolderInputSchema: z.ZodType<Prisma.GalleryImageCreateManyFolderInput> = z.object({
  id: z.string().cuid().optional(),
  filename: z.string()
}).strict() as z.ZodType<Prisma.GalleryImageCreateManyFolderInput>;

export const GalleryImageUpdateWithoutFolderInputSchema: z.ZodType<Prisma.GalleryImageUpdateWithoutFolderInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thumbnailFor: z.lazy(() => GalleryFolderUpdateOneWithoutThumbnailNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryImageUpdateWithoutFolderInput>;

export const GalleryImageUncheckedUpdateWithoutFolderInputSchema: z.ZodType<Prisma.GalleryImageUncheckedUpdateWithoutFolderInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thumbnailFor: z.lazy(() => GalleryFolderUncheckedUpdateOneWithoutThumbnailNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.GalleryImageUncheckedUpdateWithoutFolderInput>;

export const GalleryImageUncheckedUpdateManyWithoutFolderInputSchema: z.ZodType<Prisma.GalleryImageUncheckedUpdateManyWithoutFolderInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.GalleryImageUncheckedUpdateManyWithoutFolderInput>;

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
}).strict() as z.ZodType<Prisma.UserFindFirstArgs>;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.UserFindFirstOrThrowArgs>;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.UserFindManyArgs>;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.UserAggregateArgs>;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.UserGroupByArgs>;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.UserFindUniqueArgs>;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.UserFindUniqueOrThrowArgs>;

export const GalleryFolderFindFirstArgsSchema: z.ZodType<Prisma.GalleryFolderFindFirstArgs> = z.object({
  select: GalleryFolderSelectSchema.optional(),
  include: GalleryFolderIncludeSchema.optional(),
  where: GalleryFolderWhereInputSchema.optional(),
  orderBy: z.union([ GalleryFolderOrderByWithRelationInputSchema.array(),GalleryFolderOrderByWithRelationInputSchema ]).optional(),
  cursor: GalleryFolderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GalleryFolderScalarFieldEnumSchema,GalleryFolderScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.GalleryFolderFindFirstArgs>;

export const GalleryFolderFindFirstOrThrowArgsSchema: z.ZodType<Prisma.GalleryFolderFindFirstOrThrowArgs> = z.object({
  select: GalleryFolderSelectSchema.optional(),
  include: GalleryFolderIncludeSchema.optional(),
  where: GalleryFolderWhereInputSchema.optional(),
  orderBy: z.union([ GalleryFolderOrderByWithRelationInputSchema.array(),GalleryFolderOrderByWithRelationInputSchema ]).optional(),
  cursor: GalleryFolderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GalleryFolderScalarFieldEnumSchema,GalleryFolderScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.GalleryFolderFindFirstOrThrowArgs>;

export const GalleryFolderFindManyArgsSchema: z.ZodType<Prisma.GalleryFolderFindManyArgs> = z.object({
  select: GalleryFolderSelectSchema.optional(),
  include: GalleryFolderIncludeSchema.optional(),
  where: GalleryFolderWhereInputSchema.optional(),
  orderBy: z.union([ GalleryFolderOrderByWithRelationInputSchema.array(),GalleryFolderOrderByWithRelationInputSchema ]).optional(),
  cursor: GalleryFolderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GalleryFolderScalarFieldEnumSchema,GalleryFolderScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.GalleryFolderFindManyArgs>;

export const GalleryFolderAggregateArgsSchema: z.ZodType<Prisma.GalleryFolderAggregateArgs> = z.object({
  where: GalleryFolderWhereInputSchema.optional(),
  orderBy: z.union([ GalleryFolderOrderByWithRelationInputSchema.array(),GalleryFolderOrderByWithRelationInputSchema ]).optional(),
  cursor: GalleryFolderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.GalleryFolderAggregateArgs>;

export const GalleryFolderGroupByArgsSchema: z.ZodType<Prisma.GalleryFolderGroupByArgs> = z.object({
  where: GalleryFolderWhereInputSchema.optional(),
  orderBy: z.union([ GalleryFolderOrderByWithAggregationInputSchema.array(),GalleryFolderOrderByWithAggregationInputSchema ]).optional(),
  by: GalleryFolderScalarFieldEnumSchema.array(),
  having: GalleryFolderScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.GalleryFolderGroupByArgs>;

export const GalleryFolderFindUniqueArgsSchema: z.ZodType<Prisma.GalleryFolderFindUniqueArgs> = z.object({
  select: GalleryFolderSelectSchema.optional(),
  include: GalleryFolderIncludeSchema.optional(),
  where: GalleryFolderWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.GalleryFolderFindUniqueArgs>;

export const GalleryFolderFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.GalleryFolderFindUniqueOrThrowArgs> = z.object({
  select: GalleryFolderSelectSchema.optional(),
  include: GalleryFolderIncludeSchema.optional(),
  where: GalleryFolderWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.GalleryFolderFindUniqueOrThrowArgs>;

export const GalleryImageFindFirstArgsSchema: z.ZodType<Prisma.GalleryImageFindFirstArgs> = z.object({
  select: GalleryImageSelectSchema.optional(),
  include: GalleryImageIncludeSchema.optional(),
  where: GalleryImageWhereInputSchema.optional(),
  orderBy: z.union([ GalleryImageOrderByWithRelationInputSchema.array(),GalleryImageOrderByWithRelationInputSchema ]).optional(),
  cursor: GalleryImageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GalleryImageScalarFieldEnumSchema,GalleryImageScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.GalleryImageFindFirstArgs>;

export const GalleryImageFindFirstOrThrowArgsSchema: z.ZodType<Prisma.GalleryImageFindFirstOrThrowArgs> = z.object({
  select: GalleryImageSelectSchema.optional(),
  include: GalleryImageIncludeSchema.optional(),
  where: GalleryImageWhereInputSchema.optional(),
  orderBy: z.union([ GalleryImageOrderByWithRelationInputSchema.array(),GalleryImageOrderByWithRelationInputSchema ]).optional(),
  cursor: GalleryImageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GalleryImageScalarFieldEnumSchema,GalleryImageScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.GalleryImageFindFirstOrThrowArgs>;

export const GalleryImageFindManyArgsSchema: z.ZodType<Prisma.GalleryImageFindManyArgs> = z.object({
  select: GalleryImageSelectSchema.optional(),
  include: GalleryImageIncludeSchema.optional(),
  where: GalleryImageWhereInputSchema.optional(),
  orderBy: z.union([ GalleryImageOrderByWithRelationInputSchema.array(),GalleryImageOrderByWithRelationInputSchema ]).optional(),
  cursor: GalleryImageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GalleryImageScalarFieldEnumSchema,GalleryImageScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.GalleryImageFindManyArgs>;

export const GalleryImageAggregateArgsSchema: z.ZodType<Prisma.GalleryImageAggregateArgs> = z.object({
  where: GalleryImageWhereInputSchema.optional(),
  orderBy: z.union([ GalleryImageOrderByWithRelationInputSchema.array(),GalleryImageOrderByWithRelationInputSchema ]).optional(),
  cursor: GalleryImageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.GalleryImageAggregateArgs>;

export const GalleryImageGroupByArgsSchema: z.ZodType<Prisma.GalleryImageGroupByArgs> = z.object({
  where: GalleryImageWhereInputSchema.optional(),
  orderBy: z.union([ GalleryImageOrderByWithAggregationInputSchema.array(),GalleryImageOrderByWithAggregationInputSchema ]).optional(),
  by: GalleryImageScalarFieldEnumSchema.array(),
  having: GalleryImageScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.GalleryImageGroupByArgs>;

export const GalleryImageFindUniqueArgsSchema: z.ZodType<Prisma.GalleryImageFindUniqueArgs> = z.object({
  select: GalleryImageSelectSchema.optional(),
  include: GalleryImageIncludeSchema.optional(),
  where: GalleryImageWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.GalleryImageFindUniqueArgs>;

export const GalleryImageFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.GalleryImageFindUniqueOrThrowArgs> = z.object({
  select: GalleryImageSelectSchema.optional(),
  include: GalleryImageIncludeSchema.optional(),
  where: GalleryImageWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.GalleryImageFindUniqueOrThrowArgs>;

export const S3UploadTransactionFindFirstArgsSchema: z.ZodType<Prisma.S3UploadTransactionFindFirstArgs> = z.object({
  select: S3UploadTransactionSelectSchema.optional(),
  where: S3UploadTransactionWhereInputSchema.optional(),
  orderBy: z.union([ S3UploadTransactionOrderByWithRelationInputSchema.array(),S3UploadTransactionOrderByWithRelationInputSchema ]).optional(),
  cursor: S3UploadTransactionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ S3UploadTransactionScalarFieldEnumSchema,S3UploadTransactionScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.S3UploadTransactionFindFirstArgs>;

export const S3UploadTransactionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.S3UploadTransactionFindFirstOrThrowArgs> = z.object({
  select: S3UploadTransactionSelectSchema.optional(),
  where: S3UploadTransactionWhereInputSchema.optional(),
  orderBy: z.union([ S3UploadTransactionOrderByWithRelationInputSchema.array(),S3UploadTransactionOrderByWithRelationInputSchema ]).optional(),
  cursor: S3UploadTransactionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ S3UploadTransactionScalarFieldEnumSchema,S3UploadTransactionScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.S3UploadTransactionFindFirstOrThrowArgs>;

export const S3UploadTransactionFindManyArgsSchema: z.ZodType<Prisma.S3UploadTransactionFindManyArgs> = z.object({
  select: S3UploadTransactionSelectSchema.optional(),
  where: S3UploadTransactionWhereInputSchema.optional(),
  orderBy: z.union([ S3UploadTransactionOrderByWithRelationInputSchema.array(),S3UploadTransactionOrderByWithRelationInputSchema ]).optional(),
  cursor: S3UploadTransactionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ S3UploadTransactionScalarFieldEnumSchema,S3UploadTransactionScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.S3UploadTransactionFindManyArgs>;

export const S3UploadTransactionAggregateArgsSchema: z.ZodType<Prisma.S3UploadTransactionAggregateArgs> = z.object({
  where: S3UploadTransactionWhereInputSchema.optional(),
  orderBy: z.union([ S3UploadTransactionOrderByWithRelationInputSchema.array(),S3UploadTransactionOrderByWithRelationInputSchema ]).optional(),
  cursor: S3UploadTransactionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.S3UploadTransactionAggregateArgs>;

export const S3UploadTransactionGroupByArgsSchema: z.ZodType<Prisma.S3UploadTransactionGroupByArgs> = z.object({
  where: S3UploadTransactionWhereInputSchema.optional(),
  orderBy: z.union([ S3UploadTransactionOrderByWithAggregationInputSchema.array(),S3UploadTransactionOrderByWithAggregationInputSchema ]).optional(),
  by: S3UploadTransactionScalarFieldEnumSchema.array(),
  having: S3UploadTransactionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.S3UploadTransactionGroupByArgs>;

export const S3UploadTransactionFindUniqueArgsSchema: z.ZodType<Prisma.S3UploadTransactionFindUniqueArgs> = z.object({
  select: S3UploadTransactionSelectSchema.optional(),
  where: S3UploadTransactionWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.S3UploadTransactionFindUniqueArgs>;

export const S3UploadTransactionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.S3UploadTransactionFindUniqueOrThrowArgs> = z.object({
  select: S3UploadTransactionSelectSchema.optional(),
  where: S3UploadTransactionWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.S3UploadTransactionFindUniqueOrThrowArgs>;

export const OtpFindFirstArgsSchema: z.ZodType<Prisma.OtpFindFirstArgs> = z.object({
  select: OtpSelectSchema.optional(),
  where: OtpWhereInputSchema.optional(),
  orderBy: z.union([ OtpOrderByWithRelationInputSchema.array(),OtpOrderByWithRelationInputSchema ]).optional(),
  cursor: OtpWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OtpScalarFieldEnumSchema,OtpScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.OtpFindFirstArgs>;

export const OtpFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OtpFindFirstOrThrowArgs> = z.object({
  select: OtpSelectSchema.optional(),
  where: OtpWhereInputSchema.optional(),
  orderBy: z.union([ OtpOrderByWithRelationInputSchema.array(),OtpOrderByWithRelationInputSchema ]).optional(),
  cursor: OtpWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OtpScalarFieldEnumSchema,OtpScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.OtpFindFirstOrThrowArgs>;

export const OtpFindManyArgsSchema: z.ZodType<Prisma.OtpFindManyArgs> = z.object({
  select: OtpSelectSchema.optional(),
  where: OtpWhereInputSchema.optional(),
  orderBy: z.union([ OtpOrderByWithRelationInputSchema.array(),OtpOrderByWithRelationInputSchema ]).optional(),
  cursor: OtpWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OtpScalarFieldEnumSchema,OtpScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.OtpFindManyArgs>;

export const OtpAggregateArgsSchema: z.ZodType<Prisma.OtpAggregateArgs> = z.object({
  where: OtpWhereInputSchema.optional(),
  orderBy: z.union([ OtpOrderByWithRelationInputSchema.array(),OtpOrderByWithRelationInputSchema ]).optional(),
  cursor: OtpWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.OtpAggregateArgs>;

export const OtpGroupByArgsSchema: z.ZodType<Prisma.OtpGroupByArgs> = z.object({
  where: OtpWhereInputSchema.optional(),
  orderBy: z.union([ OtpOrderByWithAggregationInputSchema.array(),OtpOrderByWithAggregationInputSchema ]).optional(),
  by: OtpScalarFieldEnumSchema.array(),
  having: OtpScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.OtpGroupByArgs>;

export const OtpFindUniqueArgsSchema: z.ZodType<Prisma.OtpFindUniqueArgs> = z.object({
  select: OtpSelectSchema.optional(),
  where: OtpWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.OtpFindUniqueArgs>;

export const OtpFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OtpFindUniqueOrThrowArgs> = z.object({
  select: OtpSelectSchema.optional(),
  where: OtpWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.OtpFindUniqueOrThrowArgs>;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.UserCreateArgs>;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.UserUpsertArgs>;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.UserCreateManyArgs>;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.UserDeleteArgs>;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.UserUpdateArgs>;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.UserUpdateManyArgs>;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.UserDeleteManyArgs>;

export const GalleryFolderCreateArgsSchema: z.ZodType<Prisma.GalleryFolderCreateArgs> = z.object({
  select: GalleryFolderSelectSchema.optional(),
  include: GalleryFolderIncludeSchema.optional(),
  data: z.union([ GalleryFolderCreateInputSchema,GalleryFolderUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.GalleryFolderCreateArgs>;

export const GalleryFolderUpsertArgsSchema: z.ZodType<Prisma.GalleryFolderUpsertArgs> = z.object({
  select: GalleryFolderSelectSchema.optional(),
  include: GalleryFolderIncludeSchema.optional(),
  where: GalleryFolderWhereUniqueInputSchema,
  create: z.union([ GalleryFolderCreateInputSchema,GalleryFolderUncheckedCreateInputSchema ]),
  update: z.union([ GalleryFolderUpdateInputSchema,GalleryFolderUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.GalleryFolderUpsertArgs>;

export const GalleryFolderCreateManyArgsSchema: z.ZodType<Prisma.GalleryFolderCreateManyArgs> = z.object({
  data: z.union([ GalleryFolderCreateManyInputSchema,GalleryFolderCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.GalleryFolderCreateManyArgs>;

export const GalleryFolderDeleteArgsSchema: z.ZodType<Prisma.GalleryFolderDeleteArgs> = z.object({
  select: GalleryFolderSelectSchema.optional(),
  include: GalleryFolderIncludeSchema.optional(),
  where: GalleryFolderWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.GalleryFolderDeleteArgs>;

export const GalleryFolderUpdateArgsSchema: z.ZodType<Prisma.GalleryFolderUpdateArgs> = z.object({
  select: GalleryFolderSelectSchema.optional(),
  include: GalleryFolderIncludeSchema.optional(),
  data: z.union([ GalleryFolderUpdateInputSchema,GalleryFolderUncheckedUpdateInputSchema ]),
  where: GalleryFolderWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.GalleryFolderUpdateArgs>;

export const GalleryFolderUpdateManyArgsSchema: z.ZodType<Prisma.GalleryFolderUpdateManyArgs> = z.object({
  data: z.union([ GalleryFolderUpdateManyMutationInputSchema,GalleryFolderUncheckedUpdateManyInputSchema ]),
  where: GalleryFolderWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.GalleryFolderUpdateManyArgs>;

export const GalleryFolderDeleteManyArgsSchema: z.ZodType<Prisma.GalleryFolderDeleteManyArgs> = z.object({
  where: GalleryFolderWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.GalleryFolderDeleteManyArgs>;

export const GalleryImageCreateArgsSchema: z.ZodType<Prisma.GalleryImageCreateArgs> = z.object({
  select: GalleryImageSelectSchema.optional(),
  include: GalleryImageIncludeSchema.optional(),
  data: z.union([ GalleryImageCreateInputSchema,GalleryImageUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.GalleryImageCreateArgs>;

export const GalleryImageUpsertArgsSchema: z.ZodType<Prisma.GalleryImageUpsertArgs> = z.object({
  select: GalleryImageSelectSchema.optional(),
  include: GalleryImageIncludeSchema.optional(),
  where: GalleryImageWhereUniqueInputSchema,
  create: z.union([ GalleryImageCreateInputSchema,GalleryImageUncheckedCreateInputSchema ]),
  update: z.union([ GalleryImageUpdateInputSchema,GalleryImageUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.GalleryImageUpsertArgs>;

export const GalleryImageCreateManyArgsSchema: z.ZodType<Prisma.GalleryImageCreateManyArgs> = z.object({
  data: z.union([ GalleryImageCreateManyInputSchema,GalleryImageCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.GalleryImageCreateManyArgs>;

export const GalleryImageDeleteArgsSchema: z.ZodType<Prisma.GalleryImageDeleteArgs> = z.object({
  select: GalleryImageSelectSchema.optional(),
  include: GalleryImageIncludeSchema.optional(),
  where: GalleryImageWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.GalleryImageDeleteArgs>;

export const GalleryImageUpdateArgsSchema: z.ZodType<Prisma.GalleryImageUpdateArgs> = z.object({
  select: GalleryImageSelectSchema.optional(),
  include: GalleryImageIncludeSchema.optional(),
  data: z.union([ GalleryImageUpdateInputSchema,GalleryImageUncheckedUpdateInputSchema ]),
  where: GalleryImageWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.GalleryImageUpdateArgs>;

export const GalleryImageUpdateManyArgsSchema: z.ZodType<Prisma.GalleryImageUpdateManyArgs> = z.object({
  data: z.union([ GalleryImageUpdateManyMutationInputSchema,GalleryImageUncheckedUpdateManyInputSchema ]),
  where: GalleryImageWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.GalleryImageUpdateManyArgs>;

export const GalleryImageDeleteManyArgsSchema: z.ZodType<Prisma.GalleryImageDeleteManyArgs> = z.object({
  where: GalleryImageWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.GalleryImageDeleteManyArgs>;

export const S3UploadTransactionCreateArgsSchema: z.ZodType<Prisma.S3UploadTransactionCreateArgs> = z.object({
  select: S3UploadTransactionSelectSchema.optional(),
  data: z.union([ S3UploadTransactionCreateInputSchema,S3UploadTransactionUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.S3UploadTransactionCreateArgs>;

export const S3UploadTransactionUpsertArgsSchema: z.ZodType<Prisma.S3UploadTransactionUpsertArgs> = z.object({
  select: S3UploadTransactionSelectSchema.optional(),
  where: S3UploadTransactionWhereUniqueInputSchema,
  create: z.union([ S3UploadTransactionCreateInputSchema,S3UploadTransactionUncheckedCreateInputSchema ]),
  update: z.union([ S3UploadTransactionUpdateInputSchema,S3UploadTransactionUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.S3UploadTransactionUpsertArgs>;

export const S3UploadTransactionCreateManyArgsSchema: z.ZodType<Prisma.S3UploadTransactionCreateManyArgs> = z.object({
  data: z.union([ S3UploadTransactionCreateManyInputSchema,S3UploadTransactionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.S3UploadTransactionCreateManyArgs>;

export const S3UploadTransactionDeleteArgsSchema: z.ZodType<Prisma.S3UploadTransactionDeleteArgs> = z.object({
  select: S3UploadTransactionSelectSchema.optional(),
  where: S3UploadTransactionWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.S3UploadTransactionDeleteArgs>;

export const S3UploadTransactionUpdateArgsSchema: z.ZodType<Prisma.S3UploadTransactionUpdateArgs> = z.object({
  select: S3UploadTransactionSelectSchema.optional(),
  data: z.union([ S3UploadTransactionUpdateInputSchema,S3UploadTransactionUncheckedUpdateInputSchema ]),
  where: S3UploadTransactionWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.S3UploadTransactionUpdateArgs>;

export const S3UploadTransactionUpdateManyArgsSchema: z.ZodType<Prisma.S3UploadTransactionUpdateManyArgs> = z.object({
  data: z.union([ S3UploadTransactionUpdateManyMutationInputSchema,S3UploadTransactionUncheckedUpdateManyInputSchema ]),
  where: S3UploadTransactionWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.S3UploadTransactionUpdateManyArgs>;

export const S3UploadTransactionDeleteManyArgsSchema: z.ZodType<Prisma.S3UploadTransactionDeleteManyArgs> = z.object({
  where: S3UploadTransactionWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.S3UploadTransactionDeleteManyArgs>;

export const OtpCreateArgsSchema: z.ZodType<Omit<Prisma.OtpCreateArgs, "data"> & { data: z.infer<typeof OtpCreateInputSchema> | z.infer<typeof OtpUncheckedCreateInputSchema> }> = z.object({
  select: OtpSelectSchema.optional(),
  data: z.union([ OtpCreateInputSchema,OtpUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Omit<Prisma.OtpCreateArgs, "data"> & { data: z.infer<typeof OtpCreateInputSchema> | z.infer<typeof OtpUncheckedCreateInputSchema> }>;

export const OtpUpsertArgsSchema: z.ZodType<Omit<Prisma.OtpUpsertArgs, "create" | "update"> & { create: z.infer<typeof OtpCreateInputSchema> | z.infer<typeof OtpUncheckedCreateInputSchema>, update: z.infer<typeof OtpUpdateInputSchema> | z.infer<typeof OtpUncheckedUpdateInputSchema> }> = z.object({
  select: OtpSelectSchema.optional(),
  where: OtpWhereUniqueInputSchema,
  create: z.union([ OtpCreateInputSchema,OtpUncheckedCreateInputSchema ]),
  update: z.union([ OtpUpdateInputSchema,OtpUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Omit<Prisma.OtpUpsertArgs, "create" | "update"> & { create: z.infer<typeof OtpCreateInputSchema> | z.infer<typeof OtpUncheckedCreateInputSchema>, update: z.infer<typeof OtpUpdateInputSchema> | z.infer<typeof OtpUncheckedUpdateInputSchema> }>;

export const OtpCreateManyArgsSchema: z.ZodType<Omit<Prisma.OtpCreateManyArgs, "data"> & { data: z.infer<typeof OtpCreateManyInputSchema> | z.infer<typeof OtpCreateManyInputSchema>[] }> = z.object({
  data: z.union([ OtpCreateManyInputSchema,OtpCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Omit<Prisma.OtpCreateManyArgs, "data"> & { data: z.infer<typeof OtpCreateManyInputSchema> | z.infer<typeof OtpCreateManyInputSchema>[] }>;

export const OtpDeleteArgsSchema: z.ZodType<Prisma.OtpDeleteArgs> = z.object({
  select: OtpSelectSchema.optional(),
  where: OtpWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.OtpDeleteArgs>;

export const OtpUpdateArgsSchema: z.ZodType<Omit<Prisma.OtpUpdateArgs, "data"> & { data: z.infer<typeof OtpUpdateInputSchema> | z.infer<typeof OtpUncheckedUpdateInputSchema> }> = z.object({
  select: OtpSelectSchema.optional(),
  data: z.union([ OtpUpdateInputSchema,OtpUncheckedUpdateInputSchema ]),
  where: OtpWhereUniqueInputSchema,
}).strict() as z.ZodType<Omit<Prisma.OtpUpdateArgs, "data"> & { data: z.infer<typeof OtpUpdateInputSchema> | z.infer<typeof OtpUncheckedUpdateInputSchema> }>;

export const OtpUpdateManyArgsSchema: z.ZodType<Omit<Prisma.OtpUpdateManyArgs, "data"> & { data: z.infer<typeof OtpUpdateManyMutationInputSchema> | z.infer<typeof OtpUncheckedUpdateManyInputSchema> }> = z.object({
  data: z.union([ OtpUpdateManyMutationInputSchema,OtpUncheckedUpdateManyInputSchema ]),
  where: OtpWhereInputSchema.optional(),
}).strict() as z.ZodType<Omit<Prisma.OtpUpdateManyArgs, "data"> & { data: z.infer<typeof OtpUpdateManyMutationInputSchema> | z.infer<typeof OtpUncheckedUpdateManyInputSchema> }>;

export const OtpDeleteManyArgsSchema: z.ZodType<Prisma.OtpDeleteManyArgs> = z.object({
  where: OtpWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.OtpDeleteManyArgs>;