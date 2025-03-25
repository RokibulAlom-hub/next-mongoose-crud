import mongoose,{Schema} from "mongoose";

const topicShema = new Schema (
    {
    tittle: String,
    description:String,
},
{
    timestamps: true,
}
);
const Topic = mongoose.models.Topic || mongoose.model('Topic',topicShema)
export default Topic