<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

## Project moved to D:\ali-mobile-zone

The project was moved from `C:\Users\Faizi's Computers\...` (apostrophe in path broke TanStack Router's code-splitter) to `D:\ali-mobile-zone`.

### To start the dev server:
```powershell
Start-Process -WindowStyle Hidden powershell.exe -ArgumentList "-NoProfile -Command Set-Location D:\ali-mobile-zone; npm run dev"
```

### The server runs at:
http://localhost:8080/

### To stop:
```powershell
Get-Process -Id (Get-NetTCPConnection -LocalPort 8080).OwningProcess | Stop-Process
```

---

## Deploy to Hugging Face Spaces (Free)

### Step 1: Create a Hugging Face account
Go to https://huggingface.co/join and sign up for a free account.

### Step 2: Create a New Space
1. Click your profile → **New Space**
2. **Space name:** `ali-mobile-zone`
3. **License:** MIT (or whatever you prefer)
4. **Space SDK:** Docker
5. **Docker Template:** `Dockerfile` (blank)
6. Click **Create Space**

### Step 3: Generate a Hugging Face Access Token
1. Go to https://huggingface.co/settings/tokens
2. Click **New token**
3. **Name:** `ali-mobile-zone-deploy`
4. **Role:** `write`
5. Click **Create token**
6. **Copy the token and save it somewhere safe** — you'll only see it once!

### Step 4: Push your code to the Space
Open a terminal and run:

```powershell
cd D:\ali-mobile-zone

# Install git if you don't have it: https://git-scm.com/download/win

# Login to Hugging Face (use the token from Step 3 as password)
git remote add hf https://huggingface.co/spaces/YOUR_USERNAME/ali-mobile-zone
git add .
git commit -m "Initial deploy"
git push hf main
```
Replace `YOUR_USERNAME` with your actual Hugging Face username.

When prompted for a password, paste the token from Step 3.

### Step 5: Wait for the build
Hugging Face will automatically build your app. It takes ~3-5 minutes the first time. Once it's done, your store will be live at:

**https://YOUR_USERNAME-ali-mobile-zone.hf.space**

### Updating after changes
```powershell
cd D:\ali-mobile-zone
git add .
git commit -m "Your update message"
git push hf main
```

### Environment variables (optional)
In the Space **Settings** → **Repository Secrets**, you can add:
- `JWT_SECRET` — a random string for secure auth tokens
