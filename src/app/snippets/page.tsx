import { ContainerLayout } from "@/components/layouts/ContainerLayout";

export default function SnippetsPage() {
  return (
    <main>
      <div className="bg-gray-50 py-[clamp(2rem,1.0458rem+4.0712vw,3rem)]">
        <ContainerLayout>
          <h1 className="text-[clamp(2rem,0.0916rem+8.1425vw,4rem)] leading-[clamp(2.5rem,0.5916rem+8.1425vw,4.5rem)] font-bold">
            Work on progress!
          </h1>
        </ContainerLayout>
      </div>
    </main>
  );
}
