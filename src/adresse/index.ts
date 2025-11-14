export type Adresse = {
  ban_id: string | null
  nom: string
  code_postal: string
  code_insee: string
  commune: string
}

export const adresseToString = (adresse: Adresse): string => {
  return `${adresse.nom}, ${adresse.code_postal} ${adresse.commune}`
}
