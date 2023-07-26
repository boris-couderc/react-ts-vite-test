export type Pokemon = {
  id: string
  name: string
  supertype: string
  subtypes: string[]
  hp?: string
  types?: string[]
  evolesFrom?: string
  evolvesTo?: string[]
  rules?: string[]
  images: {
    small: string
    large: string
  }
}
