export type Pokemon = {
  id: number
  name: string
  supertype?: string
  subtypes?: string[]
  hp?: string
  types?: string[]
  rules?: string[]
  images: {
    small: string
    large: string
  }
  rarity?: string
  price?: number
}

export type Rarity = string
