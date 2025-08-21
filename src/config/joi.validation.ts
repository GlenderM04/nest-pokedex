import * as Joi from 'joi';

/**
 * Joi validation schema for environment variables
 * Esto valida las variables de entorno de la aplicación
 * Este se ejecuta primero antes del EnvConfiguration
 * Se asegura de que todas las variables necesarias estén presentes
 * y tengan el formato correcto
 *
 * Tanto el Joi como el EnvConfiguration pueden trabajar de la mano
 * para validar y cargar las variables de entorno de manera efectiva.
 */
export const JoiValidationSchema = Joi.object({
  MONGODB: Joi.string().required(),
  PORT: Joi.number().default(3000),
  DEFAULT_LIMIT: Joi.number().default(10),
});
