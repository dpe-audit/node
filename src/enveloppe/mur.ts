import type { Isolation, Inertie, Mitoyennete, Performance } from './paroi'

export interface IMur {
  id: string
  description: string
  type_structure: TypeStructure | null
  epaisseur_structure: number | null
  type_doublage: TypeDoublage | null
  presence_enduit_isolant: boolean | null
  paroi_ancienne: boolean | null
  inertie: Inertie | null
  annee_construction: number | null
  annee_renovation: number | null
  u0: number | null
  u: number | null
  position: Position
  isolation: Isolation
  data?: MurData
}

export type MurData = {
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
  pierre_moellons = 'pierre_moellons',
  pierre_moellons_avec_remplissage = 'pierre_moellons_avec_remplissage',
  pise_ou_beton_terre = 'pise_ou_beton_terre',
  pan_bois_sans_remplissage = 'pan_bois_sans_remplissage',
  pan_bois_avec_remplissage = 'pan_bois_avec_remplissage',
  bois_rondin = 'bois_rondin',
  brique_pleine_simple = 'brique_pleine_simple',
  brique_pleine_double_avec_lame_air = 'brique_pleine_double_avec_lame_air',
  brique_creuse = 'brique_creuse',
  bloc_beton_plein = 'bloc_beton_plein',
  bloc_beton_creux = 'bloc_beton_creux',
  beton_banche = 'beton_banche',
  beton_machefer = 'beton_machefer',
  brique_terre_cuite_alveolaire = 'brique_terre_cuite_alveolaire',
  sandwich_beton_isolant_beton_sans_isolation_rapportee = 'sandwich_beton_isolant_beton_sans_isolation_rapportee',
  cloison_platre = 'cloison_platre',
  ossature_bois_sans_remplissage = 'ossature_bois_sans_remplissage',
  ossature_bois_avec_remplissage_tout_venant = 'ossature_bois_avec_remplissage_tout_venant',
  ossature_bois_avec_remplissage_isolant = 'ossature_bois_avec_remplissage_isolant',
  beton_cellulaire = 'beton_cellulaire'
}

export enum TypeDoublage {
  sans_doublage = 'sans_doublage',
  indetermine = 'indetermine',
  lame_air_inferieur_15mm = 'lame_air_inferieur_15mm',
  lame_air_superieur_15mm = 'lame_air_superieur_15mm',
  materiaux_connu = 'materiaux_connu'
}

export const typeStructureToString = (value: TypeStructure | null): string => {
  switch (value) {
    case TypeStructure.pierre_moellons:
      return 'Mur en pierre et moellons'
    case TypeStructure.pierre_moellons_avec_remplissage:
      return 'Mur en pierre et moellons avec remplissage'
    case TypeStructure.pise_ou_beton_terre:
      return 'Mur en en pisé ou béton de terre'
    case TypeStructure.pan_bois_sans_remplissage:
      return 'Mur en pan de bois sans remplissage'
    case TypeStructure.pan_bois_avec_remplissage:
      return 'Mur en pan de bois avec remplissage'
    case TypeStructure.bois_rondin:
      return 'Mur en bois rondin'
    case TypeStructure.brique_pleine_simple:
      return 'Mur en brique pleine simple'
    case TypeStructure.brique_pleine_double_avec_lame_air:
      return "Mur en brique pleine double avec lame d'air"
    case TypeStructure.brique_creuse:
      return 'Mur en brique creuse'
    case TypeStructure.bloc_beton_plein:
      return 'Mur en bloc de béton plein'
    case TypeStructure.bloc_beton_creux:
      return 'Mur en bloc de béton creux'
    case TypeStructure.beton_banche:
      return 'Mur en béton banché'
    case TypeStructure.beton_machefer:
      return 'Mur en béton mâchefer'
    case TypeStructure.brique_terre_cuite_alveolaire:
      return 'Mur en brique terre cuite alvéolaire'
    case TypeStructure.sandwich_beton_isolant_beton_sans_isolation_rapportee:
      return 'Mur sandwich béton isolant béton sans isolation rapportée'
    case TypeStructure.cloison_platre:
      return 'Cloison de plâtre'
    case TypeStructure.ossature_bois_sans_remplissage:
      return 'Mur à ossature bois sans remplissage'
    case TypeStructure.ossature_bois_avec_remplissage_tout_venant:
      return 'Mur à ossature bois avec remplissage tout-venant'
    case TypeStructure.ossature_bois_avec_remplissage_isolant:
      return 'Mur à ossature bois avec remplissage isolant'
    case TypeStructure.beton_cellulaire:
      return 'Mur en béton cellulaire'
    default:
      return 'Mur inconnu'
  }
}

export const typeDoublageToString = (value: TypeDoublage | null): string => {
  switch (value) {
    case TypeDoublage.sans_doublage:
      return 'Sans doublage'
    case TypeDoublage.indetermine:
      return 'Doublage indéterminé'
    case TypeDoublage.lame_air_inferieur_15mm:
      return "Doublage avec lame d'air inférieure à 15 mm"
    case TypeDoublage.lame_air_superieur_15mm:
      return "Doublage avec lame d'air supérieure à 15 mm"
    case TypeDoublage.materiaux_connu:
      return 'Matériaux connu'
    default:
      return 'Doublage inconnu'
  }
}
