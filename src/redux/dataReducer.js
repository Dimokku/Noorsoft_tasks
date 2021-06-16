import { dataAPI } from '../api/dataAPI'

const GET_RECORDS = 'GET-RECORDS'
const DELETE_RECORD = 'DELETE-RECORD'
const EDIT_RECORD = 'EDIT-RECORD'
const ADD_RECORD = 'ADD-RECORD'

let initialState = {
    data: [],
    isFetching: false
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECORDS: {
            return {
                ...state,
                data: [...action.data]
            }
        }
        case DELETE_RECORD: {
            let index = state.data.map(rec => rec._id).indexOf(`${action._id}`)
            state.data.splice(index, 1)
            return {
                ...state,
                data: [...state.data]
            }
        }
        case EDIT_RECORD: {
            let index = state.data.map(rec => rec._id).indexOf(`${action._id}`)
            state.data[index] = { ...action.data }
            return {
                ...state
            }
        }
        case ADD_RECORD: {
            return {
                ...state,
                data: [...state.data, {_id: action._id, data: {}}]
            }
        }
        default: return { ...state }
    }
}

export const getRecords = () => (dispatch) => {
    dataAPI
        .getRecords()
        .then(data => dispatch({ type: GET_RECORDS, data }))
        .catch(err => console.error(err))
}

export const deleteRecord = (_id) => (dispatch) => {
    dataAPI
        .deleteRecord(_id)
        .then(data => {
            if (data === true) {
                dispatch({type: DELETE_RECORD, _id})
            }
        })
        .catch(err => console.error(err))
}

export const editRecord = (_id, data) => (dispatch) => {
    dataAPI
        .editRecord(_id, data)
        .then(res => { if(res.status === 200) dispatch({type: EDIT_RECORD, _id, data}) })
        .catch(err => console.error(err))
}

export const addRecord = () => (dispatch) => {
    dataAPI
        .addRecord()
        .then(res => { if (res.status === 200) dispatch({ type: ADD_RECORD, _id: res.data._id }) })
        .catch(err => console.error(err))
}

export default dataReducer