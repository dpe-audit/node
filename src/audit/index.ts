import type { Batiment } from '../batiment'
import type { ILogement } from '../logement'
import type { IScenario } from '../scenario'

export interface IAudit {
  id?: string
  diagnostic_id?: string
  date_visite: string
  date_etablissement: string
  batiment?: Batiment
  logements?: ILogement[]
  scenarios: IScenario[]
}
