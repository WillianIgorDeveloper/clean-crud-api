import { sql } from "@/lib"
import type {
  IDeleteInformationRepository,
  IDeleteInformationRepositoryParams,
} from "@/core/repositories/information/delete.core"

export class DeleteInformationRepository implements IDeleteInformationRepository {
  async delete(params: IDeleteInformationRepositoryParams): Promise<void> {
    const { informationID } = params

    await sql`
      DELETE FROM information
      WHERE id = ${informationID}
    `

    return
  }
}
