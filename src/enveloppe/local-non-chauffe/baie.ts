export interface IBaie {
  id: string
  description: string
  materiau: Materiau
  type_vitrage: TypeVitrage | null
  presence_rupteur_pont_thermique: boolean | null
  position: Position
}

export type Position = {
  mitoyennete: Mitoyennete
  surface: number
  orientation: number | null
  inclinaison: number
}

export enum Materiau {
  polycarbonate = 'polycarbonate',
  pvc = 'pvc',
  bois = 'bois',
  bois_metal = 'bois_metal',
  metal = 'metal'
}

export enum TypeVitrage {
  polycarbonate = 'polycarbonate',
  simple_vitrage = 'simple_vitrage',
  double_vitrage = 'double_vitrage',
  double_vitrage_fe = 'double_vitrage_fe',
  triple_vitrage = 'triple_vitrage',
  triple_vitrage_fe = 'triple_vitrage_fe'
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

export const materiauToString = (materiau: Materiau): string => {
  switch (materiau) {
    case Materiau.polycarbonate:
      return 'Polycarbonate'
    case Materiau.pvc:
      return 'PVC'
    case Materiau.bois:
      return 'Bois'
    case Materiau.bois_metal:
      return 'Bois-métal'
    case Materiau.metal:
      return 'Métal'
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

export const typeVitrageToString = (value: TypeVitrage): string => {
  switch (value) {
    case TypeVitrage.polycarbonate:
      return 'Polycarbonate'
    case TypeVitrage.simple_vitrage:
      return 'Simple vitrage'
    case TypeVitrage.double_vitrage:
      return 'Double vitrage'
    case TypeVitrage.double_vitrage_fe:
      return 'Double vitrage à faible émissivité'
    case TypeVitrage.triple_vitrage:
      return 'Triple vitrage'
    case TypeVitrage.triple_vitrage_fe:
      return 'Triple vitrage à faible émissivité'
  }
}
