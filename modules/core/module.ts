let CORE_PATHS: PATH[] = [
    {
        source: '/',
        require: ['NO_AUTH']
    },
    {
        source: '/settings',
        require: ['AUTH'],
        deny: '/'
    }
]

export const module = () => {

    return {
        PATHS: CORE_PATHS
    }
}