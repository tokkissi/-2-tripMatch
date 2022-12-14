import { UserModel } from "../models";
import { User } from "../interfaces";
import { hashPassword, sendMail } from "../utils";

class UserService {
  private userModel = new UserModel();

  async join(userInfo: User) {
    const hashedInfo = await hashPassword.hash(userInfo);
    const { email } = await this.userModel.create(hashedInfo);
    await sendMail(email as string, "???에 가입되었습니다.");
  }
}

const userService = new UserService();

export default userService;
