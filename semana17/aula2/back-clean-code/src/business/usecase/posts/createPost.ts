import { PostDB } from "../../../data/postDataBase";
import { Post, PostType } from "../../entities/post";
import { InvalidParameterError } from "../../error/InvalidParameterError";
import { v4 } from "uuid";

export class CreatePostUC {
  constructor(private db: PostDB) {}

  public async execute(input: CreatePostUCInput): Promise<CreatePostUCOutput> {
    const id = v4();
    let type = PostType.normal;
    if (input.type === "event") {
      type = PostType.event;
    } else if (input.type !== "normal") {
      throw new InvalidParameterError("Invalid type");
    }

    const post = new Post(
      id,
      input.title,
      input.content,
      type,
      input.userId,
      input.image
    );

    await this.db.createPost(post);

    return {
      message: "Post created successfully"
    };
  }
}

export interface CreatePostUCInput {
  title: string;
  content: string;
  type: string;
  userId: string;
  image?: string;
}

export interface CreatePostUCOutput {
  message: string;
}


// (i)Somente tipos normal, são definidos em PostType.normal
// (ii) Verifica se é o type = normal, caso não seja é gerado um erro. Este erro é tratado com uma mensagem padrão
// (iii) É abstrata para não corer o risco de ser alterada. Ela armazena o acesso ao banco de dados
// (iv) Ela cria um post baseado na definição descrita neste arquivo.
//  (v)ajuda a manter o codigo limpo extraindo esses dados para uma const
// (vi)da interface CreatePostUCInput 
// (vii)Da entidades post
// (viii) Para receber post com ou sem foto, caso ele não existisse e a pessoa não colocar foto geraria um erro.
