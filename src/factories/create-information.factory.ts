import { PGInformationRepository } from "@/repositories/neon-postgres/information"
import { CreateInformationUseCase } from "@/use-cases"

export const createInformationFactory = () => {
  const informationRepository = new PGInformationRepository()
  const createInformation = new CreateInformationUseCase(informationRepository)
  return createInformation
}
