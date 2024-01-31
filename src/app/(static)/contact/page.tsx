import Button from "@/components/Button/Button";

export const metadata = {
	title: "Betashop - Contact",
	description: "Contact page",
};

export default function Contact() {
    return (
		<div className="max-w-6xl mx-auto">
            <form className="max-w-full text-center">
                <div className="flex justify-between flex-wrap">
                    <input type="text" placeholder="Full Name" className="input input-secondary w-full mb-3 p-7 text-lg rounded-xl" id="name" autoComplete="name" />
                    <input type="email" placeholder="Email Address" className="input input-secondary w-full mb-3 p-7 text-lg rounded-xl" id="email" autoComplete="email"/>
                </div>
                <textarea placeholder="Your Message" cols={20} rows={4} className="textarea textarea-secondary w-full p-7 text-lg rounded-xl mb-8 resize-none" id="msg" autoComplete="msg"></textarea>
                <Button href='#' title='Send Message' style='p-5 mx-auto sm:mx-0'/>
            </form>
        </div>
    )
}