# Jekyll Dokumentace - Docker Spusteni

Tento projekt je pripraveny pro lokalni beh pres Docker.

docker run --rm -it -p 4000:4000 -p 35729:35729 -v "D:/Work/CSOB/jekyll-test:/srv/jekyll" jekyll/jekyll:4 sh -c "bundle install; bundle exec jekyll serve --host 0.0.0.0 --livereload --livereload-port 35729 --force_polling"

## Pozadavky

- Nainstalovany Docker Desktop
- Volny port 4000

## Spusteni lokalniho serveru

1. Otevri terminal v korenu repozitare.
2. Spust server timto prikazem (watch + live reload):

```powershell
docker run --rm -it -p 4000:4000 -p 35729:35729 -v "D:/Work/CSOB/jekyll-test:/srv/jekyll" jekyll/jekyll:4 sh -c "bundle install; bundle exec jekyll serve --host 0.0.0.0 --livereload --force_polling"
```

3. Otevri stranku v prohlizeci:

```text
http://localhost:4000
```

Jekyll serve automaticky sleduje zmeny souboru a pregeneruje stranku.
Volba --livereload navic posle refresh do browseru automaticky.

## Alternativa s aktualni slozkou

Pokud jsi uz v koreni projektu, muzes pouzit i variantu s aktualni cestou:

```powershell
docker run --rm -it -p 4000:4000 -p 35729:35729 -v "${PWD}:/srv/jekyll" jekyll/jekyll:4 sh -c "bundle install; bundle exec jekyll serve --host 0.0.0.0 --livereload --force_polling"
```

## Jednorazovy build bez serveru

```powershell
docker run --rm -v "D:/Work/CSOB/jekyll-test:/srv/jekyll" jekyll/jekyll:4 sh -c "bundle install; bundle exec jekyll build"
```

Vystup se vygeneruje do slozky _site.

## Zastaveni serveru

V terminalu stiskni Ctrl+C.

## Nejbeznejsi problemy

- Chyba obsazeneho portu 4000:
  zmen mapovani treba na -p 4001:4000 a otevri http://localhost:4001.
- Live reload nereaguje:
  over, ze mapujes i port 35729 a ze mas v prikazu --livereload.
- Prvni spusteni trva dele:
  Docker stahuje image a bundler instaluje zavislosti.

## Konfigurace karet (novy model)

Karta ma 3 vrstvy pod sebou:

1. Hlavicka: nazev + icon nebo icon_image
2. Primarni tlacitka: pole buttons (0 az 6)
3. Vedlejsi odkazy: pole secondary_links (0 az N)

Minimalni priklad jedne karty v _data/docs_hub.yml:

```yaml
tools:
  - name: GitHub
    icon: GH
    icon_image: /assets/logo/github-logo.png
    buttons:
      - label: TDA
        icon_image: /assets/logo/github-logo.png
        color: "#111827"
        url: "https://example.com/development/github/tda"
        external: true
      - label: PRO
        icon: P
        color: "#374151"
        url: "https://example.com/development/github/pro"
        external: true
    secondary_links:
      - label: Repositories
        icon: GH
        url: "https://example.com/development/github/repositories"
      - label: Actions guide
        icon: CI
        url: "https://example.com/development/github/actions-guide"
```

Poznamky:

- Primarni tlacitka renderuji maximalne 6 polozek na kartu.
- button.color nastavuje barvu konkretniho tlacitka.
- Pro ikony muzes pouzit icon (text/emoji) nebo icon_image (cesta k obrazku).
- Trailing ikona u secondary_links je vzdy jednotna (external styl).
- Externi odkaz se urci automaticky podle URL (obsahuje http:// nebo https://).
