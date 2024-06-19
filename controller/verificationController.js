var jwt = require('jsonwebtoken');
const UserInfo = require('../models/userSchema')



async function verificationController(req,res) {
 const {id} = req.params
const decoded = jwt.verify(id, 'orebi');
console.log(decoded, 'ggggggg');
if(decoded){
    const updateUser = await UserInfo.findOneAndUpdate(
        {email: decoded.email},
        {verified: true},
        {new: true}
       )
       res.redirect('http://localhost:5173/login')
}
}
module.exports = verificationController