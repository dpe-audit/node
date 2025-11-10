import type { Consommations } from '../common'

export interface IInstallation {
  id: string
  description: string
  surface: number
  data?: InstallationData
}

export type InstallationData = {
  rdim: number
  consommations: Consommations
}
