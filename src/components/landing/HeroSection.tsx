import { Button } from '@/components/ui/button';

export default function HeroSection() {
    return (
        <section className="@container px-2 md:px-0">
            <div className="@[480px]:p-4">
                <div
                    className="flex min-h-[320px] md:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCe05zqZJZ0VYb5wjNtUjXj5tOujka7KiEloSXvgktrwTJ06OskuRdo-dAW-GjofCI5SSUvKcQWK6_6MmgaLpVIZA7d2nczHr6qaDsPC5dj1wFb0BcAYc6RlrPWzHC-Z3fLOqRqus63QU_PXNeS9bWyoQq-mwWTTXEbK-AB39s8UznN23fa2hBIU_TGVfAR7T-8Uw_0J35esdvxE4zth6bjM2b0TnLBotYOHjBNZpMqiqv4awzHCEOa-iWGlDHVB6XWLWPb8JORfQ')",
                    }}
                >
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                            Experimenta el Futuro de la IA
                        </h1>
                        <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                            Crea tu asistente de IA personalizado para tu empresa.
                        </h2>
                    </div>
                    <Button className="rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#dce8f3] text-[#121416] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] min-w-[84px] mt-4">
                        <span className="truncate">Subir Documentos</span>
                    </Button>
                </div>
            </div>
        </section>
    );
}
