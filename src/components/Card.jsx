function Card({ url, title, family, firstName, lastName }) {
  return (
    <div
      className="group h-72 w-full cursor-pointer"
      style={{
        perspective: "1000px",
      }}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 group-hover:[transform:rotateY(180deg)]"
      >
        <div className="absolute inset-0">
          <img
            src={url}
            className="h-full w-full rounded-xl object-cover shadow-lg shadow-white/30"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
