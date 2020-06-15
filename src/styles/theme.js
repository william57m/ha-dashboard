const colors = {
  textLight: '#FFFFFFD0',
  textMedium: '#FFFFFF60',
  textDark: '#000000D0',

  backgroundActive: '#FFFFFFD0',
  backgroundInactive: '#70707040',
};

export const theme = {
  colors: colors,
  card: {
    size: '128px',
    borderRadius: '10px',
    background: {
      colorActive: colors.backgroundActive,
      colorInactive: colors.backgroundInactive,
    },
    name: {
      size: '16px',
      weight: 'normal',
      colorActive: colors.textDark,
      colorInactive: colors.textMedium,
    },
    state: {
      size: '14px',
      weight: '200',
      colorActive: colors.textDark,
      colorInactive: colors.textMedium,
    },
  },
  title: {
    size: '24px',
    weight: 'normal',
    color: colors.textLight,
  },
};
