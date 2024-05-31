import React from 'react'
import { storiesOf } from '@storybook/react'
import { renderWithKnobs } from '../../../.storybook/report'
import SyncColorField from '../../../.storybook/SyncColorField'

import Excel from './Excel'

storiesOf('Pickers', module)
  .add('ExcelPicker', () => (
    <SyncColorField component={ Excel }>
      { renderWithKnobs(Excel, {}, null, {
        width: { range: true, min: 140, max: 500, step: 1 },
        height: { range: true, min: 140, max: 500, step: 1 },
      }) }
    </SyncColorField>
  ))
