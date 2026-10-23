import { useId, useRef } from "react";

export type ExpandableScreenshotProps = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  source?: string;
  width: number;
  height: number;
};

export default function ExpandableScreenshot({ src, alt, title, caption, source, width, height }: ExpandableScreenshotProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const captionId = useId();

  return (
    <figure className="expandable-screenshot">
      <button type="button" className="screenshot-trigger" onClick={() => dialog.current?.showModal()} aria-label={`Enlarge ${title}: ${caption}`} aria-haspopup="dialog">
        <img src={src} alt={alt} width={width} height={height} loading="lazy" />
        <span className="screenshot-enlarge" aria-hidden="true">Enlarge ↗</span>
      </button>
      <figcaption>
        <strong>{title}</strong>
        <span>{caption}</span>
        {source && <small>{source}</small>}
      </figcaption>
      <dialog ref={dialog} className="screenshot-dialog" aria-labelledby={titleId} aria-describedby={captionId} onClick={(event) => {
        if (event.target === event.currentTarget) dialog.current?.close();
      }}>
        <div className="screenshot-dialog-content">
          <div className="screenshot-dialog-heading">
            <h2 id={titleId}>{title}</h2>
            <button type="button" autoFocus onClick={() => dialog.current?.close()}>Close <span aria-hidden="true">×</span></button>
          </div>
          <img src={src} alt={alt} width={width} height={height} loading="lazy" />
          <p id={captionId}>{caption}</p>
          {source && <small>{source}</small>}
          <a href={src} target="_blank" rel="noreferrer">Open original image (new tab) ↗</a>
        </div>
      </dialog>
    </figure>
  );
}
