import StatsCard from "../components/StatsCard";

const statsData = [
	{
		title: "Total Users",
		value: "1,245",
		subtitle: "+12% from last month",
	},
	{
		title: "Monthly Revenue",
		value: "$32,480",
		subtitle: "+8.4% growth",
	},
	{
		title: "Active Sessions",
		value: "312",
		subtitle: "Currently online",
	},
	{
		title: "Conversion Rate",
		value: "4.6%",
		subtitle: "+0.9% improvement",
	},
];

export default function Dashboard() {
	return (
		<section className="dashboard">
			<h2>Overview</h2>

			<div className="stats-grid">
				{statsData.map((stat, index) => (
					<StatsCard
						key={index}
						title={stat.title}
						value={stat.value}
						subtitle={stat.subtitle}
					/>
				))}
			</div>
		</section>
	);
}
