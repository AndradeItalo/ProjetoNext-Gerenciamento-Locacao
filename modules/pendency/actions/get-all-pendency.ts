import { db as prisma } from "@/lib/db";

export const getAllPendency = async () => {
    try {
        const pendencys = await prisma.pendency.findMany();
        
        if (!pendencys) {
            return {error: "can't find this pendency"};
        }

        return pendencys;
    } catch (error) {
        console.log(error);
        return error;
    }
}