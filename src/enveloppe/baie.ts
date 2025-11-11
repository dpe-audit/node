import type { Mitoyennete, Performance } from './paroi'

export interface IBaie {
  id: string
  description: string
  type: TypeBaie
  presence_protection_solaire: boolean
  type_fermeture: TypeFermeture
  annee_installation: number | null
  ug: number | null
  uw: number | null
  ujn: number | null
  sw: number | null
  position: Position
  menuiserie: Menuiserie | null
  vitrage: Vitrage
  survitrage: Survitrage | null
  masques: string[]
  data?: BaieData
}

export type BaieData = {
  sdep: number
  u: number
  ug: number
  uw: number
  deltar: number
  fe: number
  sw: number
  sse: number
  b: number
  dp: number
  performance: Performance
}

export type Position = {
  local_non_chauffe_id: string | null
  paroi_id: string | null
  double_fenetre_id: string | null
  surface: number
  mitoyennete: Mitoyennete
  type_pose: TypePose | null
  presence_soubassement: boolean | null
  orientation: number | null
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

export enum TypeFermeture {
  sans_fermeture = 'sans_fermeture',
  jalousie_accordeon = 'jalousie_accordeon',
  fermeture_lames_orientables = 'fermeture_lames_orientables',
  venitiens_exterieurs_metal = 'venitiens_exterieurs_metal',
  volet_battant_avec_ajours_fixes = 'volet_battant_avec_ajours_fixes',
  persiennes_avec_ajours_fixes = 'persiennes_avec_ajours_fixes',
  fermeture_sans_ajours = 'fermeture_sans_ajours',
  volets_roulants_aluminium = 'volets_roulants_aluminium',
  volets_roulants_pvc_bois_epaisseur_lte_12mm = 'volets_roulants_pvc_bois_epaisseur_lte_12mm',
  volets_roulants_pvc_bois_epaisseur_gt_12mm = 'volets_roulants_pvc_bois_epaisseur_gt_12mm',
  persienne_coulissante_epaisseur_lte_22mm = 'persienne_coulissante_epaisseur_lte_22mm',
  persienne_coulissante_epaisseur_gt_22mm = 'persienne_coulissante_epaisseur_gt_22mm',
  volet_battant_pvc_bois_epaisseur_lte_22mm = 'volet_battant_pvc_bois_epaisseur_lte_22mm',
  volet_battant_pvc_bois_epaisseur_gt_22mm = 'volet_battant_pvc_bois_epaisseur_gt_22mm',
  fermeture_isolee_sans_ajours = 'fermeture_isolee_sans_ajours'
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

export const typeFermetureToString = (value: TypeFermeture): string => {
  switch (value) {
    case TypeFermeture.sans_fermeture:
      return 'Sans fermeture'
    case TypeFermeture.jalousie_accordeon:
      return 'Jalousie accordéon'
    case TypeFermeture.fermeture_lames_orientables:
      return 'Fermeture lames orientables'
    case TypeFermeture.venitiens_exterieurs_metal:
      return 'Vénitiens extérieurs métal'
    case TypeFermeture.volet_battant_avec_ajours_fixes:
      return 'Volet battant avec ajours fixes'
    case TypeFermeture.persiennes_avec_ajours_fixes:
      return 'Persiennes avec ajours fixes'
    case TypeFermeture.fermeture_sans_ajours:
      return 'Fermeture sans ajours'
    case TypeFermeture.volets_roulants_aluminium:
      return 'Volets roulants aluminium'
    case TypeFermeture.volets_roulants_pvc_bois_epaisseur_lte_12mm:
      return 'Volets roulants PVC/bois épaisseur ≤ 12 mm'
    case TypeFermeture.volets_roulants_pvc_bois_epaisseur_gt_12mm:
      return 'Volets roulants PVC/bois épaisseur > 12 mm'
    case TypeFermeture.persienne_coulissante_epaisseur_lte_22mm:
      return 'Persienne coulissante épaisseur ≤ 22 mm'
    case TypeFermeture.persienne_coulissante_epaisseur_gt_22mm:
      return 'Persienne coulissante épaisseur > 22 mm'
    case TypeFermeture.volet_battant_pvc_bois_epaisseur_lte_22mm:
      return 'Volet battant PVC/bois épaisseur ≤ 22 mm'
    case TypeFermeture.volet_battant_pvc_bois_epaisseur_gt_22mm:
      return 'Volet battant PVC/bois épaisseur > 22 mm'
    case TypeFermeture.fermeture_isolee_sans_ajours:
      return 'Fermeture isolée sans ajours'
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
