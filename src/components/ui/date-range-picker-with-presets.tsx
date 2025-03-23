"use client";

import { type CalendarDate, parseDate } from "@internationalized/date";
import { useOverlayTrigger } from "@react-aria/overlays";
import { useOverlayTriggerState } from "@react-stately/overlays";
import type { RangeValue } from "@react-types/shared";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useCallback, useState } from "react";
import {
	Button as AriaButton,
	DateInput,
	DateSegment,
	Dialog,
	Group,
	I18nProvider,
	Label,
	Popover,
	DateRangePicker as RACDateRangePicker,
} from "react-aria-components";
import type { DateRange } from "react-day-picker";

import { cn } from "../utils";
import { RangeCalendarWithPresets } from "./range-calendar-with-presets";

interface DateRangePickerWithPresetsProps {
	/**
	 * The selected date range.
	 * @type DateRange | undefined
	 */
	value?: DateRange | undefined;

	/**
	 * The default date range.
	 * @type DateRange
	 */
	defaultValue: DateRange;

	/**
	 * Callback fired when the date range changes.
	 * @param value The new date range value
	 */
	onChange?: (value: DateRange | undefined) => void;

	/**
	 * The placeholder text of the calendar trigger button.
	 * @default "Selecione um período"
	 * @type string | undefined
	 */
	placeholder?: string;

	/**
	 * The label text for the date range picker.
	 * @type string | undefined
	 */
	label?: string;

	/**
	 * The class name for the root element.
	 * @type string
	 */
	className?: string;
}

export function DateRangePickerWithPresets({
	value,
	defaultValue,
	onChange,
	placeholder = "Selecione um período",
	label,
	className,
}: DateRangePickerWithPresetsProps) {
	const [tempDateRange, setTempDateRange] = useState<DateRange>(
		value ?? defaultValue,
	);
	const overlayState = useOverlayTriggerState({});
	const { triggerProps, overlayProps } = useOverlayTrigger(
		{ type: "dialog" },
		overlayState,
	);

	// Convert DateRange to React Aria's RangeValue<DateValue>
	const dateValue: RangeValue<CalendarDate> | null =
		value?.from && value?.to
			? {
					start: parseDate(format(value.from, "yyyy-MM-dd")),
					end: parseDate(format(value.to, "yyyy-MM-dd")),
				}
			: value?.from
				? {
						start: parseDate(format(value.from, "yyyy-MM-dd")),
						end: parseDate(format(value.from, "yyyy-MM-dd")),
					}
				: null;

	// Convert React Aria's RangeValue<DateValue> back to DateRange
	const handleChange = (newValue: RangeValue<CalendarDate> | null) => {
		if (!newValue?.start) {
			setTempDateRange(defaultValue);
			return;
		}

		const from = new Date(newValue.start.toString());
		const to = newValue.end ? new Date(newValue.end.toString()) : undefined;

		setTempDateRange({ from, to: to ?? from });
	};

	const handleTempChange = useCallback(
		(range: DateRange | undefined) => {
			if (!range) {
				setTempDateRange(defaultValue);
				return;
			}
			setTempDateRange(range);
		},
		[defaultValue],
	);

	const handleApply = useCallback(() => {
		if (onChange) {
			onChange(tempDateRange);
		}
		overlayState.close();
	}, [onChange, overlayState, tempDateRange]);

	const handleReset = useCallback(() => {
		setTempDateRange(defaultValue);
		if (onChange) {
			onChange(defaultValue);
		}
		overlayState.close();
	}, [onChange, overlayState, defaultValue]);

	return (
		<I18nProvider locale="pt-BR">
			<RACDateRangePicker
				value={dateValue}
				onChange={handleChange}
				className={cn("flex flex-col gap-2", className)}
			>
				{label && (
					<Label className="text-sm font-medium text-foreground">{label}</Label>
				)}
				<Group
					className={cn(
						"flex h-10 w-full items-center rounded-custom border border-input bg-background text-sm ring-offset-background",
						"focus-within:outline-hidden focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
						"disabled:cursor-not-allowed disabled:opacity-50",
					)}
				>
					<DateInput slot="start" className="flex flex-1 px-2">
						{(segment) => (
							<DateSegment
								segment={segment}
								className={cn(
									"focus:rounded-[2px] focus:bg-accent focus:text-accent-foreground focus:outline-hidden",
									"placeholder:text-muted-foreground",
								)}
							/>
						)}
					</DateInput>
					<span aria-hidden="true" className="px-2 text-muted-foreground">
						até
					</span>
					<DateInput slot="end" className="flex flex-1 px-2">
						{(segment) => (
							<DateSegment
								segment={segment}
								className={cn(
									"focus:rounded-[2px] focus:bg-accent focus:text-accent-foreground focus:outline-hidden",
									"placeholder:text-muted-foreground",
								)}
							/>
						)}
					</DateInput>
					<AriaButton
						{...triggerProps}
						className="mr-2 flex h-7 w-7 items-center justify-center rounded-custom transition-colors hover:bg-muted"
					>
						<CalendarIcon className="size-4" />
					</AriaButton>
				</Group>
				<Popover
					{...overlayProps}
					isOpen={overlayState.isOpen}
					onOpenChange={overlayState.setOpen}
					className={cn(
						"z-50 mt-2 w-auto rounded-custom shadow-md outline-hidden",
						"data-entering:animate-in data-exiting:animate-out",
						"data-entering:fade-in-0 data-exiting:fade-out-0",
						"data-entering:zoom-in-95 data-exiting:zoom-out-95",
						"data-[placement=bottom]:slide-in-from-top-2",
						"data-[placement=left]:slide-in-from-right-2",
						"data-[placement=right]:slide-in-from-left-2",
						"data-[placement=top]:slide-in-from-bottom-2",
					)}
					offset={4}
				>
					<Dialog className="outline-hidden">
						<RangeCalendarWithPresets
							selected={tempDateRange}
							defaultRange={defaultValue}
							onSelect={handleTempChange}
							onApply={handleApply}
							onReset={handleReset}
							showFooter
						/>
					</Dialog>
				</Popover>
			</RACDateRangePicker>
		</I18nProvider>
	);
}
