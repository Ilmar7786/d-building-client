export interface SpritesMap {
  common: "react"
}
export const SPRITES_META: {
  [Key in keyof SpritesMap]: {
    filePath: string
    items: Record<
      SpritesMap[Key],
      {
        viewBox: string
        width: number
        height: number
      }
    >
  }
} = {
  common: {
    filePath: "common.svg",
    items: {
      react: {
        viewBox: "0 0 256 228",
        width: 35.93,
        height: 32,
      },
    },
  },
}
