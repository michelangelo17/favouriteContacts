import React from 'react'
import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/core'

const EmoGlobal = () => (
  <Global
    styles={css`
      ${emotionReset}
      *, *::after, *::before {
        font-size: 62.5%;
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
      }
    `}
  />
)

export default EmoGlobal
