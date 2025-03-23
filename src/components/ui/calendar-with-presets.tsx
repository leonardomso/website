"use client";

import { addDays, format, subDays, subMonths, subYears } from "date-fns";
import { useCallback, useMemo } from "react";
import type { DateRange } from "react-day-picker";

import { Button } from "./button";
import { Calendar } from "./calendar";

interface CalendarPreset {
	name: string;
	value: Date | DateRange;
}

interface CalendarWithPresetsProps {
	/**
	 * The mode of the calendar.
	 * @default "single"
	 */
	mode?: "single" | "range";

	/**
	 * The selected date or date range.
	 */
	selected?: Date | DateRange | undefined;

	/**
	 * Callback fired when the date or date range changes.
	 */
	onSelect?:
		| ((date: Date | undefined) => void)
		| ((range: DateRange | undefined) => void);

	/**
	 * The class name for the root element.
	 */
	className?: string;

	/**
	 * Custom presets to show in the sidebar.
	 * If not provided, default presets will be used.
	 */
	presets?: CalendarPreset[];

	/**
	 * Whether to disable future dates.
	 * @default true
	 */
	disableFutureDates?: boolean;
}

export function CalendarWithPresets({
	mode = "single",
	selected,
	onSelect,
	className,
	presets,
	disableFutureDates = true,
}: CalendarWithPresetsProps) {
	const today = useMemo(() => new Date(), []);

	const defaultSinglePresets = useMemo(
		() => [
			{
				name: "Hoje",
				value: today,
			},
			{
				name: "Ontem",
				value: subDays(today, 1),
			},
			{
				name: "Última semana",
				value: subDays(today, 7),
			},
			{
				name: "Último mês",
				value: subMonths(today, 1),
			},
			{
				name: "Último ano",
				value: subYears(today, 1),
			},
		],
		[today],
	);

	const defaultRangePresets = useMemo(
		() => [
			{
				name: "Hoje",
				value: {
					from: today,
					to: today,
				},
			},
			{
				name: "Ontem",
				value: {
					from: subDays(today, 1),
					to: subDays(today, 1),
				},
			},
			{
				name: "Últimos 7 dias",
				value: {
					from: subDays(today, 7),
					to: today,
				},
			},
			{
				name: "Últimos 30 dias",
				value: {
					from: subDays(today, 30),
					to: today,
				},
			},
			{
				name: "Últimos 90 dias",
				value: {
					from: subDays(today, 90),
					to: today,
				},
			},
			{
				name: "Último mês",
				value: {
					from: subMonths(today, 1),
					to: today,
				},
			},
			{
				name: "Último ano",
				value: {
					from: subYears(today, 1),
					to: today,
				},
			},
		],
		[today],
	);

	const currentPresets = useMemo(
		() =>
			presets ??
			(mode === "single" ? defaultSinglePresets : defaultRangePresets),
		[presets, mode, defaultSinglePresets, defaultRangePresets],
	);

	const handlePresetClick = useCallback(
		(preset: CalendarPreset) => {
			if (onSelect) {
				onSelect(preset.value as any);
			}
		},
		[onSelect],
	);

	const formatPresetDate = useCallback((preset: CalendarPreset) => {
		if ("from" in preset.value) {
			const { from, to } = preset.value;
			if (!from) return "";
			return `${format(from, "dd/MM/yy")} - ${format(to ?? from, "dd/MM/yy")}`;
		}
		return format(preset.value, "dd/MM/yy");
	}, []);

	const disabledDates = useMemo(
		() =>
			disableFutureDates
				? [
						{
							after: addDays(today, 1),
						},
					]
				: undefined,
		[disableFutureDates, today],
	);

	return (
		<div className={className}>
			<div className="rounded-custom border border-border">
				<div className="flex max-sm:flex-col">
					<div className="relative border-border py-4 max-sm:order-1 max-sm:border-t sm:w-48">
						<div className="h-full border-border sm:border-e">
							<div className="flex flex-col gap-1 px-3">
								{currentPresets.map((preset) => (
									<Button
										key={preset.name}
										variant="ghost"
										size="sm"
										className="justify-start font-normal"
										onClick={() => handlePresetClick(preset)}
									>
										<span className="flex flex-col items-start">
											<span className="text-sm">{preset.name}</span>
											<span className="text-xs text-muted-foreground">
												{formatPresetDate(preset)}
											</span>
										</span>
									</Button>
								))}
							</div>
						</div>
					</div>
					{mode === "single" ? (
						<Calendar
							mode="single"
							selected={selected as Date | undefined}
							onSelect={onSelect as (date: Date | undefined) => void}
							numberOfMonths={1}
							className="p-3"
							disabled={disabledDates}
						/>
					) : (
						<Calendar
							mode="range"
							selected={selected as DateRange | undefined}
							onSelect={onSelect as (range: DateRange | undefined) => void}
							numberOfMonths={2}
							className="p-3"
							disabled={disabledDates}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
