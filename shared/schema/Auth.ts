import {literal, nativeEnum, object, string, union} from 'zod';
import type {infer as zodInfer} from 'zod';

import {AccessLevel} from './constants/Auth';
import {clientConnectionSettingsSchema} from './ClientConnectionSettings';

export const authMethodSchema = union([literal('default'), literal('none')]);

export type AuthMethod = zodInfer<typeof authMethodSchema>;

export const credentialsSchema = object({
  username: string(),
  password: string(),
  client: clientConnectionSettingsSchema,
  level: nativeEnum(AccessLevel),
});

export type Credentials = zodInfer<typeof credentialsSchema>;

export type UserInDatabase = Required<Credentials> & {_id: string};
