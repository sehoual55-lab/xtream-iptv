# xtream-iptv.store — Vercel Deployment (Free SSL)

Vercel is the ideal host for Next.js: free automatic HTTPS/SSL, global CDN.
Keep the domain at Namecheap and point it to Vercel.

## 1) Put the project on Vercel (via GitHub)
1. Create a free github.com account.
2. New repository (e.g. `xtream-iptv`), private is fine.
3. On the empty repo click "uploading an existing file" and drag in the
   CONTENTS of this UNZIPPED folder (`app`, `components`, `config`, `data`,
   `lib`, `public`, `package.json`, `next.config.mjs`, etc.) — NOT node_modules,
   NOT the zip. Commit changes.
4. Go to vercel.com → sign in with GitHub → Add New → Project → Import this repo.
5. Vercel detects Next.js automatically → click Deploy.

## 2) TMDB key (optional, already built-in)
Vercel → Project → Settings → Environment Variables:
  TMDB_API_KEY = eb88f8554c5c594b1b82a59672ee98f4
Then Redeploy.

## 3) Connect xtream-iptv.store
1. Vercel → Project → Settings → Domains → add `xtream-iptv.store`.
2. Vercel shows the DNS records (usually A `@ → 76.76.21.21` and
   CNAME `www → cname.vercel-dns.com`).
3. Namecheap → Domain List → Manage → Advanced DNS. If DNS Type is
   "Namecheap Web Hosting DNS", click "Change DNS Type" → choose
   "Namecheap BasicDNS". Then under Host Records delete the default
   parking/redirect records and add:
     - A Record   | Host @   | Value 76.76.21.21        | Automatic
     - CNAME      | Host www | Value cname.vercel-dns.com | Automatic
   Save All Changes.
4. Back in Vercel click Refresh — it turns Valid and free SSL is issued.

Free Vercel "Hobby" plan is enough for this site.
