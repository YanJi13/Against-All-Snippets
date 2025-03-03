import express from 'express'
import {initializePlayerInfo, addKillCount, getKillCount, resetInfo} from './db.js'

const app = express();

// create
app.post('/init', async (req, res) => {
    const playerInfo = await initializePlayerInfo("YanJi");
    res.send(playerInfo);
})
// read
app.get('/get_kc', async (req, res) => {
    const playerkillCount = await getKillCount();
    res.send(playerkillCount);
})
// update
app.put('/add_kc', async (req, res) => {
    const addedKillCount = await addKillCount();
    res.send(addedKillCount);
})
// delete
app.delete('/reset', async (req, res) => {
    const deletion = await resetInfo();
    res.send("deletion successful");
})


app.listen(3000, () =>{
    console.log("Server is running on port 3000");
})