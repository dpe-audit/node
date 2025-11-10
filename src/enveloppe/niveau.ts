import type { Inertie as InertieParoi } from './paroi'

export interface INiveau {
  id: string
  description: string
  surface: number
  inertie_paroi_verticale: InertieParoi
  inertie_plancher_bas: InertieParoi
  inertie_plancher_haut: InertieParoi
  data?: NiveauData
}

export type NiveauData = {
  inertie: Inertie
}

export enum Inertie {
  tres_lourde = 'tres_lourde',
  lourde = 'lourde',
  moyenne = 'moyenne',
  legere = 'legere'
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
