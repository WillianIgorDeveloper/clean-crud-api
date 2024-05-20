import { sql } from "@/lib"
import type { Information } from "@/core/entities"
import type {
  IReadInformationRepository,
  IReadInformationRepositoryParams,
  IReadInformationRepositoryResult,
} from "@/core/repositories/information/read.core"

export class ReadInformationRepository implements IReadInformationRepository {
  async read(
    params: IReadInformationRepositoryParams,
  ): Promise<IReadInformationRepositoryResult> {
    const { search } = params

    function generateSearchFilter() {
      if (search) return sql`AND title ILIKE ${`%${search}%`}`
      return sql``
    }

    const information = await sql<Information[]>`
      SELECT 
        *
      FROM information
      WHERE 1 = 1
      ${generateSearchFilter()}
    `

    return { information }
  }
}
