const express = require("express");
const personController = require("../controllers/personController");
const router = express.Router();

module.exports = () => {
  router.use(function (req, res, next) {
    console.log('request started');
    next();
  });

  router.get("/addperson", personController.savePerson);
  router.get("/createpersons", personController.createPerson);
  router.get("/persons", personController.getAllPerson);
  router.get("/findperson", personController.findOnePerson);
  router.get("/findPersonById", personController.findOnePersonById);
  router.get("/findPersonByIdandUpdate", personController.findOnePersonByIdAndUpdate);
  router.get("/findPersonByIdandDelete", personController.findOnePersonByIdAndDelete);

  


  return router;
};





