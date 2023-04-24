const { User } = require("../models");
const { signToken } = require('../utils/auth')

module.exports = {

  // async getSingleUser(req, res) {
  //   await User.findOne({ _id: req.params.userId })
  //     .then((user) =>
  //       !user
  //         ? res.status(404).json({ message: "No user with found with that ID." })
  //         : res.json({ user })
  //     )
  //     .catch((err) => {
  //       console.log(err);
  //       return res.status(500).json(err);
  //     });
  // },
    // get a single user by either their id or their username
    async getSingleUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
    });

    if (!foundUser) {
      return res.status(400).json({ message: 'Cannot find a user with this id!' });
    }

    res.json(foundUser);
  },

  //   async createUser(req, res) {
  //   await User.create(req.body)
  //     .then((user) =>{ 
  //       const token = signToken(user)
  //       res.json({ token, user })}
  //       )
  //     .catch((err) => res.json(err));
  // },

  // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

  // async login(req, res) {
  //   try {
  //     const user = await User.findOne({ $or: [{ username: req.body.username}, { email: req.body.email }] })

  //     if(!user) {
  //       return res.status(400).json({ message: 'Wrong login information'})
  //     }
           

  //          const correctPassword = await User.isCorrectPassword(req.body.password)
     
  //          if(!correctPassword){
  //            return res.status(400).json({ message: 'Wrong password!' })
  //          }
  //          const token = signToken(user)
  //          res.json({ token, user })
  //   } catch (error) {
  //     res.status(400).json(error)}

  // },

  // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  async login({ body }, res) {
    const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
};
