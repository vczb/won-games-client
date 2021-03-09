import { gql } from '@apollo/client'

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      title
      subtitle
      image {
        url
      }
      button {
        label
        link
      }
      ribbon {
        text
        color
        size
      }
    }
  }
`
