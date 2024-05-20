import { sql } from "@/lib"
import type { Information } from "@/core/entities"
import type {
  IUpdateInformationRepository,
  IUpdateInformationRepositoryParams,
  IUpdateInformationRepositoryResult,
} from "@/core/repositories/information/update.core"

export class UpdateInformationRepository implements IUpdateInformationRepository {
  async update(
    params: IUpdateInformationRepositoryParams,
  ): Promise<IUpdateInformationRepositoryResult> {
    const { newInformation } = params

    const [updatedInformation] = await sql<Information[]>`
      UPDATE Information
      SET title = ${newInformation.title}, description = ${newInformation.description}, updatedAt = ${newInformation.updatedAt}
      WHERE id = ${newInformation.id}
      RETURNING *
    `

    return { updatedInformation }
  }
}
