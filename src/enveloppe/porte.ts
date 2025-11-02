import type { Mitoyennete, Performance } from './paroi'

export interface IPorte {
  id: string
  description: string
  isolation: Isolation | null
  materiau: Materiau | null
  annee_installation: number | null
  u: number | null
  position: Position
  vitrage: Vitrage
  menuiserie: Menuiserie
  data?: Partial<PorteData>
}

export type PorteData = {
  sdep: number
  u: number
  b: number
  dp: number
  performance: Performance
}

export type Position = {
  local_non_chauffe_id: string | null
  paroi_id: string | null
  surface: number
  orientation: number | null
  mitoyennete: Mitoyennete
  presence_sas: boolean | null
  type_pose: TypePose | null
}

export type Menuiserie = {
  largeur_dormant: number | null
  presence_joint: boolean | null
  presence_retour_isolation: boolean | null
}

export type Vitrage = {
  surface: number
  type: TypeVitrage | null
}

export enum Isolation {
  isole = 'isole',
  non_isole = 'non_isole'
}

export enum TypePose {
  nu_exterieur = 'nu_exterieur',
  nu_interieur = 'nu_interieur',
  tunnel = 'tunnel'
}

export enum Materiau {
  pvc = 'pvc',
  bois = 'bois',
  bois_metal = 'bois_metal',
  metal = 'metal'
}

export enum TypeVitrage {
  simple_vitrage = 'simple_vitrage',
  double_vitrage = 'double_vitrage',
  triple_vitrage = 'triple_vitrage'
}

export const typePoseToString = (value: TypePose): string => {
  switch (value) {
    case TypePose.nu_exterieur:
      return 'Nu extérieur'
    case TypePose.nu_interieur:
      return 'Nu intérieur'
    case TypePose.tunnel:
      return 'Tunnel'
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

export const materiauToString = (value: Materiau): string => {
  switch (value) {
    case Materiau.pvc:
      return 'PVC'
    case Materiau.bois:
      return 'Bois'
    case Materiau.bois_metal:
      return 'Bois métal'
    case Materiau.metal:
      return 'Métal'
  }
}

export const typeVitrageToString = (value: TypeVitrage): string => {
  switch (value) {
    case TypeVitrage.simple_vitrage:
      return 'Simple vitrage'
    case TypeVitrage.double_vitrage:
      return 'Double vitrage'
    case TypeVitrage.triple_vitrage:
      return 'Triple vitrage'
  }
}
