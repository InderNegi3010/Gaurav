export function Avatar({ children, className = "" }) {
  return (
    <div className={`w-12 h-12 rounded-full overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export function AvatarImage({ src, alt, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover ${className}`}
    />
  );
}

export function AvatarFallback({ children, className = "" }) {
  return (
    <div
      className={`w-full h-full bg-gray-300 flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
}
