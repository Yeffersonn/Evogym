import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
	const inputStyles = `mb-5 w-full rounded-lg bg-secondary-300
  px-5 py-3 border-2 text-black border-primary-300 hover:border-primary-500 focus:placeholder:translate-y-[-50px] placeholder:duration-500`;

	const {
		register,
		trigger,
		formState: { errors },
	} = useForm();

	const onSubmit = async (e: any) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};

	return (
		<section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
			>
				{/* HEADER */}
				<motion.div
					className="md:w-3/5"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<HText>
						<span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
					</HText>
					<p className="my-5">
						Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
						sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
						adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
					</p>
				</motion.div>

				{/* FORM AND IMAGE */}
				<div className="mt-10 justify-between gap-8 md:flex">
					<motion.div
						className="mt-10 basis-3/5 md:mt-0"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<form
							target="_blank"
							onSubmit={onSubmit}
							action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
							method="POST"
						>
							{errors.name && (
								<p className="mb-1 font-bold text-red-600">
									{errors.name.type === "required" && "This field is required."}
									{errors.name.type === "maxLength" &&
										"Max length is 100 char."}
								</p>
							)}
							<input
								className={inputStyles}
								type="text"
								placeholder="Name"
								{...register("name", {
									required: true,
									maxLength: 100,
								})}
							/>

							{errors.email && (
								<p className="mb-1 font-bold text-red-600">
									{errors.email.type === "required" &&
										"This field is required."}
									{errors.email.type === "pattern" && "Invalid email address."}
								</p>
							)}
							<input
								className={inputStyles}
								type="text"
								placeholder="Email"
								{...register("email", {
									required: true,
									pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								})}
							/>

							{errors.message && (
								<p className="mb-1 font-bold text-red-600">
									{errors.message.type === "required" &&
										"This field is required."}
									{errors.message.type === "maxLength" &&
										"Max length is 2000 char."}
								</p>
							)}
							<textarea
								className={`${inputStyles} resize-none`}
								placeholder="Message"
								rows={8}
								cols={50}
								{...register("message", {
									required: true,
									maxLength: 2000,
								})}
							/>

							<button
								type="submit"
								className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 font-bold transition duration-300 hover:bg-primary-500 hover:text-white"
							>
								Submit
							</button>
						</form>
					</motion.div>

					<motion.div
						className="relative mt-16 basis-2/5 md:mt-0"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
							<img
								className="w-full"
								alt="contact-us-page-graphic"
								src={ContactUsPageGraphic}
							/>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
};

export default ContactUs;
