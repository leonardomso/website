"use client";

import { Eye, EyeOff } from "lucide-react";
import * as React from "react";
import { cn } from "../utils";
import { Input } from "./input";

export interface PasswordInputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
	label?: string;
	showPasswordLabel?: string;
	hidePasswordLabel?: string;
	containerClassName?: string;
}

function PasswordInput({
	className,
	label,
	showPasswordLabel = "Show password",
	hidePasswordLabel = "Hide password",
	containerClassName,
	...props
}: PasswordInputProps) {
	const [isVisible, setIsVisible] = React.useState<boolean>(false);

	const toggleVisibility = () => setIsVisible((prevState) => !prevState);

	return (
		<div data-slot="password-input" className="flex flex-col gap-2">
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
					type={isVisible ? "text" : "password"}
					className={cn("pe-9", className)}
					{...props}
				/>
				<button
					data-slot="visibility-toggle"
					className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 ring-offset-background transition-shadow hover:text-foreground focus-visible:border focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
					type="button"
					onClick={toggleVisibility}
					aria-label={isVisible ? hidePasswordLabel : showPasswordLabel}
					aria-pressed={isVisible}
				>
					{isVisible ? (
						<EyeOff size={16} strokeWidth={2} aria-hidden="true" />
					) : (
						<Eye size={16} strokeWidth={2} aria-hidden="true" />
					)}
				</button>
			</div>
		</div>
	);
}

export { PasswordInput };
