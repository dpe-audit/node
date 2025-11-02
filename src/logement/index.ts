export interface ILogement {
  id: string
  description: string
  surface_habitable: number
  hauteur_sous_plafond: number
  position: Position
  typologie: Typologie
}

export enum Position {
  rdc = 'rdc',
  etage_intermediaire = 'etage_intermediaire',
  dernier_etage = 'dernier_etage'
}

export enum Typologie {
  T1 = 'T1',
  T2 = 'T2',
  T3 = 'T3',
  T4 = 'T4',
  T5 = 'T5',
  T6 = 'T6',
  T7 = 'T7'
}

export const positionToString = (position: Position): string => {
  switch (position) {
    case Position.rdc:
      return 'Rez-de-chaussée'
    case Position.etage_intermediaire:
      return 'Étage intermédiaire'
    case Position.dernier_etage:
      return 'Dernier étage'
  }
}

export const typologieToString = (typologie: Typologie): string => {
  switch (typologie) {
    case Typologie.T1:
      return 'T1'
    case Typologie.T2:
      return 'T2'
    case Typologie.T3:
      return 'T3'
    case Typologie.T4:
      return 'T4'
    case Typologie.T5:
      return 'T5'
    case Typologie.T6:
      return 'T6'
    case Typologie.T7:
      return 'T7 et plus'
  }
}
