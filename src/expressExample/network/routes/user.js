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
.get( async (req, res, next) => {
    try {
    await getAllUsers()
    response({error:false, message: await getAllUsers(), res, status: 200})

    } catch (error) {
      next(error)
    }
})
.post( async (req, res, next) => {
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
        next(error)
      }
})

userRouter.route("/user/:id")
.get( async (req,res, next) => {
  try {
    const { body: { id }} = req
    await getOneUser(id)
  } catch (error) {
      next(error)
  }
})
.delete( async (req , res, next) => {
  const { params:{ id } } = req;
  try {
    await removeOneUser(id)
    response({error:false, message: users,res, status:200 })
    
  } catch (error) {
    next(error)

  }


})
.patch( async (req,res, next ) => {
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
    next(error)
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