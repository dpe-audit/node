import { Energie, type Consommations } from '../common'

export interface IGenerateur {
  id: string
  description: string
  type: TypeGenerateur
  energie: EnergieGenerateur
  annee_installation: number | null
  seer: number | null
  reseau_froid_id: string | null
  data?: GenerateurData
}

export type GenerateurData = {
  rdim: number
  eer: number
  consommations: Consommations
}

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

export const energieGenerateurToEnum = (value: EnergieGenerateur): Energie => {
  switch (value) {
    case EnergieGenerateur.electricite:
      return Energie.electricite
    case EnergieGenerateur.gaz_naturel:
      return Energie.gaz_naturel
    case EnergieGenerateur.gpl:
      return Energie.gpl
    case EnergieGenerateur.reseau_froid:
      return Energie.reseau_urbain
  }
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

export const energieGenerateurToString = (value: EnergieGenerateur): string => {
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
