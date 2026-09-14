# GT Movies Store Portfolio

A static, single-page portfolio for Akshaj Nadimpalli's Django 5 GT Movies Store course project. It is intentionally separate from the Django application and is ready for GitHub Pages.

## Replace the live application placeholder

Open `index.html` and replace both instances of the disabled live-project link:

```html
<a class="button button-disabled" role="link" aria-disabled="true" data-placeholder="DEPLOYED_APP_URL">View Live Project</a>
```

with:

```html
<a class="button" href="https://YOUR-PYTHONANYWHERE-URL" target="_blank" rel="noreferrer">View Live Project <span aria-hidden="true">↗</span></a>
```

Then remove or update the nearby “Live link pending” note.

## Replace screenshot placeholders

Add real screenshots under `assets/screenshots/` using the existing filenames (`home.svg`, `movies-search.svg`, `movie-reviews.svg`, `cart.svg`, `orders.svg`, and `admin.svg`) or update the matching `src` values in `index.html`. Keep the supplied `width` and `height` attributes to prevent layout shift.

## Preview locally

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Deploy with GitHub Pages

```bash
git init
git add .
git commit -m "Create GT Movies Store portfolio"
git branch -M main
gh repo create gt-movies-store-portfolio --public --source=. --remote=origin --push
gh api -X POST repos/akshajnad/gt-movies-store-portfolio/pages -f source[branch]=main -f source[path]=/
```

If the Pages API reports that Pages is already configured, open the repository's **Settings → Pages** and confirm **Deploy from a branch**, `main`, and `/ (root)`.
