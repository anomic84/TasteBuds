const { User } = require("../models");

module.exports = {
  async createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.json(err));
  },

  async getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with found with that ID" })
          : res.json({ user })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  async login(req, res) {
    
  },
};
