"use client";

import { Minus, Plus } from "lucide-react";
import type * as React from "react";
import { Button, Group, Input, NumberField } from "react-aria-components";
import { cn } from "../utils";

export interface NumberInputWithButtonsProps
	extends Omit<
		React.InputHTMLAttributes<HTMLInputElement>,
		"value" | "onChange" | "defaultValue"
	> {
	defaultValue?: number;
	name: string;
	value?: number;
	onChange?: (value: number) => void;
	min?: number;
	max?: number;
	step?: number;
	disabled?: boolean;
	label?: string;
	className?: string;
	containerClassName?: string;
}

function NumberInputWithButtons({
	defaultValue,
	name,
	value,
	onChange,
	min,
	max,
	step = 1,
	disabled,
	label,
	placeholder,
	className,
	containerClassName,
	...props
}: NumberInputWithButtonsProps) {
	return (
		<NumberField
			data-slot="number-input-with-buttons"
			defaultValue={defaultValue}
			value={value}
			onChange={onChange}
			minValue={min}
			maxValue={max}
			step={step}
			isDisabled={disabled}
			aria-label={label || `${name} input`}
		>
			<Group
				data-slot="input-group"
				className={cn(
					"relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-custom border border-input text-sm shadow-xs shadow-black/5 ring-offset-background transition-shadow data-focus-within:border-ring data-disabled:opacity-50 data-focus-within:outline-hidden data-focus-within:ring-2 data-focus-within:ring-ring/30 data-focus-within:ring-offset-2",
					containerClassName,
				)}
			>
				<Button
					data-slot="decrement-button"
					slot="decrement"
					aria-label="Decrease value"
					className={cn(
						"-ms-px flex aspect-square h-[inherit] items-center justify-center rounded-s-lg border border-input bg-background text-sm text-muted-foreground/80 ring-offset-background transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
					)}
				>
					<Minus size={16} strokeWidth={2} aria-hidden="true" />
				</Button>
				<Input
					data-slot="input"
					aria-label={label || `${name} input`}
					placeholder={placeholder}
					className={cn(
						"w-full grow bg-background px-3 py-2 text-center tabular-nums text-foreground focus:outline-hidden",
						className,
					)}
					{...props}
				/>
				<Button
					data-slot="increment-button"
					slot="increment"
					aria-label="Increase value"
					className={cn(
						"-me-px flex aspect-square h-[inherit] items-center justify-center rounded-e-lg border border-input bg-background text-sm text-muted-foreground/80 ring-offset-background transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
					)}
				>
					<Plus size={16} strokeWidth={2} aria-hidden="true" />
				</Button>
			</Group>
		</NumberField>
	);
}

NumberInputWithButtons.displayName = "NumberInputWithButtons";

export { NumberInputWithButtons };
