import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config();

const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
}).promise();

// Set up user info
export async function InitializePlayerInfo(userName) {
    const [result] = await db.query(`
        INSERT INTO user_info(user_name, user_enemy_killed)
        VALUES(?, 0)
    `, [userName]);
    console.log("Initialization success");
    return { success: true, userId: result.insertId };
}

// Add kill count every time player defeats an enemy
export async function AddKillCount(userName) {
    await db.query(`
        UPDATE user_info 
        SET user_enemy_killed = user_enemy_killed + 1 
        WHERE user_name = ?
    `, [userName]);
    
    // Get the updated kill count
    const [[{ user_enemy_killed }]] = await db.query(`
        SELECT user_enemy_killed FROM user_info WHERE user_name = ?
    `, [userName]);
    
    console.log("Kill counted:", user_enemy_killed);
    return { newKillCount: user_enemy_killed };
}

// Get the current kill count for the corresponding ID
export async function GetKillCount(userName) {
    const [[result]] = await db.query(`
        SELECT user_enemy_killed FROM user_info WHERE user_name = ?
    `, [userName]);
    const killCount = result ? result.user_enemy_killed : 0;
    console.log("Current player kill count:", killCount);
    return { killCount };
}

// Delete user info
export async function ResetInfo(userName) {
    await db.query(`
        DELETE FROM user_info WHERE user_name = ?
    `, [userName]);
    console.log("Deletion successful");
    return { success: true };
}

