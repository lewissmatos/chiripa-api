const { find, findOneAndUpdate } = require("../models/post.model")
const Posts = require("../models/post.model")

// @desc        get all posts
// @route       GET /api/v1/posts
// @access      public USERS
exports.getAllPosts = async (req, res) =>{
    
    try {
        
        const posts = await Posts.find()
        
        return res.status(200).json({ok:true, data: posts})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data: error})
    }
}

// @desc        get post by post id
// @route       GET /api/v1/posts/:id
// @access      public USERS
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

// @desc        get all post makes by user logged
// @route       GET /api/v1/posts/user/:id
// @access      public USERS
exports.getPostsByUserLogged = async (req, res) =>{
    
    try {
        
        const posts = await Posts.find( {user: req.user._id} )
        
        return res.status(200).json({ok:true, data: posts})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data: error})
    }
}

// @desc        get all post match with user logged area
// @route       GET /api/v1/posts/area/:area
// @access      public USERS
exports.getPostsByUserArea = async (req, res) => {
    
    try {

        posts = await find({area: {$in: req.user.area} })

        return res.status(200).json({ok:true, data: posts})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data: error})
    }
}

// @desc        create post
// @route       POST /api/v1/posts
// @access      public USERS
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

// @desc        update an post
// @route       PUT /api/v1/posts/:id
// @access      public USERS
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

// @desc        delete an post
// @route       DELETE /api/v1/posts/:id
// @access      public USERS
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

// @desc        apply to work 
// @route       PUT /api/v1/posts/:id
// @access      public USERS
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