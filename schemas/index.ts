import { z } from "zod";


export const createHouseSchema = z.object({
    cep: z.string().min(1, { message: "Por favor insira um CEP válido"}),
    contract: z.string().min(1, { message: "Por favor insira um contrato válido"}),
    numberHouse: z.string().min(1, { message: "Por favor insira o Número da Casa"}),
    width: z.number().min(1, { message: "Por favor insira a largura da Casa"}),
    height: z.number().min(1, { message: "Por favor insira a altura da Casa"}),
    numberRooms: z.number().min(1, { message: "Por favor insira o número de quartos da Casa"}),
    numberBathroom: z.number().min(1, { message: "Por favor insira o número de banheiro da Casa"}),
    serviceArea: z.boolean(),
    balcony: z.boolean(),
    rent: z.number().min(1, { message: "Por favor insira o valor do aluguel"}),
    financialPending: z.boolean(),
    payday: z.date()
})

export const updateHouseSchema = z.object({
    cep: z.string().optional(),
    contract: z.string().optional(),
    numberRooms: z.number().optional(),
    numberBathroom: z.number().optional(),
    serviceArea: z.boolean().optional(),
    balcony: z.boolean().optional(),
    rent: z.number().optional(),
    financialPending: z.boolean().optional(),
    payday: z.date().optional()
})

export const createTenantSchema = z.object({
    cpf: z.string().min(1, { message: "Por favor insira o CPF"}),
    name: z.string().min(1, { message: "Por favor insira o nome"}),
    number: z.string().min(1, {message: "Por favor insira o número"}),
    email: z.string().min(1, {message: "Por favor insira o email"}),
});

export const updateTenantSchema = z.object({
    cpf: z.string().optional(),
    name: z.string().optional(),
    number: z.string().optional(),
    email: z.string().optional()
})