export type Bilan = {
  cef: number
  cep: number
  eges: number
  etiquette_energie: EtiquetteEnergie
  etiquette_climat: EtiquetteClimat
}

export type Consommation = {
  usage: Usage
  energie: Energie
  cef: number
  cep: number
  eges: number
}

export type Consommations = Consommation[]

export type Perte = {
  type: TypePerte
  pertes: number
  pertes_recuperables: number
}

export type Pertes = Perte[]

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

export enum Mois {
  janvier = '01',
  fevrier = '02',
  mars = '03',
  avril = '04',
  mai = '05',
  juin = '06',
  juillet = '07',
  aout = '08',
  septembre = '09',
  octobre = '10',
  novembre = '11',
  decembre = '12'
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

export const moisToString = (value: Mois): string => {
  switch (value) {
    case Mois.janvier:
      return 'Janvier'
    case Mois.fevrier:
      return 'Février'
    case Mois.mars:
      return 'Mars'
    case Mois.avril:
      return 'Avril'
    case Mois.mai:
      return 'Mai'
    case Mois.juin:
      return 'Juin'
    case Mois.juillet:
      return 'Juillet'
    case Mois.aout:
      return 'Août'
    case Mois.septembre:
      return 'Septembre'
    case Mois.octobre:
      return 'Octobre'
    case Mois.novembre:
      return 'Novembre'
    case Mois.decembre:
      return 'Décembre'
  }
}
