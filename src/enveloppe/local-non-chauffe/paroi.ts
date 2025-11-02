export interface IParoi {
  id: string
  description: string
  isolation: Isolation | null
  position: Position
}

export type Position = {
  mitoyennete: Mitoyennete
  surface: number
}

export enum Isolation {
  isole = 'isole',
  non_isole = 'non_isole'
}

export enum Mitoyennete {
  exterieur = 'exterieur',
  enterre = 'enterre',
  vide_sanitaire = 'vide_sanitaire',
  terre_plein = 'terre_plein',
  local_non_chauffe = 'local_non_chauffe',
  local_chauffe = 'local_chauffe',
  local_non_accessible = 'local_non_accessible'
}

export const isolationToString = (isolation: Isolation): string => {
  switch (isolation) {
    case Isolation.isole:
      return 'Isolée'
    case Isolation.non_isole:
      return 'Non isolée'
  }
}

export const mitoyenneteToString = (mitoyennete: Mitoyennete): string => {
  switch (mitoyennete) {
    case Mitoyennete.exterieur:
      return 'Extérieur'
    case Mitoyennete.enterre:
      return 'Enterré'
    case Mitoyennete.vide_sanitaire:
      return 'Vide sanitaire'
    case Mitoyennete.terre_plein:
      return 'Terre-plein'
    case Mitoyennete.local_non_chauffe:
      return 'Local non chauffé'
    case Mitoyennete.local_chauffe:
      return 'Local chauffé'
    case Mitoyennete.local_non_accessible:
      return 'Local non accessible'
  }
}
