export type IDeleteInformationUseCaseParams = {
  informationID: string
}

export interface IDeleteInformationUseCase {
  execute(params: IDeleteInformationUseCaseParams): Promise<void>
}
