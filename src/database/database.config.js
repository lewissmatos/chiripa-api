
const mongoose = require('mongoose')
require('colors')

exports.dbConnection = async() => {

    try {
        await mongoose.connect(process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('DB ONLINE'.rainbow);
        
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la base de Datos'.red);
    }

}
