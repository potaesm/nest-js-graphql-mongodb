import * as Joi from '@hapi/joi';

export const configValidationSchema = Joi.object({
  PORT: Joi.number().default(3000).required(),
  STAGE: Joi.string().required(),
  DB_URL: Joi.string().required(),
});
