import http from 'utils/http.js'

export async function getList() {
    const params = {
        pageNum: 1,
        pageSize: 2,
        params: {

        }
    }
    const res = await http.post('/project/list', params)
    return res
}