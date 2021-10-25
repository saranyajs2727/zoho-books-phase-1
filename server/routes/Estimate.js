// Import controller
const estimateController = require("../controllers/estimateController");

const routes = [
  {
    method: "GET",
    url: "/estimates",
    handler: estimateController.getEstimate,
  },
  {
    method: "GET",
    url: "/estimates/:id",
    handler: estimateController.getSingleEstimate,
  },
  {
    method: "POST",
    url: "/estimates",
    handler: estimateController.addEstimate,
  },
  {
        method: 'PUT',
        url: '/estimates/:id',
        handler: estimateController.updateEstimate
    },
    {
        method: 'DELETE',
        url: '/estimates/:id',
        handler: estimateController.deleteEstimate
    }
];

module.exports = routes;