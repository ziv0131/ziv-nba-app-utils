import { z } from "zod";
import { numberValidation } from "../validations";

export const teamSchema = z.object({
  id: numberValidation(false),
  conference: z.enum(["East", "West"]),
  division: z.string(),
  city: z.string(),
  name: z.string(),
  full_name: z.string(),
  abbreviation: z.string(),
});

export type Team = z.infer<typeof teamSchema>;
