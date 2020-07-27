import Header from "./header";
import Footer from "./footer";
import WhiteHeader from "./white_header";

export default function Layout({ children, white }) {
	if (!white) {
		return (
			<main>
				<Header /> {children} <Footer />
			</main>
		);
	} else {
		return (
			<main>
				<WhiteHeader /> {children} <Footer />
			</main>
		);
	}
}
