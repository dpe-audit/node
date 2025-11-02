import type { IBaie } from './baie'
import type { IParoi } from './paroi'

export * as Paroi from './paroi'
export * as Baie from './baie'

export interface ILocalNonChauffe {
  id: string
  description: string
  type: TypeLnc
  parois: IParoi[]
  baies: IBaie[]
  data?: Partial<LocalNonChauffeData>
}

export type LocalNonChauffeData = {
  b: number | null
  uvue: number | null
  aue: number | null
  aiu: number | null
  isolation_aue: boolean | null
  isolation_aiu: boolean | null
  sse: number | null
}

export enum TypeLnc {
  garage = 'garage',
  cellier = 'cellier',
  espace_tampon_solarise = 'espace_tampon_solarise',
  comble_fortement_ventile = 'comble_fortement_ventile',
  comble_faiblement_ventile = 'comble_faiblement_ventile',
  comble_tres_faiblement_ventile = 'comble_tres_faiblement_ventile',
  circulation_sans_ouverture_exterieure = 'circulation_sans_ouverture_exterieure',
  circulation_avec_ouverture_exterieure = 'circulation_avec_ouverture_exterieure',
  circulation_avec_bouche_ou_gaine_desenfumage_ouverte = 'circulation_avec_bouche_ou_gaine_desenfumage_ouverte',
  hall_entree_avec_fermeture_automatique = 'hall_entree_avec_fermeture_automatique',
  hall_entree_sans_fermeture_automatique = 'hall_entree_sans_fermeture_automatique',
  garage_collectif = 'garage_collectif',
  autres = 'autres'
}

export const typeLncToString = (type: TypeLnc): string => {
  switch (type) {
    case TypeLnc.garage:
      return 'Garage'
    case TypeLnc.cellier:
      return 'Cellier'
    case TypeLnc.espace_tampon_solarise:
      return 'Espace tampon solarisé'
    case TypeLnc.comble_fortement_ventile:
      return 'Comble fortement ventilé'
    case TypeLnc.comble_faiblement_ventile:
      return 'Comble faiblement ventilé'
    case TypeLnc.comble_tres_faiblement_ventile:
      return 'Comble très faiblement ventilé'
    case TypeLnc.circulation_sans_ouverture_exterieure:
      return 'Circulation sans ouverture extérieure'
    case TypeLnc.circulation_avec_ouverture_exterieure:
      return 'Circulation avec ouverture extérieure'
    case TypeLnc.circulation_avec_bouche_ou_gaine_desenfumage_ouverte:
      return 'Circulation avec bouche ou gaine de désenfumage ouverte'
    case TypeLnc.hall_entree_avec_fermeture_automatique:
      return "Hall d'entrée avec fermeture automatique"
    case TypeLnc.hall_entree_sans_fermeture_automatique:
      return "Hall d'entrée sans fermeture automatique"
    case TypeLnc.garage_collectif:
      return 'Garage collectif'
    case TypeLnc.autres:
      return 'Autres'
  }
}
