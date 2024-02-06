import { db as prisma } from "@/lib/db"
import { updateHouseSchema } from "@/schemas";
import { z } from "zod";

export const updateHouse = async (id: string, values: z.infer<typeof updateHouseSchema>) => {
    const validatedFields = updateHouseSchema.safeParse(values);

    if (!validatedFields.success){
        return {error: "Invalid fields!"}
    }

    try {
        const updatedHouse = await prisma.immobile.update({
            where: {id: id},
            data: validatedFields.data});

        return {success: "House Updated", data: updatedHouse}
    } catch (error) {
        return "Error updating house"
    }
};