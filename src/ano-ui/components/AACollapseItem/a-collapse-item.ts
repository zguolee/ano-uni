import type { ExtractPropTypes } from 'vue'
import { CLICK_EVENT } from '../constants'
import { useCustomClassProp, useCustomStyleProp } from '../composables'

export const aCollapseItemProps = {
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
}
export const aCollapseItemEmits = {
  [CLICK_EVENT]: (evt: MouseEvent) => evt instanceof Object,
}

export type ACollapseItemProps = ExtractPropTypes<typeof aCollapseItemProps>
export type ACollapseItemEmits = typeof aCollapseItemEmits
