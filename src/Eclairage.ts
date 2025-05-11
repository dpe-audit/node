import { Consommation, Emission } from './common'
import { NotFound } from './errors'
import { send } from './request'

export const retrieveEclairage = async (
  id: string
): Promise<Eclairage | NotFound> => {
  return send<Eclairage | NotFound>({
    method: 'GET',
    path: `/audit/${id}/eclairage`
  })
}

export interface Eclairage {
  data?: Partial<EclairageData>
}

export type EclairageData = {
  consommations: Consommation[]
  emissions: Emission[]
}
