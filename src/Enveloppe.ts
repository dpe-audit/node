import { NotFound } from './errors'
import { send } from './request'

export const retrieveEnveloppe = async (
  id: string
): Promise<Enveloppe | NotFound> => {
  return send<Enveloppe | NotFound>({
    method: 'GET',
    path: `/audit/${id}/enveloppe`
  })
}

export interface Enveloppe {
  murs: Mur[]
  planchers_hauts: PlancherHaut[]
  planchers_bas: PlancherBas[]
  baies: Baie[]
  portes: Porte[]
  ponts_thermiques: PontThermique[]
  data?: Partial<EnveloppeData>
}

export type EnveloppeData = {
  gv: number
  ubat: number
  inertie_lourde: boolean
  planchers_hauts_isoles: boolean
  presence_protections_solaires: boolean
  logement_traversant: boolean
  presence_brasseurs_air: boolean
  performance: Performance
  confort_ete: ConfortEte
  deperditions: Deperdition[]
}

export interface Mur {
  id: string
  description: string
  type_structure: Mur.TypeStructure | null
  epaisseur_structure: number | null
  type_doublage: Mur.TypeDoublage | null
  presence_enduit_isolant: boolean | null
  paroi_ancienne: boolean | null
  inertie: InertieParoi | null
  annee_construction: number | null
  annee_renovation: number | null
  u0: number | null
  u: number | null
  position: Mur.Position
  isolation: Isolation
  data?: Partial<MurData>
}

export type MurData = {
  sdep: number
  u0: number
  u: number
  b: number
  dp: number
  isolation: EtatIsolation
  performance: Performance
}

export interface PlancherBas {
  id: string
  description: string
  type_structure: PlancherBas.TypeStructure | null
  inertie: InertieParoi | null
  annee_construction: number | null
  annee_renovation: number | null
  u0: number | null
  u: number | null
  position: PlancherBas.Position
  isolation: Isolation
  data?: Partial<PlancherBasData>
}

export type PlancherBasData = {
  sdep: number
  u0: number
  u: number
  b: number
  dp: number
  isolation: EtatIsolation
  performance: Performance
}

export interface PlancherHaut {
  id: string
  description: string
  type_structure: PlancherHaut.TypeStructure | null
  inertie: InertieParoi | null
  annee_construction: number | null
  annee_renovation: number | null
  u0: number | null
  u: number | null
  position: PlancherHaut.Position
  isolation: Isolation
  data?: Partial<PlancherHautData>
}

export type PlancherHautData = {
  sdep: number
  u0: number
  u: number
  b: number
  dp: number
  isolation: EtatIsolation
  performance: Performance
}

export interface Baie {
  id: string
  description: string
  type_baie: Baie.TypeBaie
  presence_protection_solaire: boolean
  type_fermeture: Baie.TypeFermeture
  materiau: Baie.Materiau | null
  type_pose: TypePose | null
  presence_soubassement: boolean | null
  annee_installation: number | null
  ug: number | null
  uw: number | null
  ujn: number | null
  sw: number | null
  position: Baie.Position
  vitrage: Baie.Vitrage
  menuiserie: Baie.Menuiserie
  data?: Partial<BaieData>
}

export type BaieData = {
  sdep: number
  u: number
  b: number
  dp: number
  isolation: EtatIsolation
  performance: Performance
}

export interface Porte {
  id: string
  description: string
  type_pose: TypePose
  isolation: EtatIsolation | null
  materiau: Porte.Materiau | null
  presence_sas: boolean | null
  annee_installation: number | null
  u: number | null
  position: Porte.Position
  vitrage: Porte.Vitrage
  menuiserie: Porte.Menuiserie
  data?: Partial<PorteData>
}

export type PorteData = {
  sdep: number
  u: number
  b: number
  dp: number
  isolation: EtatIsolation
  performance: Performance
}

export interface PontThermique {
  id: string
  description: string
  longueur: number
  liaison: PontThermique.Liaison
  data?: Partial<PontThermiqueData>
}

export type PontThermiqueData = {
  kpt: number
  pt: number
}

export type Deperdition = {
  type: TypeDeperdition
  deperdition: number
}

