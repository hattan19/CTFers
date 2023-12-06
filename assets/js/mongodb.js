

  const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/CTFersDB")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true }
})
const cahllenges=new mongoose.Schema({
    name: { type: String, required: true },
    points: { type: Number, required: true },
    flag: { type: String, required: true }
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)
const challCollection=new mongoose.model('challCollection',cahllenges)

module.exports=LogInCollection