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