export enum TypeDeperdition {
  mur = 'mur',
  plancher_haut = 'plancher_haut',
  plancher_bas = 'plancher_bas',
  baie = 'baie',
  porte = 'porte',
  pont_thermique = 'pont_thermique',
  renouvellement_air = 'renouvellement_air'
}

export enum ConfortEte {
  bon = 'bon',
  moyen = 'moyen',
  insuffisant = 'insuffisant'
}

export enum Performance {
  tres_bonne = 'très_bonne',
  bonne = 'bonne',
  moyenne = 'moyenne',
  insuffisante = 'insuffisante'
}

export enum Mitoyennete {
  exterieur = 'exterieur',
  enterre = 'enterre',
  vide_sanitaire = 'vide_sanitaire',
  terre_plein = 'terre_plein',
  sous_sol_non_chauffe = 'sous_sol_non_chauffe',
  local_non_chauffe = 'local_non_chauffe',
  local_non_residentiel = 'local_non_residentiel',
  local_residentiel = 'local_residentiel',
  local_non_accessible = 'local_non_accessible'
}

export enum EtatIsolation {
  isole = 'isole',
  non_isole = 'non_isole'
}

export enum TypeIsolation {
  iti = 'iti',
  ite = 'ite',
  itr = 'itr',
  iti_ite = 'iti_ite',
  itr_iti = 'itr_iti',
  itr_ite = 'itr_ite',
  itr_iti_ite = 'itr_iti_ite'
}

export enum TypeParoi {
  mur = 'mur',
  plancher_haut = 'plancher_haut',
  plancher_bas = 'plancher_bas',
  baie = 'baie',
  porte = 'porte'
}

export enum Inertie {
  tres_lourde = 'tres_lourde',
  lourde = 'lourde',
  moyenne = 'moyenne',
  legere = 'legere'
}

export enum InertieParoi {
  lourde = 'lourde',
  legere = 'legere'
}

export enum TypePose {
  nu_exterieur = 'nu_exterieur',
  nu_interieur = 'nu_interieur',
  tunnel = 'tunnel'
}

export type Isolation = {
  etat_isolation: EtatIsolation | null
  type_isolation: TypeIsolation | null
  epaisseur_isolation: number | null
  resistance_thermique_isolation: number | null
}

export namespace Mur {
  export type Position = {
    local_non_chauffe_id: string | null
    surface: number
    orientation: number | null
    mitoyennete: Mitoyennete
  }

  export enum TypeStructure {
    pierre_moellons = 'pierre_moellons',
    pierre_moellons_avec_remplissage = 'pierre_moellons_avec_remplissage',
    pise_ou_beton_terre = 'pise_ou_beton_terre',
    pan_bois_sans_remplissage = 'pan_bois_sans_remplissage',
    pan_bois_avec_remplissage = 'pan_bois_avec_remplissage',
    bois_rondin = 'bois_rondin',
    brique_pleine_simple = 'brique_pleine_simple',
    brique_pleine_double_avec_lame_air = 'brique_pleine_double_avec_lame_air',
    brique_creuse = 'brique_creuse',
    bloc_beton_plein = 'bloc_beton_plein',
    bloc_beton_creux = 'bloc_beton_creux',
    beton_banche = 'beton_banche',
    beton_machefer = 'beton_machefer',
    brique_terre_cuite_alveolaire = 'brique_terre_cuite_alveolaire',
    sandwich_beton_isolant_beton_sans_isolation_rapportee = 'sandwich_beton_isolant_beton_sans_isolation_rapportee',
    cloison_platre = 'cloison_platre',
    ossature_bois_sans_remplissage = 'ossature_bois_sans_remplissage',
    ossature_bois_avec_remplissage_tout_venant = 'ossature_bois_avec_remplissage_tout_venant',
    ossature_bois_avec_remplissage_isolant = 'ossature_bois_avec_remplissage_isolant',
    beton_cellulaire = 'beton_cellulaire'
  }

  export enum TypeDoublage {
    sans_doublage = 'sans_doublage',
    indetermine = 'indetermine',
    lame_air_inferieur_15mm = 'lame_air_inferieur_15mm',
    lame_air_superieur_15mm = 'lame_air_superieur_15mm',
    materiaux_connu = 'materiaux_connu'
  }
}

