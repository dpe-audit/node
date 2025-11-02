import type { Consommations, Pertes } from '../common'

export interface IInstallation {
  id: string
  description: string
  surface: number
  solaire_thermique: SolaireThermique | null
  data?: Partial<InstallationData>
}

export type InstallationData = {
  rdim: number
  fecs: number
  iecs: number
  rd: number
  rs: number
  rg: number
  rgs: number
  pertes: Pertes
  consommations: Consommations
}

export type SolaireThermique = {
  usage: Usage
  annee_installation: number | null
  fecs: number | null
}

export enum Usage {
  ecs = 'ecs',
  chauffage_ecs = 'chauffage_ecs'
}

export const usageToString = (value: Usage): string => {
  switch (value) {
    case Usage.ecs:
      return 'Eau chaude sanitaire'
    case Usage.chauffage_ecs:
      return 'Chauffage et eau chaude sanitaire'
  }
}
