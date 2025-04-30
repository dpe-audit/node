import type { Besoin, Consommation, Emission, Perte, Scenario } from './Common'

export interface Ecs {
  generateurs: Generateur[]
  installations: Installation[]
  systemes: Systeme[]
}

export interface EcsWithData extends Ecs {
  generateurs: GenerateurWithData[]
  installations: InstallationWithData[]
  systemes: SystemeWithData[]
  data: EcsData
}

export interface EcsData {
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
  type: Generateur.Type
  energie: Generateur.Energie
  volume_stockage: number
  generateur_collectif: boolean
  position_volume_chauffe: boolean
  annee_installation: number | null
  pn: number | null
  cop: number | null
  label: Generateur.Label | null
  type_chaudiere: Generateur.TypeChaudiere | null
  mode_combustion: Generateur.ModeCombustion | null
  presence_ventouse: boolean | null
  pveilleuse: number | null
  qp0: number | null
  rpn: number | null
  reseau_chaleur_id: string | null
  generateur_mixte_id: string | null
}

export interface GenerateurWithData extends Generateur {
  data: GenerateurData
}

export interface GenerateurData {
  pecs: number | null
  paux: number | null
  pn: number | null
  cop: number | null
  rpn: number | null
  qp0: number | null
  pveilleuse: number | null
  pertes: Perte[]
  pertes_recuperables: Perte[]
  consommations: Consommation[]
  emissions: Emission[]
}

export interface Installation {
  id: string
  description: string
  surface: number
  solaire_thermique: Installation.SolaireThermique | null
}

export interface InstallationWithData extends Installation {
  data: InstallationData
}

export interface InstallationData {
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
  reseau: Systeme.Reseau
  stockage: Systeme.Stockage | null
}

export interface SystemeWithData extends Systeme {
  data: SystemeData
}

export interface SystemeData {
  rdim: number
  rendements: Systeme.Rendement[]
  pertes: Perte[]
  pertes_recuperables: Perte[]
  consommations: Consommation[]
  emissions: Emission[]
}

export namespace Generateur {
  export enum Type {
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

  export const typeToString = (value: Type): string => {
    switch (value) {
      case Type.accumulateur:
        return 'Accumulateur'
      case Type.chauffe_eau_instantane:
        return 'Chauffe-eau instantané'
      case Type.chauffe_eau_vertical:
        return 'Chauffe-eau vertical'
      case Type.chauffe_eau_horizontal:
        return 'Chauffe-eau horizontal'
      case Type.chaudiere:
        return 'Chaudière'
      case Type.cet_air_ambiant:
        return 'CET air ambiant'
      case Type.cet_air_exterieur:
        return 'CET air extérieur'
      case Type.cet_air_extrait:
        return 'CET air extrait'
      case Type.pac_double_service:
        return 'PAC double service'
      case Type.poele_bouilleur:
        return 'Poêle bouilleur'
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
      case Label.ne_performance_a:
        return 'NE - Performance A'
      case Label.ne_performance_b:
        return 'NE - Performance B'
      case Label.ne_performance_c:
        return 'NE - Performance C'
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

export namespace Installation {
  export type SolaireThermique = {
    usage: Usage
    annee_installation: number | null
    fecs: number | null
  }

  export enum Usage {
    ecs = 'ecs',
    chauffage_ecs = 'chauffage_ecs'
  }

  export const usageToString = (value: Usage): string => {
    switch (value) {
      case Usage.ecs:
        return 'Eau chaude sanitaire'
      case Usage.chauffage_ecs:
        return 'Chauffage et eau chaude sanitaire'
    }
  }
}

export namespace Systeme {
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

  export type Rendement = {
    scenario: Scenario
    iecs: number
    rd: number
    rs: number
    rg: number
    rgs: number
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
      case Bouclage.reseau_non_boucle:
        return 'Réseau non bouclé'
      case Bouclage.reseau_boucle:
        return 'Réseau bouclé'
      case Bouclage.reseau_trace:
        return 'Réseau trace'
    }
  }
}
