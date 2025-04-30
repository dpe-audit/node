import type { Besoin, Consommation, Emission } from './Common'

export interface Refroidissment {
  generateurs: Generateur[]
  installations: Installation[]
  systemes: Systeme[]
}

export interface RefroidissmentWithData extends Refroidissment {
  generateurs: GenerateurWithData[]
  installations: InstallationWithData[]
  systemes: SystemeWithData[]
  data: RefroidissmentData
}

export interface RefroidissmentData {
  besoins: Besoin[]
  consommations: Consommation[]
  emissions: Emission[]
}

export interface Generateur {
  id: string
  description: string
  type: Generateur.TypeGenerateur
  energie: Generateur.EnergieGenerateur
  annee_installation: number | null
  seer: number | null
  reseau_froid_id: string | null
}

export interface GenerateurWithData extends Generateur {
  data: GenerateurData
}

export interface GenerateurData {
  eer: number | null
  consommations: Consommation[]
  emissions: Emission[]
}

export interface Installation {
  id: string
  description: string
  surface: number
}

export interface InstallationWithData extends Installation {
  data: InstallationData
}

export interface InstallationData {
  rdim: number
  consommations: Consommation[]
  emissions: Emission[]
}

export interface Systeme {
  id: string
  installation_id: string
  generateur_id: string
}

export interface SystemeWithData extends Systeme {
  data: SystemeData
}

export interface SystemeData {
  rdim: number
  consommations: Consommation[]
  emissions: Emission[]
}

export namespace Generateur {
  export enum TypeGenerateur {
    pac_air_air = 'pac_air_air',
    pac_air_eau = 'pac_air_eau',
    pac_eau_eau = 'pac_eau_eau',
    pac_eau_glycolee_eau = 'pac_eau_glycolee_eau',
    pac_geothermique = 'pac_geothermique',
    reseau_froid = 'reseau_froid',
    autre_systeme_thermodynamique = 'autre_systeme_thermodynamique',
    autre = 'autre'
  }

  export enum EnergieGenerateur {
    electricite = 'electricite',
    gaz_naturel = 'gaz_naturel',
    gpl = 'gpl',
    reseau_froid = 'reseau_froid'
  }

  export const typeGenerateurToString = (value: TypeGenerateur): string => {
    switch (value) {
      case TypeGenerateur.pac_air_air:
        return 'PAC air/air'
      case TypeGenerateur.pac_air_eau:
        return 'PAC air/eau'
      case TypeGenerateur.pac_eau_eau:
        return 'PAC eau/eau'
      case TypeGenerateur.pac_eau_glycolee_eau:
        return 'PAC eau glycolée/eau'
      case TypeGenerateur.pac_geothermique:
        return 'PAC géothermique'
      case TypeGenerateur.reseau_froid:
        return 'Réseau froid'
      case TypeGenerateur.autre_systeme_thermodynamique:
        return 'Autre système thermodynamique'
      case TypeGenerateur.autre:
        return 'Autre'
    }
  }

  export const energieGenerateurToString = (
    value: EnergieGenerateur
  ): string => {
    switch (value) {
      case EnergieGenerateur.electricite:
        return 'Electricité'
      case EnergieGenerateur.gaz_naturel:
        return 'Gaz naturel'
      case EnergieGenerateur.gpl:
        return 'GPL'
      case EnergieGenerateur.reseau_froid:
        return 'Réseau froid'
    }
  }
}
