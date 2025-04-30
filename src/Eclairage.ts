import type { Consommation, Emission } from './Common'

export interface Eclairage {}

export interface EclairageWithData extends Eclairage {
  data: EclairageData
}

export interface EclairageData {
  consommations: Consommation[]
  emissions: Emission[]
}
