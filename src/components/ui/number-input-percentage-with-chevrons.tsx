"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import type * as React from "react";
import { Button, Group, Input, NumberField } from "react-aria-components";
import { cn } from "../utils";

export interface NumberInputPercentageWithChevronsProps
	extends Omit<
		React.InputHTMLAttributes<HTMLInputElement>,
		"value" | "onChange" | "defaultValue"
	> {
	defaultValue?: number;
	name: string;
	value?: number;
	onChange?: (value: number) => void;
	disabled?: boolean;
	label?: string;
	containerClassName?: string;
}

function NumberInputPercentageWithChevrons({
	defaultValue = 0,
	name,
	value,
	onChange,
	disabled,
	label,
	placeholder = "0%",
	className,
	containerClassName,
	...props
}: NumberInputPercentageWithChevronsProps) {
	const displayValue = value ? value / 100 : 0;

	const handleChange = (newValue: number) => {
		if (onChange) {
			onChange(newValue * 100);
		}
	};

	return (
		<NumberField
			data-slot="number-input-percentage-with-chevrons"
			defaultValue={defaultValue}
			value={displayValue}
			onChange={handleChange}
			minValue={0}
			maxValue={1}
			step={0.01}
			isDisabled={disabled}
			formatOptions={{
				style: "percent",
				minimumFractionDigits: 0,
				maximumFractionDigits: 2,
			}}
			aria-label={label || `${name} input`}
		>
			<Group
				data-slot="input-group"
				className={cn(
					"relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-custom border border-input text-sm shadow-xs shadow-black/5 ring-offset-background transition-shadow data-focus-within:border-ring data-disabled:opacity-50 data-focus-within:outline-hidden data-focus-within:ring-2 data-focus-within:ring-ring/30 data-focus-within:ring-offset-2",
					containerClassName,
				)}
			>
				<Input
					data-slot="input"
					aria-label={label || `${name} percentage input`}
					className={cn(
						"flex-1 bg-background px-3 py-2 tabular-nums text-foreground focus:outline-hidden",
						className,
					)}
					{...props}
				/>
				<div
					data-slot="chevrons-container"
					className="flex h-[calc(100%+2px)] flex-col"
				>
					<Button
						data-slot="increment-button"
						slot="increment"
						aria-label="Increase percentage"
						className="-me-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-sm text-muted-foreground/80 ring-offset-background transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
					>
						<ChevronUp size={12} strokeWidth={2} aria-hidden="true" />
					</Button>
					<Button
						data-slot="decrement-button"
						slot="decrement"
						aria-label="Decrease percentage"
						className="-me-px -mt-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-sm text-muted-foreground/80 ring-offset-background transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
					>
						<ChevronDown size={12} strokeWidth={2} aria-hidden="true" />
					</Button>
				</div>
			</Group>
		</NumberField>
	);
}

NumberInputPercentageWithChevrons.displayName =
	"NumberInputPercentageWithChevrons";

export { NumberInputPercentageWithChevrons };
