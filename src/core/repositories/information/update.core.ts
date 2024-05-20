import type { Information } from "@/core/entities"

export type IUpdateInformationRepositoryParams = {
  newInformation: {
    id: string
    title: string
    description: string
    updatedAt: Date
  }
}

export type IUpdateInformationRepositoryResult = {
  updatedInformation: Information
}

export interface IUpdateInformationRepository {
  update(
    params: IUpdateInformationRepositoryParams,
  ): Promise<IUpdateInformationRepositoryResult>
}
