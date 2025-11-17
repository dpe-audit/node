export type Isolation = {
  etat: EtatIsolation | null
  type: TypeIsolation | null
  annee_installation: number | null
  epaisseur: number | null
  resistance_thermique: number | null
}

export enum Inertie {
  lourde = 'lourde',
  legere = 'legere'
}

export enum Mitoyennete {
  exterieur = 'exterieur',
  enterre = 'enterre',
  vide_sanitaire = 'vide_sanitaire',
  terre_plein = 'terre_plein',
  sous_sol_non_chauffe = 'sous_sol_non_chauffe',
  local_non_chauffe = 'local_non_chauffe',
  local_non_residentiel = 'local_non_residentiel',
  local_residentiel = 'local_residentiel',
  local_non_accessible = 'local_non_accessible'
}

export enum EtatIsolation {
  isole = 'isole',
  non_isole = 'non_isole'
}

export enum TypeIsolation {
  iti = 'iti',
  ite = 'ite',
  itr = 'itr',
  iti_ite = 'iti_ite',
  itr_iti = 'itr_iti',
  itr_ite = 'itr_ite',
  itr_iti_ite = 'itr_iti_ite'
}

export enum Performance {
  tres_bonne = 'tres_bonne',
  bonne = 'bonne',
  moyenne = 'moyenne',
  insuffisante = 'insuffisante'
}

export const etatIsolationToString = (value: EtatIsolation | null): string => {
  switch (value) {
    case EtatIsolation.isole:
      return 'Oui'
    case EtatIsolation.non_isole:
      return 'Non'
    default:
      return 'Inconnu'
  }
}

export const typeIsolationToString = (value: TypeIsolation | null): string => {
  switch (value) {
    case TypeIsolation.iti:
      return "Isolation par l'intérieur"
    case TypeIsolation.ite:
      return "Isolation par l'extérieur"
    case TypeIsolation.itr:
      return 'Isolation répartie'
    case TypeIsolation.iti_ite:
      return "Isolation par l'intérieur et par l'extérieur"
    case TypeIsolation.itr_iti:
      return "Isolation répartie et par l'intérieur"
    case TypeIsolation.itr_ite:
      return "Isolation répartie et par l'extérieur"
    case TypeIsolation.itr_iti_ite:
      return "Isolation répartie, par l'intérieur et par l'extérieur"
    default:
      return "Isolation inconnue"
  }
}

export const inertieToString = (inertie: Inertie): string => {
  switch (inertie) {
    case Inertie.lourde:
      return 'Lourde'
    case Inertie.legere:
      return 'Légère'
  }
}

export const mitoyenneteToString = (value: Mitoyennete): string => {
  switch (value) {
    case Mitoyennete.exterieur:
      return 'Extérieur'
    case Mitoyennete.enterre:
      return 'Enterré'
    case Mitoyennete.vide_sanitaire:
      return 'Vide sanitaire'
    case Mitoyennete.terre_plein:
      return 'Terre plein'
    case Mitoyennete.sous_sol_non_chauffe:
      return 'Sous-sol non chauffé'
    case Mitoyennete.local_non_chauffe:
      return 'Local non chauffé'
    case Mitoyennete.local_non_residentiel:
      return 'Local non résidentiel'
    case Mitoyennete.local_residentiel:
      return 'Local résidentiel'
    case Mitoyennete.local_non_accessible:
      return 'Local non accessible'
  }
}

export const performanceToString = (value: Performance): string => {
  switch (value) {
    case Performance.tres_bonne:
      return 'Très bonne'
    case Performance.bonne:
      return 'Bonne'
    case Performance.moyenne:
      return 'Moyenne'
    case Performance.insuffisante:
      return 'Insuffisante'
  }
}
