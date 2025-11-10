export interface IInstallation {
  id: string
  generateur_id: string | null
  description: string
  surface: number
  type: TypeVentilation
  data?: InstallationData
}

export type InstallationData = {
  rdim: number
  qvarep_conv: number
  qvasouf_conv: number
  smea_conv: number
}

export enum TypeVentilation {
  ventilation_mecanique = 'ventilation_mecanique',
  ventilation_naturelle_ouverture_fenetres = 'ventilation_naturelle_ouverture_fenetres',
  ventilation_naturelle_entrees_air_hautes_basses = 'ventilation_naturelle_entrees_air_hautes_basses',
  ventilation_naturelle_conduit = 'ventilation_naturelle_conduit',
  ventilation_naturelle_conduit_entrees_air_hygroreglables = 'ventilation_naturelle_conduit_entrees_air_hygroreglables'
}

export const typeVentilationToString = (value: TypeVentilation): string => {
  switch (value) {
    case TypeVentilation.ventilation_mecanique:
      return 'Ventilation mécanique'
    case TypeVentilation.ventilation_naturelle_ouverture_fenetres:
      return 'Ventilation naturelle par ouverture fenêtres'
    case TypeVentilation.ventilation_naturelle_entrees_air_hautes_basses:
      return 'Ventilation naturelle par entrées air hautes basses'
    case TypeVentilation.ventilation_naturelle_conduit:
      return 'Ventilation naturelle sur conduit'
    case TypeVentilation.ventilation_naturelle_conduit_entrees_air_hygroreglables:
      return 'Ventilation naturelle sur conduit avec entrées air hygroreglables'
  }
}
