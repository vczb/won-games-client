import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import { CartContext, CartContextDefaultValues } from 'hooks/use-cart';
import theme from 'styles/theme';

export const parameters = {
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        value: theme.colors.white
      },
      {
        name: 'won-dark',
        value: theme.colors.mainBg
     },
    ],
  }
}
export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <CartContext.Provider value={{
        ...CartContextDefaultValues,
        ...(context?.args?.cartContextValues || {}),
        ...context?.args
      }} >
        <Story/>
      </CartContext.Provider>
    </ThemeProvider>
  )
]

