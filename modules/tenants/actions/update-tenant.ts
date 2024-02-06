import { db as prisma } from "@/lib/db";
import { updateTenantSchema } from "@/schemas";
import { z } from "zod";

export const updateTenant = async (id: string, values: z.infer<typeof updateTenantSchema>) =>{
    const validatedFields = updateTenantSchema.safeParse(values);

    if (!validatedFields.success){
        return {error: "Invalid fields!"}
    }

    try {
        const updatedTenant = await prisma.tenant.update({
            where: {id:id},
            data: validatedFields.data
        });

        return updatedTenant;
    } catch (error) {
        return "Error updating tenant"
    }
} 