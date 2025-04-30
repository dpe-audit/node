import type { Chauffage, ChauffageWithData } from './Chauffage'
import type { Consommation } from './Common'
import type { Eclairage, EclairageWithData } from './Eclairage'
import type { Ecs, EcsWithData } from './Ecs'
import type { Enveloppe, EnveloppeWithData } from './Enveloppe'
import type { Refroidissment, RefroidissmentWithData } from './Refroidissement'
import type { Ventilation, VentilationWithData } from './Ventilation'

export interface Audit {
  batiment: Batiment
  adresse: Adresse
  enveloppe: Enveloppe
  chauffage: Chauffage
  ecs: Ecs
  eclairage: Eclairage
  refroidissement: Refroidissment
  ventilation: Ventilation
}

export interface AuditWithData extends Audit {
  enveloppe: EnveloppeWithData
  chauffage: ChauffageWithData
  ecs: EcsWithData
  eclairage: EclairageWithData
  refroidissement: RefroidissmentWithData
  ventilation: VentilationWithData
  data: AuditData
}

export type AuditData = {
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

export type Adresse = {
  zone_climatique: ZoneClimatique
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
