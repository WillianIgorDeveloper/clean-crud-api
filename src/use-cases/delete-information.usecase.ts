import type { IInformationRepository } from "@/core/repositories/information"
import type {
  IDeleteInformationUseCase,
  IDeleteInformationUseCaseParams,
} from "@/core/use-cases"

export class DeleteInformationUseCase implements IDeleteInformationUseCase {
  constructor(private readonly informationRepository: IInformationRepository) {}

  async execute(params: IDeleteInformationUseCaseParams): Promise<void> {
    const { informationID } = params

    await this.informationRepository.delete({ informationID })

    return
  }
}
