const Button = ({ text,hover, bg, borRadius, h, w, col, borNone, boxShadow }) => {
  return (
    <div>
      <button
        style={{
          hover:hover,
          backgroundColor: bg,
          borderRadius: borRadius,
          height: h,
          width: w,
          color: col,
          border: borNone,
          boxShadow: boxShadow,
        }}
      >
        <p className="font-[550]">{text}</p>
      </button>
    </div>
  );
};
export default Button;
