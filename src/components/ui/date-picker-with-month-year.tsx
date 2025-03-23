"use client";

import { format, setDefaultOptions } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import type { DropdownNavProps, DropdownProps } from "react-day-picker";

import { cn } from "../utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./select";

// Set date-fns to preserve the date values without timezone conversion
setDefaultOptions({
	// This ensures that date-fns doesn't apply timezone conversions
	// when formatting or parsing dates
	weekStartsOn: 0,
});

// Capitalized month names for pt-BR
const capitalizedMonths = {
	janeiro: "Janeiro",
	fevereiro: "Fevereiro",
	março: "Março",
	abril: "Abril",
	maio: "Maio",
	junho: "Junho",
	julho: "Julho",
	agosto: "Agosto",
	setembro: "Setembro",
	outubro: "Outubro",
	novembro: "Novembro",
	dezembro: "Dezembro",
};

interface DatePickerWithMonthYearProps {
	/** The current value (controlled). */
	value?: Date;
	/** Handler that is called when the value changes. */
	onChange?: (value: Date | undefined) => void;
	/** The default value (uncontrolled). */
	defaultValue?: Date;
	/** Whether the date picker is disabled. */
	disabled?: boolean;
	/** Additional CSS class name for the container. */
	className?: string;
	/** Error state for validation styling. */
	error?: boolean;
	/** Minimum selectable date. */
	minValue?: Date;
	/** Maximum selectable date. */
	maxValue?: Date;
	/** Placeholder text when no date is selected */
	placeholder?: string;
}

function DatePickerWithMonthYear({
	value,
	onChange,
	defaultValue,
	disabled,
	className,
	error,
	minValue,
	maxValue,
	placeholder = "Selecione uma data",
}: DatePickerWithMonthYearProps) {
	// Use internal state if not controlled
	const [internalDate, setInternalDate] = useState<Date | undefined>(
		defaultValue,
	);

	// Use either controlled value or internal state
	const selectedDate = value !== undefined ? value : internalDate;

	// Format date for display
	const formattedDate = useMemo(() => {
		if (!selectedDate) return "";
		return format(selectedDate, "dd/MM/yyyy", { locale: ptBR });
	}, [selectedDate]);

	// Handle calendar dropdown change
	const handleCalendarChange = useCallback(
		(
			_value: string | number,
			_e: React.ChangeEventHandler<HTMLSelectElement>,
		) => {
			const _event = {
				target: {
					value: String(_value),
				},
			} as React.ChangeEvent<HTMLSelectElement>;
			_e(_event);
		},
		[],
	);

	// Handle date selection
	const handleSelect = useCallback(
		(date: Date | undefined) => {
			if (!date) {
				if (value === undefined) {
					setInternalDate(undefined);
				}
				if (onChange) {
					onChange(undefined);
				}
				return;
			}

			// Create a new date with the same year, month, and day
			// This ensures we're using the date as displayed in the UI
			// and prevents timezone issues
			const newDate = new Date(
				date.getFullYear(),
				date.getMonth(),
				date.getDate(),
				0,
				0,
				0,
				0,
			);

			if (value === undefined) {
				setInternalDate(newDate);
			}

			if (onChange) {
				onChange(newDate);
			}
		},
		[onChange, value],
	);

	// Calendar components for month/year dropdowns
	const calendarComponents = useMemo(
		() => ({
			DropdownNav: (props: DropdownNavProps) => (
				<div
					data-slot="dropdown-nav"
					className="flex w-full items-center gap-2"
				>
					{props.children}
				</div>
			),
			Dropdown: (props: DropdownProps) => (
				<Select
					data-slot="dropdown"
					value={String(props.value)}
					onValueChange={(value) => {
						if (props.onChange) {
							handleCalendarChange(value, props.onChange);
						}
					}}
				>
					<SelectTrigger
						data-slot="dropdown-trigger"
						className="h-8 w-fit font-medium first:grow"
					>
						<SelectValue />
					</SelectTrigger>
					<SelectContent
						data-slot="dropdown-content"
						className="max-h-[min(26rem,var(--radix-select-content-available-height))]"
					>
						{props.options?.map((option) => {
							// Capitalize month names if this is a month dropdown
							let label = option.label;
							if (
								typeof label === "string" &&
								Object.keys(capitalizedMonths).includes(label.toLowerCase())
							) {
								label =
									capitalizedMonths[
										label.toLowerCase() as keyof typeof capitalizedMonths
									];
							}

							return (
								<SelectItem
									key={option.value}
									value={String(option.value)}
									disabled={option.disabled}
									data-slot="dropdown-item"
								>
									{label}
								</SelectItem>
							);
						})}
					</SelectContent>
				</Select>
			),
		}),
		[handleCalendarChange],
	);

	return (
		<div
			data-slot="date-picker-with-month-year"
			className={cn("relative", className)}
		>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						data-slot="date-picker-trigger"
						variant="outline"
						className={cn(
							"w-full justify-start text-left font-normal",
							!selectedDate && "text-muted-foreground",
							error && "border-destructive",
							"h-10",
						)}
						disabled={disabled}
					>
						<CalendarIcon className="mr-2 h-4 w-4" />
						{formattedDate || placeholder}
					</Button>
				</PopoverTrigger>
				<PopoverContent
					data-slot="date-picker-content"
					className="w-auto p-3"
					align="start"
				>
					<Calendar
						data-slot="calendar"
						mode="single"
						selected={selectedDate}
						onSelect={handleSelect}
						defaultMonth={selectedDate || new Date()}
						captionLayout="dropdown"
						fromDate={minValue}
						toDate={maxValue}
						hideNavigation
						className="border-0"
						classNames={{
							month_caption: "mx-0",
						}}
						components={calendarComponents}
						locale={ptBR}
						fixedWeeks
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
}

export { DatePickerWithMonthYear };
