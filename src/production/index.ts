import type { IPanneauPhotovoltaique } from './panneau-photovoltaique'

export * as PanneauPhotovoltaique from './panneau-photovoltaique'

export interface IProduction {
  panneaux_photovoltaiques: IPanneauPhotovoltaique[]
  data?: ProductionData
}

export type ProductionData = {
  ppv: number
}
