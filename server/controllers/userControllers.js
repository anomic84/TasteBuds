const { User } = require("../models");
const { signToken } = require('../utils/auth')

module.exports = {
  async createUser(req, res) {
    await User.create(req.body)
      .then((user) =>{ 
        const token = signToken(user)
        res.json({ token, user })}
        )
      .catch((err) => res.json(err));
  },

  async getSingleUser(req, res) {
    await User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with found with that ID." })
          : res.json({ user })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  async login(req, res) {
      await User.findOne({ $or: [{ username: req.body.username}, { email: req.body.email }] })
        .then((user) => 
         !user
           ? res.status(404).json({ message: "No user found with that username or email."})
           : res.json({ user })
        )
        .catch((err) => {
          console.log(err)
          return res.status(500).json(err)
        })

      const correctPassword = await User.isCorrectPassword(req.body.password)

      if(!correctPassword){
        return res.status(400).json({ message: 'Wrong password!' })
      }

      const token = signToken(user)
      res.json({ token, user })
  },
};
