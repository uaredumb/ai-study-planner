"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { useSignIn } from "@clerk/nextjs";

type ClerkErrorShape = {
  errors?: Array<{ longMessage?: string; message?: string }>;
};

function getErrorMessage(error: unknown) {
  const clerkError = error as ClerkErrorShape;
  return (
    clerkError?.errors?.[0]?.longMessage ??
    clerkError?.errors?.[0]?.message ??
    "Sign-in failed. Please try again."
  );
}

function getSafeRedirect(rawRedirect: string | null) {
  if (!rawRedirect) return "/dashboard";
  return rawRedirect.startsWith("/") ? rawRedirect : "/dashboard";
}

export default function SignInPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isLoaded, signIn, setActive } = useSignIn();

  const redirectUrl = useMemo(
    () => getSafeRedirect(searchParams.get("redirect_url")),
    [searchParams],
  );

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isLoaded) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress.trim(),
        password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace(redirectUrl);
        return;
      }

      setError("Additional sign-in steps are required for this account.");
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main style={{ maxWidth: 420, margin: "4rem auto", padding: "0 1rem" }}>
      <h1>Sign in</h1>
      <p>Use your email and password to continue.</p>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: "0.75rem" }}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={emailAddress}
          onChange={(event) => setEmailAddress(event.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        {error ? (
          <p role="alert" style={{ color: "crimson" }}>
            {error}
          </p>
        ) : null}

        <button type="submit" disabled={!isLoaded || isSubmitting}>
          {isSubmitting ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <p style={{ marginTop: "1rem" }}>
        Need an account? <Link href="/sign-up">Sign up</Link>
      </p>
    </main>
  );
}
