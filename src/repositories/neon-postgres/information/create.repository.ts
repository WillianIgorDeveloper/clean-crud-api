import { sql } from "@/lib"
import type { Information } from "@/core/entities"
import type {
  ICreateInformationRepository,
  ICreateInformationRepositoryParams,
  ICreateInformationRepositoryResult,
} from "@/core/repositories/information/create.core"

export class CreateInformationRepository implements ICreateInformationRepository {
  async create(
    params: ICreateInformationRepositoryParams,
  ): Promise<ICreateInformationRepositoryResult> {
    const { newInformation } = params

    const [information] = await sql<Information[]>`
      INSERT INTO information (id, title, description, createdAt, updatedAt)
      VALUES (${newInformation.id}, ${newInformation.title}, ${newInformation.description}, ${newInformation.createdAt}, ${newInformation.updatedAt})
      RETURNING *
    `

    return { information }
  }
}
