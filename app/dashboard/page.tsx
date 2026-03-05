import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const runtime = "edge";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await currentUser();
  const primaryEmail =
    user?.emailAddresses.find(
      (emailAddress) => emailAddress.id === user.primaryEmailAddressId,
    )?.emailAddress ?? user?.emailAddresses[0]?.emailAddress;

  return (
    <main style={{ maxWidth: 680, margin: "4rem auto", padding: "0 1rem" }}>
      <h1>Dashboard</h1>
      <p>This route is protected by Clerk middleware.</p>
      <p>
        <strong>User ID:</strong> {userId}
      </p>
      <p>
        <strong>Email:</strong> {primaryEmail ?? "No email available"}
      </p>
    </main>
  );
}
