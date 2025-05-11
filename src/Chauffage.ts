import {
  Besoin,
  Consommation,
  Emission,
  Energie,
  Perte,
  Scenario
} from './common'
import { NotFound } from './errors'
import { send } from './request'

export const retrieveChauffage = async (
  id: string
): Promise<Chauffage | NotFound> => {
  return send<Chauffage | NotFound>({
    method: 'GET',
    path: `/audit/${id}/chauffage`
  })
}

export interface Chauffage {
  generateurs: Generateur[]
  emetteurs: Emetteur[]
  installations: Installation[]
  systemes: Systeme[]
  data?: Partial<ChauffageData>
}

export type ChauffageData = {
  besoins: Besoin[]
  pertes: Perte[]
  pertes_recuperables: Perte[]
  consommations: Consommation[]
  emissions: Emission[]
}

export interface Generateur {
  id: string
  description: string
  type: TypeGenerateur
  energie: EnergieGenerateur
  energie_partie_chaudiere: EnergieGenerateur | null
  generateur_collectif: boolean
  position_volume_chauffe: boolean
  generateur_multi_batiment: boolean
  annee_installation: number | null
  pn: number | null
  scop: number | null
  label: LabelGenerateur | null
  type_chaudiere: TypeChaudiere | null
  priorite_cascade: number | null
  mode_combustion: ModeCombustion | null
  presence_ventouse: boolean | null
  presence_regulation_combustion: boolean | null
  pveilleuse: number | null
  qp0: number | null
  rpn: number | null
  rpint: number | null
  tfonc30: number | null
  tfonc100: number | null
  reseau_chaleur_id: string | null
  generateur_mixte_id: string | null
  data?: Partial<GenerateurData>
}

export type GenerateurData = {
  pch: number
  pn: number
  paux: number
  scop: number
  rpn: number
  rpint: number
  qp0: number
  pveilleuse: number
  tfonc30: number
  tfonc100: number
  pertes: Perte[]
  pertes_recuperables: Perte[]
  consommations: Consommation[]
  emissions: Emission[]
}

export enum TypeGenerateur {
  chaudiere = 'chaudiere',
  convecteur_bi_jonction = 'convecteur_bi_jonction',
  convecteur_electrique = 'convecteur_electrique',
  cuisiniere = 'cuisiniere',
  foyer_ferme = 'foyer_ferme',
  generateur_air_chaud = 'generateur_air_chaud',
  insert = 'insert',
  pac_air_air = 'pac_air_air',
  pac_air_eau = 'pac_air_eau',
  pac_eau_eau = 'pac_eau_eau',
  pac_eau_glycolee_eau = 'pac_eau_glycolee_eau',
  pac_geothermique = 'pac_geothermique',
  pac_hybride_air_eau = 'pac_hybride_air_eau',
  pac_hybride_eau_eau = 'pac_hybride_eau_eau',
  pac_hybride_eau_glycolee_eau = 'pac_hybride_eau_glycolee_eau',
  pac_hybride_geothermique = 'pac_hybride_geothermique',
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

export type EnergieGenerateur = Energie

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

export interface Emetteur {
  id: string
  description: string
  type: TypeEmetteur
  temperature_distribution: TemperatureDistribution
  presence_robinet_thermostatique: boolean
  annee_installation: number | null
}

export enum TypeEmetteur {
  plancher_chauffant = 'plancher_chauffant',
  plafond_chauffant = 'plafond_chauffant',
  radiateur_monotube = 'radiateur_monotube',
  radiateur_bitube = 'radiateur_bitube',
  radiateur = 'radiateur'
}

export enum TemperatureDistribution {
  basse = 'basse',
  moyenne = 'moyenne',
  haute = 'haute'
}

export interface Installation {
  id: string
  description: string
  surface: number
  comptage_individuel: boolean
  solaire_thermique: SolaireThermique | null
  regulation_centrale: Regulation
  regulation_terminale: Regulation
  data?: Partial<InstallationData>
}

export type InstallationData = {
  rdim: number
  fch: number
  consommations: Consommation[]
  emissions: Emission[]
}

export type SolaireThermique = {
  usage: Usage
  annee_installation: number | null
  fch: number | null
}

export type Regulation = {
  presence_regulation: boolean
  minimum_temperature: boolean
  detection_presence: boolean
}

export enum Usage {
  chauffage = 'chauffage',
  chauffage_ecs = 'chauffage_ecs'
}

export interface Systeme {
  id: string
  installation_id: string
  generateur_id: string
  type: TypeChauffage
  reseau: Reseau | null
  emetteurs: string[]
  data?: Partial<SystemeData>
}

export type SystemeData = {
  configuration: ConfigurationSysteme
  rdim: number
  rd: number
  re: number
  rr: number
  rg: Rendement[]
  ich: Rendement[]
  intermittences: Intermittence[]
  consommations: Consommation[]
  emissions: Emission[]
}

export type Rendement = {
  scenario: Scenario
  rendement: number
}

export type Intermittence = {
  scenario: Scenario
  i0: number
  int: number
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
  aeraulique = 'aeraulique'
}

export enum Isolation {
  non_isole = 'non_isole',
  isole = 'isole'
}

export enum ConfigurationSysteme {
  base = 'base',
  releve = 'releve',
  appoint = 'appoint'
}
