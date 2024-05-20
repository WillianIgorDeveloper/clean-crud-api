import type { IInformationRepository } from "@/core/repositories/information"
import { CreateInformationRepository } from "./create.repository"
import { DeleteInformationRepository } from "./delete.repository"
import { UpdateInformationRepository } from "./update.repository"
import { ReadInformationRepository } from "./read.repository"

export class PGInformationRepository implements IInformationRepository {
  create = new CreateInformationRepository().create
  read = new ReadInformationRepository().read
  update = new UpdateInformationRepository().update
  delete = new DeleteInformationRepository().delete
}
