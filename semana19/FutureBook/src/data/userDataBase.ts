import { BaseDB } from "./baseDataBase";
import { User } from "../business/entities/user";
import { UserGateway } from "../business/gateways/userGateway";
import { DuplicateUserError } from "../business/Error/DuplicateUserError";

export class UserDB extends BaseDB implements UserGateway {
  private userTableName = "users";

  async createUser(user: User) {
    try{
      await this.connection
      .insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
      })
      .into(this.userTableName);
    }catch(err){
      console.log(err)
      if (err.code === 'ER_DUP_ENTRY'){
        throw new DuplicateUserError()
      }else{
        throw err
      }
      
    }
    
  }

  async loginUser(email: string): Promise<User | undefined> {
    const user = await this.connection
      .select("*")
      .from(this.userTableName)
      .where ({email: email});
    if (!user[0]) {
      return undefined;
    }
    console.log(user)

    return new User(user[0].id, user[0].name, user[0].email, user[0].password)
   }


}
