const Filter = require("../models/filter")
const asyncHandler = require("express-async-handler");
const filterController = {
      getAllFilter: asyncHandler(async (req, res) => {
    const getFilter = await Filter.find({"Product.category" : "keyboard"} )
    res.send(getFilter);
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