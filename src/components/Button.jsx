function Button({ type, size, children, action, hasBorder }) {
  const typeClasses = {
    info: "bg-cyan-500",
    warning: "bg-red-500",
    success: "bg-green-500",
    blur: "bg-gradient-to-tl from-white/10 to-[#102c53]",
  };

  const sizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const typeClass = typeClasses[type] || "";
  const sizeClass = sizeClasses[size] || "";

  const borderClass = hasBorder ? "border-white border" : "";

  const buttonClasses = `text-center p-2 rounded-full z-10 w-32 text-white cursor-pointer text-xs md:text-base lg:text-lg sm:text-sm ${typeClass} ${sizeClass} ${borderClass} font-nunito`;

  return (
    <div className={buttonClasses} onClick={action}>
      {children}
    </div>
  );
}

export default Button;
