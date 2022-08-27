const { UrlModel } = require('../models');

/**
 *
 * @param {Object} url
 * @param {String} url.id
 * @param {String} url.link
 * @param {String} url.userId // MONGO USER ID
 */

const saveUrl = async url => {
  const savedUrl = new UrlModel(url)

  await savedUrl.save()
  
  return savedUrl
}

const getOneUrl = async id => {
    const urls = await UrlModel.find({id}).populate('userId')
    return urls[0]
}

module.exports = {
    saveUrl,
    getOneUrl
}