import { db as prisma } from "@/lib/db";
import { Tenant } from "@prisma/client";

export const createTenant = async (data:Tenant) => {
    try {
        await prisma.tenant.create({data});
    } catch (error) {
        console.log(error);
        return error;
    }
}