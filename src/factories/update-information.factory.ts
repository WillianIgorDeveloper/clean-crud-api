import { PGInformationRepository } from "@/repositories/neon-postgres/information"
import { UpdateInformationUseCase } from "@/use-cases"

export const updateInformationFactory = () => {
  const informationRepository = new PGInformationRepository()
  const updateInformation = new UpdateInformationUseCase(informationRepository)
  return updateInformation
}
