import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function SetupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // 1. Authenticate via Clerk. If not signed in, `redirectToSignIn()` will throw a NEXT_REDIRECT.
    const { userId, redirectToSignUp } = await auth();
    if (!userId) {
        // Narrow type: userId is now a string
        return redirectToSignUp();
    }
    return <>{children}</>;
}