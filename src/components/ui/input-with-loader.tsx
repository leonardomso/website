"use client";

import { LoaderCircle } from "lucide-react";
import type * as React from "react";
import { cn } from "../utils";
import { Input } from "./input";

export interface InputWithLoaderProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	isLoading?: boolean;
	icon?: React.ReactNode;
	endIcon?: React.ReactNode;
	onEndIconClick?: () => void;
	endIconAriaLabel?: string;
}

function InputWithLoader({
	className,
	isLoading = false,
	icon,
	endIcon,
	onEndIconClick,
	endIconAriaLabel,
	...props
}: InputWithLoaderProps) {
	return (
		<div data-slot="input-with-loader" className="relative">
			<Input
				data-slot="input"
				className={cn(endIcon ? "pe-9" : "", icon ? "ps-9" : "", className)}
				{...props}
			/>
			{(icon || isLoading) && (
				<div
					data-slot="start-icon"
					className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50"
				>
					{isLoading ? (
						<LoaderCircle
							className="animate-spin"
							size={16}
							strokeWidth={2}
							aria-hidden="true"
							role="presentation"
						/>
					) : (
						icon
					)}
				</div>
			)}
			{endIcon && (
				<button
					data-slot="end-icon"
					onClick={onEndIconClick}
					className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
					aria-label={endIconAriaLabel}
					type="button"
				>
					{endIcon}
				</button>
			)}
		</div>
	);
}

export { InputWithLoader };
