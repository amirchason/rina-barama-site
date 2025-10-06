# 🚀 מדריך פריסה (Deployment Guide)

## 📋 הכנה לפריסה

### 1. בדיקות לפני פריסה

```bash
# בדקו שהכל עובד מקומית
npm run dev

# בנו את הפרויקט
npm run build

# בדקו את גרסת הפרודקשן
npm run start
```

### 2. משתני סביבה

צרו קובץ `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://www.rinabarama.co.il
NEXT_PUBLIC_PHONE=0505656582
NEXT_PUBLIC_WHATSAPP=972505656582
```

## 🌐 פריסה ל-Vercel (מומלץ)

### למה Vercel?
- ✅ אופטימיזציה אוטומטית לNext.js
- ✅ CDN גלובלי
- ✅ SSL חינם
- ✅ פריסה אוטומטית מGit
- ✅ תמיכה בעברית/RTL מושלמת

### שלבי פריסה

#### 1. התקנה ראשונית

```bash
# התקינו Vercel CLI
npm i -g vercel

# התחברו לחשבון Vercel
vercel login
```

#### 2. פריסה ראשונה

```bash
# פרסמו לסביבת הפיתוח
vercel

# פרסמו לפרודקשן
vercel --prod
```

#### 3. התאמת דומיין

1. היכנסו ל-Vercel Dashboard
2. Settings → Domains
3. הוסיפו `www.rinabarama.co.il`
4. עדכנו DNS records:

```
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

#### 4. משתני סביבה ב-Vercel

```bash
# דרך CLI
vercel env add NEXT_PUBLIC_SITE_URL production

# או דרך Dashboard:
Settings → Environment Variables → Add
```

### 5. אופטימיזציה

הוסיפו ל-`vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/sitemap.xml",
      "destination": "/api/sitemap"
    }
  ]
}
```

## 🔵 פריסה ל-Netlify

### 1. התקנה

```bash
npm i -g netlify-cli
netlify login
```

### 2. קובץ `netlify.toml`

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NEXT_TELEMETRY_DISABLED = "1"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[redirects]]
  from = "https://rinabarama.co.il/*"
  to = "https://www.rinabarama.co.il/:splat"
  status = 301
  force = true
```

### 3. פריסה

```bash
# פריסה לפרודקשן
netlify deploy --prod
```

## 🐳 פריסה עם Docker

### 1. Dockerfile

```dockerfile
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### 2. docker-compose.yml

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_SITE_URL=https://www.rinabarama.co.il
    restart: unless-stopped
```

### 3. הרצה

```bash
# בנייה
docker build -t rina-barama-site .

# הרצה
docker run -p 3000:3000 rina-barama-site

# או עם docker-compose
docker-compose up -d
```

## ☁️ פריסה ל-VPS (Ubuntu/Debian)

### 1. הכנת השרת

```bash
# עדכון מערכת
sudo apt update && sudo apt upgrade -y

# התקנת Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# התקנת PM2
sudo npm install -g pm2
```

### 2. העלאת הקוד

```bash
# דרך Git
git clone https://github.com/yourusername/rina-barama-site.git
cd rina-barama-site

# או דרך rsync
rsync -avz --exclude 'node_modules' ./ user@server:/var/www/rinabarama/
```

### 3. בנייה והרצה

```bash
# התקנת dependencies
npm ci --production

# בנייה
npm run build

# הרצה עם PM2
pm2 start npm --name "rina-barama" -- start
pm2 save
pm2 startup
```

### 4. Nginx Configuration

```nginx
server {
    listen 80;
    server_name www.rinabarama.co.il rinabarama.co.il;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Cache static files
    location /_next/static {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
```

### 5. SSL עם Let's Encrypt

```bash
# התקנת Certbot
sudo apt install certbot python3-certbot-nginx

# קבלת תעודה
sudo certbot --nginx -d www.rinabarama.co.il -d rinabarama.co.il

# חידוש אוטומטי
sudo certbot renew --dry-run
```

## 📊 ניטור וביצועים

### 1. Google Analytics

```typescript
// app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

### 2. Google Search Console

1. אימות בעלות על הדומיין
2. שליחת Sitemap: `https://www.rinabarama.co.il/sitemap.xml`
3. בדיקת אינדקס
4. ניטור ביצועים

### 3. ניטור זמינות

- **UptimeRobot:** https://uptimerobot.com
- **Pingdom:** https://pingdom.com
- **StatusCake:** https://statuscake.com

## 🔍 בדיקות SEO אחרי פריסה

### רשימת בדיקות

- [ ] האתר עולה ב-HTTPS
- [ ] Sitemap.xml נגיש
- [ ] Robots.txt נגיש
- [ ] Meta tags מוצגים נכון
- [ ] Open Graph פועל (בדיקה בFacebook Debugger)
- [ ] Schema.org מוצג נכון (בדיקה בGoogle Rich Results Test)
- [ ] מהירות טעינה טובה (Google PageSpeed Insights)
- [ ] Mobile-friendly (Google Mobile-Friendly Test)
- [ ] כל הקישורים עובדים
- [ ] התמונות נטענות נכון

### כלים לבדיקה

```bash
# Lighthouse
npm run build
npx lighthouse https://www.rinabarama.co.il --view

# Bundle Analyzer
npm install -D @next/bundle-analyzer
```

## 🔄 עדכונים רציפים (CI/CD)

### GitHub Actions

צרו `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID}}
          vercel-project-id: ${{ secrets.PROJECT_ID}}
          vercel-args: '--prod'
```

## 🎯 צ'קליסט סופי לפריסה

- [ ] בדיקת Build מקומית
- [ ] משתני סביבה מוגדרים
- [ ] DNS מוגדר נכון
- [ ] SSL פעיל
- [ ] Sitemap נשלח לGoogle
- [ ] Google Analytics פעיל
- [ ] כל הקישורים עובדים
- [ ] בדיקת Mobile
- [ ] בדיקת RTL
- [ ] בדיקת Hebrew fonts
- [ ] WhatsApp integration עובד
- [ ] טופס הזמנות עובד
- [ ] Backup הוגדר

## 🆘 פתרון בעיות נפוצות

### בעיה: התמונות לא נטענות

```javascript
// next.config.ts
images: {
  domains: ['images.unsplash.com', 'source.unsplash.com'],
  unoptimized: true, // אם יש בעיה עם אופטימיזציה
}
```

### בעיה: RTL לא עובד

```html
<!-- וודאו שיש -->
<html dir="rtl" lang="he">
```

### בעיה: Fonts בעברית לא נטענים

```typescript
// וודאו שהוספתם subsets
const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
})
```

---

**בהצלחה עם הפריסה! 🚀**

צריכים עזרה? צרו קשר ב-GitHub Issues
