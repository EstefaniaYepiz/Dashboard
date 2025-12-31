export default function StatsCard({ title, value, change }) {
	const isPositive = change >= 0;

	return (
		<div className="stats-card">
			<p className="stats-title">{title}</p>
			<h2 className="stats-value">{value}</h2>

			{change !== undefined && (
				<span
					className={`stats-change ${isPositive ? "positive" : "negative"}`}
				>
					{isPositive ? "▲" : "▼"} {Math.abs(change)}%
				</span>
			)}
		</div>
	);
}
