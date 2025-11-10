import type { Consommations } from "../common"

export interface ISysteme {
  id: string
  description: string
  installation_id: string
  generateur_id: string
  data?: SystemeData
}

export type SystemeData = {
  rdim: number
  consommations: Consommations
}
