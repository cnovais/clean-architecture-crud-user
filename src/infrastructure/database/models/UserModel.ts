import mongoose, { Document, Schema } from "mongoose";

export class UserDocument extends Document {
    name?: string;
    email?: string;
}

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, requited: true, unique: true }
})

export const UserModel = mongoose.model<UserDocument>("User", UserSchema);

