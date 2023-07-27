import { z } from "zod";

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(
        10,
        "O nome completo é obrigatório e deve ter no mínimo 10 caracteres"
      ),
    email: z
      .string()
      .min(1, "O e-mail é obrigatório")
      .email("O e-mail é obrigatório"),
    password: z
      .string()
      .min(8, "A senha é obrigatória e precisa de no mínimo 8 caracteres"),
    passwordConfirmation: z
      .string()
      .min(1, "A confirmação de senha é obrigatória"),
    telephone: z
      .string()
      .min(12, "O telefone é obrigatório e deve ter no mínimo 12 números")
      .max(15, "o telefone deve ter no máximo 15 números"),
  })
  .refine(
    ({ password, passwordConfirmation }) => password === passwordConfirmation,
    {
      message: "As senhas precisam corresponderem",
      path: ["passwordConfirmation"],
    }
  );
