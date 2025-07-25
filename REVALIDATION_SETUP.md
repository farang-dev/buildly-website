# Blog Revalidation Setup

## Problem Solved
This setup fixes the issue where new Notion pages don't appear in production until you push to GitHub/Vercel.

## How It Works

### 1. ISR (Incremental Static Regeneration)
- Blog pages now use `revalidate = 300` (5 minutes)
- Pages are automatically regenerated every 5 minutes
- Provides good performance while ensuring content freshness

### 2. Manual Revalidation Webhook
For immediate updates when you add new Notion pages:

#### Setup Environment Variable
Add to your Vercel environment variables:
```
REVALIDATION_SECRET=your-secret-key-here
```

#### Webhook Endpoint
```
POST https://buildly-jp.site/api/revalidate
Content-Type: application/json

{
  "secret": "your-secret-key-here"
}
```

#### Manual Testing
You can also trigger revalidation via GET request:
```
https://buildly-jp.site/api/revalidate?secret=your-secret-key-here
```

## Usage

1. **Automatic**: Pages refresh every 5 minutes automatically
2. **Manual**: Call the webhook after adding new Notion pages for immediate updates
3. **Fallback**: Push to GitHub still works as before

## Benefits

- ✅ New Notion pages appear in production within 5 minutes automatically
- ✅ Immediate updates possible via webhook
- ✅ Better performance than always dynamic rendering
- ✅ No more waiting for GitHub deployments for content updates