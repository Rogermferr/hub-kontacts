import { z } from "zod";

export const registerContactSchema = z.object({
  fullName: z
    .string()
    .min(
      10,
      "O nome completo é obrigatório e deve ter no mínimo 10 caracteres"
    ),
  telephone: z
    .string()
    .min(12, "O telefone é obrigatório e deve ter no mínimo 12 números")
    .max(15, "O telefone deve ter no máximo 15 numéros"),
});
