let AUTH_PATHS: PATH[] = [
    {
        source: '/login',
        target: '/auth/login',
        require: ['NO_AUTH'],
        deny: '/'
    },
    {
        source: '/register',
        target: '/auth/register',
        require: ['NO_AUTH'],
        deny: '/'
    },    {
        source: '/verify',
        target: '/auth/verify',
        require: ['NO_AUTH'],
        deny: '/'
    },    {
        source: '/forgot-password',
        target: '/auth/forgot-password',
        require: ['NO_AUTH'],
        deny: '/'
    },    {
        source: '/reset-password',
        target: '/auth/reset-password',
        require: ['NO_AUTH'],
        deny: '/'
    },
    {
        source: '/account-made',
        target: '/auth/account-made',
        require: ['NO_AUTH'],
        deny: '/'
    },

    

]

export const module = () => {

    return {
        PATHS: AUTH_PATHS
    }
}