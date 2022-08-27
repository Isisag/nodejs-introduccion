// const { mongo:{ queries: {  user: { getOneUser } } } } = require('../database')
const httpErrors = require('http-errors')
const {mongo: { queries } } = require('../database')
const { user: {
      getOneUser
    }
  } = queries

class UserService {

    #userId
    
    constructor(userId = ''){
        this.#userId = userId
    }

    async verifyUserExist(){

        if(!this.#userId){
            // throw new Error('Missing require field - no userId' )
            throw new httpErrors.NotFound('User not found')
        }

        const user = await getOneUser(this.#userId)

        if(!user){
            // return false
            throw new Error('user id not found')
        }

        return user
    }

    
}


module.exports = UserService