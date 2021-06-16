import React, { useEffect } from 'react'
import Row from './Row'
import { useDispatch, useSelector } from 'react-redux'
import { getRecords, deleteRecord, editRecord, addRecord } from '../redux/dataReducer'

const getUniqueKeys = (objects) => {
    let uniqueKeys = []
    if (objects.length > 0)
        uniqueKeys = [...new Set(objects.map(item => Object.keys(item)).reduce((item1, item2) => item1.concat(item2)))]
    return uniqueKeys
}

const Table = (props) => {
    const dispatch = useDispatch()
    const records = useSelector(state => state.dataState.data)
        
    const titles = getUniqueKeys(records.map(rec => ({ ...rec.data })))

    useEffect(() => {
        dispatch(getRecords())
    }, [])

    return (
        <div>
            {
                records.length === 0 && <p>Загрузка данных...</p>
            }
            {
                records.length > 0 &&
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                {
                                    titles.map(title => <th>{title}</th>)
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                records.map(rec =>
                                    <Row key={rec._id}
                                        titles={titles}
                                        deleteRecord={(_id) => dispatch(deleteRecord(_id))}
                                        editRecord={(_id, data) => dispatch(editRecord(_id, data))}
                                        record={rec}
                                    />
                                )
                            }
                        </tbody>
                    </table>
                    <button onClick={() => dispatch(addRecord())}>Добавить новую запись</button>
                </div>
            }
        </div>
    )
}

export default Table