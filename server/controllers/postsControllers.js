const { Posts } = require("../models");

module.exports = {
  async createPost(req, res) {
    
  },

  async getOnePost(req, res) {
    Posts.findOne({ _id: req.params.postsId })
      .then((post) =>
        !post
          ? res.status(404).json({ message: "No posts found with that ID" })
          //  : res.json({ post })
          : res.json({ Posts })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  async getUserPosts(req, res) {
    Posts.find()
      .then((posts) => {
        res.json(posts);
      })
      .catch((err) => res.status(500).json(err));
  },

  async deletePost(req, res) {
    Posts.findOneAndRemove({ _id: req.params.postsId }).then((posts) => {
      if (!posts) {
        return res.status(404).json({ message: "Posts not found" });
      }
      return User.findOneAndUpdate(
        { posts: req.params.postsId },
        { $pull: { thought: req.params.postsId } },
        { new: true }
      )
        .then((posts) => {
          if (!posts) {
            return res.status(404).json({ message: "Posts not found" });
          }
          res.json({ message: "Posts has been deleted" });
        })
        .catch((err) => res.status(500).json(err));
    });
  },

  async updatePosts(req, res) {
    Posts.findOneAndUpdate(
      { _id: req.params.postsId },
      { $set: req.body },
      { new: true }
    )
      .then((posts) => {
        if (!posts) {
          return res.status(404).json({ message: "Posts not found" });
        }
        res.json(posts);
      })
      .catch((err) => res.status(500).json(err));
  },

  async createComment(req, res) {
    Posts.findByIdAndUpdate(
      { _id: req.params.postsId },
      { $addToSet: { comments: req.body } },
      { new: true, runValidators: true }
    )
      .then((posts) => {
        if (!posts) {
          return res.status(404).json({ message: "Posts not found" });
        }
        res.json(posts);
      })
      .catch((err) => res.status(500).json(err));
  },

  // async getOneComment(req, res) {
  //     Posts.findOneUpdate(
  //       { _id: req.params.postsId },
  //     { $pull: { comments: req.params.commentId } },
  //     { new: true, runValidators: true }
  //     )
  //     .then((posts) =>
  //       !posts
  //         ? res.status(404).json({ message: "No posts found with that ID" })
  //         : res.json({ posts })
  //     )
  //     .catch((err) => {
  //       console.log(err);
  //       return res.status(500).json(err);
  //     });
  // },

  async deleteComment(req, res) {
    Posts.findByIdAndUpdate(
      { _id: req.params.postsId },
      { $pull: { comments: req.params.commentId } },
      { new: true, runValidators: true }
    )
      .then((posts) => {
        if (!posts) {
          return res.status(404).json({ message: "Posts not found" });
        }
        res.json(posts);
      })
      .catch((err) => res.status(500).json(err));
  },

  async updateComment(req, res) {
     Posts.findOneAndUpdate(
        { _id: req.params.postsId },
        { $set: { comments: req.params.commentId }},
        { new: true, runValidators: true }
     )
     .then((posts) => {
        if(!posts) {
            return res.status(404).json({ message: " Posts not found" })
        }
        res.json(posts)
     })
     .catch((err) => res.status(500).json(err))
  },
};
