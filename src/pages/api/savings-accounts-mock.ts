import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    id: '6316228f934241adcd839722',
    list: [
      {
        name: 'Fio banka, a.s.',
        tag: 'Fio banka',
        type: 'Fio konto',
        interestAfterTax: 2388.24,
        table: [
          {
            from: 0,
            to: 200000,
            value: 5.5,
          },
          {
            from: 200001,
            to: 1000000,
            value: 0.1,
          },
          {
            from: 1000001,
            to: 10000000,
            value: 0.15,
          },
          {
            from: 10000001,
            to: 0,
            value: 0.2,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'UniCredit Bank',
        tag: 'UniCredit Bank',
        type: 'Účet START, OPEN, TOP',
        interestAfterTax: 2388.24,
        table: [
          {
            from: 0,
            to: 1000000,
            value: 5.5,
          },
          {
            from: 1000001,
            to: 0,
            value: 0,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ne',
      },
      {
        name: 'MONETA Money Bank',
        tag: 'Moneta',
        type: 'Spořicí účet Spoření/Spoříto E',
        interestAfterTax: 2299.6,
        table: [
          {
            from: 0,
            to: 1000000,
            value: 5.3,
          },
          {
            from: 1000001,
            to: 0,
            value: 0.5,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'MONETA Money Bank',
        tag: 'Moneta',
        type: 'Spořicí účet inSpoření',
        interestAfterTax: 2255.33,
        table: [
          {
            from: 0,
            to: 1000000,
            value: 5.2,
          },
          {
            from: 1000001,
            to: 0,
            value: 0.25,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'mBank',
        tag: 'mBank',
        type: 'mSpoření',
        interestAfterTax: 2166.89,
        table: [
          {
            from: 0,
            to: 100000,
            value: 5,
          },
          {
            from: 100001,
            to: 0,
            value: 0.01,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ne',
      },
      {
        name: 'Artesa, spořitelní družstvo',
        tag: 'Ostatní',
        type: 'Spořicí účet Artesa Universal',
        interestAfterTax: 2056.53,
        table: [
          {
            from: 0,
            to: 0,
            value: 4.75,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ne',
      },
      {
        name: 'Expobank',
        tag: 'Ostatní',
        type: 'NEO účet',
        interestAfterTax: 1994.82,
        table: [
          {
            from: 0,
            to: 0,
            value: 4.61,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ne',
      },
      {
        name: 'TRINITY BANK',
        tag: 'Ostatní',
        type: 'Spořicí účet Výhoda+ Dobrý klient',
        interestAfterTax: 1981.61,
        table: [
          {
            from: 0,
            to: 400000,
            value: 4.58,
          },
          {
            from: 400001,
            to: 0,
            value: 4.08,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'Československá obchodní banka, a. s.',
        tag: 'ČSOB',
        type: 'Duo Profit (s investováním)',
        interestAfterTax: 1946.39,
        table: [
          {
            from: 0,
            to: 0,
            value: 4.5,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ne',
      },
      {
        name: 'Banka CREDITAS',
        tag: 'Ostatní',
        type: 'Spořicí účet+',
        interestAfterTax: 1946.39,
        table: [
          {
            from: 0,
            to: 350000,
            value: 4.5,
          },
          {
            from: 350001,
            to: 0,
            value: 3.1,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'Raiffeisenbank a.s.',
        tag: 'Raiffeisenbank',
        type: 'Spořicí účet HIT PLUS s bonusem',
        interestAfterTax: 1946.39,
        table: [
          {
            from: 0,
            to: 250000,
            value: 4.5,
          },
          {
            from: 250001,
            to: 500000,
            value: 0.1,
          },
          {
            from: 500001,
            to: 0,
            value: 0.01,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'Hello bank!',
        tag: 'Ostatní',
        type: 'Hello spořicí účet',
        interestAfterTax: 1946.39,
        table: [
          {
            from: 0,
            to: 300000,
            value: 4.5,
          },
          {
            from: 300001,
            to: 0,
            value: 0,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'Česká spořitelna, a.s.',
        tag: 'Česká spořitelna',
        type: 'Spoření Premier (Invest)',
        interestAfterTax: 1836.46,
        table: [
          {
            from: 0,
            to: 1000000,
            value: 4.25,
          },
          {
            from: 1000001,
            to: 0,
            value: 0.01,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ne',
      },
      {
        name: 'J&T BANKA',
        tag: 'Ostatní',
        type: 'Spořicí účet J&T (s dalšími vklady/investicemi)',
        interestAfterTax: 1836.46,
        table: [
          {
            from: 0,
            to: 0,
            value: 4.25,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ne',
      },
      {
        name: 'J&T BANKA',
        tag: 'Ostatní',
        type: 'Spořicí účet J&T (bez dalších vkladů a investic)',
        interestAfterTax: 1836.46,
        table: [
          {
            from: 0,
            to: 0,
            value: 4.25,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ne',
      },
      {
        name: 'Česká spořitelna, a.s.',
        tag: 'Česká spořitelna',
        type: 'Spoření České spořitelny (Exclusive Invest)',
        interestAfterTax: 1836.46,
        table: [
          {
            from: 0,
            to: 400000,
            value: 4.25,
          },
          {
            from: 400001,
            to: 0,
            value: 0.01,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'Česká spořitelna, a.s.',
        tag: 'Česká spořitelna',
        type: 'Spoření České spořitelny (Plus Invest)',
        interestAfterTax: 1836.46,
        table: [
          {
            from: 0,
            to: 200000,
            value: 4.25,
          },
          {
            from: 200001,
            to: 0,
            value: 0.01,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'Raiffeisenbank a.s. (Equa bank)',
        tag: 'Raiffeisenbank',
        type: 'Spořicí účet EXTRA',
        interestAfterTax: 1726.74,
        table: [
          {
            from: 0,
            to: 3000000,
            value: 4,
          },
          {
            from: 3000001,
            to: 0,
            value: 0.01,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'Fio banka, a.s.',
        tag: 'Fio banka',
        type: 'Fio spořicí účet',
        interestAfterTax: 1726.74,
        table: [
          {
            from: 0,
            to: 0,
            value: 4,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ne',
      },
      {
        name: 'mBank',
        tag: 'mBank',
        type: 'eMax Plus',
        interestAfterTax: 1726.74,
        table: [
          {
            from: 0,
            to: 500000,
            value: 4,
          },
          {
            from: 500001,
            to: 0,
            value: 0.01,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ne',
      },
      {
        name: 'Air Bank, a. s.',
        tag: 'Air Bank',
        type: 'Spořicí účet s bonusovou sazbou',
        interestAfterTax: 1726.74,
        table: [
          {
            from: 0,
            to: 500000,
            value: 4,
          },
          {
            from: 500001,
            to: 1000000,
            value: 0.1,
          },
          {
            from: 1000001,
            to: 0,
            value: 0,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'Komerční banka, a.s.',
        tag: 'Komerční banka',
        type: 'Spořicí účet Junior',
        interestAfterTax: 1721.8,
        table: [
          {
            from: 0,
            to: 100000,
            value: 4,
          },
          {
            from: 100001,
            to: 0,
            value: 0,
          },
        ],
        interestRateFreq: 'čtvrtletně',
        rangeInterest: 'ano',
      },
      {
        name: 'Československá obchodní banka, a. s.',
        tag: 'ČSOB',
        type: 'Spoření s bonusem Smart',
        interestAfterTax: 1420.67,
        table: [
          {
            from: 0,
            to: 1000000,
            value: 3.3,
          },
          {
            from: 1000001,
            to: 0,
            value: 0.15,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'Československá obchodní banka, a. s.',
        tag: 'ČSOB',
        type: 'Spoření s bonusem pro děti (+ účet a investice)',
        interestAfterTax: 1420.67,
        table: [
          {
            from: 0,
            to: 250000,
            value: 3.3,
          },
          {
            from: 250001,
            to: 0,
            value: 0.15,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'Komerční banka, a.s.',
        tag: 'Komerční banka',
        type: 'KB Spořicí konto Bonus',
        interestAfterTax: 1417.32,
        table: [
          {
            from: 0,
            to: 200000,
            value: 3.3,
          },
          {
            from: 200001,
            to: 30000000,
            value: 0.03,
          },
          {
            from: 30000001,
            to: 0,
            value: 0.02,
          },
        ],
        interestRateFreq: 'čtvrtletně',
        rangeInterest: 'ano',
      },
      {
        name: 'Česká spořitelna, a.s.',
        tag: 'Česká spořitelna',
        type: 'Spoření České spořitelny (Exclusive)',
        interestAfterTax: 1398.87,
        table: [
          {
            from: 0,
            to: 400000,
            value: 3.25,
          },
          {
            from: 400001,
            to: 0,
            value: 0.01,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'Česká spořitelna, a.s.',
        tag: 'Česká spořitelna',
        type: 'Spoření Premier',
        interestAfterTax: 1398.87,
        table: [
          {
            from: 0,
            to: 1000000,
            value: 3.25,
          },
          {
            from: 1000001,
            to: 0,
            value: 0.01,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'Česká spořitelna, a.s.',
        tag: 'Česká spořitelna',
        type: 'Spoření České spořitelny (Plus)',
        interestAfterTax: 1398.87,
        table: [
          {
            from: 0,
            to: 200000,
            value: 3.25,
          },
          {
            from: 200001,
            to: 0,
            value: 0.01,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'Československá obchodní banka, a. s.',
        tag: 'ČSOB',
        type: 'Spoření s bonusem pro děti (+ účet)',
        interestAfterTax: 1311.76,
        table: [
          {
            from: 0,
            to: 250000,
            value: 3.05,
          },
          {
            from: 250001,
            to: 0,
            value: 0.15,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'Raiffeisenbank a.s. (Equa bank)',
        tag: 'Raiffeisenbank',
        type: 'Spořicí účet HIT',
        interestAfterTax: 1290.01,
        table: [
          {
            from: 0,
            to: 200000,
            value: 3,
          },
          {
            from: 200001,
            to: 0,
            value: 0.1,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'Československá obchodní banka, a. s.',
        tag: 'ČSOB',
        type: 'Spoření s bonusem pro děti',
        interestAfterTax: 1203.07,
        table: [
          {
            from: 0,
            to: 250000,
            value: 2.8,
          },
          {
            from: 250001,
            to: 0,
            value: 0.15,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'TRINITY BANK',
        tag: 'Ostatní',
        type: 'Spořicí účet Výhoda+',
        interestAfterTax: 1107.59,
        table: [
          {
            from: 0,
            to: 0,
            value: 2.58,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ne',
      },
      {
        name: 'UniCredit Bank',
        tag: 'UniCredit Bank',
        type: 'Spořicí účet Save',
        interestAfterTax: 1071,
        table: [
          {
            from: 0,
            to: 499999,
            value: 2.5,
          },
          {
            from: 500000,
            to: 0,
            value: 0,
          },
        ],
        interestRateFreq: 'čtvrtletně',
        rangeInterest: 'ne',
      },
      {
        name: 'Československá obchodní banka, a. s.',
        tag: 'ČSOB',
        type: 'Spoření s bonusem',
        interestAfterTax: 986.31,
        table: [
          {
            from: 0,
            to: 1000000,
            value: 2.3,
          },
          {
            from: 1000001,
            to: 0,
            value: 0.15,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'TRINITY BANK',
        tag: 'Ostatní',
        type: 'Spořicí účet Úrok+',
        interestAfterTax: 762.24,
        table: [
          {
            from: 0,
            to: 30000000,
            value: 1.78,
          },
        ],
        interestRateFreq: 'denně',
        rangeInterest: 'ne',
      },
      {
        name: 'MONETA Money Bank',
        tag: 'Moneta',
        type: 'Spořicí účet Gold s úrokovým bonusem 2',
        interestAfterTax: 469.51,
        table: [
          {
            from: 0,
            to: 999999,
            value: 1.1,
          },
          {
            from: 1000000,
            to: 1999999,
            value: 0.9,
          },
          {
            from: 2000000,
            to: 0,
            value: 0.1,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'Komerční banka, a.s.',
        tag: 'Komerční banka',
        type: 'KB Spořicí konto Bonus Invest',
        interestAfterTax: 425.9,
        table: [
          {
            from: 0,
            to: 200000,
            value: 1,
          },
          {
            from: 200001,
            to: 10000000,
            value: 0.71,
          },
          {
            from: 10000001,
            to: 0,
            value: 0,
          },
        ],
        interestRateFreq: 'pololetně',
        rangeInterest: 'ano',
      },
      {
        name: 'MONETA Money Bank',
        tag: 'Moneta',
        type: 'Spořicí účet Gold s úrokovým bonusem 1',
        interestAfterTax: 298.31,
        table: [
          {
            from: 0,
            to: 999999,
            value: 0.7,
          },
          {
            from: 1000000,
            to: 1999999,
            value: 0.5,
          },
          {
            from: 2000000,
            to: 0,
            value: 0.1,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'MONETA Money Bank',
        tag: 'Moneta',
        type: 'Spořicí účet Gold',
        interestAfterTax: 127.65,
        table: [
          {
            from: 0,
            to: 999999,
            value: 0.3,
          },
          {
            from: 1000000,
            to: 0,
            value: 0.1,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'Česká spořitelna, a.s.',
        tag: 'Česká spořitelna',
        type: 'Spoření České spořitelny',
        interestAfterTax: 85.07,
        table: [
          {
            from: 0,
            to: 200000,
            value: 0.2,
          },
          {
            from: 200001,
            to: 0,
            value: 0.01,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'Raiffeisenbank a.s.',
        tag: 'Raiffeisenbank',
        type: 'Spořicí účet HIT PLUS',
        interestAfterTax: 42.52,
        table: [
          {
            from: 0,
            to: 500000,
            value: 0.1,
          },
          {
            from: 500001,
            to: 0,
            value: 0.01,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'Raiffeisenbank a.s. (Equa bank)',
        tag: 'Raiffeisenbank',
        type: 'Spořicí účet MAX',
        interestAfterTax: 42.52,
        table: [
          {
            from: 0,
            to: 500000,
            value: 0.1,
          },
          {
            from: 500001,
            to: 0,
            value: 1,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ano',
      },
      {
        name: 'UniCredit Bank',
        tag: 'UniCredit Bank',
        type: 'Spořicí účet Prima',
        interestAfterTax: 21.25,
        table: [
          {
            from: 0,
            to: 499999,
            value: 0.05,
          },
          {
            from: 500000,
            to: 0,
            value: 0.01,
          },
        ],
        interestRateFreq: 'čtvrtletně',
        rangeInterest: 'ano',
      },
      {
        name: 'Oberbank',
        tag: 'Ostatní',
        type: 'Spořicí účet Limit',
        interestAfterTax: 4.25,
        table: [
          {
            from: 0,
            to: 75000,
            value: 0.01,
          },
          {
            from: 75001,
            to: 149999,
            value: 0.02,
          },
          {
            from: 150000,
            to: 749999,
            value: 0.03,
          },
          {
            from: 750000,
            to: 1499999,
            value: 0.04,
          },
          {
            from: 1500000,
            to: 0,
            value: 0.05,
          },
        ],
        interestRateFreq: 'čtvrtletně',
        rangeInterest: 'ne',
      },
      {
        name: 'Oberbank',
        tag: 'Ostatní',
        type: 'Spořicí účet Speciál',
        interestAfterTax: 4.25,
        table: [
          {
            from: 0,
            to: 0,
            value: 0.01,
          },
        ],
        interestRateFreq: 'čtvrtletně',
        rangeInterest: 'ne',
      },
      {
        name: 'Expobank',
        tag: 'Ostatní',
        type: 'Expo spořicí účet Premium',
        interestAfterTax: 0,
        table: [
          {
            from: 0,
            to: 100000,
            value: 0,
          },
          {
            from: 100001,
            to: 19999999,
            value: 0.1,
          },
          {
            from: 20000000,
            to: 0,
            value: 0,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ne',
      },
      {
        name: 'Expobank',
        tag: 'Ostatní',
        type: 'Expo spořicí účet',
        interestAfterTax: 0,
        table: [
          {
            from: 0,
            to: 100000,
            value: 0,
          },
          {
            from: 100001,
            to: 19999999,
            value: 0.1,
          },
          {
            from: 20000000,
            to: 0,
            value: 0,
          },
        ],
        interestRateFreq: 'měsíčně',
        rangeInterest: 'ne',
      },
    ],
    scrapeDate: '2022-09-05T16:23:43.311Z',
    lastCheck: 'Poslední aktualizace: Dnes',
  };

  return res.status(200).json(data);
};

export default handler;
