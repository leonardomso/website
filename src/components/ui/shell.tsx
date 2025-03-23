import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "../utils";

const shellVariants = cva("flex flex-col gap-4", {
	variants: {
		variant: {
			default: "mx-auto w-full max-w-[1700px] px-4 sm:px-8 lg:px-20 pt-2",
			centered:
				"items-center mx-auto w-full max-w-[1700px] px-4 sm:px-8 lg:px-20",
			fluid: "w-full px-4 sm:px-8 lg:px-20",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

interface ShellProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof shellVariants> {}

function Shell({ className, variant, ...props }: ShellProps) {
	return (
		<div className={cn(shellVariants({ variant }), className)} {...props} />
	);
}

export { Shell, type ShellProps };
