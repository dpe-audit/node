import type { Isolation, Inertie, Mitoyennete, Performance } from './paroi'

export interface IPlancherBas {
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
  data?: Partial<PlancherBasData>
}

export type PlancherBasData = {
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
  surface_ue: number | null
  perimetre_ue: number | null
  mitoyennete: Mitoyennete
}

export enum TypeStructure {
  plancher_avec_ou_sans_remplissage = 'plancher_avec_ou_sans_remplissage',
  plancher_entre_solives_metalliques = 'plancher_entre_solives_metalliques',
  plancher_entre_solives_bois = 'plancher_entre_solives_bois',
  plancher_bois_sur_solives_metalliques = 'plancher_bois_sur_solives_metalliques',
  bardeaux_et_remplissage = 'bardeaux_et_remplissage',
  voutains_sur_solives_metalliques = 'voutains_sur_solives_metalliques',
  voutains_briques_ou_moellons = 'voutains_briques_ou_moellons',
  dalle_beton = 'dalle_beton',
  plancher_bois_sur_solives_bois = 'plancher_bois_sur_solives_bois',
  plancher_lourd_type_entrevous_terre_cuite_ou_poutrelles_beton = 'plancher_lourd_type_entrevous_terre_cuite_ou_poutrelles_beton',
  plancher_entrevous_isolant = 'plancher_entrevous_isolant'
}

export const typeStructureToString = (value: TypeStructure): string => {
  switch (value) {
    case TypeStructure.plancher_avec_ou_sans_remplissage:
      return 'Plancher avec ou sans remplissage'
    case TypeStructure.plancher_entre_solives_metalliques:
      return 'Plancher entre solives métalliques'
    case TypeStructure.plancher_entre_solives_bois:
      return 'Plancher entre solives bois'
    case TypeStructure.plancher_bois_sur_solives_metalliques:
      return 'Plancher bois sur solives métalliques'
    case TypeStructure.bardeaux_et_remplissage:
      return 'Bardeaux et remplissage'
    case TypeStructure.voutains_sur_solives_metalliques:
      return 'Voutains sur solives métalliques'
    case TypeStructure.voutains_briques_ou_moellons:
      return 'Voutains briques ou moellons'
    case TypeStructure.dalle_beton:
      return 'Dalle béton'
    case TypeStructure.plancher_bois_sur_solives_bois:
      return 'Plancher bois sur solives bois'
    case TypeStructure.plancher_lourd_type_entrevous_terre_cuite_ou_poutrelles_beton:
      return 'Plancher lourd type entrevous terre cuite ou poutrelles béton'
    case TypeStructure.plancher_entrevous_isolant:
      return 'Plancher entrevous isolant'
  }
}
