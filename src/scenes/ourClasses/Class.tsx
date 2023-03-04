import { motion } from "framer-motion";

type Props = {
	name: string;
	description?: string;
	image: string;
};

const Class = ({ name, description, image }: Props) => {
	const overlayStyles = `p-5 absolute z-30 flex
  h-[380px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-primary-500 text-center text-white cursor-pointer
  opacity-0 transition duration-500 hover:opacity-90  hover:translate-y-0 translate-y-[-50px] origin-top`;

	return (
		<motion.li
			className="relative mx-5 inline-block h-[380px] w-[450px]"
			variants={{
				hidden: { opacity: 0, scale: 0.75 },
				visible: { opacity: 1, scale: 1 },
			}}
		>
			<div className={overlayStyles}>
				<p className="text-2xl">{name}</p>
				<p className="mt-5">{description}</p>
			</div>
			<img alt={`${image}`} src={image} />
		</motion.li>
	);
};

export default Class;
