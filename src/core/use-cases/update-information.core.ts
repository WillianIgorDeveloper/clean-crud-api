import type { Information } from "@/core/entities"

export type IUpdateInformationUseCaseParams = {
  information: Information
}

export type IUpdateInformationUseCaseResult = {
  updatedInformation: Information
}

export interface IUpdateInformationUseCase {
  execute(
    params: IUpdateInformationUseCaseParams,
  ): Promise<IUpdateInformationUseCaseResult>
}
