import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { toast } from "sonner"
import FormField from "@/components/FormField"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { useRouter } from "next/navigation"
type CreateBotModalProps = {
	isOpen: boolean;
	onClose: () => void;
}

const createBotSchema = z.object({
	name: z.string().min(1, { message: "Name is required" }),
	description: z.string().min(1, { message: "Description is required" }),
	avatar: z.string().min(1, { message: "Avatar is required" }),
	role: z.string().min(1, { message: "Role is required" }),
})

type FormValues = z.infer<typeof createBotSchema>;

const CreateBotModal = ({ isOpen, onClose }: CreateBotModalProps) => {
	const router = useRouter();

	const form = useForm<FormValues>({
		resolver: zodResolver(createBotSchema),
		defaultValues: {
			name: "",
			description: "",
			avatar: "/avatars/avatar1.jpg",
			role: "",
		},
	})

	function onSubmit(values: FormValues) {
		try {
			console.log(values);
			onClose();
			router.refresh();
			toast.success('AI Interviewer created successfully.');
		} catch (error) {
			console.log(error);
			toast.error(`There was an error: ${error}`);
		}
	}

	const handleClose = () => {
		form.reset();
		onClose();
	}

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
			<div className="card-border max-w-[500px] w-full mx-4">
				<div className="flex flex-col gap-6 card py-8 px-6">
					
					<div className="text-center">
						<h3 className="text-xl font-semibold">Create AI Interviewer</h3>
						<p className="text-gray-500 mt-1">Create a new AI Interviewer to practice with. You can edit it later.</p>
					</div>

					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4 mt-2 form">
							<FormField 
								control={form.control}
								name="name"
								label="Name"
								placeholder="Interviewer name"
							/>

							<FormField 
								control={form.control}
								name="description"
								label="Description"
								placeholder="Interviewer description"
							/>

							<FormField 
								control={form.control}
								name="avatar"
								label="Avatar"
								placeholder="Select an avatar"
							/>

							<FormField 
								control={form.control}
								name="role"
								label="Role"
								placeholder="Interviewer role"
							/>

							<div className="pt-4 flex gap-3">
								<Button 
									type="button" 
									variant="outline" 
									className="btn-secondary flex-1" 
									onClick={handleClose}
								>
									Cancel
								</Button>
								<Button 
									type="submit" 
									className="btn flex-1"
								>
									Create
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</div>
		</div>
	)
}

export default CreateBotModal;