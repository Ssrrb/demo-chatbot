import { RotateCcw, Pencil, Info } from "lucide-react";

const NuevoGem = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden font-inter">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h1 className="text-[#121417] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">
              Nuevo Gem
            </h1>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#121417] text-base font-medium leading-normal pb-2">
                  Nombre
                </p>
                <input
                  placeholder="Asigna un nombre a tu Gem"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121417] focus:outline-0 focus:ring-0 border border-[#dde0e4] bg-white focus:border-[#dde0e4] h-14 placeholder:text-[#677583] p-[15px] text-base font-normal leading-normal"
                />
              </label>
            </div>
            <p className="text-red-500 text-sm font-normal leading-normal pb-3 pt-1 px-4">
              Tu Gem requiere un nombre para empezar a probarse.
            </p>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-[#121417] text-base font-medium leading-normal pb-2">
                    Instrucciones
                  </p>
                  <Info size={16} className="text-[#677583] mb-2" />
                </div>
                <textarea
                  placeholder="Ejemplo: Eres un horticultor con experiencia en césped natural y plantas autóctonas, y ayudas a las personas a planificar jardines que consuman poca agua. Ten en cuenta la ubicación, el clima y qué plantas son autóctonas de la zona. Eres experto en el tema, informal y amable."
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121417] focus:outline-0 focus:ring-0 border border-[#dde0e4] bg-white focus:border-[#dde0e4] min-h-36 placeholder:text-[#677583] p-[15px] text-base font-normal leading-normal"
                ></textarea>
              </label>
            </div>
            <div className="@container">
              <div className="gap-2 px-4 flex flex-wrap justify-start">
                <div className="flex flex-col items-center gap-2 bg-white py-2.5 text-center w-20">
                  <div className="rounded-full bg-[#f1f2f4] p-2.5">
                    <RotateCcw size={20} className="text-[#121417]" />
                  </div>
                  <p className="text-[#121417] text-sm font-medium leading-normal">
                    Undo
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 bg-white py-2.5 text-center w-20">
                  <div className="rounded-full bg-[#f1f2f4] p-2.5">
                    <Pencil size={20} className="text-[#121417]" />
                  </div>
                  <p className="text-[#121417] text-sm font-medium leading-normal">
                    Edit
                  </p>
                </div>
              </div>
            </div>
            <h2 className="text-[#121417] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Conocimientos
            </h2>
            <div className="flex flex-col p-4">
              <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#dde0e4] px-6 py-14">
                <div className="flex max-w-[480px] flex-col items-center gap-2">
                  <p className="text-[#121417] text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">
                    Arrastra y suelta o haz clic para subir
                  </p>
                  <p className="text-[#677583] text-sm font-normal leading-normal max-w-[480px] text-center">
                    Sube archivos para que tu Gem pueda acceder a ellos.
                  </p>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f1f2f4] text-[#121417] text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Subir</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoGem;
