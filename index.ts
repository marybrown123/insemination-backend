import express, { Request, Response } from "express";
import routerClient from "./routes/client/client"
import routerCow from "./routes/cow/cow"
import routerBull from "./routes/bull/bull"
import routerSemen from "./routes/semen/semen"
import routerInsemination from "./routes/insemination/insemination"

const app = express();
app.use(express.json());
app.use("/client", routerClient)
app.use("/cow", routerCow)
app.use("/bull", routerBull)
app.use("/semen", routerSemen)
app.use("/insemination", routerInsemination)
app.listen(3000, () => {
    console.log("Server started");
});


