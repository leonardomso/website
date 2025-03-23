"use client";

import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "../utils";
import { Checkbox } from "./checkbox";

const cardCheckboxVariants = cva(
	"relative flex w-full items-start gap-2 rounded-custom border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring",
	{
		variants: {
			variant: {
				default: "w-full",
				compact: "w-auto",
			},
			layout: {
				default: "items-center",
				start: "items-start",
			},
			disabled: {
				true: "cursor-not-allowed",
				false: "",
			},
		},
		defaultVariants: {
			variant: "default",
			layout: "default",
			disabled: false,
		},
	},
);

const CardCheckboxGroup: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	className,
	...props
}) => <div className={cn("grid gap-2", className)} {...props} />;
CardCheckboxGroup.displayName = "CardCheckboxGroup";

interface CardCheckboxItemProps
	extends React.ComponentPropsWithoutRef<typeof Checkbox>,
		VariantProps<typeof cardCheckboxVariants> {
	icon?: React.ReactNode;
	label: React.ReactNode;
	description?: React.ReactNode;
	disabled?: boolean;
}

const CardCheckboxItem: React.FC<CardCheckboxItemProps> = ({
	className,
	variant,
	layout,
	icon,
	label,
	description,
	id,
	disabled,
	...props
}) => (
	<div
		className={cn(
			cardCheckboxVariants({ variant, layout, disabled, className }),
		)}
	>
		<Checkbox
			id={id}
			disabled={disabled}
			className="order-1 after:absolute after:inset-0"
			aria-describedby={description ? `${id}-description` : undefined}
			{...props}
		/>
		<div className="flex grow items-start gap-3">
			{icon && (
				<div className={cn("shrink-0", disabled && "text-muted-foreground")}>
					{icon}
				</div>
			)}
			<div className="grid grow gap-2">
				<span
					className={cn(
						"text-sm font-medium leading-none",
						disabled && "text-muted-foreground",
					)}
				>
					{label}
				</span>
				{description && (
					<p
						id={id ? `${id}-description` : undefined}
						className={cn(
							"text-xs",
							disabled ? "text-muted-foreground/75" : "text-muted-foreground",
						)}
					>
						{description}
					</p>
				)}
			</div>
		</div>
	</div>
);
CardCheckboxItem.displayName = "CardCheckboxItem";

export { CardCheckboxGroup, CardCheckboxItem, type CardCheckboxItemProps };
