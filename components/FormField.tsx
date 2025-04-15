import React from "react";
import { FormDescription, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { FormControl, FormMessage } from "./ui/form";
import { FormItem } from "./ui/form";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
	control: Control<T>;
	name: Path<T>;
	label: string;
	placeholder?: string;
	type?: 'text' | 'email' | 'password';
}

const FormField = ({ control, name, label, placeholder, type = "text" }: FormFieldProps<T>) => (
	<Controller
	name={name} 
	control={control} 
	render={({ field }) => (
		<FormItem>
			<FormLabel className="label">{label}</FormLabel>
			<FormControl>
				<Input className="input" type={type} placeholder={placeholder} {...field} />
			</FormControl>
			<FormMessage />
		</FormItem>
	)}
	/>
)

export default FormField;
