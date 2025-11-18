# React SPA Routing Fix for S3 + CloudFront

This document explains how to fix the page refresh XML/404 error issue for React SPAs hosted on S3 with CloudFront.

## Problem
When refreshing pages like `/work` or `/contact`, you get XML errors because:
- S3 looks for a physical file at that path
- File doesn't exist → S3 returns 404/403 error
- CloudFront serves the error instead of your React app

## Solution Options (Choose One)

### Option 1: CloudFront Functions (Recommended - Modern 2024+ Solution)

**Benefits:**
- Better performance (runs at edge locations)
- More cost-effective than Lambda@Edge
- Handles URL rewriting before hitting S3
- No error pages needed

**Setup:**
1. Go to CloudFront Console → Your Distribution → Functions
2. Create a new function
3. Copy the code from `cloudfront-spa-function.js`
4. Associate with "viewer-request" event
5. Deploy the function

### Option 2: CloudFront Custom Error Pages (Traditional Solution)

**Setup:**
1. Go to CloudFront Console → Your Distribution → Error Pages
2. Create custom error response:
   - **HTTP Error Code:** 403
   - **Error Caching Minimum TTL:** 300
   - **Customize Error Response:** Yes
   - **Response Page Path:** `/index.html`
   - **HTTP Response Code:** 200

3. Repeat for 404 errors

### Option 3: S3 Website Hosting (Backup Solution)

Already configured in the deployment script:
```bash
aws s3 website s3://your-bucket --index-document index.html --error-document index.html
```

## How It Works

1. **Request:** User visits `/work` and refreshes
2. **CloudFront Function:** Rewrites request to `/index.html`
3. **S3:** Serves the React app's `index.html`
4. **React Router:** Takes over and displays the `/work` page

## Testing

After configuration:
1. Visit your live site
2. Navigate to any page (e.g., `/work`, `/contact`)
3. Refresh the page
4. Should work without XML errors

## Files Created

- `cloudfront-spa-function.js` - CloudFront Function code
- `SPA-ROUTING-SETUP.md` - This documentation
- Updated `.github/workflows/deployToS3.yml` - Deployment script

## Next Steps

1. **Push changes** to trigger deployment
2. **Choose one of the solutions above** and implement it
3. **Test** page refreshes on your live site
4. **Monitor** CloudFront logs for any issues

The CloudFront Functions approach is recommended for new implementations in 2024+.