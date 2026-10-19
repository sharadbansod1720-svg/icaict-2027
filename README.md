# IEEE ICAICT 2027 Conference Website

Official website for the **IEEE International Conference on Artificial Intelligence, Computing and Technology (ICAICT 2027)**, scheduled for **15–16 April 2027** at **KDK College of Engineering, Nagpur, Maharashtra, India**.

---

## 🚀 Live Preview Locally

You do not need to install complex build tools to run this website.

### Option 1: Direct Browser Opening
Simply double-click [`index.html`](index.html) to open it in any modern browser (Chrome, Edge, Firefox, Brave, Safari).

### Option 2: Local HTTP Server (Recommended)
Using Python in your terminal:
```bash
python -m http.server 3000
```
Then visit: `http://localhost:3000`

---

## 📁 Project Structure

```text
conference/
├── index.html        # Main HTML structure, semantic sections & SEO metadata
├── style.css         # Styling, design tokens, flex/grid layouts & media queries
├── script.js         # Countdown timer, mobile navigation, FAQ accordion & popups
├── .gitignore        # Git ignore rules for system/editor files
└── README.md         # Project documentation and deployment guide
```

---

## 🌐 Deploying to GitHub Pages (Free)

1. Create a new repository on [GitHub](https://github.com/new) (e.g. `conference-website`).
2. Run these commands in your project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for ICAICT 2027 conference website"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** > **Pages** (under "Code and automation").
   - Under **Build and deployment** > **Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. In 1–2 minutes, your website will be live at:
   `https://<YOUR_USERNAME>.github.io/<REPO_NAME>/`
