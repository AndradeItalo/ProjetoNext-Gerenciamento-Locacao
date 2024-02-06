import { db as prisma } from "@/lib/db"
import { createHouseSchema } from "@/schemas";
import { z } from "zod";

export const createHouse = async (
    values: z.infer<typeof createHouseSchema>
  ) => {
    const validatedFields = createHouseSchema.safeParse(values);

    if (!validatedFields.success) {
      return { error: "Invalid fields!" };
    }
  
    const {cep, balcony, contract, financialPending, height, numberBathroom, numberHouse, numberRooms
    , payday, rent, serviceArea, width } =
      validatedFields.data;

      try {
        const newHouse = await prisma.immobile.create({
          cep,
          balcony,
          contract,
          financialPending,
          height,
          numberBathroom,
          numberHouse,
          numberRooms,
          payday,
          rent,
          serviceArea,
          width,
        });
        
        return newHouse;

    } catch (error) {
        return "Error creating House";
    }
  }