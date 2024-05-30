const homeRouter = require("./homeRouter");
const userRouter = require("../routers/auth_routes/userRoutes");
const allCodeRouter = require("./allCode_routers/allCodeRouter");
const doctorRouter = require("./doctor_routers/doctorRouter");
const appRouter = (app) => {
  app.use("/", homeRouter);
  app.use("/api/", userRouter);
  app.use("/allCode/", allCodeRouter);
  app.use("/apiDoctor/", doctorRouter);
};

module.exports = appRouter;
