const express = require('express') ;
const authRouter = express.Router() ;
const User = require("../models/user") ;
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

authRouter.post("/auth/google" , async(req,res) => {
    try{
        const {token} = req.body ;

        // 1. verify google token
        const ticket = await client.verifyIdToken({
            idToken : token ,
            audience : process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload() ;

        const {sub, email, name, given_name, family_name} = payload;
        
        // Construct name with fallback logic
        const fullName = name || `${given_name || ''} ${family_name || ''}`.trim() || email.split('@')[0];

        // 2. find user
        let user = await User.findOne({email});

        // 3. create if not exists
        if(!user){
            user = await User.create({
                name: fullName,
                email,
                googleId : sub ,
            });
        } 

        // 4. create JWT
        const authToken = jwt.sign({
            userId : user._id,
            email : user.email ,
            name : user.name || fullName
            },
            process.env.JWT_SECRET , 
            {expiresIn : "2d"}
        );

        // 5. send response 
        res.json({
            success : true,
            token : authToken,
            user,
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({message : "Auth failed"})
    }
})

module.exports = authRouter ;