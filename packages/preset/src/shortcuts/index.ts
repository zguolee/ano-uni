import type { UserShortcuts } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'

import { baseShortcuts } from './base'
// basic
import { buttonShortcuts } from './button'
import { cellShortcuts } from './cell'
import { cellGroupShortcuts } from './cellGroup'
import { tagShortcuts } from './tag'

// form
import { checkboxShortcuts } from './checkbox'
import { checkboxGroupShortcuts } from './checkboxGroup'
import { inputShortcuts } from './input'
import { radioShortcuts } from './radio'
import { radioGroupShortcuts } from './radioGroup'
import { switchShortcuts } from './switch'

// action
import { overlayShortcuts } from './overlay'
import { notifyShortcuts } from './notify'
import { noticeBarShortcuts } from './noticeBar'

export default [
  baseShortcuts,
  buttonShortcuts,
  cellShortcuts,
  cellGroupShortcuts,
  tagShortcuts,

  checkboxShortcuts,
  checkboxGroupShortcuts,
  inputShortcuts,
  radioShortcuts,
  radioGroupShortcuts,
  switchShortcuts,

  overlayShortcuts,
  notifyShortcuts,
  noticeBarShortcuts,
] as UserShortcuts<Theme>
