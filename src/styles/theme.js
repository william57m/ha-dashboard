const colors = {
  textLight: '#FFFFFFE0',
  textMedium: '#FFFFFF60',
  textDark: '#000000D0',

  backgroundActive: '#FFFFFFE0',
  backgroundInactive: '#70707040',

  red: '#BD0909',
  green: '#38B700',
  blue: '#0094FF',
};

export const theme = {
  colors: colors,
  card: {
    size: '120px',
    borderRadius: '10px',
    background: {
      colorActive: colors.backgroundActive,
      colorInactive: colors.backgroundInactive,
    },
    name: {
      size: '14px',
      weight: 'normal',
      colorActive: colors.textDark,
      colorInactive: colors.textMedium,
    },
    state: {
      size: '12px',
      weight: '200',
      colorActive: colors.textDark,
      colorInactive: colors.textMedium,
    },
  },
  badgeCount: {
    color: colors.red
  },
  title: {
    size: '20px',
    weight: '200',
    color: colors.textLight,
  },
};
