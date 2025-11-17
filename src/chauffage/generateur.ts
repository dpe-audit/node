import type { Consommations } from "../common"

export interface IGenerateur {
  id: string
  description: string
  type: TypeGenerateur | null
  energie: EnergieGenerateur | null
  bienergie: Exclude<EnergieGenerateur, EnergieGenerateur.reseau_chaleur> | null
  annee_installation: number | null
  position: Position
  signaletique: Signaletique
  data?: GenerateurData
}

export type GenerateurData = {
  rdim: number
  pn: number
  pdim: number
  pch: number
  rg: number
  scop: number | null
  rpn: number | null
  rpint: number | null
  qp0: number | null
  pveilleuse: number | null
  tfonc30: number | null
  tfonc100: number | null
  pertes_generation: number
  pertes_generation_recuperables: number
  consommations: Consommations
}

export type Position = {
  position_chaudiere: PositionChaudiere | null
  generateur_collectif: boolean
  generateur_multi_batiment: boolean
  position_volume_chauffe: boolean
  generateur_mixte_id: string | null
  reseau_chaleur_id: string | null
}

export type Signaletique = {
  pn: number | null
  label: LabelGenerateur | null
  scop: number | null
  mode_combustion: ModeCombustion | null
  presence_ventouse: boolean | null
  presence_regulation_combustion: boolean | null
  pveilleuse: number | null
  qp0: number | null
  rpn: number | null
  rpint: number | null
  tfonc30: number | null
  tfonc100: number | null
}

export enum TypeGenerateur {
  chaudiere = 'chaudiere',
  convecteur_bi_jonction = 'convecteur_bi_jonction',
  convecteur_electrique = 'convecteur_electrique',
  cuisiniere = 'cuisiniere',
  foyer_ferme = 'foyer_ferme',
  insert = 'insert',
  generateur_air_chaud = 'generateur_air_chaud',
  pac_air_air = 'pac_air_air',
  pac_air_eau = 'pac_air_eau',
  pac_eau_eau = 'pac_eau_eau',
  pac_eau_glycolee_eau = 'pac_eau_glycolee_eau',
  pac_geothermique = 'pac_geothermique',
  panneau_rayonnant_electrique = 'panneau_rayonnant_electrique',
  plafond_rayonnant_electrique = 'plafond_rayonnant_electrique',
  plancher_rayonnant_electrique = 'plancher_rayonnant_electrique',
  poele = 'poele',
  poele_bouilleur = 'poele_bouilleur',
  radiateur_electrique = 'radiateur_electrique',
  radiateur_electrique_accumulation = 'radiateur_electrique_accumulation',
  radiateur_gaz = 'radiateur_gaz',
  reseau_chaleur = 'reseau_chaleur'
}

export enum EnergieGenerateur {
  electricite = 'electricite',
  gaz_naturel = 'gaz_naturel',
  gpl = 'gpl',
  fioul = 'fioul',
  charbon = 'charbon',
  bois_buche = 'bois_buche',
  bois_plaquette = 'bois_plaquette',
  bois_granule = 'bois_granule',
  reseau_chaleur = 'reseau_chaleur'
}

export enum PositionChaudiere {
  chaudiere_murale = 'chaudiere_murale',
  chaudiere_sol = 'chaudiere_sol'
}

export enum LabelGenerateur {
  flamme_verte = 'flamme_verte',
  nf_performance = 'nf_performance'
}

export enum TypeChaudiere {
  chaudiere_murale = 'chaudiere_murale',
  chaudiere_sol = 'chaudiere_sol'
}

export enum ModeCombustion {
  standard = 'standard',
  basse_temperature = 'basse_temperature',
  condensation = 'condensation'
}

export const typeGenerateurToString = (value: TypeGenerateur | null): string => {
  switch (value) {
    case TypeGenerateur.chaudiere:
      return 'Chaudière'
    case TypeGenerateur.convecteur_bi_jonction:
      return 'Convecteur bi-jonction'
    case TypeGenerateur.convecteur_electrique:
      return 'Convecteur électrique'
    case TypeGenerateur.cuisiniere:
      return 'Cuisinière'
    case TypeGenerateur.foyer_ferme:
      return 'Foyer fermé'
    case TypeGenerateur.generateur_air_chaud:
      return 'Générateur air chaud'
    case TypeGenerateur.insert:
      return 'Insert'
    case TypeGenerateur.pac_air_air:
      return 'PAC air-air'
    case TypeGenerateur.pac_air_eau:
      return 'PAC air-eau'
    case TypeGenerateur.pac_eau_eau:
      return 'PAC eau-eau'
    case TypeGenerateur.pac_eau_glycolee_eau:
      return 'PAC eau glycolée-eau'
    case TypeGenerateur.pac_geothermique:
      return 'PAC géothermique'
    case TypeGenerateur.panneau_rayonnant_electrique:
      return 'Panneau rayonnant électrique'
    case TypeGenerateur.plafond_rayonnant_electrique:
      return 'Plafond rayonnant électrique'
    case TypeGenerateur.plancher_rayonnant_electrique:
      return 'Plancher rayonnant électrique'
    case TypeGenerateur.poele:
      return 'Poêle'
    case TypeGenerateur.poele_bouilleur:
      return 'Poêle bouilleur'
    case TypeGenerateur.radiateur_electrique:
      return 'Radiateur électrique'
    case TypeGenerateur.radiateur_electrique_accumulation:
      return 'Radiateur électrique à accumulation'
    case TypeGenerateur.radiateur_gaz:
      return 'Radiateur gaz'
    case TypeGenerateur.reseau_chaleur:
      return 'Réseau de chaleur'
    default:
      return 'Générateur inconnu'
  }
}

export const energieGenerateurToString = (value: EnergieGenerateur | null): string => {
  switch (value) {
    case EnergieGenerateur.electricite:
      return 'Electricité'
    case EnergieGenerateur.gaz_naturel:
      return 'Gaz naturel'
    case EnergieGenerateur.gpl:
      return 'GPL'
    case EnergieGenerateur.fioul:
      return 'Fioul'
    case EnergieGenerateur.charbon:
      return 'Charbon'
    case EnergieGenerateur.bois_buche:
      return 'Bois bûche'
    case EnergieGenerateur.bois_plaquette:
      return 'Bois plaquette'
    case EnergieGenerateur.bois_granule:
      return 'Bois granulé'
    case EnergieGenerateur.reseau_chaleur:
      return 'Réseau de chaleur'
    default:
      return 'Inconnue'
  }
}

export const labelGenerateurToString = (value: LabelGenerateur): string => {
  switch (value) {
    case LabelGenerateur.flamme_verte:
      return 'Flamme verte'
    case LabelGenerateur.nf_performance:
      return 'NF performance'
  }
}

export const typeChaudiereToString = (value: TypeChaudiere): string => {
  switch (value) {
    case TypeChaudiere.chaudiere_murale:
      return 'Chaudière murale'
    case TypeChaudiere.chaudiere_sol:
      return 'Chaudière sol'
  }
}

export const modeCombustionToString = (value: ModeCombustion): string => {
  switch (value) {
    case ModeCombustion.standard:
      return 'Standard'
    case ModeCombustion.basse_temperature:
      return 'Basse température'
    case ModeCombustion.condensation:
      return 'Condensation'
  }
}
