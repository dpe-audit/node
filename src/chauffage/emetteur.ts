export interface IEmetteur {
  id: string
  description: string
  type: TypeEmetteur
  temperature_distribution: TemperatureDistribution
  presence_robinet_thermostatique: boolean
  annee_installation: number | null
}

export enum TypeEmetteur {
  plancher_chauffant = 'plancher_chauffant',
  plafond_chauffant = 'plafond_chauffant',
  radiateur_monotube = 'radiateur_monotube',
  radiateur_bitube = 'radiateur_bitube',
  radiateur = 'radiateur'
}

export enum TemperatureDistribution {
  basse = 'basse',
  moyenne = 'moyenne',
  haute = 'haute'
}

export const typeEmetteurToString = (value: TypeEmetteur): string => {
  switch (value) {
    case TypeEmetteur.plancher_chauffant:
      return 'Plancher chauffant'
    case TypeEmetteur.plafond_chauffant:
      return 'Plafond chauffant'
    case TypeEmetteur.radiateur_monotube:
      return 'Radiateur monotube'
    case TypeEmetteur.radiateur_bitube:
      return 'Radiateur bitube'
    case TypeEmetteur.radiateur:
      return 'Radiateur'
  }
}

export const temperatureDistributionToString = (
  value: TemperatureDistribution
): string => {
  switch (value) {
    case TemperatureDistribution.basse:
      return 'Basse température'
    case TemperatureDistribution.moyenne:
      return 'Moyenne température'
    case TemperatureDistribution.haute:
      return 'Haute température'
  }
}
