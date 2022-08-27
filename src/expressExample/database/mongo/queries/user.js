const { UserModel } = require('../models');

/**
 *
 * @param {String} id
 * @param {String} link
 */

 const getAllUsers = async () => {
    const users = await UserModel.find()
    return users
}

const saveUser = async (user) => {
  const savedUser = new UserModel(user);
  await savedUser.save()
  return savedUser
}

const getOneUser = async id => {
    const users = await UserModel.find({id})
    return users[0]
}

const removeOneUser = async id => {
    const user = await  UserModel.findOneAndRemove({ id })
    console.log(user)
}
/**
 * 
 * @param {Object} user
 * @param {String} user.id
 * @param {String | undefined} user.name
 * @param {String | undefined} user.lastName
 * @param {String | undefined} user.email 
 */
const updateOneUser = async (user) => {
    const {id,name,lastName, email} = user
    const userUpdated = await UserModel.findOneAndUpdate(
        { id }, 
        {name, lastName, email},
        {new: true}
        )
    
        return userUpdated
}



module.exports = {
    saveUser,
    getOneUser,
    removeOneUser,
    getAllUsers,
    updateOneUser
}