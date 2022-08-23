export const getBankTag = (bank: string) => {
  switch (bank) {
    case 'Československá obchodní banka, a. s.':
      return 'ČSOB';
    case 'UniCredit Bank':
      return 'UniCredit Bank';
    case 'MONETA Money Bank':
      return 'Moneta';
    case 'mBank':
      return 'mBank';
    case 'Fio banka, a.s.':
      return 'Fio banka';
    case 'Česká spořitelna, a.s.':
      return 'Česká spořitelna';
    case 'Komerční banka, a.s.':
      return 'Komerční banka';
    case 'Raiffeisenbank a.s.':
    case 'Raiffeisenbank a.s. (Equa bank)':
      return 'Raiffeisenbank';
    case 'Air Bank, a. s.':
      return 'Air Bank';
    default:
      return 'Ostatní';
  }
};
