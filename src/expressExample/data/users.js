const { nanoid }= require("nanoid");
const articles = require("./articles");


const users = [
    {
        id: nanoid(),
        name: "isis",
        email: "isis@gmail.com",
        article: articles
    }
]

module.exports = users;