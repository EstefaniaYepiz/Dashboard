import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ month: "Jan", revenue: 18000 },
	{ month: "Feb", revenue: 21000 },
	{ month: "Mar", revenue: 19500 },
	{ month: "Apr", revenue: 24000 },
	{ month: "May", revenue: 26500 },
	{ month: "Jun", revenue: 24120 },
];

export default function RevenueChart() {
	return (
		<div className="chart-card">
			<h3 className="chart-title">Monthly Revenue</h3>

			<ResponsiveContainer width="100%" height={300}>
				<LineChart data={data}>
					<CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
					<XAxis dataKey="month" stroke="#9ca3af" />
					<YAxis stroke="#9ca3af" />
					<Tooltip />
					<Line
						type="monotone"
						dataKey="revenue"
						stroke="#3b82f6"
						strokeWidth={3}
						dot={{ r: 4 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
