import { createContext, useContext } from 'react'
import { GameCardProps } from 'components/GameCard'

export type WishlistContextData = {
  items: GameCardProps[]
  isInWishlist: (id: string) => boolean
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
  loading: boolean
}

const WishlistContextDefaultValues = {
  items: [],
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
  loading: false
}

export const WishListContext = createContext<WishlistContextData>(
  WishlistContextDefaultValues
)

export type WishlistProviderProps = {
  children: React.ReactNode
}

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const isInWishlist = (id: string) => {}
  const addToWishlist = (id: string) => {}
  const removeFromWishlist = (id: string) => {}

  return (
    <WishListContext.Provider
      value={{
        isInWishlist,
        addToWishlist,
        removeFromWishlist
      }}
    >
      {children}
    </WishListContext.Provider>
  )
}

const useWishlist = () => useContext(WishListContext)

export { WishlistProvider, useWishlist }
