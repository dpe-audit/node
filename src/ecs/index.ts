import type { Consommations } from '../common'
import type { IGenerateur } from './generateur'
import type { IInstallation } from './installation'
import type { ISysteme } from './systeme'

export * as Generateur from './generateur'
export * as Installation from './installation'
export * as Systeme from './systeme'

export interface IEcs {
  generateurs: IGenerateur[]
  installations: IInstallation[]
  systemes: ISysteme[]
  data?: EcsData
}

export type EcsData = {
  nmax: number
  nadeq: number
  becs: number
  iecs: number
  rd: number
  rs: number
  rg: number
  rgs: number
  pertes_generation: number
  pertes_generation_recuperables: number
  pertes_distribution: number
  pertes_distribution_recuperables: number
  pertes_stockage: number
  pertes_stockage_recuperables: number
  consommations: Consommations
}
