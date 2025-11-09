## Environment Variables

Vite exposes variables prefixed with `VITE_` to the client at build time.

### Required
- `VITE_AWS_HTTPAPI_URL`
  - The HTTPS endpoint that receives contact form submissions
  - Example: `https://api.example.com/contact`

### Local Development
Create `.env` at the project root:
```
VITE_AWS_HTTPAPI_URL=https://your-api.example.com/contact
```

Restart the dev server after changes.

### Production
Set the same variable in your build/CI environment so the production bundle includes the correct URL.

Note: Client-side apps cannot keep secrets—do not embed credentials or private keys in environment variables.


