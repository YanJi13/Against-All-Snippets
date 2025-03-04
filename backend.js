import express from 'express'
import {InitializePlayerInfo, AddKillCount, GetKillCount, ResetInfo} from './db.js'

const app = express();
app.use(express.json());

const userName = "YanJi13"

// create
app.post('/init', async (req, res) => {
    const playerInfo = await InitializePlayerInfo(userName);
    res.send(playerInfo);
})
// read
app.get('/get_kc', async (req, res) => {
    const playerkillCount = await GetKillCount(userName);
    res.send(playerkillCount);
})
// update
app.put('/add_kc', async (req, res) => {
    const addedKillCount = await AddKillCount(userName);
    res.send(addedKillCount);
})
// delete
app.delete('/reset', async (req, res) => {
    const deletion = await ResetInfo(userName);
    res.send("deletion successful");
})

app.use(express.static("public"));
app.listen(3000, () =>{
    console.log("Server is running on port 3000");
})