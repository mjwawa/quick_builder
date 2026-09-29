# Quick Builder

**Kolorowa gra w układanie klocków dla dzieci (7–9 lat).** Dziecko patrzy na wzór i przeciąga klocki na pole budowy. Buduje od dołu do góry, na czas i bez pomyłek.

▶️ **Zagraj:** https://mjwawa.github.io/quick-builder/

![Quick Builder – gra na komputerze](screenshots/desktop.png)

## Jak grać

1. Wybierz kategorię i planszę.
2. Popatrz na wzór – tak ma wyglądać budowla.
3. Przeciągnij klocek na pole albo dotknij klocka, a potem jego miejsca.
4. Buduj od dołu do góry – klocek musi na czymś stać. Zła kolejność? Klocek wraca na swoje miejsce.
5. Szybko i bez pomyłek = 3 gwiazdki. Po 3 pomyłkach z rzędu pojawia się podpowiedź.

## Co jest w grze

- **Kategorie po 10 plansz**, od najłatwiejszej (ok. 8 klocków) do najtrudniejszej (ok. 27 klocków). Plansze w kategorii odblokowują się po kolei.
- **3 poziomy trudności:**
  - Łatwy – kolorowy wzór;
  - Średni – szara sylwetka, bez podziału na klocki;
  - Trudny – wzór widać tylko przed startem, trzeba go zapamiętać.
- **Dwa języki:** polski i angielski, z przełącznikiem w grze.
- **Komputer, tablet i telefon:** myszka albo palec. Na telefonie gra działa w poziomie.
- **Aplikacja (PWA):** instaluje się jednym przyciskiem na iPhonie, iPadzie, Androidzie i komputerze. Działa na pełnym ekranie i bez internetu, sama się aktualizuje, nie zbiera ani nie wysyła żadnych danych.
- Dźwięki, konfetti, rekordy i gwiazdki dla każdej planszy.

## Kategorie

| # | Kategoria | Stan |
|---|---|---|
| 1 | Budowle | ✅ 10/10 |
| 2 | Maszyny budowlane | wkrótce |
| 3 | Pojazdy | ✅ 10/10 |
| 4 | Farma | 1/10 |
| 5 | Zoo i dzikie zwierzęta | wkrótce |
| 6 | Podwodny świat | wkrótce |
| 7 | Kosmos | 1/10 |
| 8 | Plac zabaw i park | wkrótce |
| 9 | Miasto | wkrótce |
| 10 | Dinozaury | wkrótce |

<p>
  <img src="screenshots/phone.png" alt="Gra na telefonie w poziomie" width="49%">
  <img src="screenshots/categories.png" alt="Wybór kategorii" width="49%">
</p>

## Instalacja

Otwórz https://mjwawa.github.io/quick-builder/ i stuknij **Zainstaluj grę na ekranie** na ekranie powitalnym.

- **Android, komputer (Chrome/Edge):** otworzy się systemowe okno instalacji.
- **iPhone/iPad (Safari):** **Udostępnij** (albo najpierw **⋯**) → **Do ekranu początkowego** → **Dodaj**.
- **Mac (Safari):** **Plik → Dodaj do Docka**.

Uruchom grę raz z internetem – potem działa także offline.

Postęp (odblokowane plansze, gwiazdki) zapisuje się na danym urządzeniu. Usunięcie ikony z ekranu usuwa też postęp.

## Pliki w repozytorium

| Plik | Po co |
|---|---|
| `index.html` | cała gra (HTML, CSS i JavaScript w jednym pliku) |
| `manifest.webmanifest` | nazwa, ikona i ustawienia apki |
| `sw.js` | tryb offline (pamięć podręczna plików gry) |
| `icons/` | ikony apki (180, 192, 512 px + wersja 1024 px) |
| `fonts/` | czcionki Grandstander i Nunito wbudowane w grę |
| `splash/` | ekrany startowe iPhone/iPad |
| `screenshots/` | zrzuty ekranu do tego opisu |

## Publikacja i aktualizacja (GitHub Pages)

1. Wrzuć pliki do repozytorium `quick-builder` (gałąź `main`, folder główny).
2. **Settings → Pages** → *Deploy from a branch* → `main` / `(root)` → **Save**.
3. Przy każdej nowej wersji podmień pliki w repozytorium. Zainstalowana apka pobierze nową wersję w tle i pokaże komunikat „Jest nowa wersja gry! – Odśwież”.

---

## English

**Quick Builder is a colorful block-building game for kids aged 7–9.** Look at the pattern, drag the blocks onto the building area and build from the bottom up: fast and without mistakes.

▶️ **Play:** https://mjwawa.github.io/quick-builder/

- Categories with 10 levels each, from about 8 to about 27 blocks.
- 3 difficulty modes: color pattern, gray silhouette, or build from memory.
- Polish and English, with a language switch in the game.
- Works with a mouse or a finger. On phones, play in landscape.
- Installable web app (PWA): one-tap install on iPhone, iPad, Android and desktop; full screen, works offline, updates itself, collects no data.

**Install:** open the link and tap *Install the game* on the welcome screen (on iPhone/iPad: Share → *Add to Home Screen*).
