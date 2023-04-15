import express from "express";
import routerClient from "./controllers/client.controller"
import routerCow from "./controllers/cow.controller"
import routerBull from "./controllers/bull.controller"
import routerSemen from "./controllers/semen.controller"
import routerInsemination from "./controllers/insemination.controller"

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


