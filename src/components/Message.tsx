import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Triangle, Bot } from "lucide-react";

export function Message() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">
              Crea tu asistente de IA hoy.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
              <Button
                className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors duration-300 ease-in-out"
                size="lg"
              >
                <Bot className="mr-2 h-4 w-4 fill-current" />
                Agendar una llamada
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors duration-300 ease-in-out"
              >
                Empezar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
