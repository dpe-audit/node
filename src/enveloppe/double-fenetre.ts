export interface IDoubleFenetre {
  id: string
  description: string
  type_baie: TypeBaie
  ug: number | null
  uw: number | null
  sw: number | null
  position: Position
  menuiserie: Menuiserie | null
  vitrage: Vitrage
  survitrage: Survitrage | null
  masques: string[]
  data?: DoubleFenetreData
}

export type DoubleFenetreData = {
  ug: number
  uw: number
  sw: number
}

export type Position = {
  type_pose: TypePose | null
  presence_soubassement: boolean | null
  inclinaison: number
}

export type Menuiserie = {
  materiau: Materiau | null
  largeur_dormant: number | null
  presence_joint: boolean | null
  presence_retour_isolation: boolean | null
  presence_rupteur_pont_thermique: boolean | null
}

export type Vitrage = {
  type: TypeVitrage
  nature_lame: NatureLame | null
  epaisseur_lame: number | null
}

export type Survitrage = {
  type: TypeSurvitrage | null
  epaisseur_lame: number | null
}

export enum TypeBaie {
  brique_verre_pleine = 'brique_verre_pleine',
  brique_verre_creuse = 'brique_verre_creuse',
  polycarbonate = 'polycarbonate',
  fenetre_battante = 'fenetre_battante',
  fenetre_coulissante = 'fenetre_coulissante',
  porte_fenetre_coulissante = 'porte_fenetre_coulissante',
  porte_fenetre_battante = 'porte_fenetre_battante'
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
  brique_verre = 'brique_verre',
  polycarbonate = 'polycarbonate',
  simple_vitrage = 'simple_vitrage',
  double_vitrage = 'double_vitrage',
  double_vitrage_fe = 'double_vitrage_fe',
  triple_vitrage = 'triple_vitrage',
  triple_vitrage_fe = 'triple_vitrage_fe'
}

export enum NatureLame {
  air = 'air',
  argon = 'argon',
  krypton = 'krypton'
}

export enum TypeSurvitrage {
  survitrage_simple = 'survitrage_simple',
  survitrage_fe = 'survitrage_fe'
}

export const typeBaieToString = (value: TypeBaie): string => {
  switch (value) {
    case TypeBaie.brique_verre_pleine:
      return 'Brique verre pleine'
    case TypeBaie.brique_verre_creuse:
      return 'Brique verre creuse'
    case TypeBaie.polycarbonate:
      return 'Polycarbonate'
    case TypeBaie.fenetre_battante:
      return 'Fenêtre battante'
    case TypeBaie.fenetre_coulissante:
      return 'Fenêtre coulissante'
    case TypeBaie.porte_fenetre_coulissante:
      return 'Porte-fenêtre coulissante'
    case TypeBaie.porte_fenetre_battante:
      return 'Porte-fenêtre battante'
  }
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
    case TypeVitrage.brique_verre:
      return 'Brique verre'
    case TypeVitrage.polycarbonate:
      return 'Polycarbonate'
    case TypeVitrage.simple_vitrage:
      return 'Simple vitrage'
    case TypeVitrage.double_vitrage:
      return 'Double vitrage'
    case TypeVitrage.double_vitrage_fe:
      return 'Double vitrage à faible émissivité'
    case TypeVitrage.triple_vitrage:
      return 'Triple vitrage'
    case TypeVitrage.triple_vitrage_fe:
      return 'Triple vitrage à faible émissivité'
  }
}

export const natureLameToString = (value: NatureLame): string => {
  switch (value) {
    case NatureLame.air:
      return 'Air'
    case NatureLame.argon:
      return 'Argon'
    case NatureLame.krypton:
      return 'Krypton'
  }
}

export const typeSurvitrageToString = (value: TypeSurvitrage): string => {
  switch (value) {
    case TypeSurvitrage.survitrage_simple:
      return 'Survitrage simple'
    case TypeSurvitrage.survitrage_fe:
      return 'Survitrage à faible émissivité'
  }
}
