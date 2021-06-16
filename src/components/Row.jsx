import React, { useState } from 'react'
import Cell from './Cell'

const Row = (props) => {
    const [editMode, setMode] = useState(false)
    const [rowData, setRowData] = useState(props.record.data)

    const editHandler = (value, title) => {
        // Это мой хитрый способ добавить к объекту свойства с нужными именами.
        let obj = {}
        obj[title] = value
        setRowData({ ...rowData, ...obj })
    }

    const editClickHandler = (e) => {
        setMode(true)
    }

    const saveClickHandler = (e) => {
        setMode(false)
        props.editRecord(props.record._id, rowData)
    }

    return (
        <tr>
            <td>{props.record._id}</td>
            {
                props.titles.map(title =>
                    <Cell
                        title={title}
                        editHandler={editHandler}
                        editMode={editMode}
                        value={rowData ? rowData[title] : ''}
                    />)
            }
            <td><button onClick={() => { props.deleteRecord(props.record._id) }}>Удалить</button></td>
            <td>
                {
                    editMode && <button onClick={() => saveClickHandler()}>Сохранить</button>
                }
                {
                    !editMode && <button onClick={editClickHandler}>Редактировать</button>
                }
            </td>
        </tr>
    )
}

export default Row