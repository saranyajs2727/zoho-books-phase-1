// Require external mongoose modules
const mongoose = require("mongoose");
const fastifyCors = require("fastify-cors");

// Connect to DB
mongoose
  .connect(
    "mongodb+srv://zoho:zoho@cluster0.h6jnt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected…"))
  .catch((err) => console.log(err));

// Require the fastify framework and instantiate it
const fastify = require("fastify")({ logger: true });
fastify.register(fastifyCors, {});
// Import routes
const Item = require("./routes/Item");
const estimates = require("./routes/Estimate");
const customer = require("./routes/Customer");
const sale = require("./routes/Sales");
const invoice = require("./routes/Invoice");
const purchase = require("./routes/PurchaseOrder");
const vendor = require("./routes/Vendor");

Item.forEach((route) => {
  fastify.route(route);
});
estimates.forEach((route) => {
  fastify.route(route);
});
customer.forEach((route) => {
  fastify.route(route);
});
sale.forEach((route) => {
  fastify.route(route);
});
invoice.forEach((route) => {
  fastify.route(route);
});
purchase.forEach((route) => {
  fastify.route(route);
});
vendor.forEach((route) => {
  fastify.route(route);
});

// Decalaring a route
fastify.get("/", async (req, res) => {
  return { hello: "world" };
});

// Import Swagger Options
const swagger = require("./config/swagger");
// Register Swagger
fastify.register(require("fastify-swagger"), swagger.options);

// Running the server
const start = async () => {
  try {
    await fastify.listen(8080);
    fastify.swagger();
    fastify.log.info(`listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.console.error(err);
    process.exit(1);
  }
};
start();
