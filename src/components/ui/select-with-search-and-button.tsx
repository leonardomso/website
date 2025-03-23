"use client";

import { Check, ChevronDown, Plus } from "lucide-react";
import * as React from "react";

import { cn } from "../utils";
import { Button } from "./button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "./command";
import { Label } from "./label";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export interface SelectOptionWithSearchAndButton {
	value: string;
	label: string;
}

interface SelectWithSearchAndButtonProps {
	options: SelectOptionWithSearchAndButton[];
	value?: string;
	onValueChange?: (value: string) => void;
	placeholder?: string;
	label?: string;
	searchPlaceholder?: string;
	noResultsText?: string;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	required?: boolean;
	name?: string;
	buttonText?: string;
	onButtonClick?: () => void;
	buttonIcon?: React.ReactNode;
}

export function SelectWithSearchAndButton({
	options,
	value,
	onValueChange,
	placeholder = "Select an option",
	label,
	searchPlaceholder = "Search...",
	noResultsText = "No results found.",
	className,
	disabled = false,
	error = false,
	required = false,
	name,
	buttonText = "Add new",
	onButtonClick,
	buttonIcon = (
		<Plus
			size={16}
			strokeWidth={2}
			className="-ms-2 me-2 opacity-60"
			aria-hidden="true"
		/>
	),
}: SelectWithSearchAndButtonProps) {
	const [open, setOpen] = React.useState(false);
	const [selectedValue, setSelectedValue] = React.useState(value || "");

	React.useEffect(() => {
		if (value !== undefined) {
			setSelectedValue(value);
		}
	}, [value]);

	const handleSelect = React.useCallback(
		(currentValue: string) => {
			const newValue = currentValue === selectedValue ? "" : currentValue;
			setSelectedValue(newValue);
			onValueChange?.(newValue);
			setOpen(false);
		},
		[selectedValue, onValueChange],
	);

	return (
		<div className={cn("flex flex-col gap-2", className)}>
			{label && (
				<Label htmlFor={name} className={cn(error && "text-destructive")}>
					{label}
					{required && <span className="text-destructive ml-1">*</span>}
				</Label>
			)}
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						id={name}
						variant="outline"
						aria-expanded={open}
						disabled={disabled}
						className={cn(
							"w-full justify-between bg-background px-3 font-normal outline-offset-0 hover:bg-background focus-visible:border-ring focus-visible:outline-[3px] focus-visible:outline-ring/20",
							!selectedValue && "text-muted-foreground",
							error && "border-destructive",
							disabled && "opacity-50 cursor-not-allowed",
						)}
					>
						<span className="truncate">
							{selectedValue
								? options.find((option) => option.value === selectedValue)
										?.label
								: placeholder}
						</span>
						<ChevronDown
							size={16}
							strokeWidth={2}
							className="shrink-0 text-muted-foreground/80"
							aria-hidden="true"
						/>
					</Button>
				</PopoverTrigger>
				<PopoverContent
					className="w-full min-w-[var(--radix-popper-anchor-width)] border-input p-0"
					align="start"
				>
					<Command>
						<CommandInput placeholder={searchPlaceholder} />
						<CommandList>
							<CommandEmpty>{noResultsText}</CommandEmpty>
							<CommandGroup>
								{options.map((option) => (
									<CommandItem
										key={option.value}
										value={option.value}
										onSelect={handleSelect}
									>
										{option.label}
										{selectedValue === option.value && (
											<Check size={16} strokeWidth={2} className="ml-auto" />
										)}
									</CommandItem>
								))}
							</CommandGroup>
							{onButtonClick && (
								<>
									<CommandSeparator />
									<CommandGroup>
										<Button
											variant="ghost"
											className="w-full justify-start font-normal"
											onClick={() => {
												onButtonClick();
												setOpen(false);
											}}
										>
											{buttonIcon}
											{buttonText}
										</Button>
									</CommandGroup>
								</>
							)}
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</div>
	);
}
