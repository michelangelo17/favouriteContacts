import styled from '@emotion/styled/macro'
import WebFont from 'webfontloader'
import styledMap from 'styled-map'
import { Link } from 'react-router-dom'
import { Field, Form } from 'formik'

WebFont.load({
  google: {
    families: ['Lobster', 'Varela Round', 'Righteous', 'sans-serif'],
  },
})

export const styleVariables = {
  mainFontColor: '#22282e',
  mainBackgroundColor: '#edf1f2',
  mainBrandColor: '#797564',
  secondaryFontColor: '#6e89a0',
  secondaryBackgroundColor: '#81a2a6',
  mainFontFamily: `'Lobster', 'sans-serif'`,
  secondaryFontFamily: `'Varela Round', 'sans-serif'`,
  fontSizeH1: '2.4rem',
  fontSizeH2: '2rem',
  fontSizeH3: '1.8rem',
  fontSizeH4: null,
  fontSizeH5: null,
  fontSizeH6: null,
  fontSizeH7: null,
  fontSizeP: '1.6rem',
  fontSizeSmall: '1.2rem',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
}

//set main background colour
document.body.style.backgroundColor = styleVariables.mainBackgroundColor

const buttonColorMap = styledMap`
  primary: #08415C;
  success: #2CA58D;
  danger: #CC2936;
  warning: #F1BF98;
  info: #4D7EA8;
  secondary: #6B818C;
`

const flexDirectionMap = styledMap`
  fdcr: column-reverse;
  fdrr: row-reverse;
  fdc: column;
  fdr: row;
`
const justifyContentMap = styledMap`
  jcse: space-evenly;
  jcsa: space-around;
  jcsb: space-between;
  jcc: center;
  jcfe: flex-end;
  jcfs: flex-start;
`
const alignItemsMap = styledMap`
  aib: baseline;
  ais: stretch;
  aic: center;
  aife: flex-end;
  aifs: flex-start;
`
const alignContentMap = styledMap`
  acs: stretch;
  acse: space-evenly;
  acsa: space-around;
  acsb: space-between;
  acc: center;
  acfe: flex-end;
  acfs: flex-start;
`
const bgColorMap = styledMap`
  white: white;
  secondaryColor: ${styleVariables.secondaryBackgroundColor};
  brandColor: ${styleVariables.mainBrandColor};
  mainColor: ${styleVariables.mainBackgroundColor};
`

const boxShadowMap = styledMap`
  bs: ${styleVariables.boxShadow};
  default: null;
`

const flexWrapMap = styledMap`
  fw: wrap;
  default: null;
`
const textDecorationMap = styledMap`
  lt: line-through;
  ul: underline;
  default: none;
`
const colorMap = styledMap`
  wfc: white;
  sfc: ${styleVariables.secondaryFontColor};
  default: ${styleVariables.mainFontColor};
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${flexDirectionMap};
  justify-content: ${justifyContentMap};
  align-items: ${alignItemsMap};
  align-content: ${alignContentMap};
  flex-wrap: ${flexWrapMap};
  width: ${props => props.w};
  height: ${props => props.h};
  margin: ${props => props.m};
  padding: ${props => props.p};
  min-width: ${props => props.minw};
  max-width: ${props => props.maxw};
  min-height: ${props => props.minh};
  max-height: ${props => props.maxh};
  background-color: ${bgColorMap};
  border-radius: ${props => props.br};
  box-shadow: ${boxShadowMap};
  position: ${props => props.position};
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
`

export const BasicImg = styled.img`
  width: ${props => props.w};
  height: ${props => props.h};
  margin: ${props => props.m};
  padding: ${props => props.p};
  min-width: ${props => props.minw};
  max-width: ${props => props.maxw};
  min-height: ${props => props.minh};
  max-height: ${props => props.maxh};
  border-radius: ${props => props.br};
`

