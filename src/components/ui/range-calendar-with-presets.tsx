"use client";

import {
	endOfMonth,
	endOfYear,
	startOfMonth,
	startOfYear,
	subDays,
	subMonths,
	subYears,
} from "date-fns";
import { useCallback, useMemo, useState } from "react";
import type { DateRange } from "react-day-picker";

import { cn } from "../utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { ScrollArea } from "./scroll-area";

interface RangePreset {
	name: string;
	value: DateRange;
}

interface RangeCalendarWithPresetsProps {
	/**
	 * The selected date range.
	 */
	selected?: DateRange | undefined;

	/**
	 * The default date range.
	 */
	defaultRange?: DateRange;

	/**
	 * Callback fired when the date range changes.
	 */
	onSelect?: (range: DateRange | undefined) => void;

	/**
	 * The class name for the root element.
	 */
	className?: string;

	/**
	 * Custom presets to show in the sidebar.
	 * If not provided, default presets will be used.
	 */
	presets?: RangePreset[];

	/**
	 * Whether to disable future dates.
	 * @default true
	 */
	disableFutureDates?: boolean;

	/**
	 * Callback fired when the apply button is clicked.
	 */
	onApply?: () => void;

	/**
	 * Callback fired when the reset button is clicked.
	 */
	onReset?: () => void;

	/**
	 * Whether to show the apply and reset buttons.
	 * @default false
	 */
	showFooter?: boolean;
}

export function RangeCalendarWithPresets({
	selected,
	defaultRange,
	onSelect,
	className,
	presets,
	disableFutureDates = true,
	onApply,
	onReset,
	showFooter = false,
}: RangeCalendarWithPresetsProps) {
	const [initialState] = useState(selected);

	const today = useMemo(() => new Date(), []);

	const defaultPresets = useMemo(
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
					from: subDays(today, 6),
					to: today,
				},
			},
			{
				name: "Últimos 30 dias",
				value: {
					from: subDays(today, 29),
					to: today,
				},
			},
			{
				name: "Mês atual",
				value: {
					from: startOfMonth(today),
					to: today,
				},
			},
			{
				name: "Mês anterior",
				value: {
					from: startOfMonth(subMonths(today, 1)),
					to: endOfMonth(subMonths(today, 1)),
				},
			},
			{
				name: "Ano atual",
				value: {
					from: startOfYear(today),
					to: today,
				},
			},
			{
				name: "Ano anterior",
				value: {
					from: startOfYear(subYears(today, 1)),
					to: endOfYear(subYears(today, 1)),
				},
			},
		],
		[today],
	);

	const currentPresets = useMemo(
		() => presets ?? defaultPresets,
		[presets, defaultPresets],
	);

	const handlePresetClick = useCallback(
		(preset: RangePreset) => {
			if (onSelect) {
				onSelect(preset.value);
			}
		},
		[onSelect],
	);

	const disabledDates = useMemo(
		() =>
			disableFutureDates
				? [
						{
							after: today,
						},
					]
				: undefined,
		[disableFutureDates, today],
	);

	const isSelectedPreset = useCallback(
		(preset: RangePreset) => {
			if (
				!selected?.from ||
				!selected?.to ||
				!preset.value.from ||
				!preset.value.to
			) {
				return false;
			}

			// Compare dates ignoring time
			const selectedFromDate = new Date(selected.from.setHours(0, 0, 0, 0));
			const selectedToDate = new Date(selected.to.setHours(0, 0, 0, 0));
			const presetFromDate = new Date(preset.value.from.setHours(0, 0, 0, 0));
			const presetToDate = new Date(preset.value.to.setHours(0, 0, 0, 0));

			return (
				selectedFromDate.getTime() === presetFromDate.getTime() &&
				selectedToDate.getTime() === presetToDate.getTime()
			);
		},
		[selected],
	);

	const isDefaultState = useCallback(() => {
		if (
			!selected?.from ||
			!selected?.to ||
			!initialState?.from ||
			!initialState?.to
		) {
			return true;
		}

		const selectedFromDate = new Date(selected.from.setHours(0, 0, 0, 0));
		const selectedToDate = new Date(selected.to.setHours(0, 0, 0, 0));
		const initialFromDate = new Date(initialState.from.setHours(0, 0, 0, 0));
		const initialToDate = new Date(initialState.to.setHours(0, 0, 0, 0));

		return (
			selectedFromDate.getTime() === initialFromDate.getTime() &&
			selectedToDate.getTime() === initialToDate.getTime()
		);
	}, [selected, initialState]);

	return (
		<div className={className}>
			<div className="flex rounded-custom border border-border bg-card text-card-foreground shadow-xs">
				<div className="min-w-[240px]">
					<ScrollArea className="h-full">
						<div className="flex flex-col gap-1 p-3">
							{currentPresets.map((preset) => (
								<Button
									key={preset.name}
									variant={isSelectedPreset(preset) ? "secondary" : "ghost"}
									size="sm"
									className={cn(
										"justify-start font-normal transition-colors",
										isSelectedPreset(preset) && "font-medium",
									)}
									onClick={() => handlePresetClick(preset)}
								>
									<span className="text-sm">{preset.name}</span>
								</Button>
							))}
						</div>
					</ScrollArea>
				</div>
				<div className="flex flex-col flex-1 border-l">
					<div className="p-3">
						<Calendar
							mode="range"
							selected={selected}
							onSelect={onSelect}
							numberOfMonths={2}
							disabled={disabledDates}
						/>
					</div>
					{showFooter && (
						<div className="flex items-center justify-end gap-2 border-t p-3">
							<Button variant="outline" onClick={onReset}>
								Limpar
							</Button>
							<Button
								onClick={onApply}
								disabled={!selected?.from || !selected?.to || isDefaultState()}
							>
								Aplicar
							</Button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
