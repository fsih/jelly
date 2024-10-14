const hue = Math.random() * 360;
const squares = Array(4).fill(0).map((_, i) => {
  const size = 8 + i * 2;
  const spacing = 14;
  return new Square(
    size,
    size,
    spacing,
    hue + i * 20,
  );
});

update(squares);