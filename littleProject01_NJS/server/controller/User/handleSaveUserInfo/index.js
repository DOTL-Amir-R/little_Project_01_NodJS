const bcrypt = require("bcrypt");
const { UserInfo } = require("../../../model/User");

module.exports.handleSaveUserInfo = async (req, res) => {
  if(!req?.body?.userDataArray?.username){
    res.status(400).json({'message':'sorry you should write your username'})
  }
  if(!req?.body?.userDataArray?.number){
    res.status(400).json({'message':'sorry you should write your number'})
  }
  if(!req?.body?.userDataArray?.email){
    res.status(400).json({'message':'sorry you should write your email'})
  }
  if(!req?.body?.userDataArray?.website){
    res.status(400).json({'message':'sorry you should write your website'})
  }
  if(!req?.body?.userDataArray?.addrese){
    res.status(400).json({'message':'sorry you should write your addrese'})
  }
  if(!req?.body?.userDataArray?.profileImage){
    res.status(400).json({'message':'sorry you should select your profileImage'})
  }
  // console.log(req.body.userDataArray.username)
  const newUserInfo = new UserInfo({
    username: req.body.userDataArray.username,
    number: req.body.userDataArray.number,
    email: req.body.userDataArray.email,
    website: req.body.userDataArray.website,
    addrese: req.body.userDataArray.addrese,
    profileImage: req.body.userDataArray.profileImage,
    color: req.body.userDataArray.color,
  });
  // await newUserInfo.replaceOne({email:req.body.userDataArray.email})
   UserInfo.findOne({username:req.body.userDataArray.username},async (err,res)=>{
      if(err){
        console.log(err)
      }else{
          
        return await UserInfo.updateOne({ username: req.body.userDataArray.username }, {
            number: req.body.userDataArray.number,
            email: req.body.userDataArray.email,
            website: req.body.userDataArray.website,
            addrese: req.body.userDataArray.addrese,
            profileImage: req.body.userDataArray.profileImage,
            color: req.body.userDataArray.color,
          });
        //   console.log(UserInfo+'res')
      }
      await newUserInfo.save()
  })
    ;
  res.status(200).json({
      message: "your information for profile has been edited and saved",
    });
};
