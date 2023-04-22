const { Posts } = require('../../models')

module.exports = {
    async createPost(req, res) {
        Posts.create(req.body)
        .then((post) => res.json(post))
        .catch((err) => res.json(err))
    },

    async getOnePost(req, res) {
        Posts.findOne( { _id: req.params.postsId })
        .then((post) => 
        !post 
           ? res.status(404).json({ message: 'No post found with that ID'})
           : res.json({ post })
        )
        .catch((err) => {
            console.log(err)
            return res.status(500).json(err)
        })
    },

    async getUserPosts(req, res) {
          Posts.find()
            .then((posts) => {
                res.json(posts)
            })
            .catch((err) => res.status(500).json(err))
    },

    async deletePost(req, res) {
       Posts.findOneAndRemove({ _id: req.params.postsId })
       .then((posts) => {
        if(!posts) {
            return res.status(404).json({ message: 'Post not found' })
        }
        return User.findOneAndUpdate(
            {posts: req.params.postsId},
            { $pull: { thought: req.params.postsId }},
            { new: true }
        )
        .then((posts) => {
            if(!posts) {
                return res.status(404).json({ message: 'Post not found'})
            }
            res.json({ message: 'Post has been deleted' })
        })
        .catch((err) => res.status(500).json(err))
       })
    },

    async updatePosts(req, res) {
       Posts.findOneAndUpdate(
        {_id: req.params.postsId},
        { $set: req.body },
        { new: true }
       )
       .then((posts) => {
        if(!posts) {
            return res.status(404).json({ message: 'Post not found' })
        }
        res.json(posts)
       })
       .catch((err) => res.status(500).json(err))
    },

    async createComment(req, res) {
       Posts.findByIdAndUpdate(
        { _id: req.params.postsId},
        { $addToSet: { comments: req.body} },
        { new: true, runValidators: true }
       )
       .then((posts) => {
        if(!posts) {
            return res.status(404).json({ message: 'Post not found'})
        }
        res.json(posts)
       })
       .catch((err) => res.status(500).json(err))
    },

    async getOneComment(req, res) {
       
    },

    async deleteComment(req, res) {
       Posts.findByIdAndUpdate(
        { _id: req.params.postsId},
        { $pull: { comments: req.params.postsId } },
        { new: true, runValidators: true }
       )
       .then((posts) => {
        if(!posts) {
            return res.status(404).json({ message: 'Post not found'})
        }
        res.json(posts)
       })
       .catch((err) => res.status(500).json(err))
    },

    async updateComment(req, res) {

    },




}