import axios from 'axios'

const apiInstance = axios.create({
    baseURL: "http://178.128.196.163:3000/api/records"
})

export const dataAPI = {
    getRecords() {
        return apiInstance
            .get('/')
            .then(res => res.data)
            .catch(err => console.error(err))
    },
    deleteRecord(_id) {
        return apiInstance
            .delete(`/${_id}`)
            .then(res => res.data)
            .catch(err => console.error(err))
    },
    editRecord(_id, data) {
        return apiInstance
            .post(`/${_id}`, { data })
            .then(res => res)
            .catch(err => console.error(err))
    },
    addRecord() {
        return apiInstance
            .put(`/`, { data: {} })
            .then(res => res)
            .catch(err => console.error(err))
    }
}