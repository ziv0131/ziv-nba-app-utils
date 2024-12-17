import { z } from "zod";
import { numberValidation, stringifiedInteger } from "../validations";
import { teamSchema } from ".";

export const playerSchema = z.object({
  id: numberValidation(false),
  first_name: z.string(),
  last_name: z.string(),
  position: z.enum(["G", "F", "C", "G-F", "F-C"]),
  height: z.string().regex(/^[0-9]-(1[0-2]|[0-9])$/),
  weight: stringifiedInteger,
  jersey_number: stringifiedInteger,
  college: z.string(),
  country: z.string(),
  draft_year: z.number().int().optional(),
  draft_round: z.number().int().optional(),
  draft_number: z.number().int().optional(),
  team: teamSchema,
});

export type Player = z.infer<typeof playerSchema>;
