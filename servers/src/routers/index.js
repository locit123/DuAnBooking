const homeRouter = require("./homeRouter");
const userRouter = require("../routers/auth_routes/userRoutes");
const appRouter = (app) => {
  app.use("/", homeRouter);
  app.use("/api/", userRouter);
};

module.exports = appRouter;
