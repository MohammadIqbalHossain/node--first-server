const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());


const users = [
    {id:1, name: "shaban", email: "shaban@gamil.com", phone: 954095},
    {id:2, name: "srabni", email: "srabni@gamil.com", phone: 954095},
    {id:3, name: "Srikanto", email: "Srikanto@gamil.com", phone: 954095},
    {id:4, name: "Srimoyee", email: "Srimoyee@gamil.com", phone: 954095},
    {id:5, name: "Sridam", email: "Sridam@gamil.com", phone: 954095},
    {id:6, name: "Srinak", email: "Srinak@gamil.com", phone: 954095},
]

app.get('/', (req, res) => {
    res.send("Hello man this is my own, I alomos wrote it my own, hmmm, it shlould work");
})

app.get("/users", (req, res) => {
    res.send(users)
})

app.get("/user/:id", (req, res)=> {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
     res.send(user);
});

app.post("/user", (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = user.length + 1;
    users.push(user);
    res.send(user);
})


app.listen(port, () => {
    console.log("Listening from port", port)
})