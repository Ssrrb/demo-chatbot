'use client';

import { useState } from 'react';
import Link from 'next/link';

import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import VideoDemo from '@/components/landing/VideoDemo';
import UploadPDF from '@/components/UploadPDF';
import FeaturesSection from '@/components/landing/Features';
import Footer from '@/components/landing/Footer';

export default function LandingPage() {
    const [files, setFiles] = useState<File[]>([]);
    const [progress, setProgress] = useState(0);
    const [processing, setProcessing] = useState(false);

    const handleFilesAdded = (newFiles: File[]) => {
        setFiles(prev => [...prev, ...newFiles]);
        setProgress(0);
        setProcessing(true);

        // Simulate processing
        let pct = 0;
        const interval = setInterval(() => {
            pct += 10;
            setProgress(pct);
            if (pct >= 100) {
                clearInterval(interval);
                setProcessing(false);
            }
        }, 200);
    };

    return (
        <div
            className="relative flex min-h-screen flex-col bg-[#121416] overflow-x-hidden"
            style={{ fontFamily: 'Inter, Noto Sans, sans-serif' }}
        >
            <div className="layout-container flex h-full grow flex-col">
                <Header />

                <div className="px-2 md:px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <HeroSection />

                        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                            Demo Preview
                        </h2>
                        <VideoDemo />

                        <FeaturesSection />

                        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                            Probar Demo
                        </h2>
                        <div className="flex flex-col p-4 pt-0">
                            <UploadPDF
                                onFilesAdded={handleFilesAdded}
                                processing={processing}
                                progress={progress}
                            />
                        </div>

                        {files.length > 0 && (
                            <>
                                <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                                    Documentos Subidos
                                </h3>

                                {files.map((file, idx) => (
                                    <div
                                        key={`${file.name}-${idx}`}
                                        className="flex items-center gap-4 bg-[#121416] px-4 min-h-14"
                                    >
                                        <div className="text-white flex items-center justify-center rounded-lg bg-[#2c3135] shrink-0 size-10">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="48px"
                                                height="48px"
                                                fill="currentColor"
                                                viewBox="0 0 256 256"
                                            >
                                                <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
                                            </svg>
                                        </div>
                                        <p className="text-white text-base font-normal leading-normal flex-1 truncate">
                                            {file.name}
                                        </p>
                                    </div>
                                ))}

                                {/* Only show the Go to Chat button once processing is done */}
                                {!processing && (
                                    <div className="flex justify-center py-8">
                                        <Link
                                            href="/chat"
                                            className="hover-lift futuristic-glow flex min-w-[180px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-[var(--primary-color)] text-lg font-bold leading-normal tracking-[0.015em] text-white transition-all hover:bg-opacity-90"
                                        >
                                            <span className="truncate">Ir al Chat</span>
                                        </Link>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
