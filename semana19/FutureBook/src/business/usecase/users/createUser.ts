import { v4 } from "uuid";
import { UserGateway } from "../../gateways/userGateway";
import { User } from "../../entities/user";
import * as bcrypt from "bcrypt";
import { MinimumCharacterError } from "../../Error/MinimumCharacterError";
import * as jwt from "jsonwebtoken";

export class CreateUserUC {
  constructor(private userGateway: UserGateway) {}

  public async execute(input: CreateUserUCInput): Promise<CreateUserUCOutput> {
    
      const id = v4();
      const SALT_ROUNDS = 10;
      const hashPassword = await bcrypt.hash(input.password, SALT_ROUNDS);
      const user = new User(id,  input.name, input.email, hashPassword);

      if (input.password.length < 6) {
        throw new MinimumCharacterError();
      }
      
      await this.userGateway.createUser(user);
    
      const token = jwt.sign(
        { userId: user.getId(), email: user.getEmail() },
        "lalala",
        {
          expiresIn: "1h"
        }
      );
  
      return {
        message: "Usuario criado com sucesso Seu token: " + token
      };
  }
}
export interface CreateUserUCInput {
  name: string;
  email: string;
  password: string;
}

export interface CreateUserUCOutput {
  message: string;
}
