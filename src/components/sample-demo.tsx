import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const SampleDemo: React.FC = () => {
  return (
    <section className="py-16 sm:py-18 lg:py-20">
      {/* Make this container as wide as you like; here it goes full-screen on large */}
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Ver Demo
          </h2>
        </div>

        <div className="mt-12 w-full">
          <Card className="w-full border border-gray-200 overflow-hidden">
            <CardContent className="p-0">
              {/* Responsive height: 14rem on xs, 18rem on sm, 24rem on md, 32rem on lg, 600px on xl+ */}
              <div className="relative w-full h-56 sm:h-72 md:h-96 lg:h-[32rem] xl:h-[600px]">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SampleDemo;
