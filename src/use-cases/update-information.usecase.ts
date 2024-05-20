import type { IInformationRepository } from "@/core/repositories/information"
import type {
  IUpdateInformationUseCase,
  IUpdateInformationUseCaseParams,
  IUpdateInformationUseCaseResult,
} from "@/core/use-cases"

export class UpdateInformationUseCase implements IUpdateInformationUseCase {
  constructor(private readonly informationRepository: IInformationRepository) {}

  async execute(
    params: IUpdateInformationUseCaseParams,
  ): Promise<IUpdateInformationUseCaseResult> {
    const { information } = params

    const { updatedInformation } = await this.informationRepository.update({
      newInformation: {
        ...information,
        updatedAt: new Date(),
      },
    })

    return { updatedInformation }
  }
}
