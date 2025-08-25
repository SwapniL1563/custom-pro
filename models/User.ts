import mongoose, { Document, Schema } from "mongoose"; 

export interface InterfaceUser extends Document {
    name:string;
    email:string;
    passwordHash:string;
    role:"customer" | "seller" | "admin";
    createdAt:Date;
    updatedAt:Date;
}

const UserSchema: Schema = new Schema(
    {
        name:{type: String,required:true},
        email:{typ:String,required:true,unique:true},
        passwordHash:{type:String,required:true},
        role:{type:String,enum:["customer","seller","admin"],default:"customer"},
    } , {
        timestamps:true
    }
)

export default mongoose.models.User || mongoose.model<InterfaceUser>("User",UserSchema)