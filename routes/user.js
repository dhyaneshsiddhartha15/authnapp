const express=require("express");
const router=express.Router();

const {login,signup}=require("../Controllers/Auth");
const {auth,isStudent,isAdmin}=require("../middlewares/auth")

router.post("/login",login);
router.post("/signup",signup);



router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:'Welcome to Protected route for Tests',
    });
});
router.get("/student",auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:'Welocome to Protected router for Students only',
    });
});
router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:'Welcome to Protected router for Admins only',
    });
});
router.get("/getEmail",auth,async (req,res)=>{
    try{
        const id=req.user.id;
        console.log("ID",id);
        const user=await User.findById(id);
        res.status(200).json({
            success:true,
            user:user,
            message:'This is Email Route for fetching data',
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            error:error.message,
            messsage
            :"Error Generated",
        })
    }
})
module.exports=router;