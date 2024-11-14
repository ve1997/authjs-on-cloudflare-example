import { signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import type { ComponentPropsWithRef, FC } from "react";

type Props = { provider?: string } & ComponentPropsWithRef<typeof Button>;

export const SignIn: FC<Props> = ({ provider, ...props }) => {
	return (
		<form
			action={async () => {
				"use server";
				await signIn(provider);
			}}
		>
			<Button {...props}>sign in</Button>
		</form>
	);
};

export const SignOut: FC<Props> = ({ provider, ...props }) => {
	return (
		<form
			className="w-full"
			action={async () => {
				"use server";
				await signOut();
			}}
		>
			<Button variant="secondary" className="w-full" {...props}>
				sign out
			</Button>
		</form>
	);
};
