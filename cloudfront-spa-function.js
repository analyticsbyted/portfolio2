// CloudFront Function for React SPA Routing
// This function handles URL rewriting for Single Page Applications
// It redirects all non-file requests to index.html for client-side routing

// eslint-disable-next-line no-unused-vars
function handler(event) {
    var request = event.request;
    var uri = request.uri;
    
    // Check if URI is missing file extension and not a directory
    if (!uri.includes('.') && !uri.endsWith('/')) {
        // Rewrite request to index.html for React Router to handle
        request.uri = '/index.html';
    }
    
    // Handle directory requests (e.g., /work/)
    if (uri.endsWith('/') && uri !== '/') {
        request.uri = '/index.html';
    }
    
    return request;
}