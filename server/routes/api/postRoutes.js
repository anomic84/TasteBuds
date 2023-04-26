// // define routes for posts
// const router = require('express').Router();

// const {
//     createPost,
//     getOnePost,
//     getUserPosts,
//     deletePost,
//     updatePosts,
//     createComment,
//     getOneComment,
//     deleteComment,
//     updateComment,
// } = require('../../controllers/postsController.js');

// // /api/posts
// router.route('/').get(getUserPosts).post(createPost);

// // /api/posts/:postsId
// router.route('/:postsId').get(getOnePost).put(updatePosts).delete(deletePost);

// //  /api/posts/:postsId/Comments POSTs new comments
// router.route('/:postsId/comments').post(createComment);

// // /api/posts/:postsId/comments/:CommentId DELETE comment by ID
// router
//     .route('/:postsId/comments/:commentId')
//     .delete(deleteComment)
//     .put(updateComment)
//     .get(getOneComment);

// module.exports = router;
