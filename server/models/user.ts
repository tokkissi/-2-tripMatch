import mongoose from "mongoose";
import { userSchema } from "./schemas";
import { User } from "../interfaces";

class UserModel {
  private userDB = mongoose.model("users", userSchema);

  async create(userInfo: User) {
    const user = await this.userDB.create(userInfo);
    return user;
  }
}

export default UserModel;
