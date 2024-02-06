import { db as prisma } from "@/lib/db";

export const getTenant = async (id:string) =>{
    try {
        const tenant = await prisma.tenant.findUnique({
            where:{id:id},
        });

        if (!tenant) {
            return {error: "can't find this tenant"};
        }

        return tenant
    } catch (error) {
        console.log(error);
        return error;
    }
}