# UES Storage UX - Deployment Guide

## 🚀 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### **Quick Setup:**

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/UES_Storage_UX.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The site will automatically deploy on every push to main

3. **Access Your Site:**
   - Your app will be available at: `https://YOUR_USERNAME.github.io/UES_Storage_UX/`
   - First deployment may take 2-3 minutes

### **Features Enabled:**

✅ **Automatic Deployment** - Deploys on every push to main branch  
✅ **Build Optimization** - Vite optimizes for production  
✅ **Static Asset Handling** - All resources properly configured  
✅ **Error Handling** - Build failures prevent deployment  
✅ **Cache Management** - Efficient npm dependency caching  

### **Manual Deployment (Alternative):**

If you prefer manual deployment:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages manually
npm install -g gh-pages
gh-pages -d dist
```

### **Environment Configuration:**

The project is pre-configured with:
- **Base URL**: `/UES_Storage_UX/` for GitHub Pages routing
- **Build Output**: `dist/` directory
- **Asset Optimization**: Enabled for faster loading
- **Modern Browser Support**: ES2020+ features

### **Monitoring Deployment:**

- Check **Actions** tab in your GitHub repository
- Green checkmark = Successful deployment
- Red X = Build/deployment error (check logs)
- Deployment typically takes 1-2 minutes

### **Custom Domain (Optional):**

To use a custom domain:
1. Add `CNAME` file to `public/` directory with your domain
2. Configure DNS records to point to GitHub Pages
3. Enable custom domain in repository settings

---

**Ready to deploy!** Just push your code to GitHub and your Microsoft Intune-style dashboard will be live! 🎉