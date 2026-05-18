type Props = {
  title: string;
  width: number | string;
  height: number | string;
};

function Icon({ title, width, height }: Props) {
  return (
    <svg width={width} height={height} aria-hidden="true">
      <use xlinkHref={`#${title}`}></use>
    </svg>
  );
}

export default Icon;
