import type { Besoin, Consommation, Emission, Energie } from './common'
import type { NotFound } from './errors'
import { send } from './request'

export const retrieveRefroidissement = async (
  id: string
): Promise<IRefroidissment | NotFound> => {
  return send<IRefroidissment | NotFound>({
    method: 'GET',
    path: `/audit/${id}/refroidissement`
  })
}

export interface IRefroidissment {
  generateurs: IGenerateur[]
  installations: IInstallation[]
  systemes: ISysteme[]
  data?: Partial<RefroidissmentData>
}

export type RefroidissmentData = {
  besoins: Besoin[]
  consommations: Consommation[]
  emissions: Emission[]
}

export interface IGenerateur {
  id: string
  description: string
  type: TypeGenerateur
  energie: EnergieGenerateur
  annee_installation: number | null
  seer: number | null
  reseau_froid_id: string | null
  data?: Partial<GenerateurData>
}

export type GenerateurData = {
  eer: number | null
  consommations: Consommation[]
  emissions: Emission[]
}

export interface IInstallation {
  id: string
  description: string
  surface: number
  data?: Partial<InstallationData>
}

export type InstallationData = {
  rdim: number
  consommations: Consommation[]
  emissions: Emission[]
}

export interface ISysteme {
  id: string
  installation_id: string
  generateur_id: string
  data?: Partial<SystemeData>
}

export type SystemeData = {
  rdim: number
  consommations: Consommation[]
  emissions: Emission[]
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

export type EnergieGenerateur = Extract<
  Energie,
  Energie.electricite | Energie.gaz_naturel | Energie.gpl | Energie.reseau_froid
>

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
