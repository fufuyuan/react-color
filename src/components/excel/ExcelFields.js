import React from 'react'
import reactCSS from 'reactcss'

import { EditableInput } from '../common'

export const ExcelFields = ({ hex, rgb, onChange }) => {
  const styles = reactCSS({
    'default': {
      fields: {
        position: 'relative',
      },
      active: {
        position: 'relative',
        bottom: '301px',
        left: '470px',
        height: '18px',
        width: '30px',
        background: hex,
      },
      editableInput: {
        position: 'relative',
        bottom: '290px',
        left: '465px',
        height: '18px',
        width: '30px',     
      },
      RGBwrap: {
        position: 'relative',
      },
      RGBinput: {
        left: '5px',
        width: '70px',
        padding: '0px',
        paddingLeft: '30px',
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '18px',
        color: '#333',
        height: '16px',
      },
      RGBlabel: {
        position: 'absolute',
        top: '3px',
        left: '5px',
        lineHeight: '16px',
        textTransform: 'uppercase',
        fontSize: '18px',
        color: '#111',
      },
    },
  })

  const handleChange = (data, e) => {
    if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb',
      }, e)
    } else {
      onChange({
        hex: data.hex,
        source: 'hex',
      }, e)
    }
  }

  return (
    <div >
      <div style={ styles.active } />
      <div style={ styles.editableInput } >
        <EditableInput
          style={{ wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel }}
          label="r"
          value={ rgb.r }
          onChange={ handleChange }
        />
        <EditableInput
          style={{ wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel }}
          label="g"
          value={ rgb.g }
          onChange={ handleChange }
        />
        <EditableInput
          style={{ wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel }}
          label="b"
          value={ rgb.b }
          onChange={ handleChange }
        />
      </div>
    </div>
  )
}

export default ExcelFields
