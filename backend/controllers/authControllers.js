const argon2 = require('argon2')
const User = require("../models/User");

const authController = {
    
    //REGISTER
    registerUser: async(req, res) => {
        try{
           const hashedPassword = await argon2.hash(password)
    //Create new user
		const newUser = await new User({ 
            username: req.body.username,
            email: req.body.email, 
            password: hashedPassword 
        });
    //Save to DB
    const user = await newUser.save();
    res.status(200).json(User);
        } catch {
            res.status(500).json(err)

        }
    },
     //lOGIN
    loginUser: async(req, res) => {
        try{
                const user = await User.findOne({ username: req.body.username });
      if (!user) {
        res.status(404).json("Incorrect username");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        res.status(404).json("Incorrect password");
      }
        } catch {
            res.status(500).json(err)

        }
    }
}