import React, { useState } from 'react'
import './Styles.css'

const Cell = (props) => {
    const [value, setValue] = useState(props.value)

    const onChange = (e) => {
        setValue(e.target.value)
        props.editHandler(e.target.value, props.title)
    }

    return (
        <>
            {
                !props.editMode &&
                <td>
                    <input className='disabled' readOnly type='text' value={value} />
                </td>
            }
            {
                props.editMode &&
                <td>
                    <input onChange={onChange} type='text' value={value} />
                </td>
            }
        </>
    )
}

export default Cell