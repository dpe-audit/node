export interface IPontThermique {
  id: string
  description: string
  longueur: number
  kpt: number | null
  liaison: Liaison
  data?: Partial<PontThermiqueData>
}

export type PontThermiqueData = {
  k: number
  pt: number
}

export type Liaison = {
  type_liaison: TypeLiaison
  mur_id: string
  plancher_id: string | null
  ouverture_id: string | null
  pont_thermique_partiel: boolean | null
}

export enum TypeLiaison {
  plancher_bas_mur = 'plancher_bas_mur',
  plancher_intermediaire_mur = 'plancher_intermediaire_mur',
  plancher_haut_mur = 'plancher_haut_mur',
  refend_mur = 'refend_mur',
  menuiserie_mur = 'menuiserie_mur'
}

export const typeLiaisonToString = (value: TypeLiaison): string => {
  switch (value) {
    case TypeLiaison.plancher_bas_mur:
      return 'Plancher bas - Mur'
    case TypeLiaison.plancher_intermediaire_mur:
      return 'Plancher intermédiaire - Mur'
    case TypeLiaison.plancher_haut_mur:
      return 'Plancher haut - Mur'
    case TypeLiaison.refend_mur:
      return 'Refend - Mur'
    case TypeLiaison.menuiserie_mur:
      return 'Menuiserie - Mur'
  }
}
