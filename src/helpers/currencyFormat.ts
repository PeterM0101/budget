export const currencyFormat = (
  amount: number,
  separator: string = "'",
  currencySign: string = "$"
): string =>
  `${currencySign}${
    amount && amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
  }`;
