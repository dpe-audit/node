export type Bilan = {
  cef: number
  cep: number
  eges: number
  etiquette_energie: EtiquetteEnergie
  etiquette_climat: EtiquetteClimat
}

export type Consommation = {
  scenario: Scenario
  usage: Usage
  energie: Energie
  cef: number
  cep: number
  eges: number
}

export type Consommations = Consommation[]

export enum Scenario {
  conventionnel = 'conventionnel',
  depensier = 'depensier'
}

export enum Usage {
  chauffage = 'chauffage',
  ecs = 'ecs',
  refroidissement = 'refroidissement',
  eclairage = 'eclairage',
  auxiliaire = 'auxiliaire'
}

export enum Energie {
  electricite = 'electricite',
  electricite_renouvelable = 'electricite_renouvelable',
  gaz_naturel = 'gaz_naturel',
  gpl = 'gpl',
  fioul = 'fioul',
  bois = 'bois',
  charbon = 'charbon',
  reseau_urbain = 'reseau_urbain'
}

export enum TypePerte {
  generation = 'generation',
  stockage = 'stockage',
  distribution = 'distribution'
}

export enum EtiquetteEnergie {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G'
}

export enum EtiquetteClimat {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G'
}

export enum ZoneClimatique {
  H1a = 'H1a',
  H1b = 'H1b',
  H1c = 'H1c',
  H2a = 'H2a',
  H2b = 'H2b',
  H2c = 'H2c',
  H2d = 'H2d',
  H3 = 'H3'
}

export const scenarioToString = (value: Scenario): string => {
  switch (value) {
    case Scenario.conventionnel:
      return 'Conventionnel'
    case Scenario.depensier:
      return 'Dépensier'
  }
}

export const usageToString = (value: Usage): string => {
  switch (value) {
    case Usage.chauffage:
      return 'Chauffage'
    case Usage.ecs:
      return 'Eau chaude sanitaire'
    case Usage.refroidissement:
      return 'Refroidissement'
    case Usage.eclairage:
      return 'Eclairage'
    case Usage.auxiliaire:
      return 'Auxiliaire'
  }
}

export const energieToString = (value: Energie): string => {
  switch (value) {
    case Energie.electricite:
      return 'Electricité'
    case Energie.electricite_renouvelable:
      return 'Electricité renouvelable'
    case Energie.gaz_naturel:
      return 'Gaz naturel'
    case Energie.gpl:
      return 'GPL'
    case Energie.fioul:
      return 'Fioul'
    case Energie.charbon:
      return 'Charbon'
    case Energie.bois:
      return 'Bois'
    case Energie.reseau_urbain:
      return 'Réseau urbain'
  }
}

export const typePerteToString = (value: TypePerte): string => {
  switch (value) {
    case TypePerte.generation:
      return 'Génération'
    case TypePerte.stockage:
      return 'Stockage'
    case TypePerte.distribution:
      return 'Distribution'
  }
}
