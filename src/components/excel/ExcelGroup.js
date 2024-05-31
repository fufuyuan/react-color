import React from 'react'
import reactCSS from 'reactcss'
import map from 'lodash/map'

import ExcelColor from './ExcelColor'
import merge from 'lodash/merge'
export const ExcelGroup = ({ onClick, onSwatchHover, group, active, last, }) => {
  const styles = reactCSS(
    {
      'default': {
        group: {
          paddingBottom: '1px',
          width: '420px',
          float: 'left',
          marginRight: '10px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
      'last': {
        group: {
          paddingTop: '10px',   
        },
      },
    }, {
      last,
    }
)
  return (
    <div style={ styles.group }>
      { map(group, (color, i) => (
        <ExcelColor
          key={ color }
          color={ color }
          active={ color.toLowerCase() === active }
          first={ i === 0 }
          last={ i === group.length - 1 }
          onClick={ onClick }
          onSwatchHover={ onSwatchHover }
        />
      )) }
    </div>
  )
}
export default ExcelGroup
