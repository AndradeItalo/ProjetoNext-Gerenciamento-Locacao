import { db as prisma } from "@/lib/db";
import { pendency } from "@prisma/client";

export const createPendency = async (data:pendency) => {
    try {
        await prisma.pendency.create({data});
    } catch (error) {
        console.log(error);
        return error;
    }
}