import type { Batiment } from '../batiment'
import type { Bilan, Consommations, ZoneClimatique } from '../common'
import type { IChauffage } from '../chauffage'
import type { IEcs } from '../ecs'
import type { IEnveloppe } from '../enveloppe'
import type { ILogement } from '../logement'
import type { IProduction } from '../production'
import type { IRefroidissment } from '../refroidissement'
import type { IVentilation } from '../ventilation'

export interface IDiagnostic {
  id?: string
  date?: string
  date_visite: Date
  date_etablissement: Date
  batiment: Batiment
  logements: ILogement[]
  enveloppe: IEnveloppe
  chauffage: IChauffage
  ecs: IEcs
  ventilation: IVentilation
  refroidissement: IRefroidissment
  production: IProduction
  data?: DiagnosticData
}

export type DiagnosticData = {
  zone_climatique: ZoneClimatique
  effet_joule: boolean
  parois_anciennes_lourdes: boolean
  surface_reference: number
  volume_reference: number
  bilan: Bilan
  consommations: Consommations
}
