import type { Information } from "@/core/entities"

export type IReadInformationUseCaseParams = {
  search?: string
}

export type IReadInformationUseCaseResult = {
  information: Information[] | []
}

export interface IReadInformationUseCase {
  execute(
    params: IReadInformationUseCaseParams,
  ): Promise<IReadInformationUseCaseResult>
}
