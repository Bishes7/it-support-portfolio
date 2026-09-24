"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

type Shot = { src: StaticImageData; alt: string; caption: string };

// Screenshot thumbnails that open full size in a lightbox.
export default function LabGallery({ images }: { images: Shot[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal();
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  const current = index !== null ? images[index] : null;
  const step = (dir: number) =>
    setIndex((i) => (i === null ? i : (i + dir + images.length) % images.length));

  return (
    <>
      <div className="grid gap-3">
        <button
          type="button"
          onClick={() => setIndex(0)}
          className="shot group relative overflow-hidden rounded-xl border border-white/10"
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 560px, 100vw"
            placeholder="blur"
          />
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-8 text-left text-sm text-slate-200">
            {images[0].caption}
          </span>
        </button>
        <div className="grid grid-cols-2 gap-3">
          {images.slice(1).map((img, i) => (
            <button
              key={img.caption}
              type="button"
              onClick={() => setIndex(i + 1)}
              className="shot group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 280px, 50vw"
                placeholder="blur"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-3 pb-2 pt-6 text-left text-xs text-slate-200">
                {img.caption}
              </span>
            </button>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === e.currentTarget && setIndex(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="lightbox m-auto max-h-[92vh] w-[min(1200px,94vw)] rounded-2xl border border-white/10 bg-[#0b1120] p-0 text-slate-200 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        {current && (
          <figure className="relative">
            <Image
              src={current.src}
              alt={current.alt}
              className="h-auto max-h-[80vh] w-full object-contain"
              sizes="94vw"
            />
            <figcaption className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-3 text-sm">
              <span>{current.caption}</span>
              <span className="flex shrink-0 gap-2">
                <button type="button" onClick={() => step(-1)} className="rounded-lg border border-white/10 px-3 py-1 hover:bg-white/10" aria-label="Previous screenshot">←</button>
                <button type="button" onClick={() => step(1)} className="rounded-lg border border-white/10 px-3 py-1 hover:bg-white/10" aria-label="Next screenshot">→</button>
                <button type="button" onClick={() => setIndex(null)} className="rounded-lg border border-white/10 px-3 py-1 hover:bg-white/10" aria-label="Close">✕</button>
              </span>
            </figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}
