const cors = require("cors");
const express = require("express");
const mongoose = require('mongoose').default;
const dungeonsRoute = require("./routes/duties/dungeons/dungeons");
const trialsRoute = require("./routes/duties/trials/trials");
const trialsExtremeRoute = require("./routes/duties/trials/trials_extreme");
const normalRaidsRoute = require("./routes/duties/normal-raids/normal-raids");
const normalRaidsSavageRoute = require("./routes/duties/normal-raids/normal-raids-savage");
const allianceRaidsRoute = require("./routes/duties/alliance-raids/alliance-raids");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/duntri/dungeons", dungeonsRoute);
app.use("/duntri/trials", trialsRoute);
app.use("/duntri/trials-extreme", trialsExtremeRoute);
app.use("/duntri/normalraids", normalRaidsRoute);
app.use("/duntri/normalraids-savage", normalRaidsSavageRoute);
app.use("/duntri/allianceraids", allianceRaidsRoute);

async function main() {
    await mongoose.connect('mongodb+srv://Dmytro:aa4125nt@duntri.wctyzdx.mongodb.net/DuntriDuties?retryWrites=true&w=majority');
}

mongoose.connection.once("open", () => console.log("Mongo Database is connected now!"));
main().catch(err => console.log(err));

const port = 5000;

app.listen(port, () => {
    console.log('Server is running on localhost: ' + port);
});