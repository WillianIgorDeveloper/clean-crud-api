import { PGInformationRepository } from "@/repositories/neon-postgres/information"
import { ReadInformationUseCase } from "@/use-cases"

export const readInformationFactory = () => {
  const informationRepository = new PGInformationRepository()
  const readInformation = new ReadInformationUseCase(informationRepository)
  return readInformation
}
