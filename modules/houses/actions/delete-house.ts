import { db as prisma } from "@/lib/db"
import { Immobile } from "@prisma/client";

const delHouse = async (immobile: Immobile) => {
    try {
        const deleteHouse = await prisma.immobile.delete({where: {id:immobile.id}});


    } catch (error) {
        return 
    }
}