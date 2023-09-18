import { defineMock } from 'vite-plugin-mock-dev-server'

export default defineMock([
    {
        url: '/api/user',
        method: 'GET',
        body: (request) => {
            return request.url + ' Hello World user.'
        },
    },
])
