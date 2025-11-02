import type { IChauffage } from '../chauffage'
import type { Bilan, Consommations, Pertes, ZoneClimatique } from '../common'
import type { IEcs } from '../ecs'
import type { IEnveloppe } from '../enveloppe'
import type { IProduction } from '../production'
import type { IRefroidissment } from '../refroidissement'
import type { IVentilation } from '../ventilation'

export interface IScenario {
  id: string
  type: TypeScenario
  nom: string
  description: string
  etapes: IEtape[]
}

export interface IEtape {
  id: string
  nom: string
  description: string
  enveloppe: IEnveloppe
  chauffage: IChauffage
  ecs: IEcs
  ventilation: IVentilation
  refroidissement: IRefroidissment
  production: IProduction
  data?: Partial<EtapeData>
}

export type EtapeData = {
  zone_climatique: ZoneClimatique
  effet_joule: boolean
  parois_anciennes_lourdes: boolean
  surface_reference: number
  volume_reference: number
  bilan: Bilan
  consommations: Consommations
  pertes: Pertes
}

export enum TypeScenario {
  renovation_globale = 'renovation_globale',
  renovation_par_etapes = 'renovation_par_etapes'
}

export const typeScenarioToString = (value: TypeScenario): string => {
  switch (value) {
    case TypeScenario.renovation_globale:
      return 'Rénovation globale'
    case TypeScenario.renovation_par_etapes:
      return 'Rénovation par étapes'
  }
}
