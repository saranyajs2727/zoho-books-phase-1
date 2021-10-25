// Import controller
const invoiceController = require("../controllers/invoiceController");

const routes = [
  {
    method: "GET",
    url: "/invoices",
    handler: invoiceController.getInvoice,
  },
  {
    method: "GET",
    url: "/invoices/:id",
    handler: invoiceController.getSingleInvoice,
  },
  {
    method: "POST",
    url: "/invoices",
    handler: invoiceController.addInvoice,
  },
  {
    method: "PUT",
    url: "/invoices/:id",
    handler: invoiceController.updateInvoice,
  },
  {
    method: "DELETE",
    url: "/invoices/:id",
    handler: invoiceController.deleteInvoice,
  },
];

module.exports = routes;
