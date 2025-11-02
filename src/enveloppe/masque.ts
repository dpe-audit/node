export interface IMasque {
  id: string
  description: string
  type: TypeMasque
  configuration: ConfigurationMasque
  orientation: OrientationMasque | null
  hauteur: number | null
  profondeur: number | null
  secteur: SecteurOrientation | null
  data?: Partial<MasqueData>
}

export type MasqueData = {
  fe1: number | null
  fe2: number | null
  omb: number | null
}

export enum TypeMasque {
  proche = 'proche',
  lointain = 'lointain'
}

export enum ConfigurationMasque {
  homogene = 'homogene',
  non_homogene = 'non_homogene',
  fond_balcon = 'fond_balcon',
  fond_et_flanc_loggias = 'fond_et_flanc_loggias',
  balcon_ou_auvent = 'balcon_ou_auvent',
  paroi_laterale_sans_obstacle_au_sud = 'paroi_laterale_sans_obstacle_au_sud',
  paroi_laterale_avec_obstacle_au_sud = 'paroi_laterale_avec_obstacle_au_sud'
}

export enum OrientationMasque {
  nord = 'nord',
  sud = 'sud',
  est = 'est',
  ouest = 'ouest'
}

export enum SecteurOrientation {
  lateral = 'lateral',
  lateral_sud = 'lateral_sud',
  central = 'central',
  central_sud = 'central_sud'
}

export const typeMasqueToString = (value: TypeMasque): string => {
  switch (value) {
    case TypeMasque.proche:
      return 'Masque proche'
    case TypeMasque.lointain:
      return 'Masque lointain'
  }
}

export const configurationMasqueToString = (
  value: ConfigurationMasque
): string => {
  switch (value) {
    case ConfigurationMasque.homogene:
      return 'Masque homogène'
    case ConfigurationMasque.non_homogene:
      return 'Masque non homogène'
    case ConfigurationMasque.fond_balcon:
      return 'Fond de balcon'
    case ConfigurationMasque.fond_et_flanc_loggias:
      return 'Fond et flancs de loggias'
    case ConfigurationMasque.balcon_ou_auvent:
      return 'Balcon ou auvent'
    case ConfigurationMasque.paroi_laterale_sans_obstacle_au_sud:
      return 'Paroi latérale sans obstacle au sud'
    case ConfigurationMasque.paroi_laterale_avec_obstacle_au_sud:
      return 'Paroi latérale avec obstacle au sud'
  }
}

export const orientationMasqueToString = (value: OrientationMasque): string => {
  switch (value) {
    case OrientationMasque.nord:
      return 'Nord'
    case OrientationMasque.sud:
      return 'Sud'
    case OrientationMasque.est:
      return 'Est'
    case OrientationMasque.ouest:
      return 'Ouest'
  }
}

export const secteurOrientationToString = (
  value: SecteurOrientation
): string => {
  switch (value) {
    case SecteurOrientation.lateral:
      return 'Latéral'
    case SecteurOrientation.lateral_sud:
      return 'Latéral vers le sud'
    case SecteurOrientation.central:
      return 'Central'
    case SecteurOrientation.central_sud:
      return 'Central vers le sud'
  }
}
