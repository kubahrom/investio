import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    id: '62f93037894f70af78749560',
    list: [
      {
        name: 'UniCredit Bank',
        type: 'Účet START, OPEN, TOP',
        interestRate: '5,5 %',
        interestAfterTax: '2 388,24 Kč',
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
        note: 'Jde o standardní běžný platební účet, který je otevřený jako druhý účet ke běžnému účtu typu START, OPEN nebo TOP (za ty tři jmenované se platí poplatek 0-299 Kč měsíčně podle typu účtu nebo splnění podmínek).Akce platí od 1. 7. 2022 do 30. 9. 2022 a jen pro nové klienty, kteří ještě nemají v UniCredit Bank účet.Úroková sazba v rámci akce platí do 30. 6. 2023.',
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
        note: 'Spořicí účet "Spoříto" = online založený účet pro nové klienty banky.Spořicí účet "Spoření" = účet založený na pobočce, nebo stávající klienti banky s nově založeným účtem (jakkoli).Jde však stále o jeden a ten samý typ spořicího účtu.Podmínky:- příjem na běžném účtu min. 20 000 Kč měsíčně- 5 plateb kartou měsíčně',
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
        note: 'Při překročení naspořené částky 100 000 Kč se CELÁ částka úročí sazbou 0,01 % p.a. do doby, než dojde k její snížení na limitní hranici.Máte možnost založit max. 8 těchto spořicích účtů.',
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
        note: 'Bezhotovostní platby lze posílat pouze na dva předem stanovené účty s možností změny těchto účtů 2x měsíčně. Část vkladu převyšující desetinásobek členského podílu se neúročí.Základní členský vklad je 1000 Kč a vrací se. Na vklad se uplatní tzv. "Pravidlo 1:10", ale členský vklad není pojištěn.Příklad: Na spoření ve výši 1 mil. Kč je potřeba vložit dalších 100 000 Kč do základního kapitálu družstva, jako neúročený a nepojištěný členský vklad.',
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
        note: 'Tip: Za založení NEO účtu dostanete od banky bonus 500 Kč. Stačí splnit jednoduché podmínky a využít platný promo kód Expobank na bonus 500 Kč (vygeneruje se automaticky po kliknutí na náš odkaz).Přečtěte si, jak to funguje.',
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
        note: '',
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
        note: '',
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
        note: 'Podmínky:Investovat do podílových fondů skupiny KBC v objemu min. 30 000 Kč s tím, že musíte uhradit minimálně 1% vstupní poplatek.Pro fondy- ČSOB Opatrný zodpovědný- ČSOB Premium Opatrný zodpovědný- ČSOB Odvážný zodpovědný a- ČSOB Premium Odvážný zodpovědnýplatí podmínka minimální uhrazené výše vstupního poplatku ve výši 0,5 %Spořit můžete maximálně tolik, kolik investujete (investice musí být stejná nebo vyšší než spoření).Výše částky investované do vybraných podílových fondů musí být stejná nebo vyšší, než je výše zůstatku na spořicím účtu.Akční úroková sazba platí rok od založení účtu.',
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
        note: '',
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
        note: 'Úroková sazba platí při splnění těchto podmínek:1. Máte CHYTRÝ účet nebo AKTIVNÍ účet nebo studentský účet:- alespoň 3 transakce debetní nebo kreditní kartou,- transakce musí být v daném měsíci i zaúčtované.2. Máte PRÉMIOVÝ účet:- měsíčně obrat 50 000 Kč v 1 nebo maximálně ve 2 transakcích. V daném měsíci banka sečte 2 nejvyšší příchozí transakce na účtu.3. Máte EXKLUZIVNÍ účet:- objem vašich vkladů a investic u Raiffeisenbank je min. 1 500 000 Kč měsíčně',
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
        note: '',
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
        note: 'Minimální zůstatek ani vklad není omezen při splnění jedné z podmínek:- investice ve výši min. 100 000 Kč- nebo jiný vklad ve výši min. 1 mil. Kč.Faktická výpovědní lhůta je 1 den.',
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
        note: 'Faktická výpovědní lhůta je 1 den.Minimální zůstatek je 1 mil. Kč.',
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
        note: '1. podmínka: Pravidelně investujete min. 300 Kč měsíčně z majetkového účtu České spořitelny.2. podmínka:Patříte do segmentu Exclusive:- pravidelně do ČS posíláte své příjmy v měsíční výši alespoň 45 000 Kč- nebo máte naspořeno nebo investováno \ufeff750 000 Kč nebo více- nebo jste si od ČS půjčili 1,5 mil Kč a více',
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
        note: '1. podmínka:Máte "Plus účet České spořitelny".2. podmínka:Pravidelně investujete min. 300 Kč měsíčně z majetkového účtu České spořitelny.',
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
        note: 'Úroková sazba platí za podmínky, že v daném kalendářním měsíci neodejde z tohoto účtu žádná platba (ani jako platba mezi spořicím a běžným účtem). Jinak se snižuje na 0,10 % p.a.',
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
        note: '',
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
        note: 'Podmínkou úrokové sazby je 5x měsíčně zaplatit platební kartou Air Bank vydanou k běžnému účtu. V opačném případě je úroková sazba 0 % p.a.',
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
        note: '',
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
        note: 'Měsíčně můžete provést max. 4 odchozí platby/ hotovostní výběry.Úrokové sazby platí od 1. 5. 2022.',
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
        note: 'Podmínkou je používání mobilní aplikace ČSOB Smart (mobilní bankovnictví).Po dosažení daného pásma je uvedenou sazbou úročen celý zůstatek účtu. Část zůstatku nad 1 000 000 Kč je však úročena sazbou 0,15 %. (Pozor, naše kalkulačka toto neumí přesně spočítat.)',
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
        note: 'Podmínkou je vedení Plus Konta nebo Poštovního účtu. A k tomu měsíční investice min. 1000 Kč do podílových fondů ČSOB nebo KBC.',
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
        note: '',
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
        note: 'Pouze pro klienty segmentu Erste Premier.',
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
        note: 'Podmínka: máte "Plus účet České spořitelny".',
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
        note: 'Podmínka:Patříte do segmentu Exclusive:- pravidelně do ČS posíláte své příjmy v měsíční výši alespoň 45 000 Kč- nebo máte naspořeno nebo investováno \ufeff750 000 Kč nebo více- nebo jste si od ČS půjčili 1,5 mil Kč a více',
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
        note: 'Podmínkou je vedení Plus Konta nebo Poštovního účtu.',
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
        note: 'Pro získání úrokové sazby 3 % p.a. je nutné 3x v měsíci zaplatit kartou, nebo mít v Equa bank investice min. hodnotě 50 000 Kč, jinak se sazba snižuje na 0,10 %.',
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
        note: '',
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
        note: '',
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
        note: '',
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
        note: 'Po dosažení daného pásma je uvedenou sazbou úročen celý zůstatek účtu. Část zůstatku nad 1 000 000 Kč je však úročena sazbou 0,15 %. (Pozor, naše kalkulačka toto neumí přesně spočítat.)',
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
        note: '',
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
        note: 'Podmínkou je vedení platebního účtu Genius Gold a měsíční příjem na něj min. 35 000 Kč.A dále min. 500 000 Kč investovaných v MMB do podílových fondů.',
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
        note: 'Úroková sazba platí v případě, že vložíte prostředky do níže definovaných fondů na základě smlouvy uzavřené s Komerční bankou nebo v zastoupení Komerční bankou vedených v českých korunách nebo do níže definovaných smluv:Amundi CR Dluhopisový PlusAmundi CR Balancovaný konzervativníKB DluhopisovýAmundi CR Akciový-Střední a východní EvropaKB PSA 2-PopularKB PSA 4-PopularKB Privátní správa aktiv 2-ExclusiveKB Privátní správa aktiv 4-ExclusiveKB Privátní správa aktiv 5D-Exclusive AKB Privátní správa aktiv 5D-Exclusive DAmundi Funds Euro Corporate Bond CZKAmundi Funds Euro High Yield Bond CZKAmundi Funds Euro High Yield Short Term Bond CZKAmundi Funds Global Aggregate Bond CZKFirst Eagle Amundi International FundFirst Eagle Amundi Income Builder FundAmundi Funds Emerging World Equity CZKAmundi Funds Equity Global Luxury and LifestyleAmundi Funds Equity Global ResourcesAmundi Funds Japan Equity Value CZKAmundi Index MSCI North AmericaKB PSA 5D-Popular ACPR Global Silver Age(CZK)CPR Invest - Global Disruptive OpportunitiesKB PSA Flexibilní - PSA Flexibilní - ExclusiveKBI Water FundAmundi Fund Solutions - Diversified Growth A ND HDG¨Amundi Fund Solutions - Conservative A ND HDGAmundi Solutions - Balanced A ND HDGAmundi Funds Pioneer US Equity Research Value CZKAmundi Funds Emerging Markets Local Currency Bond CZKAmundi Funds Top European Players CZKRealitní fond KB 3, KB Private Equity 3CPR Invest - Food For GenerationsAmundi CR BalancovanýAmundi Funds Global Aggreate BondAmundi CR All-Star SelectionAmundi Funds Absolute Return Multi-StrategyAmundi Funds Pioneer Global Equity A hgdCPR Invest – MedTechAmundi Funds Multi-Asset Sustainable FutureAmundi Funds Polen Capital Global GrowthCPR Invest - Global ResourcesCPR Invest - Global LifestylesCPR Global Gold MinesAmundi Fund Solutions - Buy and Watch US High Yield OpportunitiesInvestiční živ. Pojištění Vital InvestPoj. Smlouva pro případ smrti nebo dožití (včetně var. Platinum i inv. strategie ExclusiveInvestiční živ. pojištění BroučekPoj. smlouva pro případ smrti nebo dožití ve prospěch pojištěného Kapitál. živ. pojištění Vital PremiumPoj. smlouva pro případ smrti nebo dožití (kromě CZK také varianta v USD a EUR)Investiční životní pojištění Vital PlatinumU pojištění v cizích měnách se pro účely výpočtu nároku na Bonus použije kurz ČNB deviza střed platný v den sjednání pojištění.Podmínkou založení je běžný účet u KB bez investiční historie.Základní úrok (0-0,70 % p.a.) se připisuje čtvtletně, bonusový úrok (ten zbytek) pololetně.Nezapomeňte, že za investování platíte poplatky.Bonus je počítán:- z nižší z částek vkladu do vybraných investičních produktů za dané a předcházející pololetí- a nejnižšího zůstatku spořicího konta za dané pololetí.',
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
        note: 'Podmínkou je vedení platebního účtu Genius Gold a měsíční příjem na něj min. 35 000 Kč.',
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
        note: 'Podmínkou je vedení platebního účtu Genius Gold.',
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
        note: '',
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
        note: '',
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
        note: '',
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
        note: '',
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
        note: 'Bez výpovědní lhůty',
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
        note: 'Úrokovou sazbu stanovuje každá pobočka individuálně. Kompetenci zvýšit ji má poradce a ředitel pobočky. Maximální dosažitelná sazba je 0,40 % p.a. pro vklad nad 1,5 mil. Kč.',
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
        note: '',
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
        note: '',
      },
    ],
    scrapeDate: '2022-08-14T17:26:14.752Z',
  };

  return res.status(200).json(data);
};

export default handler;
