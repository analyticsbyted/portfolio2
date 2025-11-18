## Contact Form & API

### Overview
The contact page uses **react-hook-form** with **zod** validation to manage form state, validation, anti-spam, and submission to an external HTTP API. This provides better performance, field-level error messages, and type-safe validation.

### Technology Stack
- **react-hook-form** (`^7.66.1`): Form state management and validation
- **zod** (`^3.25.76`): Schema-based validation
- **@hookform/resolvers** (`^5.2.2`): Zod resolver for react-hook-form integration

### Implementation

**Location:** `src/pages/Contact.jsx`

**Validation Schema:** `src/lib/validators.js`

The form uses `useForm` hook from react-hook-form with `zodResolver` to integrate zod validation:

```javascript
const {
  register,
  handleSubmit,
  formState: { errors, isSubmitting },
  reset,
  setError,
} = useForm({
  resolver: zodResolver(contactFormSchema),
  defaultValues: {
    name: '',
    email: '',
    message: '',
    honey: '',
  }
});
```

### Validation Schema

**File:** `src/lib/validators.js`

```javascript
export const contactFormSchema = z.object({
  name: z.string().trim().min(1, { message: 'Name is required.' }),
  email: z.string().trim().email({ message: 'Please enter a valid email address.' }),
  message: z.string().trim().min(10, { message: 'Message must be at least 10 characters long.' }),
  honey: z.string().max(0, { message: 'Spam detected.' }).optional().or(z.literal('')),
});
```

**Validation Rules:**
- **name**: Required, trimmed, minimum 1 character
- **email**: Required, trimmed, must be valid email format
- **message**: Required, trimmed, minimum 10 characters
- **honeypot**: Must be empty (spam detection handled by zod schema)

### Form Features

**Field-Level Error Messages:**
- Each field displays its own validation error below the input
- Errors appear with red border styling and error text
- Errors are cleared automatically when the field becomes valid

**Honeypot Spam Protection:**
- Hidden field (`honey`) that should never be filled by real users
- Zod schema validates that the field is empty
- If filled, validation fails silently (spam detected)

**Loading State:**
- Uses `isSubmitting` from react-hook-form's `formState`
- Button is disabled during submission
- Shows "Sending Message..." with spinner animation

**Success State:**
- Form resets automatically using `reset()` on successful submission
- Success message displayed to user
- Form fields cleared to default values

**Server Error Handling:**
- Uses `setError('root', { message: ... })` for server-side errors
- Errors displayed via `errors.root.message` in the UI
- Handles API errors, network failures, and configuration issues

### Environment Variable
- `VITE_AWS_HTTPAPI_URL`: HTTPS endpoint that accepts a JSON payload
  - Configure it in `.env` for local dev and in your CI/CD or hosting env for production

### Submission

**Method:** `POST`

**Headers:**
- `Content-Type: application/json`
- `Accept: application/json`

**Payload (example):**
```json
{
  "name": "Your Name",
  "email": "your@email.com",
  "message": "Hello there!",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "source": "portfolio-contact-form-rhf"
}
```

**Note:** All string fields are trimmed before submission to prevent whitespace-only values.

### Status & Errors

**Submission Status:**
- `idle`: Initial state, form ready for input
- `sending`: Form submission in progress
- `success`: Submission successful, form reset
- `error`: Submission failed (handled via `errors.root`)

**Error Handling:**
- **Validation Errors**: Field-level errors from zod schema (displayed below each field)
- **Server Errors**: Root-level errors from API responses (displayed in error alert)
- On API non-200 responses, tries to parse JSON body and uses `.message` if available
- Falls back to generic error message if parsing fails

### Form Reset

On successful submission:
- Form fields reset to default values using `reset()`
- Success message displayed
- User can immediately submit another message

### Backend Expectations

- Allow CORS for the site origin(s)
- Validate and sanitize inputs (client-side validation is not sufficient for security)
- Implement rate limiting and spam protections (server-side), even with honeypot present
- Return proper HTTP status codes and a JSON `message` on error for better UX
- Expected response format on error:
  ```json
  {
    "message": "Error description here"
  }
  ```

### Benefits of react-hook-form + zod

1. **Performance**: Minimal re-renders (only affected fields update)
2. **Type Safety**: Zod schemas provide runtime validation with TypeScript support
3. **Better UX**: Field-level error messages instead of single error at top
4. **Maintainability**: Validation logic separated into schema file
5. **Developer Experience**: Less boilerplate, cleaner code
6. **Accessibility**: Proper error association with form fields

### Migration Notes

**Previous Implementation:**
- Used custom `useContactForm` hook with manual state management
- Single error message displayed at top of form
- Manual validation logic in hook

**Current Implementation:**
- Uses react-hook-form's `useForm` hook directly in component
- Field-level error messages
- Validation handled by zod schema
- Better separation of concerns
