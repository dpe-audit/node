export interface IPanneauPhotovoltaique {
  id: string
  description: string
  orientation: number
  inclinaison: number
  modules: number
  surface: number | null
  installation_collective: boolean
  data?: PanneauPhotovoltaiqueData
}

export type PanneauPhotovoltaiqueData = {
  kpv: number
  ppv: number
}
