import type { FC } from "react";
import { UserButton } from "./auth/user-button";

export const Header: FC = () => {
	return (
		<header className="sticky flex justify-center border-b">
			<div className="flex h-16 w-full items-center justify-between px-4 sm:px-6">
				<h1 className="font-bold text-lg">app title</h1>
				<UserButton />
			</div>
		</header>
	);
};
