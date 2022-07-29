let M_IBDP_PATHS: PATH[] = [
    {
        source: '/',
        target: '/m_ibdp/dashboard',
        require: ['AUTH', 'm_ibdp'],
    },
    {
        source: '/test',
        target: '/m_ibdp/test',
        require: ['AUTH', 'm_ibdp'],
        deny: '/'
    },
    {
        source: '/catalog',
        target: '/m_ibdp/catalog',
        require: ['AUTH', 'm_ibdp'],
        deny: '/'
    },
    {
        source: '/my-subjects',
        target: '/m_ibdp/my-subjects',
        require: ['AUTH', 'm_ibdp'],
        deny: '/'
    },
    {
        source: '/my-subjects/*',
        prepend: '/m_ibdp',
        require: ['AUTH', 'm_ibdp'],
        deny: '/'
    },
    {
        source: '/my-tools',
        target: '/m_ibdp/my-tools',
        require: ['AUTH', 'm_ibdp'],
        deny: '/'
    }

]

export const module = () => {

    return {
        PATHS: M_IBDP_PATHS
    }
}