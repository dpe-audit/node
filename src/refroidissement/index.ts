import type { Consommations } from '../common'
import type { IGenerateur } from './generateur'
import type { IInstallation } from './installation'
import type { ISysteme } from './systeme'

export * as Generateur from './generateur'
export * as Installation from './installation'
export * as Systeme from './systeme'

export interface IRefroidissment {
  generateurs: IGenerateur[]
  installations: IInstallation[]
  systemes: ISysteme[]
  data?: RefroidissmentData
}

export type RefroidissmentData = {
  bfr: number
  consommations: Consommations
}