import type { Besoin, Consommation, Emission, Perte, Scenario } from './Common'

export interface Chauffage {
  generateurs: Generateur[]
  emetteurs: Emetteur[]
  installations: Installation[]
  systemes: Systeme[]
}

export interface ChauffageWithData extends Chauffage {
  generateurs: GenerateurWithData[]
  installations: InstallationWithData[]
  systemes: SystemeWithData[]
  data: ChauffageData
}

export interface ChauffageData {
  besoins: Besoin[]
  pertes: Perte[]
  pertes_recuperables: Perte[]
  consommations: Consommation[]
  emissions: Emission[]
}

export interface Generateur {
  id: string
  description: string
  type: Generateur.Type
  energie: Generateur.Energie
  energie_partie_chaudiere: Generateur.Energie | null
  generateur_collectif: boolean
  position_volume_chauffe: boolean
  generateur_multi_batiment: boolean
  annee_installation: number | null
  pn: number | null
  scop: number | null
  label: Generateur.Label | null
  type_chaudiere: Generateur.TypeChaudiere | null
  priorite_cascade: number | null
  mode_combustion: Generateur.ModeCombustion | null
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
}

export interface GenerateurWithData extends Generateur {
  data: GenerateurData
}

export interface GenerateurData {
  pch: number | null
  pn: number | null
  paux: number | null
  scop: number | null
  rpn: number | null
  rpint: number | null
  qp0: number | null
  pveilleuse: number | null
  tfonc30: number | null
  tfonc100: number | null
  pertes: Perte[]
  pertes_recuperables: Perte[]
  consommations: Consommation[]
  emissions: Emission[]
}

export namespace Generateur {
  export enum Type {
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

  export enum Energie {
    electricite = 'electricite',
    gaz_naturel = 'gaz_naturel',
    gpl = 'gpl',
    fioul = 'fioul',
    bois_buche = 'bois_buche',
    bois_plaquette = 'bois_plaquette',
    bois_granule = 'bois_granule',
    charbon = 'charbon',
    reseau_chaleur = 'reseau_chaleur'
  }

  export enum Label {
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

  export const typeToString = (value: Type): string => {
    switch (value) {
      case Type.chaudiere:
        return 'Chaudière'
      case Type.convecteur_bi_jonction:
        return 'Convecteur bi-jonction'
      case Type.convecteur_electrique:
        return 'Convecteur électrique'
      case Type.cuisiniere:
        return 'Cuisinière'
      case Type.foyer_ferme:
        return 'Foyer fermé'
      case Type.generateur_air_chaud:
        return 'Générateur air chaud'
      case Type.insert:
        return 'Insert'
      case Type.pac_air_air:
        return 'PAC air-air'
      case Type.pac_air_eau:
        return 'PAC air-eau'
      case Type.pac_eau_eau:
        return 'PAC eau-eau'
      case Type.pac_eau_glycolee_eau:
        return 'PAC eau glycolée-eau'
      case Type.pac_geothermique:
        return 'PAC géothermique'
      case Type.pac_hybride_air_eau:
        return 'PAC hybride air-eau'
      case Type.pac_hybride_eau_eau:
        return 'PAC hybride eau-eau'
      case Type.pac_hybride_eau_glycolee_eau:
        return 'PAC hybride eau glycolée-eau'
      case Type.pac_hybride_geothermique:
        return 'PAC hybride géothermique'
      case Type.panneau_rayonnant_electrique:
        return 'Panneau rayonnant électrique'
      case Type.plafond_rayonnant_electrique:
        return 'Plafond rayonnant électrique'
      case Type.plancher_rayonnant_electrique:
        return 'Plancher rayonnant électrique'
      case Type.poele:
        return 'Poêle'
      case Type.poele_bouilleur:
        return 'Poêle bouilleur'
      case Type.radiateur_electrique:
        return 'Radiateur électrique'
      case Type.radiateur_electrique_accumulation:
        return 'Radiateur électrique à accumulation'
      case Type.radiateur_gaz:
        return 'Radiateur gaz'
      case Type.reseau_chaleur:
        return 'Réseau de chaleur'
    }
  }

