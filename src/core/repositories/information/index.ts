import type { ICreateInformationRepository } from "./create.core"
import type { IReadInformationRepository } from "./read.core"
import type { IDeleteInformationRepository } from "./delete.core"
import type { IUpdateInformationRepository } from "./update.core"

export interface IInformationRepository
  extends ICreateInformationRepository,
    IReadInformationRepository,
    IUpdateInformationRepository,
    IDeleteInformationRepository {}
