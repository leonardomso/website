"use client";

import { type Tag, TagInput } from "emblor";
import * as React from "react";
import { cn } from "../utils";

export interface InputWithInnerTagsProps<T extends Tag = Tag> {
	id?: string;
	label?: string;
	placeholder?: string;
	defaultTags?: T[];
	tags?: T[];
	onTagsChange?: (tags: T[]) => void;
	disabled?: boolean;
	className?: string;
	containerClassName?: string;
	tagClassName?: string;
	tagCloseButtonClassName?: string;
}

function InputWithInnerTags({
	id,
	label,
	placeholder = "Add a tag",
	defaultTags,
	tags,
	onTagsChange,
	disabled,
	className,
	containerClassName,
	tagClassName,
	tagCloseButtonClassName,
}: InputWithInnerTagsProps<Tag>) {
	const [internalTags, setInternalTags] = React.useState<Tag[]>(
		defaultTags || [],
	);
	const [activeTagIndex, setActiveTagIndex] = React.useState<number | null>(
		null,
	);

	const handleSetTags = React.useCallback<
		React.Dispatch<React.SetStateAction<Tag[]>>
	>(
		(value) => {
			const newTags =
				typeof value === "function" ? value(tags || internalTags) : value;
			if (!tags) {
				setInternalTags(newTags);
			}
			onTagsChange?.(newTags);
		},
		[tags, internalTags, onTagsChange],
	);

	return (
		<div data-slot="input-with-inner-tags" className="flex flex-col gap-2">
			{label && (
				<label
					data-slot="label"
					htmlFor={id}
					className="text-sm font-medium text-foreground"
				>
					{label}
				</label>
			)}
			<TagInput
				data-slot="tag-input"
				id={id}
				tags={tags || internalTags}
				setTags={handleSetTags}
				placeholder={placeholder}
				disabled={disabled}
				styleClasses={{
					inlineTagsContainer: cn(
						"border-input rounded-custom bg-transparent px-3 py-0.5 text-sm ring-offset-background transition-colors focus-within:outline-hidden focus-within:ring-1 focus-within:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
						containerClassName,
					),
					input: cn(
						"w-full min-w-[80px] focus-visible:outline-hidden shadow-none px-2 h-7",
						className,
					),
					tag: {
						body: cn(
							"h-5 relative bg-background border border-input hover:bg-background rounded-custom font-medium text-xs ps-2 pe-7",
							tagClassName,
						),
						closeButton: cn(
							"absolute -inset-y-px -end-px p-0 rounded-e-lg flex size-6 border border-transparent ring-offset-background transition-colors focus-visible:border-ring focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 text-muted-foreground/80 hover:text-foreground",
							tagCloseButtonClassName,
						),
					},
				}}
				activeTagIndex={activeTagIndex}
				setActiveTagIndex={setActiveTagIndex}
			/>
		</div>
	);
}

export { InputWithInnerTags };
