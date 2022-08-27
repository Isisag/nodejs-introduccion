const response = require("../network/routes/response");
const httpErrors = require("http-errors");

const { userRouter, urlRouter } = require("./routes");

const routers = [userRouter, urlRouter];

/**
 * @param {import('express')} app 
 */
const applyRoutes = (app) => {
  routers.forEach((router) => app.use("/api", router));

  //handdling 404 errors

  app.use((req, res, next) => {
    next(new httpErrors.NotFound("esta ruta no existe !"));
  });

  //handdling errors

  app.use((error, req, res, next) => {
    console.log('error', error)
    response({
      error,
      message: error.message || 'Internal server error! ',
      res,
      status: error.status || 500
    });
    next()
  });
};

module.exports = applyRoutes
