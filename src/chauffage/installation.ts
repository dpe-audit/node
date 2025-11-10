import type { Consommations } from "../common"

export interface IInstallation {
  id: string
  description: string
  surface: number
  comptage_individuel: boolean
  solaire_thermique: SolaireThermique | null
  regulation_centrale: Regulation
  regulation_terminale: Regulation
  data?: InstallationData
}

export type InstallationData = {
  rdim: number
  fch: number
  int: number
  i0: number
  ich: number
  rd: number
  re: number
  rg: number
  rr: number
  consommations: Consommations
}

export type SolaireThermique = {
  usage: Usage
  annee_installation: number | null
  fch: number | null
}

export type Regulation = {
  presence_regulation: boolean
  minimum_temperature: boolean | null
  detection_presence: boolean | null
}

export enum Usage {
  chauffage = 'chauffage',
  chauffage_ecs = 'chauffage_ecs'
}

export const usageToString = (value: Usage): string => {
  switch (value) {
    case Usage.chauffage:
      return 'Chauffage'
    case Usage.chauffage_ecs:
      return 'Chauffage et ECS'
  }
}
