import Logo from "@/assets/Logo.png";
import { motion } from "framer-motion";

const Footer = () => {
	return (
		<footer className="bg-primary-100 py-16">
			<motion.div
				className="justify-content mx-auto w-5/6 gap-16 md:flex"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, y: 100 },
					visible: { opacity: 1, y: 0 },
				}}
			>
				<div className="mt-16 basis-1/2 md:mt-0">
					<img alt="logo" src={Logo} />
					<p className="my-5">
						Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
						purus et arcu massa dictum condimentum. Augue scelerisque iaculis
						orci ut habitant laoreet. Iaculis tristique.
					</p>
					<p>© Evogym All Rights Reserved.</p>
				</div>
				<div className="mt-16 basis-1/4 md:mt-0">
					<h4 className="font-bold">Links</h4>
					<p className="my-5">Massa orci senectus</p>
					<p className="my-5">Et gravida id et etiam</p>
					<p>Ullamcorper vivamus</p>
				</div>
				<div className="mt-16 basis-1/4 md:mt-0">
					<h4 className="font-bold">Contact Us</h4>
					<p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
					<p>(333)425-6825</p>
				</div>
			</motion.div>
		</footer>
	);
};

export default Footer;
