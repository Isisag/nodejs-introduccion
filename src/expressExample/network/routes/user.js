// realiza rutas en express
const { Router } = require("express");
const users = require("../../data/users");
const articles = require("../../data/articles");
const { nanoid } = require('nanoid');
const { mongo:{ queries } } = require('../../database')

const response = require("./response");
const { saveUser, removeOneUser, updateOneUser, getOneUser } = require("../../database/mongo/queries/user");

const userRouter = Router();
const { user: {getAllUsers} } = queries

userRouter.route("/user")  
.get( async (req, res, ) => {
    try {
    await getAllUsers()
    response({error:false, message: await getAllUsers(), res, status: 200})

    } catch (error) {
      console.log(error)
      response({error, message: 'Internal server error', res, status: 500})
    }
})
.post( async (req, res) => {
  try {
        const { body: { name, lastName, email } } = req;
         await saveUser({
          id: nanoid(6),
          name,
          lastName,
          email
        })
      response({error:false, message: await getAllUsers(), res, status: 201})

      } catch (error) {
        console.log(error)
        response({error, message: 'Internal server error', res, status: 500})
      }
})

userRouter.route("/user/:id")
.get( async (req,res) => {
  try {
    const { body: { id }} = req
    await getOneUser(id)
  } catch (error) {
    console.log(error)
    response({error, message: 'Internal server error', res, status: 500})
  }
})
.delete( async (req , res) => {
  const { params:{ id } } = req;
  try {
    await removeOneUser(id)
    response({error:false, message: users,res, status:200 })
    
  } catch (error) {
    console.log(error)
    response({error, message: 'Internal server error', res, status: 500})

  }


})
.patch( async (req,res) => {
  const { body:{ name, lastName, email }, 
  params:{ id } } = req;

  try {
    await updateOneUser({
      id,
      name,
      lastName,
      email
    })

  response({error:false, message: users,res, status:200 })
    
  } catch (error) {
    console.log(error)
    response({error, message: 'Internal server error', res, status: 500})
  }
  
})


module.exports = userRouter;


/* * 
librerias para validacion de correo 
joi
express-validator
zod
typebox
*/