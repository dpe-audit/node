import { Consommation, Emission } from './common'
import { NotFound } from './errors'
import { send } from './request'

export const retrieveVentilation = async (id: string): Promise<Ventilation | NotFound> => {
  return send<Ventilation | NotFound>({
    method: 'GET',
    path: `/audit/${id}/ventilation`
  })
}

export interface Ventilation {
  generateurs: Generateur[]
  installations: Installation[]
  systemes: Systeme[]
  data?: Partial<VentilationData>
}

export type VentilationData = {
  qvarep_conv: number
  qvasouf_conv: number
  smea_conv: number
  consommations: Consommation[]
  emissions: Emission[]
}

export interface Generateur {
  id: string
  description: string
  type: TypeGenerateur
  generateur_collectif: boolean
  presence_echangeur_thermique: boolean | null
  annee_installation: number | null
  type_vmc: TypeVmc | null
  data?: Partial<GenerateurData>
}

export class Generateurs extends Array<Generateur> {
  findById (id: string): Generateur | undefined {
    return this.find(item => item.id === id)
  }
}

export type GenerateurData = {
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
  qvarep_conv: number
  qvasouf_conv: number
  smea_conv: number
  consommations: Consommation[]
  emissions: Emission[]
}

export interface Systeme {
  id: string
  installation_id: string
  generateur_id: string | null
  type: TypeVentilation
  data?: Partial<SystemeData>
}

export type SystemeData = {
  rdim: number
  qvarep_conv: number
  qvasouf_conv: number
  smea_conv: number
  ratio_utilisation: number
  pvent_moy: number
  pvent: number
  consommations: Consommation[]
  emissions: Emission[]
}

export enum TypeGenerateur {
  vmc_simple_flux = 'vmc_simple_flux',
  vmc_simple_flux_gaz = 'vmc_simple_flux_gaz',
  vmc_basse_pression = 'vmc_basse_pression',
  vmc_double_flux = 'vmc_double_flux',
  vmi = 'vmi',
  ventilation_hybride = 'ventilation_hybride',
  ventilation_mecanique = 'ventilation_mecanique',
  puit_climatique = 'puit_climatique',
  vmr = 'vmr'
}

export enum TypeVmc {
  autoreglable = 'autoreglable',
  hygroreglable_type_a = 'hygroreglable_type_a',
  hygroreglable_type_b = 'hygroreglable_type_b'
}

export enum TypeVentilation {
  ventilation_mecanique = 'ventilation_mecanique',
  ventilation_naturelle_ouverture_fenetres = 'ventilation_naturelle_ouverture_fenetres',
  ventilation_naturelle_entrees_air_hautes_basses = 'ventilation_naturelle_entrees_air_hautes_basses',
  ventilation_naturelle_conduit = 'ventilation_naturelle_conduit',
  ventilation_naturelle_conduit_entrees_air_hygroreglables = 'ventilation_naturelle_conduit_entrees_air_hygroreglables'
}
