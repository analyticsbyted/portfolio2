## Contact Form & API

### Overview
The contact page uses a custom React hook (`src/hooks/useContactForm.js`) to manage form state, validation, anti-spam, and submission to an external HTTP API.

### Environment Variable
- `VITE_AWS_HTTPAPI_URL`: HTTPS endpoint that accepts a JSON payload
  - Configure it in `.env` for local dev and in your CI/CD or hosting env for production

### Validation
- Required fields: `name`, `email`, `message`
- Email format check: basic regex
- Honeypot field: `honey` (hidden from real users); if present, the submission is treated as spam and short-circuited

### Submission
- Method: `POST`
- Headers: `Content-Type: application/json`, `Accept: application/json`
- Payload (example):
```json
{
  "name": "Your Name",
  "email": "your@email.com",
  "message": "Hello there!",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "source": "portfolio-contact-form"
}
```

### Status & Errors
- `status`: `idle` | `sending` | `success` | `error`
- On API non-200 responses, the hook tries to parse a JSON body and uses `.message` if available
- On success, the form resets to empty values

### Backend Expectations
- Allow CORS for the site origin(s)
- Validate and sanitize inputs
- Implement rate limiting and spam protections (server-side), even with honeypot present
- Return proper HTTP status codes and a JSON `message` on error for better UX


