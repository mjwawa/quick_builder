# Quick Builder – gra jako aplikacja (PWA)

Ten folder to gotowa aplikacja webowa (PWA). Po instalacji działa z ikony na ekranie – na pełnym ekranie, bez paska przeglądarki i bez internetu.
Działa na iPhonie, iPadzie, Androidzie oraz komputerze (Chrome, Edge, Safari na Macu).
Trzeba ją raz wrzucić do internetu (adres https), a potem zainstalować na urządzeniu.

## Co jest w folderze

| Plik | Po co |
|---|---|
| `index.html` | gra (PL/EN, kategorie po 10 plansz, 3 poziomy trudności) |
| `manifest.webmanifest` | nazwa i ikona apki |
| `sw.js` | tryb offline – gra działa bez internetu po pierwszym uruchomieniu |
| `icons/` | ikony (180 px dla iPhone'a, 192/512 px, 1024 px na przyszłość do App Store) |
| `fonts/` | czcionki wbudowane w apkę – nic nie jest pobierane z zewnątrz |
| `splash/` | ekrany startowe dla iPhone'ów i iPadów (w pionie i w poziomie) |
| `screenshots/` | zrzuty ekranu do README i do okna instalacji na Androidzie |

## Krok 1: wrzuć folder do internetu (wybierz jedną opcję)

### Opcja A – GitHub Pages (darmowe, na stałe) – polecam

1. Załóż konto na github.com (jeśli nie masz).
2. Kliknij **New repository** → nazwa np. `quick-builder` → **Public** → **Create repository**.
3. Kliknij **uploading an existing file** i przeciągnij **zawartość** tego folderu (pliki i foldery `icons`, `fonts` – nie sam folder).
4. Kliknij **Commit changes**.
5. Wejdź w **Settings → Pages** → *Source*: **Deploy from a branch** → *Branch*: **main**, folder **/ (root)** → **Save**.
6. Po 1–2 minutach gra będzie pod adresem: `https://TWÓJ-LOGIN.github.io/quick-builder/`

### Opcja B – Netlify Drop (najszybciej)

1. Wejdź na app.netlify.com/drop i przeciągnij ten folder.
2. Załóż darmowe konto i „przejmij” stronę – bez konta adres jest chroniony tymczasowym hasłem.
3. Dostaniesz adres typu `https://nazwa.netlify.app`.

## Krok 2: zainstaluj grę

Na ekranie powitalnym jest przycisk **Zainstaluj grę na ekranie**:

- **Android, komputer (Chrome/Edge):** przycisk od razu otwiera systemowe okno instalacji → **Zainstaluj**.
- **iPhone/iPad:** przycisk pokazuje instrukcję: **Udostępnij** (jeśli go nie widać – najpierw **⋯**) → **Do ekranu początkowego** → **Dodaj**.
- **Mac (Safari):** menu **Plik → Dodaj do Docka**.

Po instalacji przycisk znika. Uruchom grę raz przy włączonym internecie – potem działa także offline.

## Aktualizacje

Po zmianach w grze podmień pliki w repozytorium (albo przeciągnij folder ponownie na Netlify).
Zainstalowana apka sama pobierze nową wersję w tle i pokaże komunikat **„Jest nowa wersja gry! – Odśwież”**.

## Warto wiedzieć

- Postęp (odblokowane plansze, gwiazdki) zapisuje się w apce na danym urządzeniu. Usunięcie ikony z ekranu usuwa też postęp.
- Każde urządzenie (iPhone dziecka, iPad) ma własny postęp.
- W trakcie gry ekran nie gaśnie (gaśnie normalnie po 2 minutach bez dotyku).
- Apka prosi system o trwały zapis, żeby postęp nie zniknął przy porządkach w pamięci.
- Na iPhonie nie działają wibracje – to ograniczenie Apple dla stron/apek webowych. Zadziałają dopiero w wersji z App Store.
