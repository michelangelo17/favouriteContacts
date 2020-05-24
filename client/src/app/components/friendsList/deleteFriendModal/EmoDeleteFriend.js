import styled from '@emotion/styled/macro'
import { styleVariables } from '../../../../emotionalThings/EmoTools'

export const EmoModalDiv = styled.div`
  position: fixed;
  top: calc(40% - 100px);
  left: calc(50% - 125px);
  width: 250px;
  height: 200px;
  background-color: white;
  padding: 10px;
  border-radius: 15px;
  box-shadow: ${styleVariables.boxShadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
