"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back(); // Go to the previous page
    } else {
      router.push('/'); // Go to the home page if there is no history
    }
  };

  return (
    <div className="h-[70vh] flex flex-col justify-center items-center gap-4">
      <Image src="/not-found.jpg" alt="404" width={400} height={400} />
      {/* Go back to the previous page or to home */}
      <Button
        onClick={handleGoBack} // Call the handler function
      >
        Go Back
      </Button>
    </div>
  );
}
