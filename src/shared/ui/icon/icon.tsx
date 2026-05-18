type Props = {
  title: string;
  width: number | string;
  height: number | string;
  className?: string;
};

function Icon({ className, title, width, height }: Props) {
  return (
    <svg className={className} width={width} height={height} aria-hidden="true">
      <use xlinkHref={`#${title}`}></use>
    </svg>
  );
}

export default Icon;
