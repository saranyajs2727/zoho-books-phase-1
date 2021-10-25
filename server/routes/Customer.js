// Import controller
const customerController = require("../controllers/customerController");

const routes = [
  {
    method: "GET",
    url: "/customers",
    handler: customerController.getCustomer,
  },
  {
    method: "GET",
    url: "/customers/:id",
    handler: customerController.getSingleCustomer,
  },
  {
    method: "POST",
    url: "/customers",
    handler: customerController.addCustomer,
  },
  {
    method: "PUT",
    url: "/customers/:id",
    handler: customerController.updateCustomer,
  },
  {
    method: "DELETE",
    url: "/customers/:id",
    handler: customerController.deleteCustomer,
  },
];

module.exports = routes;
