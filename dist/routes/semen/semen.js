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
const semen_models_1 = require("./semen.models");
const router = express_1.default.Router();
router.post("", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const semen = req.body;
    const bullId = req.body.bullId;
    const semenFromDb = yield prisma_1.default.semen.create({
        data: {
            number: semen.number,
            bull: {
                connect: {
                    id: bullId
                }
            }
        },
        include: {
            bull: true
        }
    });
    res.json(new semen_models_1.SemenResponseWithBull(semenFromDb));
}));
exports.default = router;
