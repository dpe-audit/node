import type { Consommations } from "../common"

export interface ISysteme {
  id: string
  description: string
  installation_id: string
  generateur_id: string
  type: TypeChauffage
  cascade: number | null
  reseau: Reseau | null
  emetteurs: string[]
  data?: SystemeData
}

export type SystemeData = {
  rdim: number
  paux: number
  int: number
  i0: number
  ich: number
  rd: number
  re: number
  rg: number
  rr: number
  consommations: Consommations
}

export type Reseau = {
  type_distribution: TypeDistribution
  presence_circulateur_externe: boolean
  niveaux_desservis: number
  isolation: Isolation | null
}

export enum TypeChauffage {
  chauffage_divise = 'chauffage_divise',
  chauffage_central = 'chauffage_central'
}

export enum TypeDistribution {
  hydraulique = 'hydraulique',
  aeraulique = 'aeraulique',
  fluide_frigorigene = 'fluide_frigorigene'
}

export enum Isolation {
  non_isole = 'non_isole',
  isole = 'isole'
}

export const typeDistributionToString = (value: TypeDistribution): string => {
  switch (value) {
    case TypeDistribution.hydraulique:
      return 'Hydraulique'
    case TypeDistribution.aeraulique:
      return 'Aéraulique'
    case TypeDistribution.fluide_frigorigene:
      return 'Fluide frigorigène'
  }
}

export const isolationToString = (value: Isolation): string => {
  switch (value) {
    case Isolation.isole:
      return 'Isolé'
    case Isolation.non_isole:
      return 'Non isolé'
  }
}

export const typeChauffageToString = (value: TypeChauffage): string => {
  switch (value) {
    case TypeChauffage.chauffage_divise:
      return 'Chauffage divisé'
    case TypeChauffage.chauffage_central:
      return 'Chauffage central'
  }
}
