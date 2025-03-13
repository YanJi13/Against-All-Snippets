# Against All Snippets
Against All Snippets is a JS port of [TraceQuest](https://github.com/YanJi13/TraceQuest-v1), a simple game written in  C#

Against All Snippets is a web app designed to teach code tracing to beginner programmers and to help experienced programmers hone their skills. The web app is designed to be like an RPG (role-playing game) where you defeat enemies by solving code tracing problems.

The inspiration behind this web app are online practice tools like Monkeytype, LeetCode, and Flexbox Froggy. And the theme inspiration are fantasy RPG games and media which gave me the idea to implement a scoring system just like in a game to make the experience more interactive and immersive.

# Installation

1. Download [Node.js](https://nodejs.org/en/download) and [XAMPP](https://www.apachefriends.org/download.html)
2. Clone repository
3. Install dependencies
```
npm install
```
# Setting up the DB
1. Open XAMPP
2. Turn on MySQL and Apache (for phpMyAdmin)
3. Open phpMyAdmin and import _user_info.sql_
4. Configure the .env file by changing the database variable to your db's name (ex. yanjidb)
   
# Running the Program
With Node:
   
```
node backend.js
```
With Nodemon:

```
npm run dev
```
