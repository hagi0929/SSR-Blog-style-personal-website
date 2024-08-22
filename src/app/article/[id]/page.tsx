import Image from "next/image";

export default function Article({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {params.id}
    </main>
  );
}
