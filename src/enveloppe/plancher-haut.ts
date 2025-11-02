import type { Isolation, Inertie, Mitoyennete, Performance } from './paroi'

export interface IPlancherHaut {
  id: string
  description: string
  type_structure: TypeStructure | null
  inertie: Inertie | null
  annee_construction: number | null
  annee_renovation: number | null
  u0: number | null
  u: number | null
  position: Position
  isolation: Isolation
  data?: Partial<PlancherHautData>
}

export type PlancherHautData = {
  sdep: number
  u0: number
  u: number
  b: number
  dp: number
  performance: Performance
}

export type Position = {
  local_non_chauffe_id: string | null
  surface: number
  orientation: number | null
  mitoyennete: Mitoyennete
}

export enum TypeStructure {
  plafond_avec_ou_sans_remplissage = 'plafond_avec_ou_sans_remplissage',
  plafond_entre_solives_metalliques = 'plafond_entre_solives_metalliques',
  plafond_entre_solives_bois = 'plafond_entre_solives_bois',
  plafond_bois_sur_solives_metalliques = 'plafond_bois_sur_solives_metalliques',
  plafond_bois_sous_solives_metalliques = 'plafond_bois_sous_solives_metalliques',
  bardeaux_et_remplissage = 'bardeaux_et_remplissage',
  plafond_bois_sur_solives_bois = 'plafond_bois_sur_solives_bois',
  plafond_bois_sous_solives_bois = 'plafond_bois_sous_solives_bois',
  dalle_beton = 'dalle_beton',
  plafond_lourd = 'plafond_lourd',
  combles_amenages_sous_rampant = 'combles_amenages_sous_rampant',
  toiture_chaume = 'toiture_chaume',
  plafond_patre = 'plafond_patre',
  bac_acier = 'bac_acier'
}

export const typeStructureToString = (value: TypeStructure): string => {
  switch (value) {
    case TypeStructure.plafond_avec_ou_sans_remplissage:
      return 'Plafond avec ou sans remplissage'
    case TypeStructure.plafond_entre_solives_metalliques:
      return 'Plafond entre solives métalliques'
    case TypeStructure.plafond_entre_solives_bois:
      return 'Plafond entre solives bois'
    case TypeStructure.plafond_bois_sur_solives_metalliques:
      return 'Plafond bois sur solives métalliques'
    case TypeStructure.plafond_bois_sous_solives_metalliques:
      return 'Plafond bois sous solives métalliques'
    case TypeStructure.bardeaux_et_remplissage:
      return 'Bardeaux et remplissage'
    case TypeStructure.plafond_bois_sur_solives_bois:
      return 'Plafond bois sur solives bois'
    case TypeStructure.plafond_bois_sous_solives_bois:
      return 'Plafond bois sous solives bois'
    case TypeStructure.dalle_beton:
      return 'Dalle béton'
    case TypeStructure.plafond_lourd:
      return 'Plafond lourd'
    case TypeStructure.combles_amenages_sous_rampant:
      return 'Combles aménagés sous rampant'
    case TypeStructure.toiture_chaume:
      return 'Toiture chaume'
    case TypeStructure.plafond_patre:
      return 'Plafond patre'
    case TypeStructure.bac_acier:
      return 'Bac acier'
  }
}
