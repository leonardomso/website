"use client";

import {
	type CalendarDate,
	getLocalTimeZone,
	today,
} from "@internationalized/date";
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import {
	DatePicker as AriaDatePicker,
	Button,
	Calendar,
	CalendarCell,
	CalendarGrid,
	CalendarGridBody,
	CalendarGridHeader,
	CalendarHeaderCell,
	DateInput,
	DateSegment,
	Dialog,
	Group,
	Heading,
	Label,
	Popover,
} from "react-aria-components";

import { cn } from "../utils";

export interface DatePickerProps {
	/** The current value (controlled). */
	value?: CalendarDate;
	/** Handler that is called when the value changes. */
	onChange?: (value: CalendarDate) => void;
	/** The default value (uncontrolled). */
	defaultValue?: CalendarDate;
	/** Whether the date picker is disabled. */
	isDisabled?: boolean;
	/** Whether the date picker is read only. */
	isReadOnly?: boolean;
	/** Whether the date picker is required. */
	isRequired?: boolean;
	/** The label for the date picker. */
	label?: string;
	/** The placeholder text. */
	placeholder?: string;
	/** Additional CSS class name for the container. */
	className?: string;
	/** Error state for validation styling. */
	error?: boolean;
	/** Minimum selectable date. */
	minValue?: CalendarDate;
	/** Maximum selectable date. */
	maxValue?: CalendarDate;
}

function DatePicker({
	value,
	onChange,
	defaultValue,
	isDisabled,
	isReadOnly,
	isRequired,
	label,
	placeholder,
	className,
	error,
	minValue,
	maxValue,
}: DatePickerProps) {
	const now = today(getLocalTimeZone());

	return (
		<AriaDatePicker
			data-slot="date-picker"
			value={value}
			onChange={onChange as any}
			defaultValue={defaultValue}
			isDisabled={isDisabled}
			isReadOnly={isReadOnly}
			isRequired={isRequired}
			minValue={minValue}
			maxValue={maxValue}
			className={cn("flex flex-col gap-2", className)}
		>
			{label && (
				<Label
					data-slot="date-picker-label"
					className="text-sm font-medium text-foreground"
				>
					{label}
				</Label>
			)}
			<div data-slot="date-picker-input-group" className="flex">
				<Group
					data-slot="date-picker-group"
					className={cn(
						"inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-custom border border-input bg-background px-3 py-2 pe-9 text-sm shadow-xs shadow-black/5 transition-shadow data-focus-within:border-ring data-disabled:opacity-50 data-focus-within:outline-hidden data-focus-within:ring-[3px] data-focus-within:ring-ring/20",
						error && "border-destructive",
					)}
				>
					<DateInput data-slot="date-picker-input">
						{(segment) => (
							<DateSegment
								segment={segment}
								className="inline rounded-custom p-0.5 text-foreground caret-transparent outline data-disabled:cursor-not-allowed data-focused:bg-accent data-invalid:data-focused:bg-destructive data-[type=literal]:px-0 data-focused:data-placeholder:text-foreground data-focused:text-foreground data-invalid:data-focused:data-placeholder:text-destructive-foreground data-invalid:data-focused:text-destructive-foreground data-invalid:data-placeholder:text-destructive data-invalid:text-destructive data-placeholder:text-muted-foreground/70 data-[type=literal]:text-muted-foreground/70 data-disabled:opacity-50"
							/>
						)}
					</DateInput>
				</Group>
				<Button
					data-slot="date-picker-trigger"
					className="z-10 -me-px -ms-9 flex w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus-visible:outline-hidden data-focus-visible:outline data-focus-visible:outline-ring/70"
				>
					<CalendarIcon className="size-4" />
				</Button>
			</div>
			<Popover
				data-slot="date-picker-popover"
				className="z-50 rounded-custom border border-border bg-background text-popover-foreground shadow-lg shadow-black/5 outline-hidden data-entering:animate-in data-exiting:animate-out data-entering:fade-in-0 data-exiting:fade-out-0 data-entering:zoom-in-95 data-exiting:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2"
				offset={4}
			>
				<Dialog
					data-slot="date-picker-dialog"
					className="max-h-[inherit] overflow-auto p-2"
				>
					<Calendar data-slot="date-picker-calendar" className="w-fit">
						<header
							data-slot="date-picker-header"
							className="flex w-full items-center gap-1 pb-1"
						>
							<Button
								data-slot="date-picker-previous"
								slot="previous"
								className="w-fit h-fit p-2 hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-custom text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
							>
								<ChevronLeft className="size-4" />
							</Button>
							<Heading
								data-slot="date-picker-heading"
								className="grow text-center text-sm font-medium"
							/>
							<Button
								data-slot="date-picker-next"
								slot="next"
								className="w-fit h-fit p-2 hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-custom text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
							>
								<ChevronRight className="size-4" />
							</Button>
						</header>
						<CalendarGrid data-slot="date-picker-grid">
							<CalendarGridHeader data-slot="date-picker-grid-header">
								{(day) => (
									<CalendarHeaderCell
										data-slot="date-picker-header-cell"
										className="size-9 rounded-custom p-0 text-xs font-medium text-muted-foreground/80"
									>
										{day}
									</CalendarHeaderCell>
								)}
							</CalendarGridHeader>
							<CalendarGridBody
								data-slot="date-picker-grid-body"
								className="[&_td]:px-0"
							>
								{(date) => (
									<CalendarCell
										data-slot="date-picker-cell"
										date={date}
										className={cn(
											"relative flex size-9 items-center justify-center whitespace-nowrap rounded-custom border border-transparent p-0 text-sm font-normal text-foreground outline-offset-2 transition-colors data-disabled:pointer-events-none data-unavailable:pointer-events-none data-focus-visible:z-10 data-hovered:bg-accent data-selected:bg-primary data-hovered:text-foreground data-selected:text-primary-foreground data-unavailable:line-through data-disabled:opacity-30 data-unavailable:opacity-30 data-focus-visible:outline data-focus-visible:outline-ring/70 data-invalid:data-selected:[&:not([data-hover])]:bg-destructive data-invalid:data-selected:[&:not([data-hover])]:text-destructive-foreground",
											date.compare(now) === 0 &&
												"after:pointer-events-none after:absolute after:bottom-1 after:start-1/2 after:z-10 after:size-[3px] after:-translate-x-1/2 after:rounded-custom after:bg-primary data-selected:after:bg-background",
										)}
									/>
								)}
							</CalendarGridBody>
						</CalendarGrid>
					</Calendar>
				</Dialog>
			</Popover>
		</AriaDatePicker>
	);
}

export { DatePicker };
