// realiza rutas en express
const { Router } = require("express");
const users = require("../../data/users");
const { nanoid } = require('nanoid')


const response = require("./response")

const userRouter = Router();
userRouter.route("/user") // definiendo la ruta user 
.all()
.get((req,res)=>{
  response({error:false, message: users,res, status:201 })
})  
.get((req, res, ) => {
    res.send({
      message: users,
      error: false,
    })
  })
.post((req, res) => {
    // const { body, params, query, headers, cookies } = req;
    const { body: { name, email } } = req;

    users.push({
      id: nanoid(),
      name,
      email,
    })

    //status code 201 => created
    response({error:false, message: users,res, status:201 })
  })

userRouter.route("/user/:id")
.delete((req , res)=>{
  const { params:{ id } } = req;
  // const userExists = Boolean(users.find((user)=> user.id === id))
  const userIndex = users.findIndex((user)=> user.id === id)

  // if(!userExists)
  if(userIndex === -1)
    return response({ 
      message: `user id ${id} was not found`,
      res,
      status: 404
    })
  
    users.splice(userIndex,1)
    response({error:false, message: users,res, status:200 })
})
.patch((req,res)=>{
  const { body:{ name, email }, 
  params:{ id } } = req;

  const userIndex = users.findIndex((user)=> user.id === id)

  if(userIndex === -1)
    return response({ 
      message: `user id ${id} was not found`,
      res,
      status: 404
    })

    const userWithUpdateData = {name, email}

    //reemplazando desde el index y cambiando la informacion
  users.splice(userIndex , 1), {
      ...users[userIndex],
      ...(name && {name}),
      ...(email && {email})
  }

  response({error:false, message: users,res, status:200 })
  
})

module.exports = userRouter;
