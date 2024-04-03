interface Props {
  percent: number;
  size?: number;
}

export const MoviePercentCircle = ({ percent, size = 100 }: Props) => {
  const finalPercent = `${percent.toString()[0]}${percent.toString()[2]}`;

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="25" fill="none" stroke="#ccc" strokeWidth="4"/>
      <circle cx="50" cy="50" r="25" fill="none" stroke="#007bff" strokeWidth="4" strokeDasharray={`calc(${percent} / 10 * 157) 157`} transform="rotate(-90 50 50)" />
      <text x="50" y="55" textAnchor="middle" fontSize="18" fill="#fff">{finalPercent}%</text>
    </svg>
  )
}