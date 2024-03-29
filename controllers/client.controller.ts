import express, { Request, Response } from "express";
import { makeValidateBody } from 'express-class-validator'
import { ClientService } from "../services/client.service";
import { CreateClientDto } from "../DTOs/create-client.dto";
import { UpdateClientDto } from "../DTOs/update-client.dto";

const router = express.Router();

const clientService = new ClientService();

router.post("/", async (req: Request, res: Response) => {
    const client: CreateClientDto = req.body;
    const clientResponse = await clientService.create(client);
    res.json(clientResponse);
})

router.get("/list", async (req: Request, res: Response) => {
    const clientsResponse = await clientService.list();
    res.json(clientsResponse);
})

router.delete("/delete/:id", async (req: Request, res: Response) => {
    const clientId: number = Number(req.params.id);
    const clientFromDb = await clientService.getById(clientId);
    if(!clientFromDb){
        return res.status(404).send("Client does not exist");
    }
    await clientService.delete(clientId);
    res.send("Client deleted");
})

router.patch("/patch/:id", async (req: Request, res: Response) => {
    const clientId: number = Number(req.params.id);
    const newClient: UpdateClientDto = req.body;
    const clientToBeUpdated = await clientService.getById(clientId);
    if(!clientToBeUpdated) {
        return res.status(404).send("Client does not exist");
    }
    const adressId = clientToBeUpdated.adressId;
    const updatedClient = await clientService.update(adressId, clientId, newClient);
    res.json(updatedClient);
})

export default router;