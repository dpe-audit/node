import type { Adresse } from '../adresse'

export type Batiment = {
  type: TypeBatiment
  annee_construction: number
  altitude: number
  logements: number
  surface_habitable: number
  hauteur_sous_plafond: number
  materiaux_anciens: boolean
  rnb_id: string | null
  adresse: Adresse
}

export enum TypeBatiment {
  maison = 'maison',
  immeuble = 'immeuble'
}

export const typeBatimentToString = (type: TypeBatiment): string => {
  switch (type) {
    case TypeBatiment.maison:
      return 'Maison individuelle'
    case TypeBatiment.immeuble:
      return 'Immeuble'
  }
}
