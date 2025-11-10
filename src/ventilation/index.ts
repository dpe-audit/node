import type { Consommations } from '../common'
import type { IGenerateur } from './generateur'
import type { IInstallation } from './installation'

export * as Generateur from './generateur'
export * as Installation from './installation'

export interface IVentilation {
  generateurs: IGenerateur[]
  installations: IInstallation[]
  data?: VentilationData
}

export type VentilationData = {
  consommations: Consommations
}
