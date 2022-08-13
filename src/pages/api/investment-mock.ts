import { NextApiRequest, NextApiResponse } from 'next';
import * as cheerio from 'cheerio';
import { deleteNewLine, getData } from '../../util/scrapeDataUtils';
import type { RowValueType } from '../../types/investmentTypes';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = [
    {
      bank: {
        name: 'UniCredit Bank',
        type: 'Účet START, OPEN, TOP',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/ucet-start-open-top-unicredit-bank/',
      },
      initialValue: '0 Kč',
      interestRate: '5,5 %',
      card: 'ano',
      interestAfterTax: '2 388,24 Kč',
    },
    {
      bank: {
        name: 'MONETA Money Bank',
        type: 'Spořicí účet Spoření/Spoříto D',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporici-ucet-moneta/',
      },
      initialValue: '0 Kč',
      interestRate: '5,1 %',
      card: 'ne',
      interestAfterTax: '2 211,09 Kč',
    },
    {
      bank: {
        name: 'mBank',
        type: 'mSpoření',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/msporeni-mbank/',
      },
      initialValue: '0 Kč',
      interestRate: '5 %',
      card: 'ne',
      interestAfterTax: '2 166,89 Kč',
    },
    {
      bank: {
        name: 'Artesa, spořitelní družstvo',
        type: 'Spořicí účet Artesa Universal',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporici-ucet-artesa-universal-artesa/',
      },
      initialValue: '0 Kč',
      interestRate: '4,75 %',
      card: 'ne',
      interestAfterTax: '2 056,53 Kč',
    },
    {
      bank: {
        name: 'Expobank',
        type: 'NEO účet',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/neo-sporici-ucet-expobank/',
      },
      initialValue: '0 Kč',
      interestRate: '4,61 %',
      card: 'ano',
      interestAfterTax: '1 994,82 Kč',
    },
    {
      bank: {
        name: 'TRINITY BANK',
        type: 'Spořicí účet Výhoda+ Dobrý klient',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporici-ucet-vyhoda-dobry-klient-trinity-bank/',
      },
      initialValue: '0 Kč',
      interestRate: '4,58 %',
      card: 'ne',
      interestAfterTax: '1 981,61 Kč',
    },
    {
      bank: {
        name: 'Fio banka, a.s.',
        type: 'Fio konto',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/fio-konto-sporici-ucet/',
      },
      initialValue: '100 Kč',
      interestRate: '4,5 %',
      card: 'ano',
      interestAfterTax: '1 946,39 Kč',
    },
    {
      bank: {
        name: 'Československá obchodní banka, a. s.',
        type: 'Duo Profit (s investováním)',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/duo-profit-csob/',
      },
      initialValue: '30 000 Kč',
      interestRate: '4,5 %',
      card: 'ne',
      interestAfterTax: '1 946,39 Kč',
    },
    {
      bank: {
        name: 'Banka CREDITAS',
        type: 'Spořicí účet+',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporici-ucet-plus-banka-creditas/',
      },
      initialValue: '0 Kč',
      interestRate: '4,5 %',
      card: 'ne',
      interestAfterTax: '1 946,39 Kč',
    },
    {
      bank: {
        name: 'Raiffeisenbank a.s.',
        type: 'Spořicí účet HIT PLUS s bonusem',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporici-ucet-hit-plus-s-bonusem-raiffeisenbank/',
      },
      initialValue: '0 Kč',
      interestRate: '4,5 %',
      card: 'ne',
      interestAfterTax: '1 946,39 Kč',
    },
    {
      bank: {
        name: 'Hello bank!',
        type: 'Hello spořicí účet',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/hello-sporici-ucet/',
      },
      initialValue: '0 Kč',
      interestRate: '4,5 %',
      card: 'ne',
      interestAfterTax: '1 946,39 Kč',
    },
    {
      bank: {
        name: 'J&T BANKA',
        type: 'Spořicí účet J&T (s dalšími vklady/investicemi)',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporici-ucet-j-t-banka/',
      },
      initialValue: '0 Kč',
      interestRate: '4,25 %',
      card: 'ne',
      interestAfterTax: '1 836,46 Kč',
    },
    {
      bank: {
        name: 'J&T BANKA',
        type: 'Spořicí účet J&T (bez dalších vkladů a investic)',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporici-ucet-j-t-banka-bez-vkladu/',
      },
      initialValue: '1 000 000 Kč',
      interestRate: '4,25 %',
      card: 'ne',
      interestAfterTax: '1 836,46 Kč',
    },
    {
      bank: {
        name: 'Česká spořitelna, a.s.',
        type: 'Spoření České spořitelny (Exclusive Invest)',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporeni-ceske-sporitelny-exclusive-invest/',
      },
      initialValue: '0 Kč',
      interestRate: '4,25 %',
      card: 'ne',
      interestAfterTax: '1 836,46 Kč',
    },
    {
      bank: {
        name: 'Česká spořitelna, a.s.',
        type: 'Spoření České spořitelny (Plus Invest)',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporeni-ceske-sporitelny-plus-invest/',
      },
      initialValue: '0 Kč',
      interestRate: '4,25 %',
      card: 'ne',
      interestAfterTax: '1 836,46 Kč',
    },
    {
      bank: {
        name: 'Raiffeisenbank a.s. (Equa bank)',
        type: 'Spořicí účet EXTRA',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporici-ucet-extra-raiffeisenbank-equa-bank/',
      },
      initialValue: '0 Kč',
      interestRate: '4 %',
      card: 'ne',
      interestAfterTax: '1 726,74 Kč',
    },
    {
      bank: {
        name: 'mBank',
        type: 'eMax Plus',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/emax-plus-mbank/',
      },
      initialValue: '0 Kč',
      interestRate: '4 %',
      card: 'ne',
      interestAfterTax: '1 726,74 Kč',
    },
    {
      bank: {
        name: 'Air Bank, a. s.',
        type: 'Spořicí účet s bonusovou sazbou',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporici-ucet-air-bank/',
      },
      initialValue: '0 Kč',
      interestRate: '4 %',
      card: 'ne',
      interestAfterTax: '1 726,74 Kč',
    },
    {
      bank: {
        name: 'Komerční banka, a.s.',
        type: 'Spořicí účet Junior',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporici-ucet-junior-komercni-banka/',
      },
      initialValue: '0 Kč',
      interestRate: '4 %',
      card: 'ne',
      interestAfterTax: '1 721,8 Kč',
    },
    {
      bank: {
        name: 'Fio banka, a.s.',
        type: 'Fio spořicí účet',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/fio-sporici-ucet-fio-banka/',
      },
      initialValue: '0 Kč',
      interestRate: '3,5 %',
      card: 'ne',
      interestAfterTax: '1 507,95 Kč',
    },
    {
      bank: {
        name: 'Československá obchodní banka, a. s.',
        type: 'Spoření s bonusem Smart',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporeni-s-bonusem-smart-csob/',
      },
      initialValue: '0 Kč',
      interestRate: '3,3 %',
      card: 'ne',
      interestAfterTax: '1 420,67 Kč',
    },
    {
      bank: {
        name: 'Československá obchodní banka, a. s.',
        type: 'Spoření s bonusem pro děti (+ účet a investice)',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporeni-s-bonusem-pro-deti-ucet-a-invest-csob/',
      },
      initialValue: '0 Kč',
      interestRate: '3,3 %',
      card: 'ne',
      interestAfterTax: '1 420,67 Kč',
    },
    {
      bank: {
        name: 'Komerční banka, a.s.',
        type: 'KB Spořicí konto Bonus',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/kb-sporici-konto-bonus-komercni-banka/',
      },
      initialValue: '0 Kč',
      interestRate: '3,3 %',
      card: 'ne',
      interestAfterTax: '1 417,32 Kč',
    },
    {
      bank: {
        name: 'Česká spořitelna, a.s.',
        type: 'Spoření Premier',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporeni-premier-ceska-sporitelna/',
      },
      initialValue: '0 Kč',
      interestRate: '3,25 %',
      card: 'ne',
      interestAfterTax: '1 398,87 Kč',
    },
    {
      bank: {
        name: 'Česká spořitelna, a.s.',
        type: 'Spoření České spořitelny (Plus)',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporeni-ceske-sporitelny-plus/',
      },
      initialValue: '0 Kč',
      interestRate: '3,25 %',
      card: 'ne',
      interestAfterTax: '1 398,87 Kč',
    },
    {
      bank: {
        name: 'Česká spořitelna, a.s.',
        type: 'Spoření České spořitelny (Exclusive)',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporeni-ceske-sporitelny-exclusive/',
      },
      initialValue: '0 Kč',
      interestRate: '3,25 %',
      card: 'ne',
      interestAfterTax: '1 398,87 Kč',
    },
    {
      bank: {
        name: 'Československá obchodní banka, a. s.',
        type: 'Spoření s bonusem pro děti (+ účet)',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporeni-s-bonusem-pro-deti-ucet-csob/',
      },
      initialValue: '0 Kč',
      interestRate: '3,05 %',
      card: 'ne',
      interestAfterTax: '1 311,76 Kč',
    },
    {
      bank: {
        name: 'Raiffeisenbank a.s. (Equa bank)',
        type: 'Spořicí účet HIT',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporici-ucet-hit-equa-bank/',
      },
      initialValue: '0 Kč',
      interestRate: '3 %',
      card: 'ne',
      interestAfterTax: '1 290,01 Kč',
    },
    {
      bank: {
        name: 'Československá obchodní banka, a. s.',
        type: 'Spoření s bonusem pro děti',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporeni-s-bonusem-pro-deti-csob/',
      },
      initialValue: '0 Kč',
      interestRate: '2,8 %',
      card: 'ne',
      interestAfterTax: '1 203,07 Kč',
    },
    {
      bank: {
        name: 'TRINITY BANK',
        type: 'Spořicí účet Výhoda+',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporici-ucet-trinity-bank/',
      },
      initialValue: '0 Kč',
      interestRate: '2,58 %',
      card: 'ne',
      interestAfterTax: '1 107,59 Kč',
    },
    {
      bank: {
        name: 'UniCredit Bank',
        type: 'Spořicí účet Save',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporici-ucet-save-unicredit/',
      },
      initialValue: '0 Kč',
      interestRate: '2,5 %',
      card: 'ne',
      interestAfterTax: '1 071 Kč',
    },
    {
      bank: {
        name: 'Československá obchodní banka, a. s.',
        type: 'Spoření s bonusem',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporeni-s-bonusem-csob/',
      },
      initialValue: '0 Kč',
      interestRate: '2,3 %',
      card: 'ne',
      interestAfterTax: '986,31 Kč',
    },
    {
      bank: {
        name: 'TRINITY BANK',
        type: 'Spořicí účet Úrok+',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporici-ucet-urok-plus-trinity-bank/',
      },
      initialValue: '0 Kč',
      interestRate: '1,78 %',
      card: 'ne',
      interestAfterTax: '762,24 Kč',
    },
    {
      bank: {
        name: 'MONETA Money Bank',
        type: 'Spořicí účet Gold s úrokovým bonusem 2',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporici-ucet-gold-urokovy-bonus-2-moneta/',
      },
      initialValue: '0 Kč',
      interestRate: '1,1 %',
      card: 'ne',
      interestAfterTax: '469,51 Kč',
    },
    {
      bank: {
        name: 'Komerční banka, a.s.',
        type: 'KB Spořicí konto Bonus Invest',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/kb-sporici-konto-invest/',
      },
      initialValue: '0 Kč',
      interestRate: '1 %',
      card: 'ne',
      interestAfterTax: '425,9 Kč',
    },
    {
      bank: {
        name: 'MONETA Money Bank',
        type: 'Spořicí účet Gold s úrokovým bonusem 1',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporici-ucet-gold-urokovy-bonus-1-moneta/',
      },
      initialValue: '0 Kč',
      interestRate: '0,7 %',
      card: 'ne',
      interestAfterTax: '298,31 Kč',
    },
    {
      bank: {
        name: 'MONETA Money Bank',
        type: 'Spořicí účet Gold',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporici-ucet-gold-moneta/',
      },
      initialValue: '0 Kč',
      interestRate: '0,3 %',
      card: 'ne',
      interestAfterTax: '127,65 Kč',
    },
    {
      bank: {
        name: 'Česká spořitelna, a.s.',
        type: 'Spoření České spořitelny',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporeni-ceske-sporitelny/',
      },
      initialValue: '0 Kč',
      interestRate: '0,2 %',
      card: 'ne',
      interestAfterTax: '85,07 Kč',
    },
    {
      bank: {
        name: 'Raiffeisenbank a.s.',
        type: 'Spořicí účet HIT PLUS',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporici-ucet-hit-plus-raiffeisenbank/',
      },
      initialValue: '0 Kč',
      interestRate: '0,1 %',
      card: 'ne',
      interestAfterTax: '42,52 Kč',
    },
    {
      bank: {
        name: 'Raiffeisenbank a.s. (Equa bank)',
        type: 'Spořicí účet MAX',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporici-ucet-max-equa-bank/',
      },
      initialValue: '0 Kč',
      interestRate: '1 %',
      card: 'ne',
      interestAfterTax: '42,52 Kč',
    },
    {
      bank: {
        name: 'UniCredit Bank',
        type: 'Spořicí účet Prima',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporici-ucet-prima-unicreditbank/',
      },
      initialValue: '0 Kč',
      interestRate: '0,05 %',
      card: 'ne',
      interestAfterTax: '21,25 Kč',
    },
    {
      bank: {
        name: 'Oberbank',
        type: 'Spořicí účet Limit',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporici-ucet-limit-oberbank/',
      },
      initialValue: '30 000 Kč',
      interestRate: '0,05 %',
      card: 'ne',
      interestAfterTax: '4,25 Kč',
    },
    {
      bank: {
        name: 'Oberbank',
        type: 'Spořicí účet Speciál',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/sporici-ucet-special-oberbank/',
      },
      initialValue: '30 000 Kč',
      interestRate: '0,01 %',
      card: 'ne',
      interestAfterTax: '4,25 Kč',
    },
    {
      bank: {
        name: 'Expobank',
        type: 'Expo spořicí účet Premium',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/expo-sporici-ucet-premium-expobank/',
      },
      initialValue: '0 Kč',
      interestRate: '0,1 %',
      card: 'ne',
      interestAfterTax: '0 Kč',
    },
    {
      bank: {
        name: 'Expobank',
        type: 'Expo spořicí účet',
        link: 'https://www.mesec.cz/produkty/sporici-ucty/expo-sporici-ucet-expobank/',
      },
      initialValue: '0 Kč',
      interestRate: '0,1 %',
      card: 'ne',
      interestAfterTax: '0 Kč',
    },
  ];

  return res.status(200).json({
    tableValues: data,
  });
};

export default handler;
