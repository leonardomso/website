"use client";

import { Phone } from "lucide-react";
import * as React from "react";
import PhoneInput2, {
	type Country,
	formatPhoneNumber,
} from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import { cn } from "../utils";
import { Input } from "./input";

export interface PhoneInputProps
	extends Omit<
		React.InputHTMLAttributes<HTMLInputElement>,
		"value" | "onChange"
	> {
	value: string;
	onChange: (value: string) => void;
	label?: string;
	error?: boolean;
	containerClassName?: string;
}

function PhoneInput({
	className,
	label,
	value,
	onChange,
	error,
	containerClassName,
	...props
}: PhoneInputProps) {
	const handleChange = (newValue: string | undefined) => {
		onChange(formatPhoneNumber(newValue || ""));
	};

	const e164Value = React.useMemo(() => {
		const numericValue = value.replace(/\D/g, "");
		return numericValue ? `+55${numericValue}` : "";
	}, [value]);

	return (
		<div data-slot="phone-input" className="flex flex-col gap-2" dir="ltr">
			{label && (
				<label
					data-slot="label"
					htmlFor={props.id}
					className="text-sm font-medium text-foreground"
				>
					{label}
				</label>
			)}
			<PhoneInput2
				data-slot="phone-input-container"
				className={cn(
					"flex rounded-custom shadow-xs shadow-black/5",
					containerClassName,
				)}
				value={e164Value}
				onChange={handleChange}
				international={false}
				withCountryCallingCode={false}
				defaultCountry="BR"
				countries={["BR"]}
				addInternationalOption={false}
				countryCallingCodeEditable={false}
				flagComponent={FlagComponent}
				countrySelectComponent={CountrySelect}
				inputComponent={PhoneInputField}
				numberInputProps={{
					className: cn(
						"-ms-px rounded-s-none shadow-none focus-visible:z-10",
						error && "border-destructive",
						className,
					),
					...props,
				}}
			/>
		</div>
	);
}

function PhoneInputField({
	className,
	...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
	return (
		<Input
			data-slot="phone-input-field"
			className={cn(
				"-ms-px rounded-s-none shadow-none focus-visible:z-10",
				className,
			)}
			{...props}
		/>
	);
}

interface CountrySelectComponentProps {
	value: Country;
	onChange: (value: Country) => void;
	options: { value: Country; label: string }[];
	disabled?: boolean;
}

function CountrySelect({ value }: CountrySelectComponentProps) {
	return (
		<div
			data-slot="country-select"
			className="relative inline-flex items-center self-stretch rounded-s-lg border border-input bg-background py-2 px-3 text-muted-foreground ring-offset-background transition-shadow focus-within:z-10 focus-within:border-ring focus-within:text-foreground focus-within:outline-hidden focus-within:ring-2 focus-within:ring-ring/30 focus-within:ring-offset-2 has-disabled:opacity-50"
		>
			<div
				data-slot="country-select-content"
				className="inline-flex items-center gap-1"
				aria-hidden="true"
			>
				<FlagComponent country={value} countryName="Brasil" />
			</div>
		</div>
	);
}

function FlagComponent({
	country,
	countryName,
}: { country: Country; countryName: string }) {
	const Flag = flags[country];
	return (
		<span data-slot="flag" className="w-5 overflow-hidden rounded-custom">
			{Flag ? (
				<Flag title={countryName} />
			) : (
				<Phone size={16} aria-hidden="true" />
			)}
		</span>
	);
}

export { PhoneInput };
