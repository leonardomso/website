import type { ComponentProps, ReactNode } from "react";

import { cn } from "../utils";
import { Input } from "./input";

interface InputWithInlineButtonProps extends ComponentProps<"input"> {
	button: ReactNode;
	buttonClassName?: string;
	buttonAriaLabel?: string;
	wrapperClassName?: string;
}

function InputWithInlineButton({
	button,
	buttonClassName,
	buttonAriaLabel,
	wrapperClassName,
	className,
	...props
}: InputWithInlineButtonProps) {
	return (
		<div
			data-slot="input-with-inline-button"
			className={cn("relative", wrapperClassName)}
		>
			<Input data-slot="input" className={cn("pe-9", className)} {...props} />
			<div
				data-slot="button-wrapper"
				className="absolute inset-y-0 end-0 flex items-center pr-1"
			>
				{button}
			</div>
		</div>
	);
}

export { InputWithInlineButton };
export type { InputWithInlineButtonProps };
