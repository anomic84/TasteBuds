// const router = require('express').Router();
// const {
//     createUser,
//     getSingleUser,
//     login,
//     // get all users for testing purposes
//     getAllUsers,
// } = require('../../controllers/userController');

// // import middleware
// const { authMiddleware } = require('../../utils/auth');

// // put authMiddleware anywhere we need to send a token for verification of user
// router.route('/').post(createUser).put(authMiddleware);

// router.route('/login').post(login);

// router.route('/me').get(authMiddleware, getSingleUser);

// router.route('/posts/:postsId').delete(authMiddleware);

// router.route('/').get(getAllUsers);

// // Add a new route for getting all users
// router.route('/test').get(authMiddleware, getAllUsers);

// module.exports = router;
