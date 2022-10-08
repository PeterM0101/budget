export const validation = {
  isNotEmpty: function (str: string) {
    const pattern = /\S+/;
    return pattern.test(str);
  },
  isNumber: function (str: string) {
    const pattern = /^[+-]?\d+\.?\d{0,2}$/;
    return pattern.test(str);
  },
};
