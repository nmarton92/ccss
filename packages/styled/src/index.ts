import { createCreator } from '@/factory'

import { defaultOptions } from '@cryptic-css/core'
import styled from 'styled-components'

export const createStyledCCSS = createCreator(styled)

const defaultStyled = createStyledCCSS(defaultOptions)

export const ccss = defaultStyled.ccss
export const Ui = defaultStyled.Ui
export const ccssd = defaultStyled.ccssd

export * from '@/factory'
export * from 'styled-components'
export { default } from 'styled-components'
export * from '@cryptic-css/core'