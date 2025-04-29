'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-10rem)] p-4 md:p-6">
      <div className="text-center space-y-4">
        <h1 className="font-semibold text-lg md:text-2xl">
          Something went wrong!
        </h1>
        <p className="text-muted-foreground">
          {error.message || 'An unexpected error occurred.'}
        </p>
        {error.digest && (
          <p className="text-xs text-muted-foreground">
            Error Digest: {error.digest}
          </p>
        )}
        <Button onClick={reset}>Try again</Button>
      </div>
    </main>
  );
}
