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

const DPEAudit = {
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

export default DPEAudit
