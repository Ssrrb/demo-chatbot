'use client';

import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';

interface ProcessingIndicatorProps {
  fileName: string;
  onComplete: () => void;
}

export function ProcessingIndicator({ fileName, onComplete }: ProcessingIndicatorProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          onComplete();
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [onComplete]);

  return (
    <div className="w-full max-w-md mx-auto p-4 space-y-4">
      <h2 className="text-center text-lg font-semibold">Processing: {fileName}</h2>
      <Progress value={progress} aria-label={`Processing ${fileName}, ${progress}% complete`} />
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        Please wait while we analyze your document...
      </p>
    </div>
  );
}
