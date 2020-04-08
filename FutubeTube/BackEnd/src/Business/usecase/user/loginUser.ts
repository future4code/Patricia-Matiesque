import { UserGateway } from "../../gateway/userFateway";
import { AuthenticationGateway } from "../../gateway/authenticationGateway";
import { CryptographyGateway } from "../../gateway/cryptographyGateway";

export class LoginUserUC {
  constructor(
    private userGateway: UserGateway,
    private authenticationGateway: AuthenticationGateway,
    private cryptographyGateway: CryptographyGateway
  ) { }

  public async execute(input: LoginUserUCInput) {
    const user = await this.userGateway.getUserByEmail(input.email);

    if (!user) {
      throw new Error("Incorrect Password or Email");
    }

    if (!await this.cryptographyGateway.compare(input.password, user.getPassword())) {
      throw new Error("Incorrect Password or Email")
    }

    const token = this.authenticationGateway.generateToken({
      userId: user.getId()
    });

    return token;
  }
}
export interface LoginUserUCInput {
  email: string;
  password: string;
}
