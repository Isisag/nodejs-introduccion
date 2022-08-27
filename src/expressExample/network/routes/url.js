// realiza rutas en express
const { Router } = require('express');
const { UrlService } = require('../../service')
const response = require('./response')

const urlRouter = Router();
urlRouter.route('/url/:userId').post( async (req, res) => {

    const { body: { link }, params:{ userId } } = req
    const urlService = new UrlService({link, userId})

    try{
        const result = await urlService.saveUrl()

        response({ 
            error: false, 
            message: result,
            res, 
            status:201 
        })    
        
    } catch (error) {
        console.log(error)
        response({error, message: 'no se pudo insertar la url',res, status:500 })    
    }

  })

urlRouter.route('/url/:id')
.get(async (  req , res)=>{
  const { params:{ id } } = req;
  const urlService = new UrlService({id})
  
  
  try {
    const url = await urlService.getOneUrl()
    res.redirect(url.link)

    console.log('url', url)
  } catch (error) {
    console.log(error)
    response({message: "Internal server error", res})
  }
})

module.exports = urlRouter;




