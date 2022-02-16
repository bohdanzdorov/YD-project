const Logger = require("../../Logger")

module.exports = (err,req,res,next) => {

    Logger.err(err)

    return res.status(500).json({message : "Error"})
}