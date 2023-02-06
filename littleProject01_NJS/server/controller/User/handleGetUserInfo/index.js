const { UserInfo } = require("../../../model/User")


module.exports.handleGetUserInfo= async(req,res)=>{
    // console.log(req)
    UserInfo.findOne({userId:'1'},(err,rees)=>{
        res.status(200).json({'message':rees})
    })

}