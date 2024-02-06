import { db as prisma } from "@/lib/db";
import { Tenant } from "@prisma/client";

export const updateTenant = async (id:string, tenantData:Tenant) =>{
    try {
        await prisma.tenant.update({
            where: {id:id},
            data: tenantData
        })

    } catch (error) {
        console.log(error);
        return error;
    }
} 