"use client";

import { Check, ChevronDown } from "lucide-react";
import type * as React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { cn } from "../utils";
import { Button } from "./button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "./command";
import { Label } from "./label";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export interface SelectOption {
	value: string;
	label: string;
	data?: any;
}

interface SelectWithSearchProps {
	options: SelectOption[];
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
	onSearchChange?: (search: string) => void;
	id?: string;
	onOpenChange?: (open: boolean) => void;
	onEndReached?: () => void;
	renderOption?: (option: SelectOption, isSelected: boolean) => React.ReactNode;
	renderSelectedOption?: (option: SelectOption) => React.ReactNode;
	renderLoading?: () => React.ReactNode;
	renderEmpty?: () => React.ReactNode;
	isLoading?: boolean;
	isFetchingNextPage?: boolean;
}

export function SelectWithSearch({
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
	onSearchChange,
	id,
	onOpenChange,
	onEndReached,
	renderOption,
	renderSelectedOption,
	renderLoading,
	renderEmpty,
	isLoading = false,
	isFetchingNextPage = false,
}: SelectWithSearchProps) {
	const [open, setOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState(value || "");
	const [searchInputValue, setSearchInputValue] = useState("");

	const buttonRef = useRef<HTMLButtonElement>(null);
	const listRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (value !== undefined) {
			setSelectedValue(value);
		}
	}, [value]);

	// Scroll to selected item when opening the select
	useEffect(() => {
		if (!open || !selectedValue || !listRef.current) return;

		// Wait for the list to be fully rendered
		const timeoutId = setTimeout(() => {
			const selectedElement = listRef.current?.querySelector(
				`[data-value="${selectedValue}"]`,
			);
			if (selectedElement && listRef.current) {
				const list = listRef.current;
				const itemTop =
					selectedElement.getBoundingClientRect().top -
					list.getBoundingClientRect().top;
				const itemHeight = selectedElement.clientHeight;
				const listHeight = list.clientHeight;
				const scrollTop = itemTop - listHeight / 2 + itemHeight / 2;

				list.scrollTop = Math.max(0, scrollTop);
			}
		}, 50);

		return () => clearTimeout(timeoutId);
	}, [open, selectedValue]);

	const handleOpenChange = useCallback(
		(newOpen: boolean) => {
			setOpen(newOpen);
			onOpenChange?.(newOpen);
		},
		[onOpenChange],
	);

	const handleSelect = useCallback(
		(currentValue: string) => {
			setSelectedValue(currentValue);
			onValueChange?.(currentValue);
			setOpen(false);
		},
		[onValueChange],
	);

	const handleSearch = useCallback(
		(search: string) => {
			setSearchInputValue(search);
			onSearchChange?.(search);
		},
		[onSearchChange],
	);

	const handleScroll = useCallback(
		(event: Element) => {
			if (!event || !onEndReached) return;

			const { scrollTop, scrollHeight, clientHeight } = event;
			if (scrollHeight - scrollTop <= clientHeight * 1.5) {
				onEndReached();
			}
		},
		[onEndReached],
	);

	const selectedOption = useMemo(
		() => options.find((option) => option.value === selectedValue),
		[options, selectedValue],
	);

	const buttonContent = useMemo(
		() => (
			<>
				<span className="truncate">
					{selectedOption
						? renderSelectedOption
							? renderSelectedOption(selectedOption)
							: selectedOption.label
						: placeholder}
				</span>
				<ChevronDown
					size={16}
					strokeWidth={2}
					className="shrink-0 text-muted-foreground/80"
					aria-hidden="true"
				/>
			</>
		),
		[selectedOption, renderSelectedOption, placeholder],
	);

	const buttonClassName = useMemo(
		() =>
			cn(
				"w-full justify-between bg-background px-3 font-normal outline-offset-0 hover:bg-background focus-visible:border-ring focus-visible:outline-[3px] focus-visible:outline-ring/20",
				!selectedValue && "text-muted-foreground",
				error && "border-destructive",
				disabled && "opacity-50 cursor-not-allowed",
			),
		[selectedValue, error, disabled],
	);

	const renderContent = useCallback(() => {
		if (isLoading && renderLoading) {
			return <div className="p-1">{renderLoading()}</div>;
		}

		if (options.length === 0) {
			if (renderEmpty) {
				return (
					<div className="p-1 w-full overflow-hidden">{renderEmpty()}</div>
				);
			}
			return <CommandEmpty>{noResultsText}</CommandEmpty>;
		}

		return (
			<CommandGroup>
				{options.map((option) => {
					const isSelected = selectedValue === option.value;
					return (
						<CommandItem
							key={option.value}
							value={option.value}
							onSelect={handleSelect}
							className={cn("cursor-pointer", isSelected && "bg-primary/10")}
							data-value={option.value}
						>
							{renderOption ? (
								renderOption(option, isSelected)
							) : (
								<>
									{option.label}
									{isSelected && (
										<Check size={16} strokeWidth={2} className="ml-auto" />
									)}
								</>
							)}
						</CommandItem>
					);
				})}
				{isFetchingNextPage && renderLoading && (
					<div className="p-1">{renderLoading()}</div>
				)}
			</CommandGroup>
		);
	}, [
		isLoading,
		renderLoading,
		options,
		renderEmpty,
		noResultsText,
		renderOption,
		selectedValue,
		isFetchingNextPage,
		handleSelect,
	]);

	const labelElement = useMemo(
		() =>
			label && (
				<Label htmlFor={id || name} className={cn(error && "text-destructive")}>
					{label}
					{required && <span className="text-destructive ml-1">*</span>}
				</Label>
			),
		[label, id, name, error, required],
	);

	return (
		<div className={cn("flex flex-col gap-2", className)}>
			{labelElement}
			<Popover open={open} onOpenChange={handleOpenChange}>
				<PopoverTrigger asChild>
					<Button
						ref={buttonRef}
						id={id || name}
						variant="outline"
						aria-expanded={open}
						disabled={disabled}
						className={buttonClassName}
					>
						{buttonContent}
					</Button>
				</PopoverTrigger>
				<PopoverContent
					className="w-[var(--radix-popper-anchor-width)] border-input p-0"
					align="start"
					sideOffset={4}
				>
					<Command shouldFilter={false} className="overflow-hidden">
						<CommandInput
							placeholder={searchPlaceholder}
							value={searchInputValue}
							onValueChange={handleSearch}
							className="border-0"
						/>
						<CommandList
							onScroll={(e) => handleScroll(e.currentTarget)}
							ref={listRef}
							className="max-h-[300px] overflow-y-auto scroll-smooth"
						>
							{renderContent()}
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</div>
	);
}
