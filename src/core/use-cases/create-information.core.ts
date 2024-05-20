import type { Information } from "@/core/entities"

export type ICreateInformationUseCaseParams = {
  title: string
  description: string
}

export type ICreateInformationUseCaseResult = {
  information: Information
}

export interface ICreateInformationUseCase {
  execute(
    params: ICreateInformationUseCaseParams,
  ): Promise<ICreateInformationUseCaseResult>
}
