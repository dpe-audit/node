import type { IBaie } from './baie'
import type { IDoubleFenetre } from './double-fenetre'
import type { ILocalNonChauffe } from './local-non-chauffe'
import type { IMasque } from './masque'
import type { IMur } from './mur'
import type { INiveau } from './niveau'
import type { IPlancherBas } from './plancher-bas'
import type { IPlancherHaut } from './plancher-haut'
import type { IPontThermique } from './pont-thermique'
import type { IPorte } from './porte'

export * as Baie from './baie'
export * as DoubleFenetre from './double-fenetre'
export * as LocalNonChauffe from './local-non-chauffe'
export * as Masque from './masque'
export * as Mur from './mur'
export * as Niveau from './niveau'
export * as PlancherBas from './plancher-bas'
export * as PlancherHaut from './plancher-haut'
export * as PontThermique from './pont-thermique'
export * as Porte from './porte'

export interface IEnveloppe {
  exposition: Exposition
  q4pa_conv: number | null
  presence_brasseurs_air: boolean
  niveaux: INiveau[]
  locaux_non_chauffes: ILocalNonChauffe[]
  murs: IMur[]
  planchers_hauts: IPlancherHaut[]
  planchers_bas: IPlancherBas[]
  baies: IBaie[]
  portes: IPorte[]
  ponts_thermiques: IPontThermique[]
  doubles_fenetres: IDoubleFenetre[]
  masques: IMasque[]
  data?: Partial<EnveloppeData>
}

export type EnveloppeData = {
  inertie: Inertie
  permeabilite: Permeabilite
  apports: Apports
  deperditions: Deperditions
  confort_ete: ConfortEte
}

export type Permeabilite = {
  hvent: number
  hperm: number
  q4pa_conv: number
  presence_joints_menuiserie: boolean
}

export type ConfortEte = {
  performance: PerformanceConfortEte
  inertie_lourde: boolean
  isolation_plancher_haut: boolean | null
  presence_protection_solaire: boolean | null
  logement_traversant: boolean | null
  presence_brasseur_air: boolean | null
}

export type Deperditions = {
  gv: number
  dp: number
  dp_murs: number
  dp_planchers_hauts: number
  dp_planchers_bas: number
  dp_baies: number
  dp_portes: number
  pt: number
  dr: number
  ubat: number
  performance: Performance
}

export type Apports = {
  f: number
  apport_ch: number
  apport_interne_ch: number
  apport_solaire_ch: number
  apport_fr: number
  apport_interne_fr: number
  apport_solaire_fr: number
}

export enum Exposition {
  exposition_simple = 'exposition_simple',
  exposition_multiple = 'exposition_multiple'
}

export enum Inertie {
  tres_lourde = 'tres_lourde',
  lourde = 'lourde',
  moyenne = 'moyenne',
  legere = 'legere'
}

export enum Performance {
  tres_bonne = 'tres_bonne',
  bonne = 'bonne',
  moyenne = 'moyenne',
  insuffisante = 'insuffisante'
}

export enum PerformanceConfortEte {
  bon = 'bon',
  moyen = 'moyenn',
  insuffisant = 'insuffisant'
}

export const inertieToString = (inertie: Inertie): string => {
  switch (inertie) {
    case Inertie.tres_lourde:
      return 'Très lourde'
    case Inertie.lourde:
      return 'Lourde'
    case Inertie.moyenne:
      return 'Moyenne'
    case Inertie.legere:
      return 'Légère'
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

export const confortEteToString = (value: PerformanceConfortEte): string => {
  switch (value) {
    case PerformanceConfortEte.bon:
      return 'Bon'
    case PerformanceConfortEte.moyen:
      return 'Moyen'
    case PerformanceConfortEte.insuffisant:
      return 'Insuffisant'
  }
}
