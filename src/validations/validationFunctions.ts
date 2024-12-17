import { z } from "zod";

const isNumber = (num: number) => !isNaN(num);

const isNumberPositive = (num: number) => num > 0;

const isNumberInteger = (num: number) => Number.isInteger(num);

const numberValidation = (isOptional: boolean, defaultValue?: number) => {
  let schema = z.string();
  if (isOptional) {
    schema.optional();
  }

  if (!!defaultValue) {
    schema.default(defaultValue.toString());
  }

  return schema
    .transform((num: string) => Number(num))
    .refine((num: number) => isNumber(num), { message: "must be a number" })
    .refine((num: number) => isNumberInteger(num), {
      message: "must be an integer",
    })
    .refine((num: number) => isNumberPositive(num), {
      message: "must be a positive number",
    });
};

const stringifiedInteger = z.string().regex(/^\d+$/);

export {
  isNumber,
  isNumberPositive,
  isNumberInteger,
  numberValidation,
  stringifiedInteger,
};
