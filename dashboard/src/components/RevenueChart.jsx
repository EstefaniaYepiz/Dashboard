import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { useState } from "react";

const dataSets = {
	7: [
		{ label: "Mon", revenue: 3200 },
		{ label: "Tue", revenue: 4100 },
		{ label: "Wed", revenue: 3800 },
		{ label: "Thu", revenue: 4500 },
		{ label: "Fri", revenue: 5200 },
		{ label: "Sat", revenue: 6100 },
		{ label: "Sun", revenue: 5800 },
	],
	30: [
		{ label: "Week 1", revenue: 14000 },
		{ label: "Week 2", revenue: 16500 },
		{ label: "Week 3", revenue: 15800 },
		{ label: "Week 4", revenue: 18200 },
	],
	90: [
		{ label: "Jan", revenue: 48000 },
		{ label: "Feb", revenue: 52000 },
		{ label: "Mar", revenue: 61000 },
	],
};

export default function RevenueChart() {
	const [range, setRange] = useState("30");
	return (
		<div className="chart-card">
			<div className="chart-header">
				<h3 className="chart-title">Revenue</h3>

				<div className="range-buttons">
					{["7", "30", "90"].map((value) => (
						<button
							key={value}
							className={range === value ? "active" : ""}
							onClick={() => setRange(value)}
						>
							Last {value} days
						</button>
					))}
				</div>
			</div>

			<ResponsiveContainer width="100%" height={300}>
				<LineChart data={dataSets[range]}>
					<CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
					<XAxis dataKey="label" stroke="#9ca3af" />
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
