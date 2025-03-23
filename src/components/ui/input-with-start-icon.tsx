"use client";

import type * as React from "react";
import { cn } from "../utils";
import { Input } from "./input";

export interface InputWithStartIconProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	icon?: React.ReactNode;
	label?: string;
	containerClassName?: string;
}

function InputWithStartIcon({
	className,
	icon,
	label,
	containerClassName,
	...props
}: InputWithStartIconProps) {
	return (
		<div data-slot="input-with-start-icon" className="flex flex-col gap-2">
			{label && (
				<label
					data-slot="label"
					htmlFor={props.id}
					className="text-sm font-medium text-foreground"
				>
					{label}
				</label>
			)}
			<div
				data-slot="input-container"
				className={cn("relative", containerClassName)}
			>
				<Input
					data-slot="input"
					className={cn("peer ps-9", className)}
					{...props}
				/>
				<div
					data-slot="icon"
					className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50"
				>
					{icon}
				</div>
			</div>
		</div>
	);
}

export { InputWithStartIcon };
