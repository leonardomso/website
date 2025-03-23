"use client";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { PanelLeftIcon } from "lucide-react";
import * as React from "react";

import { useIsMobile } from "../hooks/use-mobile";
import { cn } from "../utils";
import { Button } from "./button";
import { Input } from "./input";
import { Separator } from "./separator";
import { Sheet, SheetContent } from "./sheet";
import { Skeleton } from "./skeleton";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContext = {
	state: "expanded" | "collapsed";
	open: boolean;
	setOpen: (open: boolean) => void;
	openMobile: boolean;
	setOpenMobile: (open: boolean) => void;
	isMobile: boolean;
	toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContext | null>(null);

function useSidebar() {
	const context = React.useContext(SidebarContext);
	if (!context) {
		throw new Error("useSidebar must be used within a SidebarProvider.");
	}

	return context;
}

interface SidebarProviderProps {
	defaultOpen?: boolean;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	className?: string;
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

const SidebarProvider = ({
	defaultOpen = true,
	open: openProp,
	onOpenChange: setOpenProp,
	className,
	style,
	children,
	...props
}: SidebarProviderProps) => {
	const isMobile = useIsMobile();
	const [openMobile, setOpenMobile] = React.useState(false);

	// This is the internal state of the sidebar.
	// We use openProp and setOpenProp for control from outside the component.
	const [_open, _setOpen] = React.useState(defaultOpen);
	const open = openProp ?? _open;
	const setOpen = React.useCallback(
		(value: boolean | ((value: boolean) => boolean)) => {
			if (setOpenProp) {
				return setOpenProp?.(typeof value === "function" ? value(open) : value);
			}

			_setOpen(value);

			// This sets the cookie to keep the sidebar state.
			document.cookie = `${SIDEBAR_COOKIE_NAME}=${open}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
		},
		[setOpenProp, open],
	);

	// Helper to toggle the sidebar.
	const toggleSidebar = React.useCallback(() => {
		return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
	}, [isMobile, setOpen]);

	// Adds a keyboard shortcut to toggle the sidebar.
	React.useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (
				event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
				(event.metaKey || event.ctrlKey)
			) {
				event.preventDefault();
				toggleSidebar();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [toggleSidebar]);

	// We add a state so that we can do data-state="expanded" or "collapsed".
	// This makes it easier to style the sidebar with Tailwind classes.
	const state = open ? "expanded" : "collapsed";

	const contextValue = React.useMemo<SidebarContext>(
		() => ({
			state,
			open,
			setOpen,
			isMobile,
			openMobile,
			setOpenMobile,
			toggleSidebar,
		}),
		[state, open, setOpen, isMobile, openMobile, toggleSidebar],
	);

	return (
		<SidebarContext.Provider value={contextValue}>
			<TooltipProvider delayDuration={0}>
				<div
					style={
						{
							"--sidebar-width": SIDEBAR_WIDTH,
							"--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
							...style,
						} as React.CSSProperties
					}
					className={cn(
						"group/sidebar-wrapper flex min-h-svh w-full text-sidebar-foreground has-data-[variant=inset]:bg-sidebar",
						className,
					)}
					{...props}
				>
					{children}
				</div>
			</TooltipProvider>
		</SidebarContext.Provider>
	);
};
SidebarProvider.displayName = "SidebarProvider";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
	side?: "left" | "right";
	variant?: "sidebar" | "floating" | "inset";
	collapsible?: "none" | "offcanvas" | "icon";
}

const Sidebar: React.FC<SidebarProps> = ({
	side = "left",
	variant = "sidebar",
	collapsible = "offcanvas",
	className,
	children,
	...props
}) => {
	const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

	if (collapsible === "none") {
		return (
			<div
				className={cn(
					"flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
					className,
				)}
				{...props}
			>
				{children}
			</div>
		);
	}

	if (isMobile) {
		return (
			<Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
				<SheetContent
					data-sidebar="sidebar"
					data-mobile="true"
					className="w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
					style={
						{
							"--sidebar-width": SIDEBAR_WIDTH_MOBILE,
						} as React.CSSProperties
					}
					side={side as "left" | "right"}
				>
					<div className="flex h-full w-full flex-col">{children}</div>
				</SheetContent>
			</Sheet>
		);
	}

	return (
		<div
			className="group peer hidden md:block"
			data-state={state}
			data-collapsible={state === "collapsed" ? collapsible : ""}
			data-variant={variant}
			data-side={side}
		>
			{/* This is what handles the sidebar gap on desktop */}
			<div
				className={cn(
					"duration-200 relative h-svh w-(--sidebar-width) bg-transparent transition-[width] ease-linear",
					"group-data-[collapsible=offcanvas]:w-0",
					"group-data-[side=right]:rotate-180",
					variant === "floating" || variant === "inset"
						? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
						: "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
				)}
			/>
			<div
				className={cn(
					"duration-200 fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] ease-linear md:flex",
					side === "left"
						? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
						: "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
					// Adjust the padding for floating and inset variants.
					variant === "floating" || variant === "inset"
						? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
						: "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
					className,
				)}
				{...props}
			>
				<div
					data-sidebar="sidebar"
					className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-custom group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm"
				>
					{children}
				</div>
			</div>
		</div>
	);
};
Sidebar.displayName = "Sidebar";

interface SidebarTriggerProps extends React.ComponentProps<typeof Button> {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const SidebarTrigger = ({
	className,
	onClick,
	...props
}: SidebarTriggerProps) => {
	const { toggleSidebar } = useSidebar();
	return (
		<Button
			data-sidebar="trigger"
			variant="ghost"
			size="icon"
			className={cn(className)}
			onClick={(event) => {
				onClick?.(event);
				toggleSidebar();
			}}
			{...props}
		>
			<PanelLeftIcon className="size-4" />
			<span className="sr-only">Toggle Sidebar</span>
		</Button>
	);
};

interface SidebarRailProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const SidebarRail = ({ className, ...props }: SidebarRailProps) => {
	const { toggleSidebar } = useSidebar();
	return (
		<button
			data-sidebar="rail"
			aria-label="Toggle Sidebar"
			tabIndex={-1}
			onClick={toggleSidebar}
			title="Toggle Sidebar"
			className={cn(
				"absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
				"in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
				"[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
				"group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar",
				"[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
				"[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
				className,
			)}
			{...props}
		/>
	);
};

interface SidebarInsetProps extends React.HTMLAttributes<HTMLElement> {}

const SidebarInset = ({ className, ...props }: SidebarInsetProps) => {
	return (
		<main
			className={cn(
				"relative flex min-h-svh flex-1 flex-col bg-background",
				"peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-custom md:peer-data-[variant=inset]:shadow-sm",
				className,
			)}
			{...props}
		/>
	);
};

interface SidebarInputProps extends React.ComponentProps<typeof Input> {}

const SidebarInput = ({ className, ...props }: SidebarInputProps) => {
	return (
		<Input
			data-sidebar="input"
			className={cn(
				"h-9 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
				className,
			)}
			{...props}
		/>
	);
};

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({
	className,
	children,
}) => (
	<header
		className={cn(
			"flex h-14 items-center border-b border-border px-4",
			className,
		)}
	>
		{children}
	</header>
);
SidebarHeader.displayName = "SidebarHeader";

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarFooter = ({ className, ...props }: SidebarFooterProps) => {
	return (
		<footer
			className={cn("h-fit items-center border-t border-border p-2", className)}
		>
			{props.children}
		</footer>
	);
};
SidebarFooter.displayName = "SidebarFooter";

interface SidebarSeparatorProps
	extends React.ComponentProps<typeof Separator> {}

const SidebarSeparator = ({ className, ...props }: SidebarSeparatorProps) => {
	return (
		<Separator
			data-sidebar="separator"
			className={cn("mx-2 w-auto bg-sidebar-border", className)}
			{...props}
		/>
	);
};

interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarContent = ({ className, ...props }: SidebarContentProps) => {
	return (
		<div
			data-sidebar="content"
			className={cn(
				"flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
				className,
			)}
			{...props}
		/>
	);
};

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarGroup = ({ className, ...props }: SidebarGroupProps) => {
	return (
		<div
			data-sidebar="group"
			className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
			{...props}
		/>
	);
};

interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {
	asChild?: boolean;
}

const SidebarGroupLabel = ({
	className,
	asChild = false,
	...props
}: SidebarGroupLabelProps) => {
	const Comp = asChild ? Slot : "div";
	return (
		<Comp
			data-sidebar="group-label"
			className={cn(
				"duration-200 flex h-9 shrink-0 items-center rounded-custom px-2 text-xs font-medium text-sidebar-foreground/70 outline-hidden ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
				"group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
				className,
			)}
			{...props}
		/>
	);
};

interface SidebarGroupActionProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	asChild?: boolean;
}

const SidebarGroupAction = ({
	className,
	asChild = false,
	...props
}: SidebarGroupActionProps) => {
	const Comp = asChild ? Slot : "button";
	return (
		<Comp
			data-sidebar="group-action"
			className={cn(
				"absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-custom p-0 text-sidebar-foreground outline-hidden ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
				"after:absolute after:-inset-2 md:after:hidden",
				"peer-data-[size=sm]/menu-button:top-1",
				"peer-data-[size=default]/menu-button:top-1.5",
				"peer-data-[size=lg]/menu-button:top-2.5",
				"group-data-[collapsible=icon]:hidden",
				className,
			)}
			{...props}
		/>
	);
};

interface SidebarGroupContentProps
	extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarGroupContent = ({
	className,
	...props
}: SidebarGroupContentProps) => (
	<div
		data-sidebar="group-content"
		className={cn("w-full text-sm", className)}
		{...props}
	/>
);

interface SidebarMenuProps extends React.HTMLAttributes<HTMLUListElement> {}

const SidebarMenu = ({ className, ...props }: SidebarMenuProps) => (
	<ul
		data-sidebar="menu"
		className={cn("flex w-full min-w-0 flex-col gap-1", className)}
		{...props}
	/>
);

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {}

const SidebarMenuItem = ({ className, ...props }: SidebarMenuItemProps) => (
	<li
		data-sidebar="menu-item"
		className={cn("group/menu-item relative", className)}
		{...props}
	/>
);

const sidebarMenuButtonVariants = cva(
	"peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-custom p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
				outline:
					"bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
			},
			size: {
				default: "h-9 text-sm",
				sm: "h-7 text-xs",
				lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

interface SidebarMenuButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	asChild?: boolean;
	isActive?: boolean;
	variant?: "default" | "outline";
	size?: "default" | "sm" | "lg";
	tooltip?: string | React.ComponentProps<typeof TooltipContent>;
}

const SidebarMenuButton = ({
	asChild = false,
	isActive = false,
	variant = "default",
	size = "default",
	tooltip,
	className,
	...props
}: SidebarMenuButtonProps) => {
	const Comp = asChild ? Slot : "button";
	const { isMobile, state } = useSidebar();

	const button = (
		<Comp
			data-sidebar="menu-button"
			data-size={size}
			data-active={isActive}
			className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
			{...props}
		/>
	);

	if (!tooltip) {
		return button;
	}

	if (typeof tooltip === "string") {
		tooltip = {
			children: tooltip,
		};
	}

	return (
		<Tooltip>
			<TooltipTrigger asChild>{button}</TooltipTrigger>
			<TooltipContent
				side="right"
				align="center"
				hidden={state !== "collapsed" || isMobile}
				{...tooltip}
			/>
		</Tooltip>
	);
};

interface SidebarMenuBadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarMenuBadge = ({ className, ...props }: SidebarMenuBadgeProps) => (
	<div
		data-sidebar="menu-badge"
		className={cn(
			"absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-custom px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
			"peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
			"peer-data-[size=sm]/menu-button:top-1",
			"peer-data-[size=default]/menu-button:top-1.5",
			"peer-data-[size=lg]/menu-button:top-2.5",
			"group-data-[collapsible=icon]:hidden",
			className,
		)}
		{...props}
	/>
);

interface SidebarMenuActionProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	asChild?: boolean;
	showOnHover?: boolean;
}

const SidebarMenuAction = ({
	className,
	asChild = false,
	showOnHover = false,
	...props
}: SidebarMenuActionProps) => {
	const Comp = asChild ? Slot : "button";
	return (
		<Comp
			data-sidebar="menu-action"
			className={cn(
				"absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-custom p-0 text-sidebar-foreground outline-hidden ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
				"after:absolute after:-inset-2 md:after:hidden",
				"peer-data-[size=sm]/menu-button:top-1",
				"peer-data-[size=default]/menu-button:top-1.5",
				"peer-data-[size=lg]/menu-button:top-2.5",
				"group-data-[collapsible=icon]:hidden",
				showOnHover &&
					"group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
				className,
			)}
			{...props}
		/>
	);
};

interface SidebarMenuSkeletonProps
	extends React.HTMLAttributes<HTMLDivElement> {
	showIcon?: boolean;
}

const SidebarMenuSkeleton = ({
	className,
	showIcon = false,
	...props
}: SidebarMenuSkeletonProps) => {
	const width = React.useMemo(() => {
		return `${Math.floor(Math.random() * 40) + 50}%`;
	}, []);

	return (
		<div
			data-sidebar="menu-skeleton"
			className={cn(
				"rounded-custom h-9 flex gap-2 px-2 items-center",
				className,
			)}
			{...props}
		>
			{showIcon && (
				<Skeleton
					className="size-4 rounded-custom"
					data-sidebar="menu-skeleton-icon"
				/>
			)}
			<Skeleton
				className="h-4 flex-1 max-w-(--skeleton-width)"
				data-sidebar="menu-skeleton-text"
				style={
					{
						"--skeleton-width": width,
					} as React.CSSProperties
				}
			/>
		</div>
	);
};

interface SidebarMenuSubProps extends React.HTMLAttributes<HTMLUListElement> {}

const SidebarMenuSub = ({ className, ...props }: SidebarMenuSubProps) => (
	<ul
		data-sidebar="menu-sub"
		className={cn(
			"mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
			"group-data-[collapsible=icon]:hidden",
			className,
		)}
		{...props}
	/>
);

interface SidebarMenuSubItemProps extends React.HTMLAttributes<HTMLLIElement> {}

const SidebarMenuSubItem = ({ ...props }: SidebarMenuSubItemProps) => (
	<li {...props} />
);

interface SidebarMenuSubButtonProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	asChild?: boolean;
	size?: "sm" | "md";
	isActive?: boolean;
}

const SidebarMenuSubButton = ({
	asChild = false,
	size = "md",
	isActive,
	className,
	...props
}: SidebarMenuSubButtonProps) => {
	const Comp = asChild ? Slot : "a";
	return (
		<Comp
			data-sidebar="menu-sub-button"
			data-size={size}
			data-active={isActive}
			className={cn(
				"flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-custom px-2 text-sidebar-foreground outline-hidden ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
				"data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
				size === "sm" && "text-xs",
				size === "md" && "text-sm",
				"group-data-[collapsible=icon]:hidden",
				className,
			)}
			{...props}
		/>
	);
};

export {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupAction,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInput,
	SidebarInset,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSkeleton,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarProvider,
	SidebarRail,
	SidebarSeparator,
	SidebarTrigger,
	useSidebar,
};
