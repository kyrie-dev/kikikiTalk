// import User from "./models/user";
// import app from "./app";

// const postJoin = async (req,res) => {
//     let name,email,password,password2;
//     app.post("/join",(req,res) =>{
//         name = req.body.user_name;
//         email = req.body.user_email;
//         password = req.body.password;
//         password2 = req.body.password2;
//         console.log(password);
//     })
    
//     if(password !==password2) {
//         res.write("비밀번호 똑같이 입력좀");
//     }else {
//         try{
//             const user = await User.create({
//                 name,
//                 email
//             });
//             await User.register(user, password)
//         }catch(error){
//             console.log(error);
//         }
//         res.write("OK");
//     }
// }