import {
  createAudit,
  replaceAudit,
  updateAudit,
  searchAudits,
  retrieveAudit
} from './audit'
import { retrieveChauffage } from './chauffage'
import { retrieveEclairage } from './eclairage'
import { retrieveEcs } from './ecs'
import { retrieveEnveloppe } from './enveloppe'
import { retrieveRefroidissement } from './refroidissement'
import { retrieveVentilation } from './ventilation'

export * as Audit from './audit'
export * as Common from './common'
export * as Chauffage from './chauffage'
export * as Eclairage from './eclairage'
export * as Ecs from './ecs'
export * as Enveloppe from './enveloppe'
export * as Refroidissement from './refroidissement'
export * as Ventilation from './ventilation'

export const DPEAudit = {
  audit: {
    retrieveAudit,
    createAudit,
    replaceAudit,
    updateAudit,
    searchAudits
  },
  chauffage: { retrieveChauffage },
  eclairage: { retrieveEclairage },
  ecs: { retrieveEcs },
  enveloppe: { retrieveEnveloppe },
  refroidissement: { retrieveRefroidissement },
  ventilation: { retrieveVentilation }
}
