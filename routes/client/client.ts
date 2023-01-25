import express, { Request, Response } from "express";
import prisma from "../../prisma";
import { ClientDto, ClientResponseWithAdress, ClientResponseWithCows } from "./client.models";

const router = express.Router();

router.post("", async (req: Request, res: Response) => {
    const client: ClientDto = req.body;
    const adressFromDB = await prisma.adress.create({
        data: {
            city: client.adress.city,
            street: client.adress.street,
            streetNumber: client.adress.streetNumber,
            postCode: client.adress.postCode
        }
    })
    const clientFromDB = await prisma.client.create({
        data: {
            name: client.name,
            secondName: client.secondName,
            adress: {
                connect: {
                    id: adressFromDB.id
                }
            }
        },
        include: {
            adress: true
        }
    })
    res.json(new ClientResponseWithAdress(clientFromDB));
})

router.get("/list", async (req: Request, res: Response) => {
    const clientList = await prisma.client.findMany({
        include: {
            adress: true
        }
    });
    const clientsToBeReturned = clientList.map(client => {
        return new ClientResponseWithAdress(client)
    })
    res.json(clientsToBeReturned);
})

router.get("/listWithCows", async (req: Request, res: Response) => {
    const clientList = await prisma.client.findMany({
        include: {
            cows: true
        }
    })
    const clientsToBeReturned = clientList.map(client => {
        return new ClientResponseWithCows(client);
    })
    res.json(clientsToBeReturned);
})

router.delete("/delete/:id", async (req: Request, res: Response) => {
    const clientId: number = Number(req.params.id);
    const clientFromDb = await prisma.client.findFirst({
        where: {
            id: clientId
        }
    })
    if(!clientFromDb){
        return res.status(404).send("Client does not exist");
    }
    await prisma.client.delete({
        where: {
            id: clientId
        }
    })
    res.send("Client deleted");
})

export default router;