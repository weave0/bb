# Deployment Guide for bb.globaldeets.com

## Quick Deploy

This is a static web application that can be deployed to any web server or hosting platform.

## Files to Deploy

Upload all files from the `public/` directory to your web server:

```
public/
├── index.html
├── styles.css
├── data.js
├── app.js
└── deploy.md (optional)
```

## Deployment Options

### Option 1: Traditional Web Hosting (cPanel, FTP, etc.)

1. Connect to your hosting via FTP/SFTP
2. Navigate to your domain's public directory (usually `public_html/` or `www/`)
3. Create a subdirectory: `bb/` (for bb.globaldeets.com)
4. Upload all files from `public/` to this directory
5. Access at: `https://bb.globaldeets.com`

### Option 2: Netlify (Recommended)

1. Create account at [netlify.com](https://netlify.com)
2. Drag & drop the `public/` folder
3. Configure custom domain: `bb.globaldeets.com`
4. DNS settings will be provided by Netlify

### Option 3: Vercel

1. Create account at [vercel.com](https://vercel.com)
2. Upload the `public/` folder
3. Add custom domain in project settings
4. Update DNS to point to Vercel

### Option 4: GitHub Pages

1. Create repository: `bbrown-platform`
2. Push `public/` contents to `main` branch
3. Enable GitHub Pages in repository settings
4. Configure custom domain: `bb.globaldeets.com`
5. Add CNAME record in your DNS

### Option 5: AWS S3 + CloudFront

1. Create S3 bucket
2. Enable static website hosting
3. Upload files from `public/`
4. Create CloudFront distribution
5. Configure custom domain with Route 53 or your DNS

## DNS Configuration

Add these records to your globaldeets.com DNS:

**For Netlify/Vercel:**

```
Type: CNAME
Name: bb
Value: [provided by hosting platform]
```

**For traditional hosting:**

```
Type: A
Name: bb
Value: [your server IP]
```

## SSL/HTTPS

Most modern hosting platforms (Netlify, Vercel, GitHub Pages) provide free SSL certificates automatically via Let's Encrypt.

For traditional hosting, you may need to:

1. Install SSL certificate via cPanel/hosting panel
2. Use Let's Encrypt (usually free)
3. Force HTTPS redirect in `.htaccess` (if Apache)

## Testing

After deployment, verify:

1. ✅ Site loads at https://bb.globaldeets.com
2. ✅ All navigation links work
3. ✅ Charts and visualizations render
4. ✅ Responsive design works on mobile
5. ✅ No console errors in browser DevTools

## Updating Content

To modify data:

1. Edit `data.js` file
2. Re-upload to server
3. Clear browser cache to see changes

## Performance Optimization (Optional)

If deploying to traditional hosting:

1. **Enable gzip compression** (in `.htaccess`):

```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>
```

2. **Enable browser caching**:

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
</IfModule>
```

3. **Add security headers**:

```apache
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "SAMEORIGIN"
Header set X-XSS-Protection "1; mode=block"
```

## Support

For issues or questions:

- Check browser console for errors
- Verify all files uploaded correctly
- Ensure DNS propagation (can take 24-48 hours)
- Test in incognito/private browsing mode

## Production Checklist

Before going live:

- [ ] All files uploaded
- [ ] DNS configured correctly
- [ ] SSL certificate active
- [ ] Site loads without errors
- [ ] All features functional
- [ ] Tested on mobile devices
- [ ] Performance acceptable
- [ ] Analytics added (optional)
