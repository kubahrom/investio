import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    id: '6304dc26cce07aa1b87b1df5',
    list: [
      {
        name: 'UniCredit Bank',
        tag: 'UniCredit Bank',
        type: 'Účet START, OPEN, TOP',
        interestAfterTax: '2 208,24 Kč',
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
        note: 'Jde o standardní běžný platební účet, který je otevřený jako druhý účet ke běžnému účtu typu START, OPEN nebo TOP (za ty tři jmenované se platí poplatek 0-299 Kč měsíčně podle typu účtu nebo splnění podmínek).<br/><br/>Akce platí od 1. 7. 2022 do 30. 9. 2022 a jen pro nové klienty, kteří ještě nemají v UniCredit Bank účet.<br/><br/>Úroková sazba v rámci akce platí do 30. 6. 2023.',
      },
      {
        name: 'MONETA Money Bank',
        tag: 'Moneta',
        type: 'Spořicí účet Spoření/Spoříto D',
        interestAfterTax: '2 211,09 Kč',
        table: [
          {
            from: 0,
            to: 500000,
            value: 5.1,
          },
          {
            from: 500001,
            to: 0,
            value: 2.1,
          },
        ],
        interestRateFreq: 'měsíčně',
        note: 'Spořicí účet "Spoříto" = online založený účet pro nové klienty banky.<br/>Spořicí účet "Spoření" = účet založený na pobočce, nebo stávající klienti banky s nově založeným účtem (jakkoli).<br/>Jde však stále o jeden a ten samý typ spořicího účtu.<br/><br/>Podmínky:<br/><br/>- příjem na běžném účtu min. 20 000 Kč měsíčně<br/>- 5 plateb kartou měsíčně',
      },
      {
        name: 'mBank',
        tag: 'mBank',
        type: 'mSpoření',
        interestAfterTax: '2 166,89 Kč',
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
        note: 'Při překročení naspořené částky 100 000 Kč se CELÁ částka úročí sazbou 0,01 % p.a. do doby, než dojde k její snížení na limitní hranici.<br/><br/>Máte možnost založit max. 8 těchto spořicích účtů.',
      },
      {
        name: 'Artesa, spořitelní družstvo',
        tag: 'Ostatní',
        type: 'Spořicí účet Artesa Universal',
        interestAfterTax: '2 056,53 Kč',
        table: [
          {
            from: 0,
            to: 0,
            value: 4.75,
          },
        ],
        interestRateFreq: 'měsíčně',
        note: 'Bezhotovostní platby lze posílat pouze na dva předem stanovené účty s možností změny těchto účtů 2x měsíčně. Část vkladu převyšující desetinásobek členského podílu se neúročí.<br/><br/>Základní členský vklad je 1000 Kč a vrací se. Na vklad se uplatní tzv. "Pravidlo 1:10", ale členský vklad není pojištěn.<br/><br/>Příklad: Na spoření ve výši 1 mil. Kč je potřeba vložit dalších 100 000 Kč do základního kapitálu družstva, jako neúročený a nepojištěný členský vklad.',
      },
      {
        name: 'Expobank',
        tag: 'Ostatní',
        type: 'NEO účet',
        interestAfterTax: '1 994,82 Kč',
        table: [
          {
            from: 0,
            to: 0,
            value: 4.61,
          },
        ],
        interestRateFreq: 'měsíčně',
        note: 'Tip: Za založení NEO účtu dostanete od banky bonus 500 Kč. Stačí splnit jednoduché podmínky a využít platný promo kód Expobank na bonus 500 Kč (vygeneruje se automaticky po kliknutí na náš odkaz).Přečtěte si, jak to funguje.',
      },
      {
        name: 'TRINITY BANK',
        tag: 'Ostatní',
        type: 'Spořicí účet Výhoda+ Dobrý klient',
        interestAfterTax: '1 981,61 Kč',
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
        note: '<br/>',
      },
      {
        name: 'Fio banka, a.s.',
        tag: 'Fio banka',
        type: 'Fio konto',
        interestAfterTax: '1 946,39 Kč',
        table: [
          {
            from: 0,
            to: 200000,
            value: 4.5,
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
        note: '<br/>',
      },
      {
        name: 'Československá obchodní banka, a. s.',
        tag: 'ČSOB',
        type: 'Duo Profit (s investováním)',
        interestAfterTax: '1 946,39 Kč',
        table: [
          {
            from: 0,
            to: 0,
            value: 4.5,
          },
        ],
        interestRateFreq: 'měsíčně',
        note: 'Podmínky:<br/><br/>Investovat do podílových fondů skupiny KBC v objemu min. 30 000 Kč s tím, že musíte uhradit minimálně 1% vstupní poplatek.<br/><br/>Pro fondy<br/>- ČSOB Opatrný zodpovědný<br/>- ČSOB Premium Opatrný zodpovědný<br/>- ČSOB Odvážný zodpovědný a<br/>- ČSOB Premium Odvážný zodpovědný<br/>platí podmínka minimální uhrazené výše vstupního poplatku ve výši 0,5 %<br/><br/>Spořit můžete maximálně tolik, kolik investujete (investice musí být stejná nebo vyšší než spoření).<br/><br/>Výše částky investované do vybraných podílových fondů musí být stejná nebo vyšší, než je výše zůstatku na spořicím účtu.<br/><br/>Akční úroková sazba platí rok od založení účtu.',
      },
      {
        name: 'Banka CREDITAS',
        tag: 'Ostatní',
        type: 'Spořicí účet+',
        interestAfterTax: '1 946,39 Kč',
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
        note: '<br/>',
      },
      {
        name: 'Raiffeisenbank a.s.',
        tag: 'Raiffeisenbank',
        type: 'Spořicí účet HIT PLUS s bonusem',
        interestAfterTax: '1 946,39 Kč',
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
        note: 'Úroková sazba platí při splnění těchto podmínek:<br/><br/>1. Máte CHYTRÝ účet nebo AKTIVNÍ účet nebo studentský účet:<br/><br/>- alespoň 3 transakce debetní nebo kreditní kartou,<br/>- transakce musí být v daném měsíci i zaúčtované.<br/><br/>2. Máte PRÉMIOVÝ účet:<br/><br/>- měsíčně obrat 50 000 Kč v 1 nebo maximálně ve 2 transakcích. V daném měsíci banka sečte 2 nejvyšší příchozí transakce na účtu.<br/><br/>3. Máte EXKLUZIVNÍ účet:<br/><br/>- objem vašich vkladů a investic u Raiffeisenbank je min. 1 500 000 Kč měsíčně',
      },
      {
        name: 'Hello bank!',
        tag: 'Ostatní',
        type: 'Hello spořicí účet',
        interestAfterTax: '1 946,39 Kč',
        table: [
          {
            from: 0,
            to: 200000,
            value: 4.5,
          },
          {
            from: 200001,
            to: 0,
            value: 0,
          },
        ],
        interestRateFreq: 'měsíčně',
        note: '<br/>',
      },
      {
        name: 'J&T BANKA',
        tag: 'Ostatní',
        type: 'Spořicí účet J&T (s dalšími vklady/investicemi)',
        interestAfterTax: '1 836,46 Kč',
        table: [
          {
            from: 0,
            to: 0,
            value: 4.25,
          },
        ],
        interestRateFreq: 'měsíčně',
        note: 'Minimální zůstatek ani vklad není omezen při splnění jedné z podmínek:<br/><br/>- investice ve výši min. 100 000 Kč<br/>- nebo jiný vklad ve výši min. 1 mil. Kč.<br/><br/>Faktická výpovědní lhůta je 1 den.',
      },
      {
        name: 'J&T BANKA',
        tag: 'Ostatní',
        type: 'Spořicí účet J&T (bez dalších vkladů a investic)',
        interestAfterTax: '1 836,46 Kč',
        table: [
          {
            from: 0,
            to: 0,
            value: 4.25,
          },
        ],
        interestRateFreq: 'měsíčně',
        note: 'Faktická výpovědní lhůta je 1 den.<br/>Minimální zůstatek je 1 mil. Kč.',
      },
      {
        name: 'Česká spořitelna, a.s.',
        tag: 'Česká spořitelna',
        type: 'Spoření České spořitelny (Exclusive Invest)',
        interestAfterTax: '1 836,46 Kč',
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
        note: '1. podmínka: <br/><br/>Pravidelně investujete min. 300 Kč měsíčně z majetkového účtu České spořitelny.<br/><br/>2. podmínka:<br/><br/>Patříte do segmentu Exclusive:<br/><br/>- pravidelně do ČS posíláte své příjmy v měsíční výši alespoň 45 000 Kč<br/>- nebo máte naspořeno nebo investováno \ufeff750 000 Kč nebo více<br/>- nebo jste si od ČS půjčili 1,5 mil Kč a více',
      },
      {
        name: 'Česká spořitelna, a.s.',
        tag: 'Česká spořitelna',
        type: 'Spoření České spořitelny (Plus Invest)',
        interestAfterTax: '1 836,46 Kč',
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
        note: '1. podmínka:<br/>Máte "Plus účet České spořitelny".<br/><br/>2. podmínka:<br/><br/>Pravidelně investujete min. 300 Kč měsíčně z majetkového účtu České spořitelny.',
      },
      {
        name: 'Raiffeisenbank a.s. (Equa bank)',
        tag: 'Raiffeisenbank',
        type: 'Spořicí účet EXTRA',
        interestAfterTax: '1 726,74 Kč',
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
        note: 'Úroková sazba platí za podmínky, že v daném kalendářním měsíci neodejde z tohoto účtu žádná platba (ani jako platba mezi spořicím a běžným účtem). Jinak se snižuje na 0,10 % p.a.',
      },
      {
        name: 'mBank',
        tag: 'mBank',
        type: 'eMax Plus',
        interestAfterTax: '1 726,74 Kč',
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
        note: '<br/>',
      },
      {
        name: 'Air Bank, a. s.',
        tag: 'Air Bank',
        type: 'Spořicí účet s bonusovou sazbou',
        interestAfterTax: '1 726,74 Kč',
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
        note: 'Podmínkou úrokové sazby je 5x měsíčně zaplatit platební kartou Air Bank vydanou k běžnému účtu. V opačném případě je úroková sazba 0 % p.a.',
      },
      {
        name: 'Komerční banka, a.s.',
        tag: 'Komerční banka',
        type: 'Spořicí účet Junior',
        interestAfterTax: '1 721,8 Kč',
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
        note: '<br/>',
      },
      {
        name: 'Fio banka, a.s.',
        tag: 'Fio banka',
        type: 'Fio spořicí účet',
        interestAfterTax: '1 507,95 Kč',
        table: [
          {
            from: 0,
            to: 0,
            value: 3.5,
          },
        ],
        interestRateFreq: 'měsíčně',
        note: 'Měsíčně můžete provést max. 4 odchozí platby/ hotovostní výběry.<br/><br/>Úrokové sazby platí od 1. 5. 2022.',
      },
      {
        name: 'Československá obchodní banka, a. s.',
        tag: 'ČSOB',
        type: 'Spoření s bonusem Smart',
        interestAfterTax: '1 420,67 Kč',
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
        note: 'Podmínkou je používání mobilní aplikace ČSOB Smart (mobilní bankovnictví).<br/><br/>Po dosažení daného pásma je uvedenou sazbou úročen celý zůstatek účtu. Část zůstatku nad 1 000 000 Kč je však úročena sazbou 0,15 %. (Pozor, naše kalkulačka toto neumí přesně spočítat.)',
      },
      {
        name: 'Československá obchodní banka, a. s.',
        tag: 'ČSOB',
        type: 'Spoření s bonusem pro děti (+ účet a investice)',
        interestAfterTax: '1 420,67 Kč',
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
        note: 'Podmínkou je vedení Plus Konta nebo Poštovního účtu. A k tomu měsíční investice min. 1000 Kč do podílových fondů ČSOB nebo KBC.',
      },
      {
        name: 'Komerční banka, a.s.',
        tag: 'Komerční banka',
        type: 'KB Spořicí konto Bonus',
        interestAfterTax: '1 417,32 Kč',
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
        note: '<br/>',
      },
      {
        name: 'Česká spořitelna, a.s.',
        tag: 'Česká spořitelna',
        type: 'Spoření Premier',
        interestAfterTax: '1 398,87 Kč',
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
        note: 'Pouze pro klienty segmentu Erste Premier.',
      },
      {
        name: 'Česká spořitelna, a.s.',
        tag: 'Česká spořitelna',
        type: 'Spoření České spořitelny (Plus)',
        interestAfterTax: '1 398,87 Kč',
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
        note: 'Podmínka: máte "Plus účet České spořitelny".',
      },
      {
        name: 'Česká spořitelna, a.s.',
        tag: 'Česká spořitelna',
        type: 'Spoření České spořitelny (Exclusive)',
        interestAfterTax: '1 398,87 Kč',
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
        note: 'Podmínka:<br/><br/>Patříte do segmentu Exclusive:<br/><br/>- pravidelně do ČS posíláte své příjmy v měsíční výši alespoň 45 000 Kč<br/>- nebo máte naspořeno nebo investováno \ufeff750 000 Kč nebo více<br/>- nebo jste si od ČS půjčili 1,5 mil Kč a více',
      },
      {
        name: 'Československá obchodní banka, a. s.',
        tag: 'ČSOB',
        type: 'Spoření s bonusem pro děti (+ účet)',
        interestAfterTax: '1 311,76 Kč',
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
        note: 'Podmínkou je vedení Plus Konta nebo Poštovního účtu.',
      },
      {
        name: 'Raiffeisenbank a.s. (Equa bank)',
        tag: 'Raiffeisenbank',
        type: 'Spořicí účet HIT',
        interestAfterTax: '1 290,01 Kč',
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
        note: 'Pro získání úrokové sazby 3 % p.a. je nutné 3x v měsíci zaplatit kartou, nebo mít v Equa bank investice min. hodnotě 50 000 Kč, jinak se sazba snižuje na 0,10 %.',
      },
      {
        name: 'Československá obchodní banka, a. s.',
        tag: 'ČSOB',
        type: 'Spoření s bonusem pro děti',
        interestAfterTax: '1 203,07 Kč',
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
        note: '<br/>',
      },
      {
        name: 'TRINITY BANK',
        tag: 'Ostatní',
        type: 'Spořicí účet Výhoda+',
        interestAfterTax: '1 107,59 Kč',
        table: [
          {
            from: 0,
            to: 0,
            value: 2.58,
          },
        ],
        interestRateFreq: 'měsíčně',
        note: '<br/>',
      },
      {
        name: 'UniCredit Bank',
        tag: 'UniCredit Bank',
        type: 'Spořicí účet Save',
        interestAfterTax: '1 071 Kč',
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
        note: '<br/>',
      },
      {
        name: 'Československá obchodní banka, a. s.',
        tag: 'ČSOB',
        type: 'Spoření s bonusem',
        interestAfterTax: '986,31 Kč',
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
        note: 'Po dosažení daného pásma je uvedenou sazbou úročen celý zůstatek účtu. Část zůstatku nad 1 000 000 Kč je však úročena sazbou 0,15 %. (Pozor, naše kalkulačka toto neumí přesně spočítat.)',
      },
      {
        name: 'TRINITY BANK',
        tag: 'Ostatní',
        type: 'Spořicí účet Úrok+',
        interestAfterTax: '762,24 Kč',
        table: [
          {
            from: 0,
            to: 30000000,
            value: 1.78,
          },
        ],
        interestRateFreq: 'denně',
        note: '<br/>',
      },
      {
        name: 'MONETA Money Bank',
        tag: 'Moneta',
        type: 'Spořicí účet Gold s úrokovým bonusem 2',
        interestAfterTax: '469,51 Kč',
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
        note: 'Podmínkou je vedení platebního účtu Genius Gold a měsíční příjem na něj min. 35 000 Kč.<br/><br/>A dále min. 500 000 Kč investovaných v MMB do podílových fondů.',
      },
      {
        name: 'Komerční banka, a.s.',
        tag: 'Komerční banka',
        type: 'KB Spořicí konto Bonus Invest',
        interestAfterTax: '425,9 Kč',
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
        note: 'Úroková sazba platí v případě, že vložíte prostředky do níže definovaných fondů na základě smlouvy uzavřené s Komerční bankou nebo v zastoupení Komerční bankou vedených v českých korunách nebo do níže definovaných smluv:<br/><br/>Amundi CR Dluhopisový Plus<br/>Amundi CR Balancovaný konzervativní<br/>KB Dluhopisový<br/>Amundi CR Akciový-Střední a východní Evropa<br/>KB PSA 2-Popular<br/>KB PSA 4-Popular<br/>KB Privátní správa aktiv 2-Exclusive<br/>KB Privátní správa aktiv 4-Exclusive<br/>KB Privátní správa aktiv 5D-Exclusive A<br/>KB Privátní správa aktiv 5D-Exclusive D<br/>Amundi Funds Euro Corporate Bond CZK<br/>Amundi Funds Euro High Yield Bond CZK<br/>Amundi Funds Euro High Yield Short Term Bond CZK<br/>Amundi Funds Global Aggregate Bond CZK<br/>First Eagle Amundi International Fund<br/>First Eagle Amundi Income Builder Fund<br/>Amundi Funds Emerging World Equity CZK<br/>Amundi Funds Equity Global Luxury and Lifestyle<br/>Amundi Funds Equity Global Resources<br/>Amundi Funds Japan Equity Value CZK<br/>Amundi Index MSCI North America<br/>KB PSA 5D-Popular A<br/>CPR Global Silver Age(CZK)<br/>CPR Invest - Global Disruptive Opportunities<br/>KB PSA Flexibilní - PSA Flexibilní - Exclusive<br/>KBI Water Fund<br/>Amundi Fund Solutions - Diversified Growth A ND HDG¨<br/>Amundi Fund Solutions - Conservative A ND HDG<br/>Amundi Solutions - Balanced A ND HDG<br/>Amundi Funds Pioneer US Equity Research Value CZK<br/>Amundi Funds Emerging Markets Local Currency Bond CZK<br/>Amundi Funds Top European Players CZK<br/>Realitní fond KB 3, KB Private Equity 3<br/>CPR Invest - Food For Generations<br/>Amundi CR Balancovaný<br/>Amundi Funds Global Aggreate Bond<br/>Amundi CR All-Star Selection<br/>Amundi Funds Absolute Return Multi-Strategy<br/>Amundi Funds Pioneer Global Equity A hgd<br/>CPR Invest – MedTech<br/>Amundi Funds Multi-Asset Sustainable Future<br/>Amundi Funds Polen Capital Global Growth<br/>CPR Invest - Global Resources<br/>CPR Invest - Global Lifestyles<br/>CPR Global Gold Mines<br/>Amundi Fund Solutions - Buy and Watch US High Yield Opportunities<br/><br/>Investiční živ. Pojištění Vital Invest<br/>Poj. Smlouva pro případ smrti nebo dožití (včetně var. Platinum i inv. strategie Exclusive<br/>Investiční živ. pojištění Brouček<br/>Poj. smlouva pro případ smrti nebo dožití ve prospěch pojištěného Kapitál. živ. pojištění Vital Premium<br/>Poj. smlouva pro případ smrti nebo dožití (kromě CZK také varianta v USD a EUR)<br/>Investiční životní pojištění Vital Platinum<br/><br/>U pojištění v cizích měnách se pro účely výpočtu nároku na Bonus použije kurz ČNB deviza střed platný v den sjednání pojištění.<br/><br/>Podmínkou založení je běžný účet u KB bez investiční historie.<br/><br/>Základní úrok (0-0,70 % p.a.) se připisuje čtvtletně, bonusový úrok (ten zbytek) pololetně.<br/><br/>Nezapomeňte, že za investování platíte poplatky.<br/><br/>Bonus je počítán:<br/>- z nižší z částek vkladu do vybraných investičních produktů za dané a předcházející pololetí<br/>- a nejnižšího zůstatku spořicího konta za dané pololetí.<br/>',
      },
      {
        name: 'MONETA Money Bank',
        tag: 'Moneta',
        type: 'Spořicí účet Gold s úrokovým bonusem 1',
        interestAfterTax: '298,31 Kč',
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
        note: 'Podmínkou je vedení platebního účtu Genius Gold a měsíční příjem na něj min. 35 000 Kč.',
      },
      {
        name: 'MONETA Money Bank',
        tag: 'Moneta',
        type: 'Spořicí účet Gold',
        interestAfterTax: '127,65 Kč',
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
        note: 'Podmínkou je vedení platebního účtu Genius Gold.',
      },
      {
        name: 'Česká spořitelna, a.s.',
        tag: 'Česká spořitelna',
        type: 'Spoření České spořitelny',
        interestAfterTax: '85,07 Kč',
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
        note: '<br/>',
      },
      {
        name: 'Raiffeisenbank a.s.',
        tag: 'Raiffeisenbank',
        type: 'Spořicí účet HIT PLUS',
        interestAfterTax: '42,52 Kč',
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
        note: '<br/>',
      },
      {
        name: 'Raiffeisenbank a.s. (Equa bank)',
        tag: 'Raiffeisenbank',
        type: 'Spořicí účet MAX',
        interestAfterTax: '42,52 Kč',
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
        note: '<br/>',
      },
      {
        name: 'UniCredit Bank',
        tag: 'UniCredit Bank',
        type: 'Spořicí účet Prima',
        interestAfterTax: '21,25 Kč',
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
        note: '<br/>',
      },
      {
        name: 'Oberbank',
        tag: 'Ostatní',
        type: 'Spořicí účet Limit',
        interestAfterTax: '4,25 Kč',
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
        note: 'Bez výpovědní lhůty',
      },
      {
        name: 'Oberbank',
        tag: 'Ostatní',
        type: 'Spořicí účet Speciál',
        interestAfterTax: '4,25 Kč',
        table: [
          {
            from: 0,
            to: 0,
            value: 0.01,
          },
        ],
        interestRateFreq: 'čtvrtletně',
        note: 'Úrokovou sazbu stanovuje každá pobočka individuálně. Kompetenci zvýšit ji má poradce a ředitel pobočky. Maximální dosažitelná sazba je 0,40 % p.a. pro vklad nad 1,5 mil. Kč.',
      },
      {
        name: 'Expobank',
        tag: 'Ostatní',
        type: 'Expo spořicí účet Premium',
        interestAfterTax: '0 Kč',
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
        note: '<br/>',
      },
      {
        name: 'Expobank',
        tag: 'Ostatní',
        type: 'Expo spořicí účet',
        interestAfterTax: '0 Kč',
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
        note: '<br/>',
      },
    ],
    scrapeDate: '2022-08-23T13:54:45.977Z',
    lastCheck: 'Poslední aktualizace: 11. 8. 2022',
  };

  return res.status(200).json(data);
};

export default handler;
