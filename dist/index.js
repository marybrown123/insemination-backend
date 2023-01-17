"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = __importDefault(require("./routes/client/client"));
const cow_1 = __importDefault(require("./routes/cow/cow"));
const bull_1 = __importDefault(require("./routes/bull/bull"));
const semen_1 = __importDefault(require("./routes/semen/semen"));
const insemination_1 = __importDefault(require("./routes/insemination/insemination"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/client", client_1.default);
app.use("/cow", cow_1.default);
app.use("/bull", bull_1.default);
app.use("/semen", semen_1.default);
app.use("/insemination", insemination_1.default);
app.listen(3000, () => {
    console.log("Server started");
});
