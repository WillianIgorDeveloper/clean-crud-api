import { PGInformationRepository } from "@/repositories/neon-postgres/information"
import { DeleteInformationUseCase } from "@/use-cases"

export const deleteInformationFactory = () => {
  const informationRepository = new PGInformationRepository()
  const deleteInformation = new DeleteInformationUseCase(informationRepository)
  return deleteInformation
}
