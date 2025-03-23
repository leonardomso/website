"use client";

import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { CheckIcon, ChevronRightIcon, DotIcon } from "lucide-react";
import type * as React from "react";

import { cn } from "../utils";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

interface ContextMenuSubTriggerProps
	extends React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> {
	inset?: boolean;
}

function ContextMenuSubTrigger({
	className,
	inset,
	children,
	...props
}: ContextMenuSubTriggerProps) {
	return (
		<ContextMenuPrimitive.SubTrigger
			data-slot="context-menu-subtrigger"
			className={cn(
				"flex cursor-default select-none items-center rounded-custom px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
				inset && "pl-8",
				className,
			)}
			{...props}
		>
			{children}
			<ChevronRightIcon className="ml-auto size-4" />
		</ContextMenuPrimitive.SubTrigger>
	);
}

function ContextMenuSubContent({
	className,
	...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
	return (
		<ContextMenuPrimitive.SubContent
			data-slot="context-menu-subcontent"
			className={cn(
				"z-50 min-w-[8rem] overflow-hidden rounded-custom border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
				className,
			)}
			{...props}
		/>
	);
}

function ContextMenuContent({
	className,
	...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
	return (
		<ContextMenuPrimitive.Portal>
			<ContextMenuPrimitive.Content
				data-slot="context-menu-content"
				className={cn(
					"z-50 min-w-[8rem] overflow-hidden rounded-custom border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
					className,
				)}
				{...props}
			/>
		</ContextMenuPrimitive.Portal>
	);
}

interface ContextMenuItemProps
	extends React.ComponentProps<typeof ContextMenuPrimitive.Item> {
	inset?: boolean;
}

function ContextMenuItem({ className, inset, ...props }: ContextMenuItemProps) {
	return (
		<ContextMenuPrimitive.Item
			data-slot="context-menu-item"
			className={cn(
				"relative flex cursor-default select-none items-center rounded-custom px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
				inset && "pl-8",
				className,
			)}
			{...props}
		/>
	);
}

function ContextMenuCheckboxItem({
	className,
	children,
	checked,
	...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
	return (
		<ContextMenuPrimitive.CheckboxItem
			data-slot="context-menu-checkbox-item"
			className={cn(
				"relative flex cursor-default select-none items-center rounded-custom py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
				className,
			)}
			checked={checked}
			{...props}
		>
			<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
				<ContextMenuPrimitive.ItemIndicator>
					<CheckIcon className="size-4" />
				</ContextMenuPrimitive.ItemIndicator>
			</span>
			{children}
		</ContextMenuPrimitive.CheckboxItem>
	);
}

function ContextMenuRadioItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
	return (
		<ContextMenuPrimitive.RadioItem
			data-slot="context-menu-radio-item"
			className={cn(
				"relative flex cursor-default select-none items-center rounded-custom py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
				className,
			)}
			{...props}
		>
			<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
				<ContextMenuPrimitive.ItemIndicator>
					<DotIcon className="size-4 fill-current" />
				</ContextMenuPrimitive.ItemIndicator>
			</span>
			{children}
		</ContextMenuPrimitive.RadioItem>
	);
}

interface ContextMenuLabelProps
	extends React.ComponentProps<typeof ContextMenuPrimitive.Label> {
	inset?: boolean;
}

function ContextMenuLabel({
	className,
	inset,
	...props
}: ContextMenuLabelProps) {
	return (
		<ContextMenuPrimitive.Label
			data-slot="context-menu-label"
			className={cn(
				"px-2 py-1.5 text-sm font-semibold text-foreground",
				inset && "pl-8",
				className,
			)}
			{...props}
		/>
	);
}

function ContextMenuSeparator({
	className,
	...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
	return (
		<ContextMenuPrimitive.Separator
			data-slot="context-menu-separator"
			className={cn("-mx-1 my-1 h-px bg-border", className)}
			{...props}
		/>
	);
}

function ContextMenuShortcut({
	className,
	...props
}: React.HTMLAttributes<HTMLSpanElement>) {
	return (
		<span
			data-slot="context-menu-shortcut"
			className={cn(
				"ml-auto text-xs tracking-widest text-muted-foreground",
				className,
			)}
			{...props}
		/>
	);
}

export {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuCheckboxItem,
	ContextMenuRadioItem,
	ContextMenuLabel,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuGroup,
	ContextMenuPortal,
	ContextMenuSub,
	ContextMenuSubContent,
	ContextMenuSubTrigger,
	ContextMenuRadioGroup,
};
