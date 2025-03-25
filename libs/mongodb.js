import mongoose from "mongoose"

const connectMongodb = async () => {
   try {
    await mongoose.connect(process.env.MONOGODB_URI)
    console.log("mongoose working ");
    
   } catch (error) {
    console.log(error);
    
   }

}
export default connectMongodb