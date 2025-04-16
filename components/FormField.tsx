import React from "react";
import { 
	FormDescription, 
	FormLabel, 
	FormControl, 
	FormMessage, 
	FormItem, 
	Form as UIForm,
	FormField as UIFormField
} from "./ui/form";
import { Input } from "./ui/input";
import { Control, Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";

interface FormFieldProps<T extends FieldValues> {
	control?: Control<T>;
	name: Path<T>;
	label: string;
	placeholder?: string;
	type?: 'text' | 'email' | 'password';
	className?: string;
}

const FormField = <T extends FieldValues>({ 
	control, 
	name, 
	label, 
	placeholder, 
	type = "text",
	className 
}: FormFieldProps<T>) => {
	// Get form context if control is not provided
	const formContext = useFormContext<T>();
	const formControl = control || formContext?.control;

	if (!formControl) {
		console.warn("FormField is not being used within a Form context and no control was provided");
		return null;
	}

	return (
		<UIFormField
			control={formControl}
			name={name}
			render={({ field }) => (
				<FormItem className={cn("space-y-1", className)}>
					<FormLabel className="label">{label}</FormLabel>
					<FormControl>
						<Input className="input" type={type} placeholder={placeholder} {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default FormField;
