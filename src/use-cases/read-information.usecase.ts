import type { IInformationRepository } from "@/core/repositories/information"
import type {
  IReadInformationUseCase,
  IReadInformationUseCaseParams,
  IReadInformationUseCaseResult,
} from "@/core/use-cases"

export class ReadInformationUseCase implements IReadInformationUseCase {
  constructor(private readonly informationRepository: IInformationRepository) {}

  async execute(
    params: IReadInformationUseCaseParams,
  ): Promise<IReadInformationUseCaseResult> {
    const { search } = params

    const { information } = await this.informationRepository.read({ search })

    return { information }
  }
}
