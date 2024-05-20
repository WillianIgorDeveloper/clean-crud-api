import type { Information } from "@/core/entities"

export type IReadInformationRepositoryParams = {
  search?: string
}

export type IReadInformationRepositoryResult = {
  information: Information[] | []
}

export interface IReadInformationRepository {
  read(
    params: IReadInformationRepositoryParams,
  ): Promise<IReadInformationRepositoryResult>
}
