import type { Consommations } from '../common'

export interface ISysteme {
  id: string
  installation_id: string
  generateur_id: string
  reseau: Reseau
  stockage: Stockage | null
  data?: SystemeData
}

export type SystemeData = {
  rdim: number
  paux: number
  iecs: number
  rd: number
  rs: number
  rg: number
  rgs: number
  pertes_stockage: number
  pertes_stockage_recuperables: number
  pertes_distribution: number
  pertes_distribution_recuperables: number
  consommations: Consommations
}

export type Reseau = {
  alimentation_contigue: boolean
  niveaux_desservis: number
  isolation: Isolation | null
  bouclage: Bouclage | null
}

export type Stockage = {
  volume: number
  position_volume_chauffe: boolean
}

export enum Isolation {
  isole = 'isole',
  non_isole = 'non_isole'
}

export enum Bouclage {
  non_boucle = 'non_boucle',
  boucle = 'boucle',
  trace = 'trace'
}

export const isolationToString = (value: Isolation): string => {
  switch (value) {
    case Isolation.isole:
      return 'Isolé'
    case Isolation.non_isole:
      return 'Non isolé'
  }
}

export const bouclageToString = (value: Bouclage): string => {
  switch (value) {
    case Bouclage.non_boucle:
      return 'Réseau non bouclé'
    case Bouclage.boucle:
      return 'Réseau bouclé'
    case Bouclage.trace:
      return 'Réseau trace'
  }
}
