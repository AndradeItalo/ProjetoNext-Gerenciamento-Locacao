import { db as prisma } from "@/lib/db";

export const getHouse  = async (id:string) =>{
  try {
    const house = await prisma.immobile.findUnique({
      where: {id:id},
    });;

    if (!house) {
      return {error: "can't find this house!"};
    }

    return house;
  } catch (error) {
    return error;
  }
}

