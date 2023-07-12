import { Schema, model } from "mongoose";

const user = new Schema({
  email: {
    type: Schema.Types.String,
    unique: true,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  avatar: {
    type: Schema.Types.String,
  },
});

const userModel = model("user", user);

export default userModel;
