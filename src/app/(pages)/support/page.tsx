"use client";
import { div } from "framer-motion/client";
import AboutPage from "../about/page";
import ContactPage from "../contact/page";
import { motion } from "framer-motion";

const SupportPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen p-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <h1 className="text-4xl font-bold mb-2">IT Support Services</h1>

            <div className="max-w-3xl text-duckBlue2 w-screen space-y-8 mb-8">
                <section className="space-y-4">
                    <h2 className="text-2xl  font-semibold">
                        Services I Offer:
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 mt-4">
                        <div className="p-6 rounded-lg">
                            <h3 className="text-xl text-duckYellow font-semibold mb-3">
                                Business Support
                            </h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Network Infrastructure</li>
                                <li>Server Management</li>
                                <li>Business Continuity</li>
                                <li>IT Consulting</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-lg">
                            <h3 className="text-xl text-duckYellow font-semibold mb-3">
                                Home Services
                            </h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>PC & Laptop Repairs</li>
                                <li>Home Network Setup</li>
                                <li>Smart Home Integration</li>
                                <li>Data Recovery</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-lg">
                            <h3 className="text-xl text-duckYellow font-semibold mb-3">
                                Emergency Support
                            </h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>24/7 Emergency Response</li>
                                <li>Critical System Recovery</li>
                                <li>Data Loss Prevention</li>
                                <li>Urgent Remote Support</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4"> Cross-Platform Support: </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl text-duckYellow font-semibold mb-3">
                                Device Support
                            </h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Windows PCs & Laptops</li>
                                <li>Mac & MacBooks</li>
                                <li>Android Devices</li>
                                <li>iPhone & iPad</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl text-duckYellow font-semibold mb-3">
                                Microsoft 365 Services
                            </h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Email Migration & Setup</li>
                                <li>SharePoint Configuration</li>
                                <li>Teams Implementation</li>
                                <li>365 Admin Support</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4 border-t border-duckYellow"></div>
                    <p className="my-14 text-duckBlue2">
                        Whether you're a business needing IT infrastructure support, a
                        homeowner requiring tech assistance, or facing an emergency
                        situation, I provide professional IT support services both remotely
                        and on-site. With years of experience in the field, I ensure
                        efficient and reliable solutions for all your tech needs.
                    </p>
                    <p>
                        Contact me today to discuss your requirements and let me help you
                        with your IT challenges.{" "}
                        <span className="text-duckYellow">317-316-0964</span> or email me
                        at <span className="text-duckYellow">brennan@mahto.xyz</span> or
                        even easier use my contact page below!
                    </p>
                </section>
            </div>

            <motion.div variants={itemVariants}>
                <ContactPage />
            </motion.div>
            <motion.div variants={itemVariants}>
                <AboutPage />
            </motion.div>
        </motion.div>
        
    );
};

export default SupportPage;