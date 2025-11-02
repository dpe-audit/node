export interface IGenerateur {
  id: string
  description: string
  type: TypeGenerateur | null
  energie: EnergieGenerateur | null
  annee_installation: number | null
  position: Position
  signaletique: Signaletique
  data?: Partial<GenerateurData>
}

export type GenerateurData = {
  rdim: number
  cef_ecs: number
  cep_ecs: number
  eges_ecs: number
  pn: number
  pdim: number
  paux: number | null
  pecs: number
  cop: number | null
  rpn: number | null
  qp0: number | null
  pveilleuse: number | null
  pertes: Pertes
}

export type Pertes = {
  pertes_generation: number
  pertes_generation_recuperables: number
  pertes_stockage_integre: number
  pertes_stockage_integre_recuperables: number
}

export type Position = {
  position_chauffe_eau: PositionChauffeEau | null
  generateur_collectif: boolean
  generateur_multi_batiment: boolean
  position_volume_chauffe: boolean
  generateur_mixte_id: string | null
  reseau_chaleur_id: string | null
}

export type Signaletique = {
  volume_stockage: number | null
  pn: number | null
  cop: number | null
  label: LabelGenerateur | null
  mode_combustion: ModeCombustion | null
  presence_ventouse: boolean | null
  pveilleuse: number | null
  qp0: number | null
  rpn: number | null
}

export enum TypeGenerateur {
  chauffe_eau = 'chauffe_eau',
  chaudiere = 'chaudiere',
  cet_air_ambiant = 'cet_air_ambiant',
  cet_air_exterieur = 'cet_air_exterieur',
  cet_air_extrait = 'cet_air_extrait',
  pac_double_service = 'pac_double_service',
  poele_bouilleur = 'poele_bouilleur',
  reseau_chaleur = 'reseau_chaleur'
}

export enum EnergieGenerateur {
  electricite = 'electricite',
  gaz_naturel = 'gaz_naturel',
  gpl = 'gpl',
  fioul = 'fioul',
  charbon = 'charbon',
  bois_buche = 'bois_buche',
  bois_plaquette = 'bois_plaquette',
  bois_granule = 'bois_granule',
  reseau_chaleur = 'reseau_chaleur'
}

export enum PositionChauffeEau {
  chauffe_eau_vertical = 'chauffe_eau_vertical',
  chauffe_eau_horizontal = 'chauffe_eau_horizontal'
}

export enum LabelGenerateur {
  ne_performance_a = 'ne_performance_a',
  ne_performance_b = 'ne_performance_b',
  ne_performance_c = 'ne_performance_c'
}

export enum TypeChaudiere {
  chaudiere_murale = 'chaudiere_murale',
  chaudiere_sol = 'chaudiere_sol'
}

export enum ModeCombustion {
  standard = 'standard',
  basse_temperature = 'basse_temperature',
  condensation = 'condensation'
}

export const typeGenerateurToString = (value: TypeGenerateur): string => {
  switch (value) {
    case TypeGenerateur.chauffe_eau:
      return 'Chauffe-eau'
    case TypeGenerateur.chaudiere:
      return 'Chaudière'
    case TypeGenerateur.cet_air_ambiant:
      return 'CET air ambiant'
    case TypeGenerateur.cet_air_exterieur:
      return 'CET air extérieur'
    case TypeGenerateur.cet_air_extrait:
      return 'CET air extrait'
    case TypeGenerateur.pac_double_service:
      return 'PAC double service'
    case TypeGenerateur.poele_bouilleur:
      return 'Poêle bouilleur'
    case TypeGenerateur.reseau_chaleur:
      return 'Réseau de chaleur'
  }
}

export const energieGenerateurToString = (value: EnergieGenerateur): string => {
  switch (value) {
    case EnergieGenerateur.electricite:
      return 'Electricité'
    case EnergieGenerateur.gaz_naturel:
      return 'Gaz naturel'
    case EnergieGenerateur.gpl:
      return 'GPL'
    case EnergieGenerateur.fioul:
      return 'Fioul'
    case EnergieGenerateur.charbon:
      return 'Charbon'
    case EnergieGenerateur.bois_buche:
      return 'Bois bûche'
    case EnergieGenerateur.bois_plaquette:
      return 'Bois plaquette'
    case EnergieGenerateur.bois_granule:
      return 'Bois granulé'
    case EnergieGenerateur.reseau_chaleur:
      return 'Réseau de chaleur'
  }
}

export const labelGenerateurToString = (value: LabelGenerateur): string => {
  switch (value) {
    case LabelGenerateur.ne_performance_a:
      return 'NE - Performance A'
    case LabelGenerateur.ne_performance_b:
      return 'NE - Performance B'
    case LabelGenerateur.ne_performance_c:
      return 'NE - Performance C'
  }
}

export const typeChaudiereToString = (value: TypeChaudiere): string => {
  switch (value) {
    case TypeChaudiere.chaudiere_murale:
      return 'Chaudière murale'
    case TypeChaudiere.chaudiere_sol:
      return 'Chaudière sol'
  }
}

export const modeCombustionToString = (value: ModeCombustion): string => {
  switch (value) {
    case ModeCombustion.standard:
      return 'Standard'
    case ModeCombustion.basse_temperature:
      return 'Basse température'
    case ModeCombustion.condensation:
      return 'Condensation'
  }
}
