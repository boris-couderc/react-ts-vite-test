export type Pokemon = {
  id: string
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
