import { Request, Response, NextFunction } from 'express';
import Joi, { ObjectSchema } from 'joi';

const registerValidation = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });


const loginValidation = Joi.object({
    username:Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });


const checkpostcreatedata =Joi.object({
  content: Joi.string().required(),
  caption:Joi.string().min(5).max(50).required()
})  


const validatedata = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    req.body = value;
    next();
  };
};



export const registerUserMiddleware = validatedata(registerValidation);
export const loginUserMiddleware = validatedata(loginValidation);
export const checkpostmiddleware = validatedata(checkpostcreatedata);