// src/components/FeaturesSection.tsx
'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircleCode, Puzzle, BrainCircuit } from 'lucide-react';

export interface Feature {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: MessageCircleCode,
        title: 'Procesamiento de Lenguaje Natural',
        description:
            'Entiende y responde a las consultas del usuario con precisión y contexto humano.',
    },
    {
        icon: Puzzle,
        title: 'Integración Sencilla',
        description:
            'Conecta fácilmente con tu plataforma y servicios empresariales para un flujo de trabajo unificado.',
    },
    {
        icon: BrainCircuit,
        title: 'Personalización Avanzada',
        description:
            'Personaliza a tu asistente para que entienda tus necesidades y responda de manera personalizada y precisa.',
    },
];

export default function FeaturesSection() {
    return (
        <section id="features" className="mb-16">
            <h2
                className="mb-8 px-2 text-3xl font-bold leading-tight tracking-tight"
                style={{ fontFamily: 'Space Grotesk, Noto Sans, sans-serif' }}
            >
                Propiedades &amp; Beneficios
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {features.map(({ icon: Icon, title, description }) => (
                    <Card
                        key={title}
                        className="
              transform transition-transform duration-300 hover:-translate-y-1
              border border-[var(--border-color)]
              bg-[var(--accent-color)]/50
              p-6
              hover:border-[var(--primary-color)]
              hover:shadow-2xl hover:shadow-[var(--primary-color)]/20
            "
                    >
                        <CardContent className="p-0 flex flex-col gap-4">
                            <div
                                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-lg
                  bg-[var(--primary-color)]/20
                  text-[var(--primary-color)]
                "
                            >
                                <Icon width={32} height={32} />
                            </div>

                            <h3 className="text-xl font-bold leading-tight tracking-[-0.015em]">
                                {title}
                            </h3>
                            <p className="text-sm font-normal leading-normal text-[var(--text-secondary)]">
                                {description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
