# Quick Builder – jak zrobić z gry apkę na iPhone

Ten folder to gotowa gra w wersji „apki”. Na iPhonie działa z ikony na ekranie, na pełnym ekranie i bez internetu.
Trzeba ją raz wrzucić do internetu (adres https), a potem dodać do ekranu iPhone'a.

## Co jest w folderze

| Plik | Po co |
|---|---|
| `index.html` | gra (PL/EN, 10 plansz, 3 poziomy trudności) |
| `manifest.webmanifest` | nazwa i ikona apki |
| `sw.js` | tryb offline – gra działa bez internetu po pierwszym uruchomieniu |
| `icons/` | ikony (180 px dla iPhone'a, 192/512 px, 1024 px na przyszłość do App Store) |
| `fonts/` | czcionki wbudowane w apkę – nic nie jest pobierane z zewnątrz |

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

## Krok 2: dodaj grę do ekranu iPhone'a

1. Na iPhonie otwórz adres gry w **Safari**.
2. Stuknij **Udostępnij** (kwadrat ze strzałką) → **Do ekranu początkowego** → **Dodaj**.
3. Na ekranie pojawi się ikona **Quick Builder**. Uruchom ją raz przy włączonym internecie – potem działa także offline.

Tak samo na iPadzie. Na Androidzie: Chrome → menu ⋮ → **Zainstaluj aplikację**.

## Aktualizacje

Po zmianach w grze podmień pliki w repozytorium (albo przeciągnij folder ponownie na Netlify).
Apka na iPhonie pobierze nową wersję w tle – zobaczysz ją przy kolejnym uruchomieniu.

## Warto wiedzieć

- Postęp (odblokowane plansze, gwiazdki) zapisuje się w apce na danym urządzeniu. Usunięcie ikony z ekranu usuwa też postęp.
- Każde urządzenie (iPhone dziecka, iPad) ma własny postęp.
- Na iPhonie nie działają wibracje – to ograniczenie Apple dla stron/apek webowych. Zadziałają dopiero w wersji z App Store.
