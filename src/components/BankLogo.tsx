import React from 'react';
import LogoAb from './Logos/LogoAb';
import LogoArtesa from './Logos/LogoArtesa';
import LogoCb from './Logos/LogoCb';
import LogoCreditas from './Logos/LogoCreditas';
import LogoCsob from './Logos/LogoCsob';
import LogoDefault from './Logos/LogoDefault';
import LogoExpo from './Logos/LogoExpo';
import LogoFio from './Logos/LogoFio';
import LogoHello from './Logos/LogoHello';
import LogoJt from './Logos/LogoJt';
import LogoKb from './Logos/LogoKb';
import LogoMBank from './Logos/LogoMBank';
import LogoMoneta from './Logos/LogoMoneta';
import LogoOberbank from './Logos/LogoOberbank';
import LogoRb from './Logos/LogoRb';
import LogoTrinity from './Logos/LogoTrinity';
import LogoUcd from './Logos/LogoUcd';

type Props = {
  bank: string;
};

const BankLogo: React.FC<Props> = ({ bank }) => {
  const getBankLogo = () => {
    switch (bank) {
      case 'Československá obchodní banka, a. s.':
        return <LogoCsob />;
      case 'UniCredit Bank':
        return <LogoUcd />;
      case 'MONETA Money Bank':
        return <LogoMoneta />;
      case 'mBank':
        return <LogoMBank />;
      case 'Fio banka, a.s.':
        return <LogoFio />;
      case 'Česká spořitelna, a.s.':
        return <LogoCb />;
      case 'Komerční banka, a.s.':
        return <LogoKb />;
      case 'Raiffeisenbank a.s.':
      case 'Raiffeisenbank a.s. (Equa bank)':
        return <LogoRb />;
      case 'Air Bank, a. s.':
        return <LogoAb />;
      case 'TRINITY BANK':
        return <LogoTrinity />;
      case 'Expobank':
        return <LogoExpo />;
      case 'J&T BANKA':
        return <LogoJt />;
      case 'Oberbank':
        return <LogoOberbank />;
      case 'Hello bank!':
        return <LogoHello />;
      case 'Banka CREDITAS':
        return <LogoCreditas />;
      case 'Artesa, spořitelní družstvo':
        return <LogoArtesa />;
      default:
        return <LogoDefault />;
    }
  };

  return <div className="bank-logo">{getBankLogo()}</div>;
};

export default BankLogo;
