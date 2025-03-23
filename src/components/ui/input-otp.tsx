"use client";

import { OTPInput, OTPInputContext } from "input-otp";
import type { SlotProps } from "input-otp";
import { MinusIcon } from "lucide-react";
import * as React from "react";

import { cn } from "../utils";

function InputOTP({
	className,
	containerClassName,
	...props
}: React.ComponentProps<typeof OTPInput>) {
	return (
		<OTPInput
			data-slot="input-otp"
			containerClassName={cn(
				"flex items-center gap-2 has-disabled:opacity-50",
				containerClassName,
			)}
			className={cn("disabled:cursor-not-allowed", className)}
			{...props}
		/>
	);
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="input-otp-group"
			className={cn("flex items-center", className)}
			{...props}
		/>
	);
}

interface InputOTPSlotProps extends React.ComponentProps<"div"> {
	index: number;
}

function InputOTPSlot({ index, className, ...props }: InputOTPSlotProps) {
	const inputOTPContext = React.useContext(OTPInputContext);
	const { char, hasFakeCaret, isActive } = inputOTPContext.slots[
		index
	] as SlotProps;

	return (
		<div
			data-slot="input-otp-slot"
			className={cn(
				"relative flex h-16 w-12 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
				isActive && "z-10 ring-1 ring-ring",
				className,
			)}
			{...props}
		>
			{char}
			{hasFakeCaret && (
				<div
					data-slot="input-otp-caret"
					className="pointer-events-none absolute inset-0 flex items-center justify-center"
				>
					<div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
				</div>
			)}
		</div>
	);
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
	return (
		<div data-slot="input-otp-separator" {...props}>
			<hr className="sr-only" />
			<MinusIcon aria-hidden="true" />
		</div>
	);
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
