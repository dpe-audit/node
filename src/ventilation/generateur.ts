import type { Consommations } from "../common"

export interface IGenerateur {
  id: string
  description: string
  type: TypeGenerateur
  generateur_collectif: boolean
  presence_echangeur_thermique: boolean | null
  annee_installation: number | null
  type_vmc: TypeVmc | null
  data?: GenerateurData
}

export type GenerateurData = {
  rdim: number
  ratio_utilisation: number
  pvent_moy: number
  consommations: Consommations
}

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
