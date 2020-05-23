import styled from '@emotion/styled/macro'
import { styleVariables } from '../../../../emotionalThings/EmoTools'

export const EmoUFModalDiv = styled.div`
  position: fixed;
  width: 350px;
  top: calc(40% - 100px);
  left: calc(50% - 175px);
  background-color: white;
  padding: 10px;
  border-radius: 15px;
  box-shadow: ${styleVariables.boxShadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
