"use client";

import { useState, useCallback } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { UploadCloud, File as FileIcon, X } from "lucide-react";
import { useDropzone } from "react-dropzone";

export function AddDocs() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const removeFile = (fileToRemove: File) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((file) => file !== fileToRemove)
    );
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
      "text/plain": [".txt"],
    },
  });

  return (
    <section className="py-12 md:py-16 w-full bg-white">
      <Card className="panel bg-white">
        <CardHeader>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <CardTitle className="text-2xl font-semibold text-gray-900 mb-2">
                Subí tus Documentos
              </CardTitle>
              <CardDescription className="text-gray-700 mb-4 text-sm">
                Subí tus documentos de manera segura para que tu asistente de IA
                pueda acceder a ellos.
              </CardDescription>
              <p className="file-types text-xs text-gray-500">
                Tipos de archivos soportados: PDF, DOCX, TXT. Tamaño máximo por
                archivo: 10MB.
              </p>
            </div>
            <div className="md:col-span-1 flex flex-col items-center md:items-end">
              <div
                {...getRootProps()}
                className={`upload-area w-full p-6 text-center cursor-pointer rounded-lg border-2 border-dashed transition-colors ${
                  isDragActive
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:border-blue-400 hover:bg-white"
                }`}
              >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center justify-center space-y-2">
                  <UploadCloud
                    className={`w-12 h-12 ${
                      isDragActive ? "text-blue-600" : "text-gray-400"
                    }`}
                  />
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-blue-600">
                      Click para subir
                    </span>{" "}
                    o arrastrá y soltá
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        {uploadedFiles.length > 0 && (
          <CardContent>
            <h3 className="text-lg font-medium mb-4">Archivos Subidos</h3>
            <div className="space-y-3">
              {uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className="file-animation flex items-center justify-between p-3 bg-white rounded-lg border"
                >
                  <div className="flex items-center space-x-3">
                    <FileIcon className="w-5 h-5 text-gray-500" />
                    <span className="text-sm font-medium text-gray-800">
                      {file.name}
                    </span>
                  </div>
                  <button
                    onClick={() => removeFile(file)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <X className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        )}
      </Card>
      <style jsx>{`
        .panel {
          background-color: white;
          border: 1px solid #e9ecef;
          border-radius: 0.5rem;
          box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.06),
            0 1px 2px -1px rgba(0, 0, 0, 0.03);
        }
        .upload-area {
          transition: background-color 0.2s ease-in-out,
            border-color 0.2s ease-in-out;
        }
        .file-animation {
          animation: fileEnter 0.5s ease-out;
        }
        @keyframes fileEnter {
          0% {
            transform: translateY(-20px) scale(0.9);
            opacity: 0;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
