import { db as prisma } from "@/lib/db";
import { createTenantSchema } from "@/schemas";
import { z } from "zod";

export const createTenant = async (
    values: z.infer<typeof createTenantSchema>) => {

    const validatedFields = createTenantSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
      }

    const {cpf, email, name, number } =
        validatedFields.data;

    try {
        const newTenant = await prisma.tenant.create({
            cpf, 
            email, 
            name, 
            number
        });

        return newTenant;
    } catch (error) {
        console.log(error);
        return error;
    }
}