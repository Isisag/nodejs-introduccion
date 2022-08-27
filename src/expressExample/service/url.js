const UserService = require('./user')
const { nanoid } = require('nanoid');
const { mongo:{ queries } }  = require('../database');
const { url: { saveUrl, getOneUrl } } = queries

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
            throw new Error('Missing userId')


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
            throw new Error('Missing id ')
        }

        const foundUrl = await getOneUrl(this.#id)

        if(!foundUrl){
            throw new Error('Url not found')
        }

        return foundUrl;
    }


}



module.exports = UrlService