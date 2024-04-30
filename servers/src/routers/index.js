const homeRouter = require("./homeRouter");
const userRouter = require("../routers/auth_routes/userRoutes");
const allCodeRouter = require("./allCode_routers/allCodeRouter");
const appRouter = (app) => {
  app.use("/", homeRouter);
  app.use("/api/", userRouter);
  app.use("/allCode/", allCodeRouter);
};

module.exports = appRouter;
