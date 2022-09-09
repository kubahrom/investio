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
        return { logo: <LogoCsob />, link: 'https://csob.cz/' };
      case 'UniCredit Bank':
        return { logo: <LogoUcd />, link: 'https://www.unicreditbank.cz/' };
      case 'MONETA Money Bank':
        return { logo: <LogoMoneta />, link: 'https://www.moneta.cz/' };
      case 'mBank':
        return { logo: <LogoMBank />, link: 'https://www.mbank.cz/' };
      case 'Fio banka, a.s.':
        return { logo: <LogoFio />, link: 'https://www.fio.cz/' };
      case 'Česká spořitelna, a.s.':
        return { logo: <LogoCb />, link: 'https://www.csas.cz/' };
      case 'Komerční banka, a.s.':
        return { logo: <LogoKb />, link: 'https://www.kb.cz/' };
      case 'Raiffeisenbank a.s.':
      case 'Raiffeisenbank a.s. (Equa bank)':
        return { logo: <LogoRb />, link: 'https://www.rb.cz/' };
      case 'Air Bank, a. s.':
        return { logo: <LogoAb />, link: 'https://www.airbank.cz/' };
      case 'TRINITY BANK':
        return { logo: <LogoTrinity />, link: 'https://www.trinitybank.cz/' };
      case 'Expobank':
        return { logo: <LogoExpo />, link: 'https://www.expobank.cz/' };
      case 'J&T BANKA':
        return { logo: <LogoJt />, link: 'https://www.jtbank.cz/' };
      case 'Oberbank':
        return { logo: <LogoOberbank />, link: 'https://www.oberbank.cz/' };
      case 'Hello bank!':
        return { logo: <LogoHello />, link: 'https://www.hellobank.cz/' };
      case 'Banka CREDITAS':
        return { logo: <LogoCreditas />, link: 'https://www.creditas.cz/' };
      case 'Artesa, spořitelní družstvo':
        return { logo: <LogoArtesa />, link: 'https://www.artesa.cz/' };
      default:
        return { logo: <LogoDefault />, link: '' };
    }
  };

  const bankLogo = getBankLogo();

  return (
    <div className="bank-logo">
      <a href={bankLogo.link} target="_blank" rel="noreferrer">
        {bankLogo.logo}
      </a>
    </div>
  );
};

export default BankLogo;
