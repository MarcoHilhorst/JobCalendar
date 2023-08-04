import { UserModel } from '../models/Users.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


const loginController = {
    login : async (req, res) => {
        const { username, password } = req.body
        const user = await UserModel.findOne({ username: username })
       

        if(!user){
            return res.json({ message: 'User does not exist!'})
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if(!isPasswordValid){
            return res.json({ message: 'Username or Password is incorrect'})
        }

        const token = jwt.sign({ id: user._id}, process.env.HASH_SECRET)

        res.json({ token, userID: user._id })

    },
    
    register : async (req, res) => {
        const { username, password } = req.body
        const user = await UserModel.findOne({ username: username })
        
        if(user) {
            return res.json({message: "User already exists"})
        }
         const hashedPassword = await bcrypt.hash(password, 10)

         const newUser = new UserModel({
            username: username,
            password: hashedPassword
         })

         await newUser.save()

        res.json({message: 'User was successfully registered'})
    }
}

export default loginController