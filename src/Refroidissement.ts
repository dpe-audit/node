import { Besoin, Consommation, Emission, Energie } from './common'
import { NotFound } from './errors'
import { send } from './request'

export const retrieveRefroidissement = async (
  id: string
): Promise<Refroidissment | NotFound> => {
  return send<Refroidissment | NotFound>({
    method: 'GET',
    path: `/audit/${id}/refroidissement`
  })
}

export interface Refroidissment {
  generateurs: Generateur[]
  installations: Installation[]
  systemes: Systeme[]
  data?: Partial<RefroidissmentData>
}

export type RefroidissmentData = {
  besoins: Besoin[]
  consommations: Consommation[]
  emissions: Emission[]
}

export interface Generateur {
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

export interface Installation {
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

export interface Systeme {
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
