import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          IA SoftShop
        </h1>
        <p className="text-lg text-gray-600">
          Crea tu asistente de IA personalizado basado en tus propias reglas y
          documentos.
        </p>
        <div className="flex space-x-4">
          <Button size="lg">
            Empezar <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button size="lg" variant="outline">
            Pruébalo
          </Button>
        </div>
      </div>
    </section>
  );
}
