const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['Authorization']; //Bearer token
    const token =authHeader && authHeader.split(" ")[1]
    if(token===null){
        return res.status(401).json({error:"Null Token"});
    }
    jwt.verify(token,'mysecrettoken',(error,user)=>{
        if(error)return res.status(403).json({error:error.message});
        req.user=user
        next();
    })
}   
module.exports= authenticateToken;