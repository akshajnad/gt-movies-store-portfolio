# GT Movies Store Portfolio

A static, single-page portfolio for Akshaj Nadimpalli's Django 5 GT Movies Store course project. It is intentionally separate from the Django application and is ready for GitHub Pages.

## Live application

The completed Django application is available at <https://akshajnadn.pythonanywhere.com/>.

## Replace screenshot placeholders

Add real screenshots under `assets/screenshots/` using the existing filenames (`home.svg`, `movies-search.svg`, `movie-reviews.svg`, `cart.svg`, `orders.svg`, and `admin.svg`) or update the matching `src` values in `index.html`. Keep the supplied `width` and `height` attributes to prevent layout shift.

## Video demonstration

The supplied screen recording was converted to a web-friendly H.264 MP4 and is embedded with native browser controls at `assets/video/gt-movies-store-demo.mp4`. Its poster image is stored beside it. Replace those two files with the same filenames to update the recording without changing the page markup.

## Preview locally

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Deploy with GitHub Pages

```bash
gh auth login
git init
git add .
git commit -m "Create GT Movies Store portfolio"
git branch -M main
gh repo create gt-movies-store-portfolio --public --source=. --remote=origin --push
gh api -X POST repos/akshajnad/gt-movies-store-portfolio/pages -f 'source[branch]=main' -f 'source[path]=/'
```

If the Pages API reports that Pages is already configured, open the repository's **Settings → Pages** and confirm **Deploy from a branch**, `main`, and `/ (root)`.

After `https://akshajnad.github.io/gt-movies-store-portfolio/` returns successfully, create the course submission file from this directory:

```bash
printf '%s\n' 'https://akshajnad.github.io/gt-movies-store-portfolio/' > portfolio.txt
```
