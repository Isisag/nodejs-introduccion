const UserService = require('./user')
const { nanoid } = require('nanoid');
const httpErrors = require('http-errors')
const { mongo: { queries } } = require('../database')
const { url: { getOneUrl }} = queries

class UrlService {

    #id
    #link
    #userId

    constructor(args) {
        const { id = '', link = '', userId = '' } = args
    
        this.#id = id
        this.#link = link
        this.#userId = userId
      }

    async saveUrl(){
        if(!this.#userId)
            throw new httpErrors.NotFound('user was not found')


        const userService = new UserService(this.#userId)
        const foundUser = await userService.verifyUserExist()
      

        const newUrl = await  saveUrl({
            id: nanoid(6),
            link: this.#link,
            userId: foundUser._id    
            // id de mongoi
        })
        return newUrl.toObject();



    }

    async getOneUrl(){

        if(!this.#id){
            throw new httpErrors.BadRequest('Missing id ')
        }

        const foundUrl = await getOneUrl(this.#id)

        if(!foundUrl){
            throw new httpErrors.NotFound('Url not found')
        }

        return foundUrl;
    }


}



module.exports = UrlService