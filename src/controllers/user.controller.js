const Users = require("../models/user.model")



// @desc        get all users
// @route       GET /api/v1/users/
// @access      public USERS
exports.getAllUsers = async (req, res) => {

    const {role} = req.query

    try {
        
        let query = Users.find()

        if (role) query = Users.find({role})
        
        const users = await query

        return res.status(200).json({ok:true, data: users})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data:error})
    }
}

// @desc        get user by user id
// @route       GET /api/v1/users/:id
// @access      public USERS
exports.getUserById = async (req, res) => {

    const {id} = req.params
    
    try {

        const user = await Users.findById(id)

        return res.status(200).json({ok:true, data: user})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data:error})
    }
}

// @desc        get user logged now
// @route       GET /api/v1/users/current-user
// @access      public USERS
exports.getCurrentUser = async (req, res) => {
    
    try {
    
        return res.status(200).json({ok: true, data: req.user})
    
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

// @desc        edit user by user id
// @route       PUT /api/v1/users/:id
// @access      public USERS
exports.editUserById = async (req, res) => {

    const {id} = req.params

    const {_id, email, role, pass, rate, ...rest} = req.body
    
    try {

        const editedUser = await Users.findByIdAndUpdate(id, rest, {new: true})

        return res.status(200).json({ok:true, data: editedUser})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data:error})
    }
}

// @desc        delete user by user id
// @route       DELETE /api/v1/users/:id
// @access      public USERS
exports.deleteUserById = async (req, res) => {

    const {id} = req.params
    
    try {

        const deletedUser = await Users.findByIdAndDelete(id, {new: true})

        return res.status(200).json({ok:true, data: deletedUser})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data:error})
    }
}
