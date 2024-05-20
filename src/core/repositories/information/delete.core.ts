export type IDeleteInformationRepositoryParams = {
  informationID: string
}

export interface IDeleteInformationRepository {
  delete(params: IDeleteInformationRepositoryParams): Promise<void>
}
