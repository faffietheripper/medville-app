import { z } from "zod";

export const addDoctorValidator = z.object({
  email: z.string().email(),
});
