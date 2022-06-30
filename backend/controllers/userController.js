const User = require("../models/User")
const userController = {

    deleteUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            res.status(200).json("Delete successfully");
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = userController;