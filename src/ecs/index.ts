import type { Consommations, Pertes } from '../common'
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
  data?: Partial<EcsData>
}

export type EcsData = {
  nmax: number
  nadeq: number
  becs: number
  pertes: Pertes
  consommations: Consommations
}
