function Button({ type, size, children, action, hasBorder, rounded }) {
  const typeClasses = {
    info: "bg-cyan-500",
    warning: "bg-red-500",
    success: "bg-green-500",
    blur: "bg-gradient-to-tl from-white/10 to-[#102c53]",
    blue: "bg-[#102c53]",
  };
  const roundedClasses = {
    small: "rounded",
    medium: "rounded-md",
    large: "rouded-lg",
    full: "rounded-full",
  };
  const sizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const typeClass = typeClasses[type] || "";
  const sizeClass = sizeClasses[size] || "";
  const roundedClass = roundedClasses[rounded] || "";
  const borderClass = hasBorder ? "border-white border" : "";

  const buttonClasses = `text-center p-2 rounded-full z-10 w-32 text-white cursor-pointer text-xs md:text-base lg:text-lg sm:text-sm ${typeClass} ${sizeClass} ${borderClass} font-nunito ${roundedClass}`;

  return (
    <div className={buttonClasses} onClick={action}>
      {children}
    </div>
  );
}

export default Button;
