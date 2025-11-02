export interface IProduction {
  panneaux_photovoltaiques: IPanneauPhotovoltaique[]
  data?: Partial<ProductionData>
}

export type ProductionData = {
  ppv: number
}

export interface IPanneauPhotovoltaique {
  id: string
  description: string
  orientation: number
  inclinaison: number
  modules: number
  surface: number | null
  installation_collective: boolean
  data?: Partial<PanneauPhotovoltaiqueData>
}

export type PanneauPhotovoltaiqueData = {
  kpv: number
  ppv: number
}
