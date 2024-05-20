import { randomUUID } from "node:crypto"
import type { IInformationRepository } from "@/core/repositories/information"
import type {
  ICreateInformationUseCase,
  ICreateInformationUseCaseParams,
  ICreateInformationUseCaseResult,
} from "@/core/use-cases"

export class CreateInformationUseCase implements ICreateInformationUseCase {
  constructor(private readonly informationRepository: IInformationRepository) {}

  async execute(
    params: ICreateInformationUseCaseParams,
  ): Promise<ICreateInformationUseCaseResult> {
    const { title, description } = params

    const { information } = await this.informationRepository.create({
      newInformation: {
        id: randomUUID(),
        title,
        description,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    })

    return { information }
  }
}
