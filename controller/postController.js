const Post = require('../models/postModel');

const createPost = async (req, res) => {

    try {

        const post = new Post({
            title: req.body.title,
            date: req.body.date,
            image: req.file.filename
        })

        const postData = await post.save();

        res.status(200).send({
            success: true,
            msg: 'Post Data',
            data: postData
        });

    } catch (error) {
        res.status(400).send({
            success: false,
            msg: error.message
        });
    }

}

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).send({
            success: true,
            msg: 'Post Data',
            data:posts
        });

    } catch (error) {
        res.status(400).send({
            success: false,
            msg: error.message
        });
    }
}


const deletePost = async (req, res) => {
    try {
        const id = req.params.id
        await Post.deleteOne({_id:id})
        res.status(200).send({
            success: true,
            msg: 'Post Delete Successfully',
  
        });

    } catch (error) {
        res.status(400).send({
            success: false,
            msg: error.message
        });
    }
}

const updatePost = async (req, res) => {

    try {

        if(req.file !== undefined){
            const id = req.body.id;
            const title = req.body.title;
            const date = req.body.date;
            const filename = req.file.filename;

            await Post.findByIdAndUpdate({_id:id},{$set:{title:title,date:date,image:filename}});
            res.status(200).send({success:true,msg:'Post Update Successfull !'})

        }else{
            const id = req.body.id;
            const title = req.body.title;
            const date = req.body.date;


            await Post.findByIdAndUpdate({_id:id},{$set:{title:title,date:date}});
            res.status(200).send({success:true,msg:'Post Update Successfull !'})
        }

    } catch (error) {
        res.status(400).send({
            success: false,
            msg: error.message
        });
    }

}


const getPost = async (req, res) => {
    try {
        const postget = await Post.findOne({ _id: req.params.id });
        res.status(200).send({
            success: true,
            msg: 'Update Data',
            data:postget
        });

    } catch (error) {
        res.status(400).send({
            success: false,
            msg: error.message
        });
    }
}


module.exports = {
    createPost,
    getPosts,
    deletePost,
    updatePost,
    getPost
}