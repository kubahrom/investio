import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    id: '6303736f9de99c993946d9bb',
    list: [
      {
        name: 'UniCredit Bank',
        type: 'Účet START, OPEN, TOP',
        interestRate: '5,5 %',
        interestAfterTax: '2 204,24 Kč',
        table: [
          {
            range: '0 – 1000000',
            value: '5.5%',
          },
          {
            range: '1000001 – neomezeno',
            value: '0%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'MONETA Money Bank',
        type: 'Spořicí účet Spoření/Spoříto D',
        interestRate: '5,1 %',
        interestAfterTax: '2 211,09 Kč',
        table: [
          {
            range: '0 – 500000',
            value: '5.1%',
          },
          {
            range: '500001 – neomezeno',
            value: '2.1%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'mBank',
        type: 'mSpoření',
        interestRate: '5 %',
        interestAfterTax: '2 166,89 Kč',
        table: [
          {
            range: '0 – 100000',
            value: '5%',
          },
          {
            range: '100001 – neomezeno',
            value: '0.01%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Artesa, spořitelní družstvo',
        type: 'Spořicí účet Artesa Universal',
        interestRate: '4,75 %',
        interestAfterTax: '2 056,53 Kč',
        table: [
          {
            range: '0 – neomezeno',
            value: '4.75%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Expobank',
        type: 'NEO účet',
        interestRate: '4,61 %',
        interestAfterTax: '1 994,82 Kč',
        table: [
          {
            range: '0 – neomezeno',
            value: '4.61%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'TRINITY BANK',
        type: 'Spořicí účet Výhoda+ Dobrý klient',
        interestRate: '4,58 %',
        interestAfterTax: '1 981,61 Kč',
        table: [
          {
            range: '0 – 400000',
            value: '4.58%',
          },
          {
            range: '400001 – neomezeno',
            value: '4.08%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Fio banka, a.s.',
        type: 'Fio konto',
        interestRate: '4,5 %',
        interestAfterTax: '1 946,39 Kč',
        table: [
          {
            range: '0 – 200000',
            value: '4.5%',
          },
          {
            range: '200001 – 1000000',
            value: '0.1%',
          },
          {
            range: '1000001 – 10000000',
            value: '0.15%',
          },
          {
            range: '10000001 – neomezeno',
            value: '0.2%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Československá obchodní banka, a. s.',
        type: 'Duo Profit (s investováním)',
        interestRate: '4,5 %',
        interestAfterTax: '1 946,39 Kč',
        table: [
          {
            range: '0 – neomezeno',
            value: '4.5%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Banka CREDITAS',
        type: 'Spořicí účet+',
        interestRate: '4,5 %',
        interestAfterTax: '1 946,39 Kč',
        table: [
          {
            range: '0 – 350000',
            value: '4.5%',
          },
          {
            range: '350001 – neomezeno',
            value: '3.1%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Raiffeisenbank a.s.',
        type: 'Spořicí účet HIT PLUS s bonusem',
        interestRate: '4,5 %',
        interestAfterTax: '1 946,39 Kč',
        table: [
          {
            range: '0 – 250000',
            value: '4.5%',
          },
          {
            range: '250001 – 500000',
            value: '0.1%',
          },
          {
            range: '500001 – neomezeno',
            value: '0.01%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Hello bank!',
        type: 'Hello spořicí účet',
        interestRate: '4,5 %',
        interestAfterTax: '1 946,39 Kč',
        table: [
          {
            range: '0 – 200000',
            value: '4.5%',
          },
          {
            range: '200001 – neomezeno',
            value: '0%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'J&T BANKA',
        type: 'Spořicí účet J&T (s dalšími vklady/investicemi)',
        interestRate: '4,25 %',
        interestAfterTax: '1 836,46 Kč',
        table: [
          {
            range: '0 – neomezeno',
            value: '4.25%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'J&T BANKA',
        type: 'Spořicí účet J&T (bez dalších vkladů a investic)',
        interestRate: '4,25 %',
        interestAfterTax: '1 836,46 Kč',
        table: [
          {
            range: '0 – neomezeno',
            value: '4.25%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Česká spořitelna, a.s.',
        type: 'Spoření České spořitelny (Exclusive Invest)',
        interestRate: '4,25 %',
        interestAfterTax: '1 836,46 Kč',
        table: [
          {
            range: '0 – 400000',
            value: '4.25%',
          },
          {
            range: '400001 – neomezeno',
            value: '0.01%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Česká spořitelna, a.s.',
        type: 'Spoření České spořitelny (Plus Invest)',
        interestRate: '4,25 %',
        interestAfterTax: '1 836,46 Kč',
        table: [
          {
            range: '0 – 200000',
            value: '4.25%',
          },
          {
            range: '200001 – neomezeno',
            value: '0.01%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Raiffeisenbank a.s. (Equa bank)',
        type: 'Spořicí účet EXTRA',
        interestRate: '4 %',
        interestAfterTax: '1 726,74 Kč',
        table: [
          {
            range: '0 – 3000000',
            value: '4%',
          },
          {
            range: '3000001 – neomezeno',
            value: '0.01%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'mBank',
        type: 'eMax Plus',
        interestRate: '4 %',
        interestAfterTax: '1 726,74 Kč',
        table: [
          {
            range: '0 – 500000',
            value: '4%',
          },
          {
            range: '500001 – neomezeno',
            value: '0.01%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Air Bank, a. s.',
        type: 'Spořicí účet s bonusovou sazbou',
        interestRate: '4 %',
        interestAfterTax: '1 726,74 Kč',
        table: [
          {
            range: '0 – 500000',
            value: '4%',
          },
          {
            range: '500001 – 1000000',
            value: '0.1%',
          },
          {
            range: '1000001 – neomezeno',
            value: '0%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Komerční banka, a.s.',
        type: 'Spořicí účet Junior',
        interestRate: '4 %',
        interestAfterTax: '1 721,8 Kč',
        table: [
          {
            range: '0 – 100000',
            value: '4%',
          },
          {
            range: '100001 – neomezeno',
            value: '0%',
          },
        ],
        interestRateFreq: 'čtvrtletně',
      },
      {
        name: 'Fio banka, a.s.',
        type: 'Fio spořicí účet',
        interestRate: '3,5 %',
        interestAfterTax: '1 507,95 Kč',
        table: [
          {
            range: '0 – neomezeno',
            value: '3.5%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Československá obchodní banka, a. s.',
        type: 'Spoření s bonusem Smart',
        interestRate: '3,3 %',
        interestAfterTax: '1 420,67 Kč',
        table: [
          {
            range: '0 – 1000000',
            value: '3.3%',
          },
          {
            range: '1000001 – neomezeno',
            value: '0.15%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Československá obchodní banka, a. s.',
        type: 'Spoření s bonusem pro děti (+ účet a investice)',
        interestRate: '3,3 %',
        interestAfterTax: '1 420,67 Kč',
        table: [
          {
            range: '0 – 250000',
            value: '3.3%',
          },
          {
            range: '250001 – neomezeno',
            value: '0.15%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Komerční banka, a.s.',
        type: 'KB Spořicí konto Bonus',
        interestRate: '3,3 %',
        interestAfterTax: '1 417,32 Kč',
        table: [
          {
            range: '0 – 200000',
            value: '3.3%',
          },
          {
            range: '200001 – 30000000',
            value: '0.03%',
          },
          {
            range: '30000001 – neomezeno',
            value: '0.02%',
          },
        ],
        interestRateFreq: 'čtvrtletně',
      },
      {
        name: 'Česká spořitelna, a.s.',
        type: 'Spoření Premier',
        interestRate: '3,25 %',
        interestAfterTax: '1 398,87 Kč',
        table: [
          {
            range: '0 – 1000000',
            value: '3.25%',
          },
          {
            range: '1000001 – neomezeno',
            value: '0.01%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Česká spořitelna, a.s.',
        type: 'Spoření České spořitelny (Plus)',
        interestRate: '3,25 %',
        interestAfterTax: '1 398,87 Kč',
        table: [
          {
            range: '0 – 200000',
            value: '3.25%',
          },
          {
            range: '200001 – neomezeno',
            value: '0.01%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Česká spořitelna, a.s.',
        type: 'Spoření České spořitelny (Exclusive)',
        interestRate: '3,25 %',
        interestAfterTax: '1 398,87 Kč',
        table: [
          {
            range: '0 – 400000',
            value: '3.25%',
          },
          {
            range: '400001 – neomezeno',
            value: '0.01%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Československá obchodní banka, a. s.',
        type: 'Spoření s bonusem pro děti (+ účet)',
        interestRate: '3,05 %',
        interestAfterTax: '1 311,76 Kč',
        table: [
          {
            range: '0 – 250000',
            value: '3.05%',
          },
          {
            range: '250001 – neomezeno',
            value: '0.15%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Raiffeisenbank a.s. (Equa bank)',
        type: 'Spořicí účet HIT',
        interestRate: '3 %',
        interestAfterTax: '1 290,01 Kč',
        table: [
          {
            range: '0 – 200000',
            value: '3%',
          },
          {
            range: '200001 – neomezeno',
            value: '0.1%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Československá obchodní banka, a. s.',
        type: 'Spoření s bonusem pro děti',
        interestRate: '2,8 %',
        interestAfterTax: '1 203,07 Kč',
        table: [
          {
            range: '0 – 250000',
            value: '2.8%',
          },
          {
            range: '250001 – neomezeno',
            value: '0.15%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'TRINITY BANK',
        type: 'Spořicí účet Výhoda+',
        interestRate: '2,58 %',
        interestAfterTax: '1 107,59 Kč',
        table: [
          {
            range: '0 – neomezeno',
            value: '2.58%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'UniCredit Bank',
        type: 'Spořicí účet Save',
        interestRate: '2,5 %',
        interestAfterTax: '1 071 Kč',
        table: [
          {
            range: '0 – 499999',
            value: '2.5%',
          },
          {
            range: '500000 – neomezeno',
            value: '0%',
          },
        ],
        interestRateFreq: 'čtvrtletně',
      },
      {
        name: 'Československá obchodní banka, a. s.',
        type: 'Spoření s bonusem',
        interestRate: '2,3 %',
        interestAfterTax: '986,31 Kč',
        table: [
          {
            range: '0 – 1000000',
            value: '2.3%',
          },
          {
            range: '1000001 – neomezeno',
            value: '0.15%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'TRINITY BANK',
        type: 'Spořicí účet Úrok+',
        interestRate: '1,78 %',
        interestAfterTax: '762,24 Kč',
        table: [
          {
            range: '0 – 30000000',
            value: '1.78%',
          },
        ],
        interestRateFreq: 'denně',
      },
      {
        name: 'MONETA Money Bank',
        type: 'Spořicí účet Gold s úrokovým bonusem 2',
        interestRate: '1,1 %',
        interestAfterTax: '469,51 Kč',
        table: [
          {
            range: '0 – 999999',
            value: '1.1%',
          },
          {
            range: '1000000 – 1999999',
            value: '0.9%',
          },
          {
            range: '2000000 – neomezeno',
            value: '0.1%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Komerční banka, a.s.',
        type: 'KB Spořicí konto Bonus Invest',
        interestRate: '1 %',
        interestAfterTax: '425,9 Kč',
        table: [
          {
            range: '0 – 200000',
            value: '1%',
          },
          {
            range: '200001 – 10000000',
            value: '0.71%',
          },
          {
            range: '10000001 – neomezeno',
            value: '0%',
          },
        ],
        interestRateFreq: 'pololetně',
      },
      {
        name: 'MONETA Money Bank',
        type: 'Spořicí účet Gold s úrokovým bonusem 1',
        interestRate: '0,7 %',
        interestAfterTax: '298,31 Kč',
        table: [
          {
            range: '0 – 999999',
            value: '0.7%',
          },
          {
            range: '1000000 – 1999999',
            value: '0.5%',
          },
          {
            range: '2000000 – neomezeno',
            value: '0.1%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'MONETA Money Bank',
        type: 'Spořicí účet Gold',
        interestRate: '0,3 %',
        interestAfterTax: '127,65 Kč',
        table: [
          {
            range: '0 – 999999',
            value: '0.3%',
          },
          {
            range: '1000000 – neomezeno',
            value: '0.1%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Česká spořitelna, a.s.',
        type: 'Spoření České spořitelny',
        interestRate: '0,2 %',
        interestAfterTax: '85,07 Kč',
        table: [
          {
            range: '0 – 200000',
            value: '0.2%',
          },
          {
            range: '200001 – neomezeno',
            value: '0.01%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Raiffeisenbank a.s.',
        type: 'Spořicí účet HIT PLUS',
        interestRate: '0,1 %',
        interestAfterTax: '42,52 Kč',
        table: [
          {
            range: '0 – 500000',
            value: '0.1%',
          },
          {
            range: '500001 – neomezeno',
            value: '0.01%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Raiffeisenbank a.s. (Equa bank)',
        type: 'Spořicí účet MAX',
        interestRate: '1 %',
        interestAfterTax: '42,52 Kč',
        table: [
          {
            range: '0 – 500000',
            value: '0.1%',
          },
          {
            range: '500001 – neomezeno',
            value: '1%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'UniCredit Bank',
        type: 'Spořicí účet Prima',
        interestRate: '0,05 %',
        interestAfterTax: '21,25 Kč',
        table: [
          {
            range: '0 – 499999',
            value: '0.05%',
          },
          {
            range: '500000 – neomezeno',
            value: '0.01%',
          },
        ],
        interestRateFreq: 'čtvrtletně',
      },
      {
        name: 'Oberbank',
        type: 'Spořicí účet Limit',
        interestRate: '0,05 %',
        interestAfterTax: '4,25 Kč',
        table: [
          {
            range: '0 – 75000',
            value: '0.01%',
          },
          {
            range: '75001 – 149999',
            value: '0.02%',
          },
          {
            range: '150000 – 749999',
            value: '0.03%',
          },
          {
            range: '750000 – 1499999',
            value: '0.04%',
          },
          {
            range: '1500000 – neomezeno',
            value: '0.05%',
          },
        ],
        interestRateFreq: 'čtvrtletně',
      },
      {
        name: 'Oberbank',
        type: 'Spořicí účet Speciál',
        interestRate: '0,01 %',
        interestAfterTax: '4,25 Kč',
        table: [
          {
            range: '0 – neomezeno',
            value: '0.01%',
          },
        ],
        interestRateFreq: 'čtvrtletně',
      },
      {
        name: 'Expobank',
        type: 'Expo spořicí účet Premium',
        interestRate: '0,1 %',
        interestAfterTax: '0 Kč',
        table: [
          {
            range: '0 – 100000',
            value: '0%',
          },
          {
            range: '100001 – 19999999',
            value: '0.1%',
          },
          {
            range: '20000000 – neomezeno',
            value: '0%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
      {
        name: 'Expobank',
        type: 'Expo spořicí účet',
        interestRate: '0,1 %',
        interestAfterTax: '0 Kč',
        table: [
          {
            range: '0 – 100000',
            value: '0%',
          },
          {
            range: '100001 – 19999999',
            value: '0.1%',
          },
          {
            range: '20000000 – neomezeno',
            value: '0%',
          },
        ],
        interestRateFreq: 'měsíčně',
      },
    ],
    scrapeDate: '2022-08-22T12:15:43.321Z',
    lastCheck: 'Poslední aktualizace: 11. 8. 2022',
  };

  return res.status(200).json(data);
};

export default handler;
