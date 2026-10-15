import { useState } from 'react';

export default function Gallery({ images, alt }) {
  const [open, setOpen] = useState(null);

  return (
    <>
      <div className="gallery">
        {images.slice(0, 3).map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${alt} ${i + 1}`}
            className={i === 0 ? 'main' : ''}
            onClick={() => setOpen(src)}
          />
        ))}
      </div>

      {open && (
        <div className="lightbox" onClick={() => setOpen(null)}>
          <button className="close" onClick={() => setOpen(null)}>✕</button>
          <img src={open} alt={alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
