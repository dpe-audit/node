export type Besoin = {
  scenario: Scenario
  usage: Usage
  besoin: number
}

export type Consommation = {
  scenario: Scenario
  usage: Usage
  energie: Energie
  cef: number
  cep: number
}

export type Emission = {
  scenario: Scenario
  usage: Usage
  eges: number
}

export type Perte = {
  usage: Usage
  scenario: Scenario
  type: TypePerte
  perte: number
}

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
  gaz_naturel = 'gaz_naturel',
  gpl = 'gpl',
  fioul = 'fioul',
  charbon = 'charbon',
  bois_buche = 'bois_buche',
  bois_plaquette = 'bois_plaquette',
  bois_granule = 'bois_granule',
  reseau_chaleur = 'reseau_chaleur',
  reseau_froid = 'reseau_froid'
}

export enum TypePerte {
  generation = 'generation',
  stockage = 'stockage',
  distribution = 'distribution'
}

export const usageToString = (value: Usage): string => {
  switch (value) {
    case Usage.chauffage:
      return 'Chauffage'
    case Usage.ecs:
      return 'Eau chaude sanitaire'
    case Usage.refroidissement:
      return 'Refroidissment'
    case Usage.auxiliaire:
      return 'Auxiliaire'
    case Usage.eclairage:
      return 'Eclairage'
  }
}

export const energieToString = (value: Energie): string => {
  switch (value) {
    case Energie.electricite:
      return 'Electricité'
    case Energie.gaz_naturel:
      return 'Gaz naturel'
    case Energie.gpl:
      return 'GPL'
    case Energie.fioul:
      return 'Fioul'
    case Energie.charbon:
      return 'Charbon'
    case Energie.bois_buche:
      return 'Bois - Bûche'
    case Energie.bois_plaquette:
      return 'Bois - Plaquette'
    case Energie.bois_granule:
      return 'Bois - Granulé'
    case Energie.reseau_chaleur:
      return 'Réseau de chaleur'
    case Energie.reseau_froid:
      return 'Réseau de froid'
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
