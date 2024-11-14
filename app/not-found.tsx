import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const runtime = "edge";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center bg-background text-foreground py-48">
			<h1 className="text-7xl font-extrabold mb-4">404</h1>
			<h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
			<p className="text-xl text-muted-foreground mb-8 text-center max-w-md">
				Sorry, we couldn't find the page you're looking for. It might have been
				removed or doesn't exist.
			</p>
			<Button asChild variant="outline" size="lg">
				<Link href="/" className="flex items-center">
					<ArrowLeft className="mr-2 h-4 w-4" />
					Back to Home
				</Link>
			</Button>
		</div>
	);
}
