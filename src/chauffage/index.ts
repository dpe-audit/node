import type { Consommations } from '../common'
import type { IEmetteur } from './emetteur'
import type { IGenerateur } from './generateur'
import type { IInstallation } from './installation'
import type { ISysteme } from './systeme'

export * as Emetteur from './emetteur'
export * as Generateur from './generateur'
export * as Installation from './installation'
export * as Systeme from './systeme'

export interface IChauffage {
  emetteurs: IEmetteur[]
  generateurs: IGenerateur[]
  installations: IInstallation[]
  systemes: ISysteme[]
  data?: ChauffageData
}

export type ChauffageData = {
  bch: number
  pertes_generation: number
  pertes_generation_recuperables: number
  consommations: Consommations
}
