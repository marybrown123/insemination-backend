"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = __importDefault(require("../../prisma"));
const client_models_1 = require("./client.models");
const router = express_1.default.Router();
router.post("", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = req.body;
    const adressFromDB = yield prisma_1.default.adress.create({
        data: {
            city: client.adress.city,
            street: client.adress.street,
            streetNumber: client.adress.streetNumber,
            postCode: client.adress.postCode
        }
    });
    const clientFromDB = yield prisma_1.default.client.create({
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
    });
    res.json(new client_models_1.ClientResponseWithAdress(clientFromDB));
}));
router.get("/list", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientList = yield prisma_1.default.client.findMany({
        include: {
            adress: true
        }
    });
    const clientsToBeReturned = clientList.map(client => {
        return new client_models_1.ClientResponseWithAdress(client);
    });
    res.json(clientsToBeReturned);
}));
exports.default = router;
