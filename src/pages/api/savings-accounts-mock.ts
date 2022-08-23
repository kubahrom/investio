import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    id: '6304b4257f55751da845690f',
    list: [
      {
        name: 'UniCredit Bank',
        tag: 'UniCredit Bank',
        type: 'Účet START, OPEN, TOP',
        interestRate: '5,5 %',
        interestAfterTax: '2 208,24 Kč',
        table: [
          {
            from: 0,
            to: 1000000,
            value: '5.5%',
          },
          {
            from: 1000001,
            to: 0,
            value: '0%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'MONETA Money Bank',
        tag: 'Moneta',
        type: 'Spořicí účet Spoření/Spoříto D',
        interestRate: '5,1 %',
        interestAfterTax: '2 211,09 Kč',
        table: [
          {
            from: 0,
            to: 500000,
            value: '5.1%',
          },
          {
            from: 500001,
            to: 0,
            value: '2.1%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'mBank',
        tag: 'mBank',
        type: 'mSpoření',
        interestRate: '5 %',
        interestAfterTax: '2 166,89 Kč',
        table: [
          {
            from: 0,
            to: 100000,
            value: '5%',
          },
          {
            from: 100001,
            to: 0,
            value: '0.01%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Artesa, spořitelní družstvo',
        tag: 'Ostatní',
        type: 'Spořicí účet Artesa Universal',
        interestRate: '4,75 %',
        interestAfterTax: '2 056,53 Kč',
        table: [
          {
            from: 0,
            to: 0,
            value: '4.75%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Expobank',
        tag: 'Ostatní',
        type: 'NEO účet',
        interestRate: '4,61 %',
        interestAfterTax: '1 994,82 Kč',
        table: [
          {
            from: 0,
            to: 0,
            value: '4.61%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'TRINITY BANK',
        tag: 'Ostatní',
        type: 'Spořicí účet Výhoda+ Dobrý klient',
        interestRate: '4,58 %',
        interestAfterTax: '1 981,61 Kč',
        table: [
          {
            from: 0,
            to: 400000,
            value: '4.58%',
          },
          {
            from: 400001,
            to: 0,
            value: '4.08%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Fio banka, a.s.',
        tag: 'Fio banka',
        type: 'Fio konto',
        interestRate: '4,5 %',
        interestAfterTax: '1 946,39 Kč',
        table: [
          {
            from: 0,
            to: 200000,
            value: '4.5%',
          },
          {
            from: 200001,
            to: 1000000,
            value: '0.1%',
          },
          {
            from: 1000001,
            to: 10000000,
            value: '0.15%',
          },
          {
            from: 10000001,
            to: 0,
            value: '0.2%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Československá obchodní banka, a. s.',
        tag: 'ČSOB',
        type: 'Duo Profit (s investováním)',
        interestRate: '4,5 %',
        interestAfterTax: '1 946,39 Kč',
        table: [
          {
            from: 0,
            to: 0,
            value: '4.5%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Banka CREDITAS',
        tag: 'Ostatní',
        type: 'Spořicí účet+',
        interestRate: '4,5 %',
        interestAfterTax: '1 946,39 Kč',
        table: [
          {
            from: 0,
            to: 350000,
            value: '4.5%',
          },
          {
            from: 350001,
            to: 0,
            value: '3.1%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Raiffeisenbank a.s.',
        tag: 'Raiffeisenbank',
        type: 'Spořicí účet HIT PLUS s bonusem',
        interestRate: '4,5 %',
        interestAfterTax: '1 946,39 Kč',
        table: [
          {
            from: 0,
            to: 250000,
            value: '4.5%',
          },
          {
            from: 250001,
            to: 500000,
            value: '0.1%',
          },
          {
            from: 500001,
            to: 0,
            value: '0.01%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Hello bank!',
        tag: 'Ostatní',
        type: 'Hello spořicí účet',
        interestRate: '4,5 %',
        interestAfterTax: '1 946,39 Kč',
        table: [
          {
            from: 0,
            to: 200000,
            value: '4.5%',
          },
          {
            from: 200001,
            to: 0,
            value: '0%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'J&T BANKA',
        tag: 'Ostatní',
        type: 'Spořicí účet J&T (s dalšími vklady/investicemi)',
        interestRate: '4,25 %',
        interestAfterTax: '1 836,46 Kč',
        table: [
          {
            from: 0,
            to: 0,
            value: '4.25%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'J&T BANKA',
        tag: 'Ostatní',
        type: 'Spořicí účet J&T (bez dalších vkladů a investic)',
        interestRate: '4,25 %',
        interestAfterTax: '1 836,46 Kč',
        table: [
          {
            from: 0,
            to: 0,
            value: '4.25%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Česká spořitelna, a.s.',
        tag: 'Česká spořitelna',
        type: 'Spoření České spořitelny (Exclusive Invest)',
        interestRate: '4,25 %',
        interestAfterTax: '1 836,46 Kč',
        table: [
          {
            from: 0,
            to: 400000,
            value: '4.25%',
          },
          {
            from: 400001,
            to: 0,
            value: '0.01%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Česká spořitelna, a.s.',
        tag: 'Česká spořitelna',
        type: 'Spoření České spořitelny (Plus Invest)',
        interestRate: '4,25 %',
        interestAfterTax: '1 836,46 Kč',
        table: [
          {
            from: 0,
            to: 200000,
            value: '4.25%',
          },
          {
            from: 200001,
            to: 0,
            value: '0.01%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Raiffeisenbank a.s. (Equa bank)',
        tag: 'Raiffeisenbank',
        type: 'Spořicí účet EXTRA',
        interestRate: '4 %',
        interestAfterTax: '1 726,74 Kč',
        table: [
          {
            from: 0,
            to: 3000000,
            value: '4%',
          },
          {
            from: 3000001,
            to: 0,
            value: '0.01%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'mBank',
        tag: 'mBank',
        type: 'eMax Plus',
        interestRate: '4 %',
        interestAfterTax: '1 726,74 Kč',
        table: [
          {
            from: 0,
            to: 500000,
            value: '4%',
          },
          {
            from: 500001,
            to: 0,
            value: '0.01%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Air Bank, a. s.',
        tag: 'Air Bank',
        type: 'Spořicí účet s bonusovou sazbou',
        interestRate: '4 %',
        interestAfterTax: '1 726,74 Kč',
        table: [
          {
            from: 0,
            to: 500000,
            value: '4%',
          },
          {
            from: 500001,
            to: 1000000,
            value: '0.1%',
          },
          {
            from: 1000001,
            to: 0,
            value: '0%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Komerční banka, a.s.',
        tag: 'Komerční banka',
        type: 'Spořicí účet Junior',
        interestRate: '4 %',
        interestAfterTax: '1 721,8 Kč',
        table: [
          {
            from: 0,
            to: 100000,
            value: '4%',
          },
          {
            from: 100001,
            to: 0,
            value: '0%',
          },
        ],
        interestRateFreq: 'čtvrtletně',
      },
      {
        name: 'Fio banka, a.s.',
        tag: 'Fio banka',
        type: 'Fio spořicí účet',
        interestRate: '3,5 %',
        interestAfterTax: '1 507,95 Kč',
        table: [
          {
            from: 0,
            to: 0,
            value: '3.5%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Československá obchodní banka, a. s.',
        tag: 'ČSOB',
        type: 'Spoření s bonusem Smart',
        interestRate: '3,3 %',
        interestAfterTax: '1 420,67 Kč',
        table: [
          {
            from: 0,
            to: 1000000,
            value: '3.3%',
          },
          {
            from: 1000001,
            to: 0,
            value: '0.15%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Československá obchodní banka, a. s.',
        tag: 'ČSOB',
        type: 'Spoření s bonusem pro děti (+ účet a investice)',
        interestRate: '3,3 %',
        interestAfterTax: '1 420,67 Kč',
        table: [
          {
            from: 0,
            to: 250000,
            value: '3.3%',
          },
          {
            from: 250001,
            to: 0,
            value: '0.15%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Komerční banka, a.s.',
        tag: 'Komerční banka',
        type: 'KB Spořicí konto Bonus',
        interestRate: '3,3 %',
        interestAfterTax: '1 417,32 Kč',
        table: [
          {
            from: 0,
            to: 200000,
            value: '3.3%',
          },
          {
            from: 200001,
            to: 30000000,
            value: '0.03%',
          },
          {
            from: 30000001,
            to: 0,
            value: '0.02%',
          },
        ],
        interestRateFreq: 'čtvrtletně',
      },
      {
        name: 'Česká spořitelna, a.s.',
        tag: 'Česká spořitelna',
        type: 'Spoření Premier',
        interestRate: '3,25 %',
        interestAfterTax: '1 398,87 Kč',
        table: [
          {
            from: 0,
            to: 1000000,
            value: '3.25%',
          },
          {
            from: 1000001,
            to: 0,
            value: '0.01%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Česká spořitelna, a.s.',
        tag: 'Česká spořitelna',
        type: 'Spoření České spořitelny (Plus)',
        interestRate: '3,25 %',
        interestAfterTax: '1 398,87 Kč',
        table: [
          {
            from: 0,
            to: 200000,
            value: '3.25%',
          },
          {
            from: 200001,
            to: 0,
            value: '0.01%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Česká spořitelna, a.s.',
        tag: 'Česká spořitelna',
        type: 'Spoření České spořitelny (Exclusive)',
        interestRate: '3,25 %',
        interestAfterTax: '1 398,87 Kč',
        table: [
          {
            from: 0,
            to: 400000,
            value: '3.25%',
          },
          {
            from: 400001,
            to: 0,
            value: '0.01%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Československá obchodní banka, a. s.',
        tag: 'ČSOB',
        type: 'Spoření s bonusem pro děti (+ účet)',
        interestRate: '3,05 %',
        interestAfterTax: '1 311,76 Kč',
        table: [
          {
            from: 0,
            to: 250000,
            value: '3.05%',
          },
          {
            from: 250001,
            to: 0,
            value: '0.15%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Raiffeisenbank a.s. (Equa bank)',
        tag: 'Raiffeisenbank',
        type: 'Spořicí účet HIT',
        interestRate: '3 %',
        interestAfterTax: '1 290,01 Kč',
        table: [
          {
            from: 0,
            to: 200000,
            value: '3%',
          },
          {
            from: 200001,
            to: 0,
            value: '0.1%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Československá obchodní banka, a. s.',
        tag: 'ČSOB',
        type: 'Spoření s bonusem pro děti',
        interestRate: '2,8 %',
        interestAfterTax: '1 203,07 Kč',
        table: [
          {
            from: 0,
            to: 250000,
            value: '2.8%',
          },
          {
            from: 250001,
            to: 0,
            value: '0.15%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'TRINITY BANK',
        tag: 'Ostatní',
        type: 'Spořicí účet Výhoda+',
        interestRate: '2,58 %',
        interestAfterTax: '1 107,59 Kč',
        table: [
          {
            from: 0,
            to: 0,
            value: '2.58%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'UniCredit Bank',
        tag: 'UniCredit Bank',
        type: 'Spořicí účet Save',
        interestRate: '2,5 %',
        interestAfterTax: '1 071 Kč',
        table: [
          {
            from: 0,
            to: 499999,
            value: '2.5%',
          },
          {
            from: 500000,
            to: 0,
            value: '0%',
          },
        ],
        interestRateFreq: 'čtvrtletně',
      },
      {
        name: 'Československá obchodní banka, a. s.',
        tag: 'ČSOB',
        type: 'Spoření s bonusem',
        interestRate: '2,3 %',
        interestAfterTax: '986,31 Kč',
        table: [
          {
            from: 0,
            to: 1000000,
            value: '2.3%',
          },
          {
            from: 1000001,
            to: 0,
            value: '0.15%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'TRINITY BANK',
        tag: 'Ostatní',
        type: 'Spořicí účet Úrok+',
        interestRate: '1,78 %',
        interestAfterTax: '762,24 Kč',
        table: [
          {
            from: 0,
            to: 30000000,
            value: '1.78%',
          },
        ],
        interestRateFreq: 'denně',
      },
      {
        name: 'MONETA Money Bank',
        tag: 'Moneta',
        type: 'Spořicí účet Gold s úrokovým bonusem 2',
        interestRate: '1,1 %',
        interestAfterTax: '469,51 Kč',
        table: [
          {
            from: 0,
            to: 999999,
            value: '1.1%',
          },
          {
            from: 1000000,
            to: 1999999,
            value: '0.9%',
          },
          {
            from: 2000000,
            to: 0,
            value: '0.1%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Komerční banka, a.s.',
        tag: 'Komerční banka',
        type: 'KB Spořicí konto Bonus Invest',
        interestRate: '1 %',
        interestAfterTax: '425,9 Kč',
        table: [
          {
            from: 0,
            to: 200000,
            value: '1%',
          },
          {
            from: 200001,
            to: 10000000,
            value: '0.71%',
          },
          {
            from: 10000001,
            to: 0,
            value: '0%',
          },
        ],
        interestRateFreq: 'pololetně',
      },
      {
        name: 'MONETA Money Bank',
        tag: 'Moneta',
        type: 'Spořicí účet Gold s úrokovým bonusem 1',
        interestRate: '0,7 %',
        interestAfterTax: '298,31 Kč',
        table: [
          {
            from: 0,
            to: 999999,
            value: '0.7%',
          },
          {
            from: 1000000,
            to: 1999999,
            value: '0.5%',
          },
          {
            from: 2000000,
            to: 0,
            value: '0.1%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'MONETA Money Bank',
        tag: 'Moneta',
        type: 'Spořicí účet Gold',
        interestRate: '0,3 %',
        interestAfterTax: '127,65 Kč',
        table: [
          {
            from: 0,
            to: 999999,
            value: '0.3%',
          },
          {
            from: 1000000,
            to: 0,
            value: '0.1%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Česká spořitelna, a.s.',
        tag: 'Česká spořitelna',
        type: 'Spoření České spořitelny',
        interestRate: '0,2 %',
        interestAfterTax: '85,07 Kč',
        table: [
          {
            from: 0,
            to: 200000,
            value: '0.2%',
          },
          {
            from: 200001,
            to: 0,
            value: '0.01%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Raiffeisenbank a.s.',
        tag: 'Raiffeisenbank',
        type: 'Spořicí účet HIT PLUS',
        interestRate: '0,1 %',
        interestAfterTax: '42,52 Kč',
        table: [
          {
            from: 0,
            to: 500000,
            value: '0.1%',
          },
          {
            from: 500001,
            to: 0,
            value: '0.01%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Raiffeisenbank a.s. (Equa bank)',
        tag: 'Raiffeisenbank',
        type: 'Spořicí účet MAX',
        interestRate: '1 %',
        interestAfterTax: '42,52 Kč',
        table: [
          {
            from: 0,
            to: 500000,
            value: '0.1%',
          },
          {
            from: 500001,
            to: 0,
            value: '1%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'UniCredit Bank',
        tag: 'UniCredit Bank',
        type: 'Spořicí účet Prima',
        interestRate: '0,05 %',
        interestAfterTax: '21,25 Kč',
        table: [
          {
            from: 0,
            to: 499999,
            value: '0.05%',
          },
          {
            from: 500000,
            to: 0,
            value: '0.01%',
          },
        ],
        interestRateFreq: 'čtvrtletně',
      },
      {
        name: 'Oberbank',
        tag: 'Ostatní',
        type: 'Spořicí účet Limit',
        interestRate: '0,05 %',
        interestAfterTax: '4,25 Kč',
        table: [
          {
            from: 0,
            to: 75000,
            value: '0.01%',
          },
          {
            from: 75001,
            to: 149999,
            value: '0.02%',
          },
          {
            from: 150000,
            to: 749999,
            value: '0.03%',
          },
          {
            from: 750000,
            to: 1499999,
            value: '0.04%',
          },
          {
            from: 1500000,
            to: 0,
            value: '0.05%',
          },
        ],
        interestRateFreq: 'čtvrtletně',
      },
      {
        name: 'Oberbank',
        tag: 'Ostatní',
        type: 'Spořicí účet Speciál',
        interestRate: '0,01 %',
        interestAfterTax: '4,25 Kč',
        table: [
          {
            from: 0,
            to: 0,
            value: '0.01%',
          },
        ],
        interestRateFreq: 'čtvrtletně',
      },
      {
        name: 'Expobank',
        tag: 'Ostatní',
        type: 'Expo spořicí účet Premium',
        interestRate: '0,1 %',
        interestAfterTax: '0 Kč',
        table: [
          {
            from: 0,
            to: 100000,
            value: '0%',
          },
          {
            from: 100001,
            to: 19999999,
            value: '0.1%',
          },
          {
            from: 20000000,
            to: 0,
            value: '0%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Expobank',
        tag: 'Ostatní',
        type: 'Expo spořicí účet',
        interestRate: '0,1 %',
        interestAfterTax: '0 Kč',
        table: [
          {
            from: 0,
            to: 100000,
            value: '0%',
          },
          {
            from: 100001,
            to: 19999999,
            value: '0.1%',
          },
          {
            from: 20000000,
            to: 0,
            value: '0%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
    ],
    scrapeDate: '2022-08-23T11:04:05.533Z',
    lastCheck: 'Poslední aktualizace: 11. 8. 2022',
  };

  return res.status(200).json(data);
};

export default handler;