export namespace PlancherBas {
  export type Position = {
    local_non_chauffe_id: string | null
    surface: number
    perimetre: number
    mitoyennete: Mitoyennete
  }

  export enum TypeStructure {
    plancher_avec_ou_sans_remplissage = 'plancher_avec_ou_sans_remplissage',
    plancher_entre_solives_metalliques = 'plancher_entre_solives_metalliques',
    plancher_entre_solives_bois = 'plancher_entre_solives_bois',
    plancher_bois_sur_solives_metalliques = 'plancher_bois_sur_solives_metalliques',
    bardeaux_et_remplissage = 'bardeaux_et_remplissage',
    voutains_sur_solives_metalliques = 'voutains_sur_solives_metalliques',
    voutains_briques_ou_moellons = 'voutains_briques_ou_moellons',
    dalle_beton = 'dalle_beton',
    plancher_bois_sur_solives_bois = 'plancher_bois_sur_solives_bois',
    plancher_lourd_type_entrevous_terre_cuite_ou_poutrelles_beton = 'plancher_lourd_type_entrevous_terre_cuite_ou_poutrelles_beton',
    plancher_entrevous_isolant = 'plancher_entrevous_isolant'
  }
}

export namespace PlancherHaut {
  export type Position = {
    local_non_chauffe_id: string | null
    surface: number
    orientation: number | null
    mitoyennete: Mitoyennete
  }

  export enum TypeStructure {
    plafond_avec_ou_sans_remplissage = 'plafond_avec_ou_sans_remplissage',
    plafond_entre_solives_metalliques = 'plafond_entre_solives_metalliques',
    plafond_entre_solives_bois = 'plafond_entre_solives_bois',
    plafond_bois_sur_solives_metalliques = 'plafond_bois_sur_solives_metalliques',
    plafond_bois_sous_solives_metalliques = 'plafond_bois_sous_solives_metalliques',
    bardeaux_et_remplissage = 'bardeaux_et_remplissage',
    plafond_bois_sur_solives_bois = 'plafond_bois_sur_solives_bois',
    plafond_bois_sous_solives_bois = 'plafond_bois_sous_solives_bois',
    dalle_beton = 'dalle_beton',
    plafond_lourd = 'plafond_lourd',
    combles_amenages_sous_rampant = 'combles_amenages_sous_rampant',
    toiture_chaume = 'toiture_chaume',
    plafond_patre = 'plafond_patre',
    bac_acier = 'bac_acier'
  }
}

export namespace Baie {
  export interface MasqueProche {
    id: string
    description: string
    type_masque: Baie.TypeMasqueProche
    profondeur: number | null
    data?: Partial<MasqueProcheData>
  }

  export interface MasqueProcheData {
    fe1: number
  }

  export interface MasqueLointain {
    id: string
    description: string
    type_masque: Baie.TypeMasqueLointain
    hauteur: number
    orientation: number
    data?: Partial<MasqueLointainData>
  }

  export interface MasqueLointainData {
    fe2: number
    omb: number
  }

  export type Position = {
    local_non_chauffe_id: string | null
    paroi_id: string | null
    surface: number
    orientation: number | null
    mitoyennete: Mitoyennete
  }

  export type Vitrage = {
    type_vitrage: Baie.TypeVitrage | null
    nature_lame: Baie.NatureLame | null
    epaisseur_lame: number | null
    survitrage: Baie.Survitrage | null
  }

  export type Menuiserie = {
    largeur_dormant: number | null
    presence_joint: boolean | null
    presence_retour_isolation: boolean | null
    presence_rupteur_pont_thermique: boolean | null
  }

  export type Survitrage = {
    type_survitrage: Baie.TypeSurvitrage | null
    epaisseur_lame: number | null
  }

  export enum TypeMasqueProche {
    fond_balcon_ou_fond_et_flanc_loggias = 'fond_balcon_ou_fond_et_flanc_loggias',
    balcon_ou_auvent = 'balcon_ou_auvent',
    paroi_laterale_sans_obstacle_au_sud = 'paroi_laterale_sans_obstacle_au_sud',
    paroi_laterale_avec_obstacle_au_sud = 'paroi_laterale_avec_obstacle_au_sud'
  }

