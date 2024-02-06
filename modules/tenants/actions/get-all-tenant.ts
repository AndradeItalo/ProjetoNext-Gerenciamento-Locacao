import { db as prisma } from "@/lib/db";

export const getAllTenant = async () =>{
    try {
        const tenants = await prisma.tenant.findMany();

        if (!tenants) {
            return {error: "can't find any tenant"}
        }

        return tenants
        
    } catch (error) {
        console.log(error);
        return error;
    }
}