  export const energieToString = (value: Energie): string => {
    switch (value) {
      case Energie.electricite:
        return 'Electricité'
      case Energie.gaz_naturel:
        return 'Gaz naturel'
      case Energie.gpl:
        return 'GPL'
      case Energie.fioul:
        return 'Fioul'
      case Energie.bois_buche:
        return 'Bois bûche'
      case Energie.bois_plaquette:
        return 'Bois plaquette'
      case Energie.bois_granule:
        return 'Bois granulé'
      case Energie.charbon:
        return 'Charbon'
      case Energie.reseau_chaleur:
        return 'Réseau de chaleur'
    }
  }

  export const labelToString = (value: Label): string => {
    switch (value) {
      case Label.flamme_verte:
        return 'Flamme verte'
      case Label.nf_performance:
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
}

export interface Emetteur {
  id: string
  description: string
  type: Emetteur.TypeEmetteur
  temperature_distribution: Emetteur.TemperatureDistribution
  presence_robinet_thermostatique: boolean
  annee_installation: number | null
}

export namespace Emetteur {
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

  export const typeEmetteurToString = (value: TypeEmetteur): string => {
    switch (value) {
      case TypeEmetteur.plancher_chauffant:
        return 'Plancher chauffant'
      case TypeEmetteur.plafond_chauffant:
        return 'Plafond chauffant'
      case TypeEmetteur.radiateur_monotube:
        return 'Radiateur monotube'
      case TypeEmetteur.radiateur_bitube:
        return 'Radiateur bitube'
      case TypeEmetteur.radiateur:
        return 'Radiateur'
    }
  }
  export const temperatureDistributionToString = (
    value: TemperatureDistribution
  ): string => {
    switch (value) {
      case TemperatureDistribution.basse:
        return 'Basse température'
      case TemperatureDistribution.moyenne:
        return 'Moyenne température'
      case TemperatureDistribution.haute:
        return 'Haute température'
    }
  }
}

export interface Installation {
  id: string
  description: string
  surface: number
  comptage_individuel: boolean
  solaire_thermique: Installation.SolaireThermique | null
  regulation_centrale: Installation.Regulation
  regulation_terminale: Installation.Regulation
}

export interface InstallationWithData extends Installation {
  data: InstallationData
}

export interface InstallationData {
  rdim: number
  fch: number | null
  consommations: Consommation[]
  emissions: Emission[]
}

export namespace Installation {
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

  export const usageToString = (value: Usage): string => {
    switch (value) {
      case Usage.chauffage:
        return 'Chauffage'
      case Usage.chauffage_ecs:
        return 'Chauffage et ECS'
    }
  }
}

export interface Systeme {
  id: string
  installation_id: string
  generateur_id: string
  type: Systeme.TypeChauffage
  reseau: Systeme.Reseau
  emetteurs: string[]
}

export interface SystemeWithData extends Systeme {
  data: SystemeData
}

export interface SystemeData {
  configuration: Systeme.ConfigurationSysteme
  rdim: number
  rd: number
  re: number
  rr: number
  rg: Systeme.Rendement[]
  ich: Systeme.Rendement[]
  intermittences: Systeme.Intermittence[]
  consommations: Consommation[]
  emissions: Emission[]
}

export namespace Systeme {
  export type Reseau = {
    type_distribution: TypeDistribution
    presence_circulateur_externe: boolean
    niveaux_desservis: number
    isolation: Isolation | null
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

  export const typeDistributionToString = (value: TypeDistribution): string => {
    switch (value) {
      case TypeDistribution.hydraulique:
        return 'Hydraulique'
      case TypeDistribution.aeraulique:
        return 'Aéraulique'
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
  export const configurationSystemeToString = (
    value: ConfigurationSysteme
  ): string => {
    switch (value) {
      case ConfigurationSysteme.base:
        return 'Base'
      case ConfigurationSysteme.releve:
        return 'Relevé'
      case ConfigurationSysteme.appoint:
        return 'Appoint'
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
}
