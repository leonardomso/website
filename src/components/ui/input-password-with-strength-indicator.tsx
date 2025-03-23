"use client";

import { Check, Eye, EyeOff, X } from "lucide-react";
import * as React from "react";

import { cn } from "../utils";
import { Input } from "./input";
import { Label } from "./label";

export interface InputPasswordWithStrengthIndicatorProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
	label?: string;
	error?: boolean;
	showStrengthIndicator?: boolean;
}

const requirements = [
	{ regex: /.{8,}/, text: "Pelo menos 8 caracteres" },
	{ regex: /[0-9]/, text: "Pelo menos 1 número" },
	{ regex: /[a-z]/, text: "Pelo menos 1 letra minúscula" },
	{ regex: /[A-Z]/, text: "Pelo menos 1 letra maiúscula" },
] as const;

const getStrengthColor = (score: number) => {
	if (score === 0) return "bg-border";
	if (score <= 1) return "bg-red-500";
	if (score <= 2) return "bg-orange-500";
	if (score === 3) return "bg-amber-500";
	return "bg-emerald-500";
};

const getStrengthText = (score: number) => {
	if (score === 0) return "Digite uma senha";
	if (score <= 2) return "Senha fraca";
	if (score === 3) return "Senha média";
	return "Senha forte";
};

function InputPasswordWithStrengthIndicator({
	className,
	label,
	error,
	showStrengthIndicator = true,
	onChange,
	placeholder,
	value,
	...props
}: InputPasswordWithStrengthIndicatorProps) {
	const [password, setPassword] = React.useState<string>(
		(value as string) || "",
	);
	const [isVisible, setIsVisible] = React.useState<boolean>(false);
	const [isTouched, setIsTouched] = React.useState<boolean>(false);

	// Watch for changes in the value prop to sync with internal state
	// Only update if the value is explicitly set to empty string (form reset)
	React.useEffect(() => {
		if (value === "") {
			setPassword("");
			setIsTouched(false);
		}
	}, [value]);

	const toggleVisibility = React.useCallback(() => {
		setIsVisible((prevState) => !prevState);
	}, []);

	const strength = React.useMemo(() => {
		return requirements.map((req) => ({
			met: req.regex.test(password),
			text: req.text,
		}));
	}, [password]);

	const strengthScore = React.useMemo(() => {
		return strength.filter((req) => req.met).length;
	}, [strength]);

	const strengthColor = React.useMemo(() => {
		return getStrengthColor(strengthScore);
	}, [strengthScore]);

	const strengthText = React.useMemo(() => {
		return getStrengthText(strengthScore);
	}, [strengthScore]);

	const handleChange = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setPassword(e.target.value);
			onChange?.(e);
		},
		[onChange],
	);

	const handleFocus = React.useCallback(
		(e: React.FocusEvent<HTMLInputElement>) => {
			setIsTouched(true);
			props.onFocus?.(e);
		},
		[props.onFocus],
	);

	const inputProps = React.useMemo(() => {
		return {
			type: isVisible ? "text" : "password",
			value: password,
			onChange: handleChange,
			placeholder,
			onFocus: handleFocus,
			className: cn("pe-9", error && "border-destructive", className),
			"aria-invalid": strengthScore < 4,
			"aria-describedby": "password-strength",
		};
	}, [
		isVisible,
		password,
		handleChange,
		handleFocus,
		error,
		className,
		strengthScore,
		placeholder,
	]);

	const buttonProps = React.useMemo(() => {
		return {
			className:
				"absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
			type: "button" as const,
			onClick: toggleVisibility,
			"aria-label": isVisible ? "Esconder senha" : "Mostrar senha",
			"aria-pressed": isVisible,
			"aria-controls": "password",
		};
	}, [isVisible, toggleVisibility]);

	const shouldShowIndicator = showStrengthIndicator && isTouched && password;

	return (
		<div
			data-slot="input-password-with-strength-indicator"
			className="flex flex-col gap-2"
		>
			{label && (
				<Label
					data-slot="label"
					htmlFor={props.id}
					className="text-sm font-medium text-foreground"
				>
					{label}
				</Label>
			)}
			<div data-slot="input-container" className="relative">
				<Input data-slot="input" {...inputProps} />
				<button data-slot="visibility-toggle" {...buttonProps}>
					{isVisible ? (
						<EyeOff size={16} strokeWidth={2} aria-hidden="true" />
					) : (
						<Eye size={16} strokeWidth={2} aria-hidden="true" />
					)}
				</button>
			</div>

			{shouldShowIndicator && (
				<div
					data-slot="strength-indicator"
					className="overflow-hidden transition-all duration-200 ease-in-out"
				>
					<div
						data-slot="strength-progress"
						className="animate-in fade-in slide-in-from-top-1 mb-4 mt-3 h-1 w-full overflow-hidden rounded-custom bg-border"
						role="progressbar"
						tabIndex={0}
						aria-valuenow={strengthScore}
						aria-valuemin={0}
						aria-valuemax={4}
						aria-label="Força da senha"
					>
						<div
							data-slot="strength-progress-bar"
							className={cn(
								"h-full transition-all duration-500 ease-out",
								strengthColor,
							)}
							style={{ width: `${(strengthScore / 4) * 100}%` }}
						/>
					</div>

					<div
						data-slot="strength-requirements"
						className="animate-in fade-in slide-in-from-top-2"
					>
						<p
							data-slot="strength-text"
							id="password-strength"
							className="mb-2 text-sm font-medium text-foreground"
						>
							{strengthText}. Deve conter:
						</p>

						<ul
							data-slot="strength-requirements-list"
							className="flex flex-col gap-1.5"
							aria-label="Requisitos da senha"
						>
							{strength.map((req) => (
								<li
									data-slot="strength-requirement"
									key={req.text}
									className="flex items-center gap-2"
								>
									{req.met ? (
										<Check
											size={16}
											className="text-emerald-500"
											aria-hidden="true"
										/>
									) : (
										<X
											size={16}
											className="text-muted-foreground/80"
											aria-hidden="true"
										/>
									)}
									<span
										data-slot="strength-requirement-text"
										className={cn(
											"text-xs",
											req.met ? "text-emerald-600" : "text-muted-foreground",
										)}
									>
										{req.text}
										<span className="sr-only">
											{req.met
												? " - Requisito atendido"
												: " - Requisito não atendido"}
										</span>
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
}

export { InputPasswordWithStrengthIndicator };
