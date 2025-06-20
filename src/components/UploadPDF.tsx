'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';

interface UploadPDFProps {
    onFilesAdded: (files: File[]) => void;
    processing?: boolean;
    progress?: number;
}

export default function UploadPDF({ onFilesAdded, processing = false, progress = 0 }: UploadPDFProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File[]>([]);

    const handleFiles = (filesList: FileList | null) => {
        if (!filesList) return;
        const selectedFiles = Array.from(filesList);
        setFiles(selectedFiles);
        onFilesAdded(selectedFiles);
    };

    return (
        <div className="w-full flex flex-col items-center gap-6">
            {/* Zona de arrastre */}
            <div
                className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#40484f] px-6 py-14 bg-transparent cursor-pointer w-full"
                onClick={() => inputRef.current?.click()}
                onDragOver={e => { e.preventDefault(); e.stopPropagation(); }}
                onDrop={e => { e.preventDefault(); e.stopPropagation(); handleFiles(e.dataTransfer.files); }}
                tabIndex={0}
                role="button"
                aria-label="Upload documents by clicking or dragging and dropping"
            >
                <div className="flex max-w-[480px] flex-col items-center gap-2">
                    <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">
                        Arrastra y suelta tus documentos aquí
                    </p>
                    <p className="text-white text-sm font-normal leading-normal max-w-[480px] text-center">
                        O haz click para seleccionar archivos
                    </p>
                </div>
                <Input
                    ref={inputRef}
                    type="file"
                    accept="application/pdf"
                    multiple
                    className="hidden"
                    onChange={e => handleFiles(e.target.files)}
                />
                <Button
                    type="button"
                    className="rounded-full h-10 px-4 bg-[#2c3135] text-white text-sm font-bold leading-normal tracking-[0.015em] min-w-[84px]"
                    onClick={e => { e.stopPropagation(); inputRef.current?.click(); }}
                >
                    <span className="truncate">Subir Documentos</span>
                </Button>
            </div>

            {/* Indicador de procesamiento */}
            {processing && (
                <div className="w-full flex flex-col gap-2 p-2">
                    <div className="flex gap-6 justify-between">
                        <p className="text-white text-base font-medium leading-normal">Processing</p>
                    </div>
                    <div className="rounded bg-[#40484f]">
                        <Progress value={progress} className="bg-[#40484f] h-2 rounded" />
                    </div>
                    <p className="text-[#a2abb3] text-sm font-normal leading-normal">{progress}%</p>
                </div>
            )}

        </div>
    );
}
