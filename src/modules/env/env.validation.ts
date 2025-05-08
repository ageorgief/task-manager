import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  PORT: Joi.number().required(),
  DB_URL: Joi.string().uri().required(),
});
