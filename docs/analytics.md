## Analytics

### Google Analytics
The project includes a Google Analytics snippet in `index.html`. It loads `gtag.js` and initializes with a measurement ID.

To change or remove:
- Update or remove the `<script>` tags at the top of `index.html`
- Example measurement ID placeholder: `G-XXXXXXXXXX`

### Local Development
- Analytics may be blocked by browser extensions; expect inconsistent hits locally
- Consider wrapping the snippet in an environment check if you want to exclude dev mode

### Privacy & Compliance
- Ensure a privacy notice and cookie policy fit your legal requirements
- Avoid sending PII in any analytics events


