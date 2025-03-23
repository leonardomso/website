import { cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "../utils";

const alertVariants = cva(
	"relative w-full rounded-custom border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
	{
		variants: {
			variant: {
				default: "bg-background text-foreground",
				destructive:
					"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: "default" | "destructive";
}

function Alert({ className, variant = "default", ...props }: AlertProps) {
	return (
		<div
			data-slot="alert"
			role="alert"
			className={cn(alertVariants({ variant }), className)}
			{...props}
		/>
	);
}

function AlertTitle({
	className,
	...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h5
			data-slot="alert-title"
			className={cn("mb-1 font-medium leading-none tracking-tight", className)}
			{...props}
		/>
	);
}

function AlertDescription({
	className,
	...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<div
			data-slot="alert-description"
			className={cn("text-sm [&_p]:leading-relaxed", className)}
			{...props}
		/>
	);
}

export { Alert, AlertTitle, AlertDescription };
