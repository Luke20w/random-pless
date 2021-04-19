export default function Button(props) {
  const textTextColor = props.textColor ?? "gray";
  const darkTextColor = props.darkTextColor ?? "white";
  const selectedTextColor = props.selectedTextColor ?? "indigo";
  const textShade = props.shade ?? 600;
  const darkTextShade = props.shade ? props.shade + 400 : 900;
  const bgColor = props.shade === 0 ? "white" : props.color ?? "indigo";
  const bgShade = props.shade ?? 600;
  const bgHoverShade = props.shade ? props.shade + 100 : 800;
  const textColor = props.shade < 400 ? `${props.color ?? "indigo"}` : "white";
  const textShadeExtension = props.shade < 400 ? `-${darkTextShade}` : "";

  return (
    <button
      {...props}
      className={
        props.className +
        ` ${props.small ? "rounded-full" : "p-5 rounded-md"} 
        font-medium focus:outline-none flex items-center gap-1 justify-center
        ${
          props.type === "text"
            ? ` ${
                props.selected
                  ? `text-${selectedTextColor}-${textShade} hover:text-${selectedTextColor}-${darkTextShade}`
                  : `text-${textTextColor}-${textShade} hover:text-${textTextColor}-${darkTextShade} dark:text-${darkTextColor}`
              }`
            : `
          shadow-sm text-lg 
          bg-${bgColor}-${bgShade}
          hover:bg-${bgColor}-${bgHoverShade}
          text-${textColor}${textShadeExtension}`
        } 
        `
      }
      onClick={(e) => {
        e.stopPropagation();
        if (props.onClick) props.onClick();
      }}
      type={props.type ?? "button"}
      small=""
    >
      {props.children}
    </button>
  );
}
