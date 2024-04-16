const homeRouter = require("./homeRouter");

const appRouter = (app) => {
  app.use("/", homeRouter);
};

module.exports = appRouter;