export const H1 = styled.h1`
  width: ${props => props.w};
  height: ${props => props.h};
  margin: ${props => props.m};
  padding: ${props => props.p};
  min-width: ${props => props.minw};
  max-width: ${props => props.maxw};
  min-height: ${props => props.minh};
  max-height: ${props => props.maxh};
  font-size: ${styleVariables.fontSizeH1};
  color: ${colorMap};
  font-family: ${styleVariables.mainFontFamily};
  font-weight: bold;
  text-align: ${props => props.ta};
`
export const H2 = styled.h2`
  width: ${props => props.w};
  height: ${props => props.h};
  margin: ${props => props.m};
  padding: ${props => props.p};
  min-width: ${props => props.minw};
  max-width: ${props => props.maxw};
  min-height: ${props => props.minh};
  max-height: ${props => props.maxh};
  font-size: ${styleVariables.fontSizeH2};
  color: ${colorMap};
  font-family: ${styleVariables.mainFontFamily};
  font-weight: bold;
  text-align: ${props => props.ta};
`
export const H3 = styled.h3`
  width: ${props => props.w};
  height: ${props => props.h};
  margin: ${props => props.m};
  padding: ${props => props.p};
  min-width: ${props => props.minw};
  max-width: ${props => props.maxw};
  min-height: ${props => props.minh};
  max-height: ${props => props.maxh};
  font-size: ${styleVariables.fontSizeH3};
  color: ${colorMap};
  font-family: ${styleVariables.mainFontFamily};
  font-weight: bold;
  text-align: ${props => props.ta};
`

export const P = styled.p`
  width: ${props => props.w};
  height: ${props => props.h};
  margin: ${props => props.m};
  padding: ${props => props.p};
  min-width: ${props => props.minw};
  max-width: ${props => props.maxw};
  min-height: ${props => props.minh};
  max-height: ${props => props.maxh};
  font-size: ${styleVariables.fontSizeP};
  color: ${colorMap};
  font-family: ${styleVariables.mainFontFamily};
  text-align: ${props => props.ta};
  text-decoration: ${textDecorationMap};
`
export const Small = styled.small`
  width: ${props => props.w};
  height: ${props => props.h};
  margin: ${props => props.m};
  padding: ${props => props.p};
  min-width: ${props => props.minw};
  max-width: ${props => props.maxw};
  min-height: ${props => props.minh};
  max-height: ${props => props.maxh};
  font-size: ${styleVariables.fontSizeSmall};
  color: ${colorMap};
  font-family: ${styleVariables.mainFontFamily};
  text-align: ${props => props.ta};
  text-decoration: ${textDecorationMap};
`

export const Button = styled.button`
  width: ${props => props.w};
  height: ${props => props.h};
  margin: ${props => props.m};
  padding: ${props => props.p};
  min-width: ${props => props.minw};
  max-width: ${props => props.maxw};
  min-height: ${props => props.minh};
  max-height: ${props => props.maxh};
  color: white;
  background-color: ${buttonColorMap};
  border-radius: ${props => props.br};
  font-size: ${styleVariables.fontSizeSmall};
  border: none;
  &:hover {
    filter: brightness(0.9);
  }
`
// forms
export const TextInput = styled.input`
  width: ${props => props.w};
  height: ${styleVariables.fontSizeP};
  margin: ${props => props.m};
  padding: ${props => props.p};
  min-width: ${props => props.minw};
  max-width: ${props => props.maxw};
  min-height: ${props => props.minh};
  max-height: ${props => props.maxh};
  font-size: ${styleVariables.fontSizeSmall};
`
// formik

export const EmoForm = styled(Form)`
  display: flex;
  flex-direction: ${flexDirectionMap};
  justify-content: ${justifyContentMap};
  align-items: ${alignItemsMap};
  align-content: ${alignContentMap};
  flex-wrap: ${flexWrapMap};
  width: ${props => props.w};
  height: ${props => props.h};
  margin: ${props => props.m};
  padding: ${props => props.p};
  min-width: ${props => props.minw};
  max-width: ${props => props.maxw};
  min-height: ${props => props.minh};
  max-height: ${props => props.maxh};
  background-color: ${bgColorMap};
  border-radius: ${props => props.br};
  box-shadow: ${boxShadowMap};
  position: ${props => props.position};
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
`

export const EmoField = styled(Field)`
  width: ${props => props.w};
  height: ${styleVariables.fontSizeP};
  margin: ${props => props.m};
  padding: ${props => props.p};
  min-width: ${props => props.minw};
  max-width: ${props => props.maxw};
  min-height: ${props => props.minh};
  max-height: ${props => props.maxh};
  font-size: ${styleVariables.fontSizeSmall};
  border-radius: ${props => props.br};
  border: ${props => props.b};
  margin: ${props => props.m};
`

//router
export const EmoLink = styled(Link)`
  text-decoration: none;
`
