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
