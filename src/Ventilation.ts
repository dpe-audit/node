import type { Consommation, Emission } from './Common'

export interface Ventilation {
  generateurs: Generateur[]
  installations: Installation[]
  systemes: Systeme[]
}

export interface VentilationWithData extends Ventilation {
  generateurs: GenerateurWithData[]
  installations: InstallationWithData[]
  systemes: SystemeWithData[]
  data: VentilationData
}

export interface VentilationData {
  qvarep_conv: number
  qvasouf_conv: number
  smea_conv: number
  consommations: Consommation[]
  emissions: Emission[]
}

export interface Generateur {
  id: string
  description: string
  type: Generateur.TypeGenerateur
  generateur_collectif: boolean
  presence_echangeur_thermique: boolean | null
  annee_installation: number | null
  type_vmc: Generateur.TypeVmc | null
}

export interface GenerateurWithData extends Generateur {
  data: GenerateurData
}

export interface GenerateurData {
  consommations: Consommation[]
  emissions: Emission[]
}

export interface Installation {
  id: string
  description: string
  surface: number
}

export interface InstallationWithData extends Installation {
  data: InstallationData
}

export interface InstallationData {
  rdim: number
  qvarep_conv: number
  qvasouf_conv: number
  smea_conv: number
  consommations: Consommation[]
  emissions: Emission[]
}

export interface Systeme {
  id: string
  installation_id: string
  generateur_id: string | null
  type: Systeme.TypeVentilation
}

export interface SystemeWithData extends Systeme {
  data: SystemeData
}

export interface SystemeData {
  rdim: number
  qvarep_conv: number
  qvasouf_conv: number
  smea_conv: number
  ratio_utilisation: number
  pvent_moy: number
  pvent: number
  consommations: Consommation[]
  emissions: Emission[]
}

export namespace Generateur {
  export enum TypeGenerateur {
    vmc_simple_flux = 'vmc_simple_flux',
    vmc_simple_flux_gaz = 'vmc_simple_flux_gaz',
    vmc_basse_pression = 'vmc_basse_pression',
    vmc_double_flux = 'vmc_double_flux',
    vmi = 'vmi',
    ventilation_hybride = 'ventilation_hybride',
    ventilation_mecanique = 'ventilation_mecanique',
    puit_climatique = 'puit_climatique',
    vmr = 'vmr'
  }

  export enum TypeVmc {
    autoreglable = 'autoreglable',
    hygroreglable_type_a = 'hygroreglable_type_a',
    hygroreglable_type_b = 'hygroreglable_type_b'
  }

  export const typeGenerateurToString = (value: TypeGenerateur): string => {
    switch (value) {
      case TypeGenerateur.vmc_simple_flux:
        return 'VMC simple flux'
      case TypeGenerateur.vmc_simple_flux_gaz:
        return 'VMC simple flux gaz'
      case TypeGenerateur.vmc_basse_pression:
        return 'VMC basse pression'
      case TypeGenerateur.vmc_double_flux:
        return 'VMC double flux'
      case TypeGenerateur.vmi:
        return 'VMI'
      case TypeGenerateur.ventilation_hybride:
        return 'Ventilation hybride'
      case TypeGenerateur.ventilation_mecanique:
        return 'Ventilation mécanique'
      case TypeGenerateur.puit_climatique:
        return 'Puit climatique'
      case TypeGenerateur.vmr:
        return 'VMR'
    }
  }

  export const typeVmcToString = (value: TypeVmc): string => {
    switch (value) {
      case TypeVmc.autoreglable:
        return 'Autoreglable'
      case TypeVmc.hygroreglable_type_a:
        return 'Hygroreglable type A'
      case TypeVmc.hygroreglable_type_b:
        return 'Hygroreglable type B'
    }
  }
}

export namespace Systeme {
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
        return 'Ventilation naturelle - Ouverture fenêtres'
      case TypeVentilation.ventilation_naturelle_entrees_air_hautes_basses:
        return "Ventilation naturelle - Entrées d'air hautes/basses"
      case TypeVentilation.ventilation_naturelle_conduit:
        return 'Ventilation naturelle - Conduit'
      case TypeVentilation.ventilation_naturelle_conduit_entrees_air_hygroreglables:
        return "Ventilation naturelle - Conduit - Entrées d'air hygroreglables"
    }
  }
}
