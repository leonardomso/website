import type * as React from "react";

import { cn } from "../utils";

export interface InputWithAddonsProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	leading?: React.ReactNode;
	trailing?: React.ReactNode;
	containerClassName?: string;
}

function InputWithAddons({
	leading,
	trailing,
	containerClassName,
	className,
	...props
}: InputWithAddonsProps) {
	return (
		<div
			data-slot="input-with-addons"
			className={cn(
				"border-input ring-offset-background focus-within:ring-ring group flex h-10 w-full rounded-custom border bg-transparent text-sm focus-within:outline-hidden focus-within:ring-2 focus-within:ring-offset-2 overflow-hidden",
				containerClassName,
			)}
		>
			{leading ? (
				<div
					data-slot="leading-addon"
					className="border-input bg-muted border-r px-3 py-2"
				>
					{leading}
				</div>
			) : null}
			<input
				data-slot="input"
				className={cn(
					"placeholder:text-muted-foreground bg-background w-full rounded-custom px-3 py-2 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
					className,
				)}
				{...props}
			/>
			{trailing ? (
				<div
					data-slot="trailing-addon"
					className="border-input bg-muted border-l px-3 py-2"
				>
					{trailing}
				</div>
			) : null}
		</div>
	);
}

export { InputWithAddons };
