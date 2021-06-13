const { find, findOneAndUpdate } = require("../models/post.model")
const Posts = require("../models/post.model")

exports.getAllPosts = async (req, res) =>{
    
    try {
        
        const posts = await Posts.find()
        
        return res.status(200).json({ok:true, data: posts})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data: error})
    }
}

exports.getPostById = async (req, res) =>{
    
    const {id} = req.params
    try {
        
        const post = await Posts.findById(id)
        
        return res.status(200).json({ok:true, data: post})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data: error})
    }
}

exports.getPostsByUserLogged = async (req, res) =>{
    
    try {
        
        const posts = await Posts.find( {user: req.user._id} )
        
        return res.status(200).json({ok:true, data: posts})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data: error})
    }
}

exposts.getPostByUserArea = async (req, res) => {
    
    try {

        posts = await find({area: {$in: req.user.area} })

        return res.status(200).json({ok:true, data: posts})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data: error})
    }
}

exports.createPost = async (req, res) =>{

    const {area, desc, pay } = req.body
    const user = req.user._id    
    try {
        
        const post = new Post({
            area,
            desc,
            pay,
            user
        }) 

        await post.save()

        return res.status(201).json({ok:true, data: post})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data: error})
    }
}

exports.editPostById = async (req, res) => {

    const {id} = req.params 
    
    try {

        const editedPost = await Posts.findByIdAndUpdate(id)
        .populate('user')
        .populate('appliedUsers')

        return res.status(200).json({ok:true, data: editedPost})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data: error})
    }
}

exports.deletePostById = async (req, res) => {

    const {id} = req.params 
    
    try {

        const deletedPost = await Posts.findByIdAndDelete(id)

        return res.status(200).json({ok:true, data: deletedPost})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data: error})
    }
}

exports.applyToPost = async (req, res) => {

    const {id} = req.params

    try {
     
        const post = await Posts.findById(id)
        if(!post) return res.status(404).json({ok:false, data: 'Not Found'})

        let aU = post.appliedUsers

        aU = [...aU, req.user._id ]

        const updatedPost = await findByIdAndUpdate(id, {appliedUsers: aU}, {new:true})

        return res.status(200).json({ok:true, data:updatedPost})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data:error})
    }
}