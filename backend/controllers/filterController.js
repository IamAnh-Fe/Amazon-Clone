const Filter = require("../models/filter")
const asyncHandler = require("express-async-handler");
const filterController = {
      getFilter: asyncHandler(async (req, res) => {
    const getFilter = await Filter.find({  "category": req.params.category} )
     if (getFilter) {
      return res.status(200).send(getFilter);
    } else {
      res.send("error getFilter");
    }
   
  }),

    postFilter: asyncHandler(async (req, res) => {

   const newFilter = new Filter(req.body);
   const saveFilter = await newFilter.save()
  if (newFilter) {
      return res
        .status(200)
        .send({ message: "New filter Created", saveFilter });
    } else {
      res.send("error add filter");
    }
    }),
}
module.exports = filterController;