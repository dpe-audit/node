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

export const retrieveEcs = async (
  id: string
): Promise<Ecs | NotFound> => {
  return send<Ecs | NotFound>({
    method: 'GET',
    path: `/audit/${id}/ecs`
  })
}

export interface Ecs {
  generateurs: Generateur[]
  installations: Installation[]
  systemes: Systeme[]
  data?: Partial<EcsData>
}

export type EcsData = {
  nmax: number
  nadeq: number
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
  volume_stockage: number
  generateur_collectif: boolean
  position_volume_chauffe: boolean
  annee_installation: number | null
  pn: number | null
  cop: number | null
  label: LabelGenerateur | null
  type_chaudiere: TypeChaudiere | null
  mode_combustion: ModeCombustion | null
  presence_ventouse: boolean | null
  pveilleuse: number | null
  qp0: number | null
  rpn: number | null
  reseau_chaleur_id: string | null
  generateur_mixte_id: string | null
  data?: Partial<GenerateurData>
}

export type GenerateurData = {
  pecs: number
  paux: number
  pn: number
  cop: number
  rpn: number
  qp0: number
  pveilleuse: number
  pertes: Perte[]
  pertes_recuperables: Perte[]
  consommations: Consommation[]
  emissions: Emission[]
}

export interface Installation {
  id: string
  description: string
  surface: number
  solaire_thermique: SolaireThermique | null
  data?: Partial<InstallationData>
}

export type InstallationData = {
  rdim: number
  fecs: number | null
  pertes: Perte[]
  pertes_recuperables: Perte[]
  consommations: Consommation[]
  emissions: Emission[]
}

export interface Systeme {
  id: string
  installation_id: string
  generateur_id: string
  reseau: Reseau
  stockage: Stockage | null
  data?: Partial<SystemeData>
}

export type SystemeData = {
  rdim: number
  rendements: Rendement[]
  pertes: Perte[]
  pertes_recuperables: Perte[]
  consommations: Consommation[]
  emissions: Emission[]
}

export type Rendement = {
  scenario: Scenario
  iecs: number
  rd: number
  rs: number
  rg: number
  rgs: number
}

export enum TypeGenerateur {
  accumulateur = 'accumulateur',
  chauffe_eau_instantane = 'chauffe_eau_instantane',
  chauffe_eau_vertical = 'chauffe_eau_vertical',
  chauffe_eau_horizontal = 'chauffe_eau_horizontal',
  chaudiere = 'chaudiere',
  cet_air_ambiant = 'cet_air_ambiant',
  cet_air_exterieur = 'cet_air_exterieur',
  cet_air_extrait = 'cet_air_extrait',
  pac_double_service = 'pac_double_service',
  poele_bouilleur = 'poele_bouilleur',
  reseau_chaleur = 'reseau_chaleur'
}

export type EnergieGenerateur = Energie

export enum LabelGenerateur {
  ne_performance_a = 'ne_performance_a',
  ne_performance_b = 'ne_performance_b',
  ne_performance_c = 'ne_performance_c'
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

export type SolaireThermique = {
  usage: Usage
  annee_installation: number | null
  fecs: number | null
}

export enum Usage {
  ecs = 'ecs',
  chauffage_ecs = 'chauffage_ecs'
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
  reseau_non_boucle = 'reseau_non_boucle',
  reseau_boucle = 'reseau_boucle',
  reseau_trace = 'reseau_trace'
}
