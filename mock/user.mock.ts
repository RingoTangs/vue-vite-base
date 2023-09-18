import { defineMock } from 'vite-plugin-mock-dev-server'

export default defineMock([
    {
        url: '/api/user',
        method: 'GET',
        body: (request) => {
            return {
                name: 'zs',
                age: 18,
                url: request.url,
            }
        },
    },
])
