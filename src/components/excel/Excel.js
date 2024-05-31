import React from 'react'
import PropTypes from 'prop-types'
import reactCSS from 'reactcss'
import map from 'lodash/map'
import merge from 'lodash/merge'
import * as material from 'material-colors'

import { ColorWrap, Raised } from '../common'
import ExcelGroup from './ExcelGroup'
import ExcelFields from './ExcelFields'

export const Excel = ({ width, height, onChange, onSwatchHover, colors, hex,rgb,
  styles: passedStyles = {}, className = '' }) => {
  const styles = reactCSS(merge({
    'default': {
      Excel: {
        background: '#FFFFFF',
        radius: '4px',
        boxShadow: '0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',
        boxSizing: 'initial',
        fontFamily: 'Menlo',
      },
      excel: {
        paddingTop: '5px',
        paddingLeft: '5px',
        boxSizing: 'initial',
        width: width,
        // height: height,
      },
      body: {
        padding: '10px 10px 0px 10px',
      },
      clear: {
        clear: 'both',
      },
    },
  }, passedStyles))

  // const handleChange = (data, e) => onChange({ hex: data, source: 'hex' }, e)
  const handleChange = (data, e) => {
    if (data.hex) {
      color.isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex',
      }, e)
    } else {
      onChange(data, e)
    }
  }
  return (
    <div style={ styles.Excel } className={ `Excel-picker ${ className }` }>
 
        <div style={ styles.excel }>
          <div style={ styles.body }>
            { map(colors, (group, i) => (
              <ExcelGroup
                key={ group.toString() }
                group={ group }
                active={ hex }
                last={ i === colors.length - 2 }
                onClick={ handleChange }
                onSwatchHover={ onSwatchHover }
              />
            )) }
            <div style={ styles.clear } />
          </div>
          <ExcelFields hex={ hex } rgb={ rgb } onChange={ handleChange } />
        </div>

    </div>
  )
}

Excel.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  colors: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  styles: PropTypes.object,
}

/* eslint-disable max-len */
Excel.defaultProps = {
  width: 550,
  height: 400,
  colors: [
    ['#003366','#336699','#3366CC','#003399','#000099','#0000CC','#000066'],
    ['#006666','#006699','#0099CC','#0066CC','#0033CC','#0000FF','#0033FF','#333399'],
    ['#008080','#009999','#33CCCC','#00CCFF','#0099FF','#0066FF','#3366FF','#3333CC','#666699'],
    ['#339966','#00CC99','#00FFCC','#00FFFF','#33CCFF','#3399FF','#6699FF','#6666FF','#6600FF','#6600CC'],
    ['#339933','#00CC66','#00FF99','#66FFCC','#66FFFF','#66CCFF','#99CCFF','#9999FF','#9966FF','#9933FF','#9900FF'],
    ['#006600','#00CC00','#00FF00','#66FF99','#99FFCC','#CCFFFF','#CCECFF','#CCCCFF','#CC99FF','#CC66FF','#CC00FF','#9900CC'],
    ['#003300','#008000','#33CC33','#66FF66','#99FF99','#CCFFCC','#FFFFFF','#FFCCFF','#FF99FF','#FF66FF','#FF00FF','#CC00CC','#660066'],
    ['#336600','#009900','#66FF33','#99FF66','#CCFF99','#FFFFCC','#FFCCCC','#FF99CC','#FF66CC','#FF33CC','#CC0099','#800080'],
    ['#333300','#669900','#99FF33','#CCFF66','#FFFF99','#FFCC99','#FF9999','#FF6699','#FF3399','#CC3399','#990099'],
    ['#666633','#99CC00','#CCFF33','#FFFF66','#FFCC66','#FF9966','#FF7C80','#FF0066','#D60093','#993366'],
    ['#808000','#CCCC00','#FFFF00','#FFCC00','#FF9933','#FF6600','#FF5050','#CC0066','#660033'],
    ['#996633','#CC9900','#FF9900','#CC6600','#FF3300','#FF0000','#CC0000','#990033'],
    ['#663300','#996600','#CC3300','#993300','#990000','#800000','#A50021'],

    ['#F8F8F8','#DDDDDD','#B2B2B2','#808080','#5F5F5F','#333333','#1C1C1C','#080808'],
    ['#EAEAEA','#C0C0C0','#969696','#777777','#4D4D4D','#292929','#111111'],
  ],
  styles: {},
}

export default ColorWrap(Excel)
