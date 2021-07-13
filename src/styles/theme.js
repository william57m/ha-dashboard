const colors = {
    light1: '#FFFFFF',
    light2: '#F0F0F0',
    lightGray: '#808080',
    gray: '#404040',
    dark: '#000000',

    textLight: '#FFFFFFE0',
    textMedium: '#FFFFFF60',
    textGray: '#909090',
    textDark: '#000000D0',

    backgroundActive: '#FFFFFFFF',
    backgroundInactive: '#70707040',

    red: '#BD0909',
    green: '#38B700',
    blue: '#0094FF',

    lightActive: '#ECC344',
    fanActive: 'blue',
}

export const theme = {
    colors: colors,
    card: {
        size: '120px',
        borderRadius: '15px',
        background: {
            colorActive: colors.backgroundActive,
            colorInactive: colors.backgroundInactive,
        },
        name: {
            size: '0.88rem',
            weight: '800',
            colorActive: colors.textDark,
            colorInactive: colors.textDark,
        },
        state: {
            size: '0.8rem',
            weight: 'bold',
            colorActive: colors.textGray,
            colorInactive: colors.textGray,
        },
        light: {
            colorActive: colors.lightActive,
            colorInactive: colors.textMedium,
        },
        fan: {
            colorActive: colors.fanActive,
            colorInactive: colors.textMedium,
        },
    },
    cameraCard: {
        width: '396px',
        height: '240px',
    },
    sceneCard: {
        width: '206px',
        height: '48px',
        name: {
            size: '14px',
            weight: 600,
        },
    },
    badgeCount: {
        color: colors.red,
    },
    title: {
        size: '20px',
        weight: '200',
        color: colors.textLight,
    },
    modal: {
        background: colors.backgroundActive,
        header: {
            title: {
                size: '12px',
                weight: 'bold',
                color: colors.dark,
            },
            subtitle: {
                size: '12px',
                weight: 'bold',
                color: colors.lightGray,
            },
        },
    },
}
