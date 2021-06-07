const Users = require("../models/user.model")

exports.getAllUsers = async (req, res) => {

    try {
        
        const users = await Users.find()

        return res.status(200).json({ok:true, data: users})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data:error})
    }
}

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

exports.getUserByRole = async (req, res) => {

    const {role} = req.params
    
    try {

        const user = await Users.findOne(role)

        return res.status(200).json({ok:true, data: user})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data:error})
    }
}

exports.getCurrentUser = async (req, res) => {
    
    try {
    
        return res.status(200).json({ok: true, data: req.user})
    
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

exports.editUserById = async (req, res) => {

    const {id} = req.params

    const {_id, email, role, pass, ...editedUser} = req.body
    
    const {} = req.body
    try {

        const editedUser = await Users.findByIdAndUpdate(id, {new: true})

        return res.status(200).json({ok:true, data: editedUser})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ok:false, data:error})
    }
}

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
