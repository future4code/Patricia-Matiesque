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
    const user = await this.userGateway.updatePassword(input.newpassword, input.email);

    if (!input.email) {
      throw new Error("Incorrect Password or Email");
    }

    if (!await this.cryptographyGateway.compare(input.oldpassword, user.getPassword())) {
      throw new Error("Incorrect Password or Email")
    }

    const token = this.authenticationGateway.generateToken({
      id: user.getId()
    });

    return {
        message: "Password changed"
      };;
  }
}

export interface UpdatePasswordUCInput {
  email: string;
  newpassword: string;
  oldpassword: string;
}

export interface UpdatePasswordUCOutput {
    message: string;
  }
