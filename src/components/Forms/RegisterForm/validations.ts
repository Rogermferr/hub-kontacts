import { z } from "zod";

export const registerSchema = z
  .object({
    fullName: z.string().min(1, "O nome completo é obrigatório"),
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
    telephone: z.string().min(1, "O telefone é obrigatório"),
  })
  .refine(
    ({ password, passwordConfirmation }) => password === passwordConfirmation,
    {
      message: "As senhas precisam corresponderem",
      path: ["passwordConfirmation"],
    }
  );
