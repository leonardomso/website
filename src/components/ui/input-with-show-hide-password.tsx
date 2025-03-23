"use client";

import { Eye, EyeOff } from "lucide-react";
import { type ComponentProps, useState } from "react";

import { cn } from "../utils";
import { FormControl } from "./form";
import { FormItem } from "./form";
import { FormLabel } from "./form";
import { Input } from "./input";

interface InputWithShowHidePasswordProps
	extends Omit<ComponentProps<"input">, "type"> {
	label?: string;
}

function InputWithShowHidePassword({
	className,
	label,
	...props
}: InputWithShowHidePasswordProps) {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const toggleVisibility = () => setIsVisible((prevState) => !prevState);

	return (
		<FormItem data-slot="input-with-show-hide-password">
			{label && <FormLabel data-slot="label">{label}</FormLabel>}
			<FormControl>
				<div data-slot="input-wrapper" className="relative">
					<Input
						data-slot="input"
						type={isVisible ? "text" : "password"}
						className={cn("pe-9", className)}
						{...props}
					/>
					<button
						data-slot="visibility-toggle"
						className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
						type="button"
						onClick={toggleVisibility}
						aria-label={isVisible ? "Ocultar senha" : "Mostrar senha"}
						aria-pressed={isVisible}
					>
						{isVisible ? (
							<EyeOff size={16} strokeWidth={2} aria-hidden="true" />
						) : (
							<Eye size={16} strokeWidth={2} aria-hidden="true" />
						)}
					</button>
				</div>
			</FormControl>
		</FormItem>
	);
}

export { InputWithShowHidePassword };
