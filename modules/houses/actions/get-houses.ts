import { db as prisma } from "@/lib/db"

const getHouses = async () => {
    try {
        const houses = await prisma.immobile.findMany()
        if(!houses){
            return {error: "Can't find any houses!"};
        }
        return houses
    } catch (error) {
        return "error";
    }
} 

