import { UserGateway } from "../../gateway/userGateway";
import { AuthenticationGateway } from "../../gateway/authenticationGateway";
import { CryptographyGateway } from "../../gateway/cryptographyGateway";

export class UpdatePasswordUC {
  constructor(
    private userGateway: UserGateway,
    private authenticationGateway: AuthenticationGateway,
    private cryptographyGateway: CryptographyGateway
  ) { }

  public async execute(input: UpdatePasswordUCInput): Promise<UpdatePasswordUCOutput> {
    const userInfo = await this.authenticationGateway.getUsersInfoFromToken(input.token)
    if (!userInfo) {
      throw new Error("User not found!")
    }

    const user = await this.userGateway.getUserById(userInfo.id)
    if (!user) {
      throw new Error("User not found!")
    }

    const oldPassword = await this.cryptographyGateway.compare(input.oldPassword, user.getPassword());
    if (!oldPassword) {
      throw new Error("Invalid password or email!");
    };

    const newPassword = await this.cryptographyGateway.encrypt(input.newPassword)
    await this.userGateway.updatePassword(userInfo.id, newPassword)

    return {
      message: "Password updated successfully!"
    }
  }
}

export interface UpdatePasswordUCInput {
  token: string;
  newPassword: string;
  oldPassword: string;
}

export interface UpdatePasswordUCOutput {
  message: string;
}
