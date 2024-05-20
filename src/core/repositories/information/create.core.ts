import type { Information } from "@/core/entities"

export type ICreateInformationRepositoryParams = {
  newInformation: Information
}

export type ICreateInformationRepositoryResult = {
  information: Information
}

export interface ICreateInformationRepository {
  create(
    params: ICreateInformationRepositoryParams,
  ): Promise<ICreateInformationRepositoryResult>
}
