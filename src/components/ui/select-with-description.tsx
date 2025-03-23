import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { useId } from "react";

import { cn } from "../utils";
import { Label } from "./label";

interface SelectWithDescriptionProps {
	label?: string;
	items: {
		value: string;
		label: string;
		description?: string;
	}[];
	placeholder?: string;
	className?: string;
	labelClassName?: string;
	value?: string;
	onValueChange?: (value: string) => void;
	disabled?: boolean;
}

function SelectWithDescription({
	label,
	items,
	placeholder = "Select an option",
	className,
	labelClassName,
	value,
	onValueChange,
	disabled,
	...props
}: SelectWithDescriptionProps) {
	const id = useId();

	return (
		<div data-slot="select-with-description" className={className}>
			{label && (
				<Label data-slot="label" htmlFor={id} className={labelClassName}>
					{label}
				</Label>
			)}
			<SelectPrimitive.Root
				data-slot="select-root"
				value={value}
				onValueChange={onValueChange}
				disabled={disabled}
			>
				<SelectPrimitive.Trigger
					data-slot="select-trigger"
					id={id}
					className={cn(
						"flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
					)}
				>
					<SelectPrimitive.Value placeholder={placeholder} />
					<SelectPrimitive.Icon asChild>
						<ChevronDown className="h-4 w-4 opacity-50" />
					</SelectPrimitive.Icon>
				</SelectPrimitive.Trigger>
				<SelectPrimitive.Portal>
					<SelectPrimitive.Content
						data-slot="select-content"
						className="relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80"
						position="popper"
						align="start"
						sideOffset={5}
					>
						<SelectPrimitive.Viewport
							data-slot="select-viewport"
							className="p-1"
						>
							{items.map((item) => (
								<SelectPrimitive.Item
									key={item.value}
									value={item.value}
									data-slot="select-item"
									className={cn(
										"relative flex w-full cursor-default select-none items-start rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
									)}
								>
									<span
										data-slot="select-item-indicator"
										className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
									>
										<SelectPrimitive.ItemIndicator>
											<Check className="h-4 w-4" />
										</SelectPrimitive.ItemIndicator>
									</span>
									<div
										data-slot="select-item-content"
										className="flex flex-col"
									>
										<SelectPrimitive.ItemText>
											{item.label}
										</SelectPrimitive.ItemText>
										{item.description && (
											<span
												data-slot="select-item-description"
												className="text-xs text-muted-foreground"
											>
												{item.description}
											</span>
										)}
									</div>
								</SelectPrimitive.Item>
							))}
						</SelectPrimitive.Viewport>
					</SelectPrimitive.Content>
				</SelectPrimitive.Portal>
			</SelectPrimitive.Root>
		</div>
	);
}

export { SelectWithDescription };
