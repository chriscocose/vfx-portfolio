"use client";

type Props = {
  src: string;       // local mp4 or external embed URL
  poster?: string;   // thumbnail image
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
};

function isExternalEmbed(url: string) {
  return /^https?:\/\//.test(url);
}

export default function MediaPlayer({
  src,
  poster,
  autoPlay = false,
  loop = false,
  muted = true,
  controls = true,
  className = "",
}: Props) {
  if (isExternalEmbed(src)) {
    return (
      <div className={`relative w-full aspect-video bg-black ${className}`}>
        <iframe
          src={src}                             
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <video
      className={`w-full aspect-video bg-black ${className}`}
      src={src}
      poster={poster}                          
      controls={controls}
      playsInline                              
      preload="metadata"                       
      autoPlay={autoPlay}                      
      loop={loop}
      muted={muted}
    />
  );
}
