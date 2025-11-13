import type { Consommations } from '../common'
import type { IGenerateur } from './generateur'
import type { IInstallation } from './installation'
import type { ISysteme } from './systeme'

export * as Generateur from './generateur'
export * as Installation from './installation'
export * as Systeme from './systeme'

export interface IRefroidissement {
  generateurs: IGenerateur[]
  installations: IInstallation[]
  systemes: ISysteme[]
  data?: RefroidissementData
}

export type RefroidissementData = {
  bfr: number
  consommations: Consommations
}
