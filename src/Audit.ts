import type { Chauffage } from './chauffage'
import type { Consommation } from './common'
import type { Eclairage } from './eclairage'
import type { Ecs } from './ecs'
import type { Enveloppe } from './enveloppe'
import type { Refroidissment } from './refroidissement'
import type { Ventilation } from './ventilation'
import type { NotFound, Unprocessable, BadRequest } from './errors'
import { send } from './request'

export const retrieveAudit = async (id: string): Promise<Audit | NotFound> => {
  return send<Audit | NotFound>({
    method: 'GET',
    path: `/audit/${id}`
  })
}

export const createAudit = async (
  payload: Audit
): Promise<Audit | BadRequest | Unprocessable> => {
  return send<Audit | BadRequest | Unprocessable>({
    method: 'POST',
    path: `/audit`,
    body: payload
  })
}

export const replaceAudit = async (
  id: string,
  payload: Audit
): Promise<Audit | NotFound | BadRequest | Unprocessable> => {
  return send<Audit | NotFound | BadRequest | Unprocessable>({
    method: 'PUT',
    path: `/audit/${id}`,
    body: payload
  })
}

export const updateAudit = async (
  id: string,
  payload: { scenarios: Partial<Audit>[] }
): Promise<Audit | NotFound | BadRequest | Unprocessable> => {
  return send<Audit | NotFound | BadRequest | Unprocessable>({
    method: 'PATCH',
    path: `/audit/${id}`,
    body: payload
  })
}

export const searchAudits = async (
  query: Partial<SearchAuditQuery>
): Promise<Partial<Audit>[]> => {
  return send<Partial<Audit>[]>({
    method: 'GET',
    path: `/audits`,
    params: query
  })
}

export type SearchAuditQuery = {
  page: number
  sort: string
  randomize: boolean
  code_postal: string[]
  code_departement: string[]
  type_batiment: TypeBatiment[]
  zone_climatique: ZoneClimatique[]
  etiquette_energie: EtiquetteEnergie[]
  etiquette_climat: EtiquetteClimat[]
  'date_etablissement[min]': Date
  'date_etablissement[max]': Date
  'altitude[min]': number
  'altitude[max]': number
  'annee_construction[min]': number
  'annee_construction[max]': number
  'surface_habitable[min]': number
  'surface_habitable[max]': number
}

export interface Audit {
  batiment: Batiment
  adresse: Adresse
  enveloppe: Enveloppe
  chauffage: Chauffage
  ecs: Ecs
  eclairage: Eclairage
  refroidissement: Refroidissment
  ventilation: Ventilation
  data?: Partial<AuditData>
}

export type AuditData = {
  effet_joule: boolean
  surface_habitable: number
  hauteur_sous_plafond: number
  volume_habitable: number
  nombre_logements: number
  tbase: number
  zone_climatique: ZoneClimatique
  consommations: Consommation[]
  cef: number
  cep: number
  eges: number
  etiquette_energie: EtiquetteEnergie
  etiquette_climat: EtiquetteClimat
}

export type Batiment = {
  type: TypeBatiment
  annee_construction: number
  altitude: number
  logements: number
  surface_habitable: number
  hauteur_sous_plafond: number
  materiaux_anciens: boolean
  rnb_id: string | null
}

export interface Adresse {
  numero: string | null
  nom: string
  code_postal: string
  code_commune: string
  commune: string
  ban_id: string
}

export enum TypeBatiment {
  maison = 'maison',
  immeuble = 'immeuble'
}

export enum ZoneClimatique {
  H1a = 'H1a',
  H1b = 'H1b',
  H1c = 'H1c',
  H2a = 'H2a',
  H2b = 'H2b',
  H2c = 'H2c',
  H2d = 'H2d',
  H3 = 'H3'
}

export enum EtiquetteEnergie {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G'
}

export enum EtiquetteClimat {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G'
}

export const typeBatimentToString = (type: TypeBatiment): string => {
  switch (type) {
    case TypeBatiment.maison:
      return 'Maison individuelle'
    case TypeBatiment.immeuble:
      return 'Immeuble'
  }
}

export const adresseToString = (adresse: Adresse): string => {
  const { numero, nom, code_postal, commune } = adresse
  return `${numero ? numero + ' ' : ''}${nom}, ${code_postal} ${commune}`
}
