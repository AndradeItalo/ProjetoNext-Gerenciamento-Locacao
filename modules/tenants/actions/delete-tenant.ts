import { db as prisma } from "@/lib/db";

export const deleteTenant = async (id:string) => {
    try {
        await prisma.tenant.delete({
            where: {id:id},
        });
        
    } catch (error) {
        console.log(error);
        return error;
    }
}