import { z } from "zod";

export const registerContactSchema = z.object({
  fullName: z.string().min(1, "O nome completo é obrigatório"),
  telephone: z.string().min(1, "O telefone é obrigatório"),
});
