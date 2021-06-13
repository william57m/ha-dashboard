function to7bits(str) {
  while(str.length < 7) {
    str = '0' + str;
  }
  return str;
}

function dec2bin(dec) {
  const str = (dec >>> 0).toString(2);
  return to7bits(str);
}

function toArray(str) {
  return str.split('');
}

export function intToFeatureFlags(dec) {
  const str = dec2bin(dec);
  const arr = toArray(str);
  const featureFlags = {
    SUPPORT_BRIGHTNESS: Boolean(parseInt(arr[6])),
    SUPPORT_COLOR: Boolean(parseInt(arr[5])),
    SUPPORT_COLOR_TEMP: Boolean(parseInt(arr[4])),
    SUPPORT_EFFECT: Boolean(parseInt(arr[3])),
    SUPPORT_FLASH: Boolean(parseInt(arr[2])),
    SUPPORT_TRANSITION: Boolean(parseInt(arr[1])),
    SUPPORT_WHITE_VALUE: Boolean(parseInt(arr[0])),
  };
  return featureFlags;
}