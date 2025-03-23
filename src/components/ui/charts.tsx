"use client";
import {
	Bar,
	CartesianGrid,
	Cell,
	Line,
	Pie,
	BarChart as RechartsBarChart,
	LineChart as RechartsLineChart,
	PieChart as RechartsPieChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from "recharts";

interface BaseChartProps {
	data: any[];
	index: string;
	colors?: string[];
	valueFormatter?: (value: number) => string;
}

interface LineChartProps extends BaseChartProps {
	categories: string[];
}

interface BarChartProps extends BaseChartProps {
	categories: string[];
	layout?: "vertical" | "horizontal";
}

interface PieChartProps extends BaseChartProps {
	category: string;
}

interface MapChartProps extends BaseChartProps {
	category: string;
}

export const LineChart = ({
	data,
	categories,
	index,
	colors = ["hsl(var(--primary))"],
	valueFormatter = (value) => value.toString(),
}: LineChartProps) => {
	return (
		<ResponsiveContainer width="100%" height={300}>
			<RechartsLineChart data={data}>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey={index}
					tickLine={false}
					tickMargin={10}
					axisLine={false}
				/>
				<YAxis
					tickFormatter={valueFormatter}
					tickLine={false}
					tickMargin={10}
					axisLine={false}
				/>
				{categories.map((category, i) => (
					<Line
						key={category}
						type="monotone"
						dataKey={category}
						stroke={colors[i % colors.length]}
						strokeWidth={2}
						dot={false}
					/>
				))}
			</RechartsLineChart>
		</ResponsiveContainer>
	);
};

export const BarChart = ({
	data,
	categories,
	index,
	colors = ["hsl(var(--primary))"],
	valueFormatter = (value) => value.toString(),
	layout = "horizontal",
}: BarChartProps) => {
	return (
		<ResponsiveContainer width="100%" height={300}>
			<RechartsBarChart
				data={data}
				layout={layout}
				margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
			>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey={layout === "horizontal" ? index : undefined}
					type={layout === "horizontal" ? "category" : "number"}
					tickLine={false}
					tickMargin={10}
					axisLine={false}
				/>
				<YAxis
					dataKey={layout === "vertical" ? index : undefined}
					type={layout === "vertical" ? "category" : "number"}
					tickFormatter={valueFormatter}
					tickLine={false}
					tickMargin={10}
					axisLine={false}
				/>
				{categories.map((category, i) => (
					<Bar
						key={category}
						dataKey={category}
						fill={colors[i % colors.length]}
						radius={[4, 4, 0, 0]}
					/>
				))}
			</RechartsBarChart>
		</ResponsiveContainer>
	);
};

export const PieChart = ({
	data,
	category,
	index,
	colors = ["hsl(var(--primary))"],
	valueFormatter = (value) => value.toString(),
}: PieChartProps) => {
	return (
		<ResponsiveContainer width="100%" height={300}>
			<RechartsPieChart>
				<Pie
					data={data}
					dataKey={category}
					nameKey={index}
					cx="50%"
					cy="50%"
					innerRadius={60}
					outerRadius={80}
					paddingAngle={data.length > 1 ? 2 : 0}
					startAngle={90}
					endAngle={450}
				>
					{data.map((entry) => (
						<Cell
							key={`${entry[index]}-${entry[category]}`}
							fill={colors[data.indexOf(entry) % colors.length]}
							stroke="hsl(var(--background))"
							strokeWidth={2}
						/>
					))}
				</Pie>
			</RechartsPieChart>
		</ResponsiveContainer>
	);
};

export const MapChart = ({
	data,
	category,
	index,
	valueFormatter = (value) => value.toString(),
}: MapChartProps) => {
	// TODO: Implement map chart
	return (
		<div className="flex items-center justify-center h-[300px] text-muted-foreground">
			Map chart coming soon...
		</div>
	);
};
