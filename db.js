import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config();

const dbConn = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
}).promise();

// set up user info
export async function initializePlayerInfo(userName) {
    const playerInfo = await dbConn.query(`
        INSERT INTO user_info(
   	    user_id,
        user_enemy_killed,
        user_name
        )
        VALUES('', '', ?)
        `, [userName]);
    console.log("Initialization success")
    return playerInfo;
}

// add kill count every time player defeats an enemy
export async function addKillCount() {
    const addedKillCount = await dbConn.query(`
        UPDATE user_info 
        SET user_enemy_killed = user_enemy_killed + 1 
        WHERE user_id = '1'`);
    console.log("Kill counted")
    return addedKillCount;
}

// get the current kill count for the corresponding ID
export async function getKillCount() {
    const playerkillCount = await dbConn.query(`
        SELECT
        user_enemy_killed
        FROM
        user_info
        WHERE
        user_id = '1'
        `);
    console.log("Curent player kill count loaded");
    return playerkillCount;
}

// delete user info
export async function resetInfo() {
    const deletion = await dbConn.query(`
        TRUNCATE TABLE user_info
        `);
    console.log("deletion successful");
}
