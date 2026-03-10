# Fantasy League HQ

A fantasy baseball league stats & visualizations site.

## Project Structure

```
fantasy-league-site/
├── server.js              # Express server (entry point)
├── package.json
├── data/
│   └── rosters.json       # League roster data
├── public/
│   ├── index.html         # Homepage
│   ├── 404.html           # 404 page
│   ├── css/
│   │   └── main.css       # Shared styles
│   ├── js/                # Shared scripts (future use)
│   └── pages/
│       └── nationalities.html   # Nationality breakdown charts
```

## Local Development

```bash
npm install
npm start
# Open http://localhost:3000
```

## Deploy to Railway

### Option 1: Via GitHub (recommended)

1. Push this repo to GitHub
2. Go to [railway.app](https://railway.app) and sign in
3. Click **"New Project"** → **"Deploy from GitHub repo"**
4. Select your repo
5. Railway auto-detects Node.js and runs `npm start`
6. Click **Settings** → **Networking** → **Generate Domain** to get your public URL

### Option 2: Via Railway CLI

```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

## Adding New Pages

1. Create a new HTML file in `public/pages/`
2. Add a route in `server.js`:
   ```js
   app.get('/your-page', (req, res) => {
     res.sendFile(path.join(__dirname, 'public', 'pages', 'your-page.html'));
   });
   ```
3. Add a nav link in the HTML files
4. Add a card on the homepage

## API Endpoints

- `GET /api/rosters` — Returns league roster summary

## Tech Stack

- **Server**: Express.js
- **Charts**: Chart.js (loaded via CDN)
- **Fonts**: Oswald + Barlow (Google Fonts)
- **Hosting**: Railway
