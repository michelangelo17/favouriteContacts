import styled from '@emotion/styled/macro'

export const PError = styled.p`
  margin: 20px 0 0;
  font-size: 1rem;
  color: ${(props) => props.c || 'firebrick'};
  text-align: center;
`
