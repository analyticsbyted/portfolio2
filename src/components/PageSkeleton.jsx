/**
 * Reusable page skeleton component for route-based code splitting
 * Provides consistent loading states across all lazy-loaded pages
 */

function PageSkeleton({ variant = 'default' }) {
  // Default skeleton for most pages
  if (variant === 'default') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 animate-pulse">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-16">
          <div className="mx-auto h-12 w-64 bg-muted/60 rounded-lg mb-4" />
          <div className="mx-auto h-6 w-96 bg-muted/50 rounded-lg" />
        </div>
        
        {/* Content Skeleton */}
        <div className="space-y-8">
          <div className="h-4 w-full bg-muted/50 rounded" />
          <div className="h-4 w-5/6 bg-muted/50 rounded" />
          <div className="h-4 w-4/6 bg-muted/50 rounded" />
        </div>
      </div>
    );
  }

  // Work page skeleton (already exists, but we'll keep it consistent)
  if (variant === 'work') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="mx-auto h-8 w-48 bg-muted/60 rounded-lg animate-pulse" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[0, 1, 2, 3].map(i => (
            <div key={i} className="bg-card border-2 border-border rounded-2xl overflow-hidden">
              <div className="h-48 bg-muted/50 animate-pulse" />
              <div className="p-6 space-y-3">
                <div className="h-4 w-1/3 bg-muted/60 rounded animate-pulse" />
                <div className="h-5 w-2/3 bg-muted/60 rounded animate-pulse" />
                <div className="h-4 w-full bg-muted/50 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-muted/50 rounded animate-pulse" />
                <div className="h-10 w-40 bg-muted/60 rounded-lg animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Certifications page skeleton (grid layout)
  if (variant === 'certifications') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 animate-pulse">
        <div className="text-center mb-16">
          <div className="mx-auto h-12 w-64 bg-muted/60 rounded-lg mb-4" />
          <div className="mx-auto h-6 w-96 bg-muted/50 rounded-lg" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2, 3, 4, 5].map(i => (
            <div key={i} className="bg-card border-2 border-border rounded-2xl overflow-hidden">
              <div className="h-64 bg-muted/50" />
              <div className="p-4 space-y-2">
                <div className="h-4 w-3/4 bg-muted/60 rounded" />
                <div className="h-3 w-1/2 bg-muted/50 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Publications page skeleton (list layout)
  if (variant === 'publications') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 animate-pulse">
        <div className="text-center mb-16">
          <div className="mx-auto h-12 w-64 bg-muted/60 rounded-lg mb-4" />
          <div className="mx-auto h-6 w-96 bg-muted/50 rounded-lg" />
        </div>
        <div className="space-y-6">
          {[0, 1, 2, 3].map(i => (
            <div key={i} className="bg-card border-2 border-border rounded-2xl p-6">
              <div className="h-6 w-3/4 bg-muted/60 rounded mb-2" />
              <div className="h-4 w-1/2 bg-muted/50 rounded mb-4" />
              <div className="h-4 w-full bg-muted/50 rounded" />
              <div className="h-4 w-5/6 bg-muted/50 rounded mt-2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Contact page skeleton (form layout)
  if (variant === 'contact') {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 animate-pulse">
        <div className="text-center mb-16">
          <div className="mx-auto h-12 w-64 bg-muted/60 rounded-lg mb-4" />
          <div className="mx-auto h-6 w-96 bg-muted/50 rounded-lg" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            {[0, 1, 2].map(i => (
              <div key={i} className="h-24 bg-muted/50 rounded-2xl" />
            ))}
          </div>
          <div className="bg-card border-2 border-border rounded-2xl p-8 space-y-6">
            <div className="h-8 w-48 bg-muted/60 rounded" />
            <div className="h-12 w-full bg-muted/50 rounded-xl" />
            <div className="h-12 w-full bg-muted/50 rounded-xl" />
            <div className="h-32 w-full bg-muted/50 rounded-xl" />
            <div className="h-12 w-full bg-muted/60 rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  // Education page skeleton (tabs + content)
  if (variant === 'education') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 animate-pulse">
        <div className="text-center mb-16">
          <div className="mx-auto h-12 w-64 bg-muted/60 rounded-lg mb-4" />
          <div className="mx-auto h-6 w-96 bg-muted/50 rounded-lg" />
        </div>
        <div className="flex gap-4 mb-8 justify-center">
          {[0, 1].map(i => (
            <div key={i} className="h-10 w-32 bg-muted/60 rounded-lg" />
          ))}
        </div>
        <div className="space-y-6">
          {[0, 1, 2].map(i => (
            <div key={i} className="bg-card border-2 border-border rounded-2xl p-6">
              <div className="h-6 w-1/2 bg-muted/60 rounded mb-4" />
              <div className="h-4 w-full bg-muted/50 rounded" />
              <div className="h-4 w-5/6 bg-muted/50 rounded mt-2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Newsletter page skeleton
  if (variant === 'newsletter') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 animate-pulse">
        <div className="text-center mb-16">
          <div className="mx-auto h-12 w-64 bg-muted/60 rounded-lg mb-4" />
          <div className="mx-auto h-6 w-96 bg-muted/50 rounded-lg" />
        </div>
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="h-64 bg-muted/50 rounded-2xl" />
          <div className="space-y-4">
            {[0, 1, 2].map(i => (
              <div key={i} className="h-20 bg-muted/50 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // About page skeleton
  if (variant === 'about') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 animate-pulse">
        <div className="text-center mb-16">
          <div className="mx-auto h-12 w-64 bg-muted/60 rounded-lg mb-4" />
          <div className="mx-auto h-6 w-96 bg-muted/50 rounded-lg" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="h-4 w-full bg-muted/50 rounded" />
            <div className="h-4 w-5/6 bg-muted/50 rounded" />
            <div className="h-4 w-4/6 bg-muted/50 rounded" />
          </div>
          <div className="h-64 bg-muted/50 rounded-2xl" />
        </div>
      </div>
    );
  }

  // NotFound page skeleton (minimal)
  if (variant === 'notfound') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 animate-pulse">
        <div className="text-center">
          <div className="mx-auto h-16 w-96 bg-muted/60 rounded-lg mb-4" />
          <div className="mx-auto h-6 w-64 bg-muted/50 rounded-lg" />
        </div>
      </div>
    );
  }

  return null;
}

export default PageSkeleton;