  export enum TypeMasqueLointain {
    masque_lointain_homogene = 'homogene',
    masque_lointain_non_homogene = 'non_homogene'
  }

  export enum TypeBaie {
    brique_verre_pleine = 'brique_verre_pleine',
    brique_verre_creuse = 'brique_verre_creuse',
    polycarbonate = 'polycarbonate',
    fenetre_battante = 'fenetre_battante',
    fenetre_coulissante = 'fenetre_coulissante',
    porte_fenetre_coulissante = 'porte_fenetre_coulissante',
    porte_fenetre_battante = 'porte_fenetre_battante'
  }

  export enum TypeFermeture {
    sans_fermeture = 'sans_fermeture',
    jalousie_accordeon = 'jalousie_accordeon',
    fermeture_lames_orientables = 'fermeture_lames_orientables',
    venitiens_exterieurs_metal = 'venitiens_exterieurs_metal',
    volet_battant_avec_ajours_fixes = 'volet_battant_avec_ajours_fixes',
    persiennes_avec_ajours_fixes = 'persiennes_avec_ajours_fixes',
    fermeture_sans_ajours = 'fermeture_sans_ajours',
    volets_roulants_aluminium = 'volets_roulants_aluminium',
    volets_roulants_pvc_bois_epaisseur_lte_12mm = 'volets_roulants_pvc_bois_epaisseur_lte_12mm',
    volets_roulants_pvc_bois_epaisseur_gt_12mm = 'volets_roulants_pvc_bois_epaisseur_gt_12mm',
    persienne_coulissante_epaisseur_lte_22mm = 'persienne_coulissante_epaisseur_lte_22mm',
    persienne_coulissante_epaisseur_gt_22mm = 'persienne_coulissante_epaisseur_gt_22mm',
    volet_battant_pvc_bois_epaisseur_lte_22mm = 'volet_battant_pvc_bois_epaisseur_lte_22mm',
    volet_battant_pvc_bois_epaisseur_gt_22mm = 'volet_battant_pvc_bois_epaisseur_gt_22mm',
    fermeture_isolee_sans_ajours = 'fermeture_isolee_sans_ajours'
  }

  export enum Materiau {
    pvc = 'pvc',
    bois = 'bois',
    bois_metal = 'bois_metal',
    metal = 'metal'
  }

  export enum TypeVitrage {
    simple_vitrage = 'simple_vitrage',
    double_vitrage = 'double_vitrage',
    double_vitrage_fe = 'double_vitrage_fe',
    triple_vitrage = 'triple_vitrage',
    triple_vitrage_fe = 'triple_vitrage_fe'
  }

  export enum NatureLame {
    air = 'air',
    argon = 'argon',
    krypton = 'krypton'
  }

  export enum TypeSurvitrage {
    survitrage_simple = 'survitrage_simple',
    survitrage_fe = 'survitrage_fe'
  }
}

export namespace Porte {
  export type Position = {
    local_non_chauffe_id: string | null
    paroi_id: string | null
    surface: number
    orientation: number | null
    mitoyennete: Mitoyennete
  }

  export type Vitrage = {
    taux_vitrage: number
    type_vitrage: Porte.TypeVitrage | null
  }

  export type Menuiserie = {
    largeur_dormant: number | null
    presence_joint: boolean | null
    presence_retour_isolation: boolean | null
  }

  export enum Materiau {
    pvc = 'pvc',
    bois = 'bois',
    bois_metal = 'bois_metal',
    metal = 'metal'
  }

  export enum TypeVitrage {
    simple_vitrage = 'simple_vitrage',
    double_vitrage = 'double_vitrage',
    triple_vitrage = 'triple_vitrage'
  }
}

export namespace PontThermique {
  export type Liaison = {
    type_liaison: PontThermique.TypeLiaison
    mur_id: string
    plancher_id: string | null
    ouverture_id: string | null
    pont_thermique_partiel: boolean | null
  }

  export enum TypeLiaison {
    plancher_bas_mur = 'plancher_bas_mur',
    plancher_intermediaire_mur = 'plancher_intermediaire_mur',
    plancher_haut_mur = 'plancher_haut_mur',
    refend_mur = 'refend_mur',
    menuiserie_mur = 'menuiserie_mur'
  }
}
