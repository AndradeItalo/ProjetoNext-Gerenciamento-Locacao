import { db as prisma } from "@/lib/db"

export const delHouse = async (id: string) => {
    try {
        const deleteHouse = await prisma.immobile.delete({where: {id: id}});
        return {success: true, data: deleteHouse}

    } catch (error) {
        return "Con't find house"
    }
}