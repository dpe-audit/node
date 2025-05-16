import type { Consommation, Emission } from './common'
import type { NotFound } from './errors'
import { send } from './request'

export const retrieveEclairage = async (
  id: string
): Promise<IEclairage | NotFound> => {
  return send<IEclairage | NotFound>({
    method: 'GET',
    path: `/audit/${id}/eclairage`
  })
}

export interface IEclairage {
  data?: Partial<EclairageData>
}

export type EclairageData = {
  consommations: Consommation[]
  emissions: Emission[]
}
