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
    case Energie.gaz_naturel:
      return 'Gaz naturel'
    case Energie.gpl:
      return 'GPL'
    case Energie.fioul:
      return 'Fioul'
    case Energie.charbon:
      return 'Charbon'
    case Energie.bois_buche:
      return 'Bois bûche'
    case Energie.bois_plaquette:
      return 'Bois plaquette'
    case Energie.bois_granule:
      return 'Bois granulé'
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
