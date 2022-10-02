# Investio | React, NextJS

Aplikace pro zobrazení a kalkulaci informací dostupných o spořicích účtů aktuálních na trhu (později termínovaných vkladů a dalších produktů).

###### Motivace

V rámci světové situace s proměnlivou inflací, může znamenat zejména pro spíše konzervativnější jedince, kteří využívají nízko rizikové produkty bank jako jsou spořicí účty, či temínované vklady průběžné sledování aktuálních nabídek na trhu.

Aplikace s automatizovaným odesíláním notifikací se změnou na trhu poskytovaných nabídek. Především ty, u kterých má uživatel účet nebo nabídky, které jsou v danou dobu lepší než jejich.

Data nejsou nikde přehledně zobrazeny se všemi důležitými údaji najednou. Co se týká stránky měšec.cz, tak u něho je potřeba proklikávat několik stránek a tabulek, aby se dostal člověk k potřebným informacím. Jelikož nelze předem stanovit jak jednotlivé banky zareagují na danou situaci případným vytvářením nových produktů, či zánikem starých nelze tuto činnost zcela automatizovat. Proto jsou data brány z webové stránky [mesec.cz](https://mesec.cz/), kde jsou data ručně aktualizovány redakcí.

## Plán funkcionalit

- Vytvoření základní API s daty ✔️

- Zobrazení aktuálně dostupných dat (hromadně) ✔️

- Ukládání dat (MongoDB, Prisma) ✔️

- Podrobnější API s tabulkou pásmových úročení ✔️

- Filtrování na FE ✔️

- Kalkulace úroku bez daně na základě úrokových pásem ✔️

- Řazení podle spočítaných dat ✔️

- Přihlašování / Registrace (Next Auth) ✔️

- Možnost obnovení dat, pokud jsou starší než dva dny (currently in progress) 🚧

- Zobrazení aktuálně dostupných dat (pro každou nabídku zvlášť) 🚧

- Emailová notifikace v případě nové nabídky (pravděpodobně pomocí CRON jobs Github Actions) 🚧

- Emailová notifikace v případě nové nabídky u pouze nabídek lepších než vybrané produkty 🚧

- Kalkulačka 🚧

- Přidání dalších produktů 🚧

- Polish UI 🚧
