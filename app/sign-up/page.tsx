"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { useSignUp } from "@clerk/nextjs";

type ClerkErrorShape = {
  errors?: Array<{ longMessage?: string; message?: string }>;
};

function getErrorMessage(error: unknown) {
  const clerkError = error as ClerkErrorShape;
  return (
    clerkError?.errors?.[0]?.longMessage ??
    clerkError?.errors?.[0]?.message ??
    "Sign-up failed. Please try again."
  );
}

function getSafeRedirect(rawRedirect: string | null) {
  if (!rawRedirect) return "/dashboard";
  return rawRedirect.startsWith("/") ? rawRedirect : "/dashboard";
}

export default function SignUpPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isLoaded, signUp, setActive } = useSignUp();

  const redirectUrl = useMemo(
    () => getSafeRedirect(searchParams.get("redirect_url")),
    [searchParams],
  );

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSignUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isLoaded) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const signUpAttempt = await signUp.create({
        emailAddress: emailAddress.trim(),
        password,
      });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace(redirectUrl);
        return;
      }

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsSubmitting(false);
    }
  }

  async function onVerifyEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isLoaded) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const verificationAttempt = await signUp.attemptEmailAddressVerification({
        code: emailCode.trim(),
      });

      if (verificationAttempt.status === "complete") {
        await setActive({ session: verificationAttempt.createdSessionId });
        router.replace(redirectUrl);
        return;
      }

      setError("Verification is not complete yet. Please check your code.");
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsSubmitting(false);
    }
  }

  async function resendCode() {
    if (!isLoaded) return;
    setError(null);

    try {
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
    } catch (err) {
      setError(getErrorMessage(err));
    }
  }

  if (pendingVerification) {
    return (
      <main style={{ maxWidth: 420, margin: "4rem auto", padding: "0 1rem" }}>
        <h1>Verify your email</h1>
        <p>Enter the code we sent to your email address.</p>

        <form
          onSubmit={onVerifyEmail}
          style={{ display: "grid", gap: "0.75rem" }}
        >
          <label htmlFor="code">Email code</label>
          <input
            id="code"
            value={emailCode}
            onChange={(event) => setEmailCode(event.target.value)}
            required
          />

          {error ? (
            <p role="alert" style={{ color: "crimson" }}>
              {error}
            </p>
          ) : null}

          <button type="submit" disabled={!isLoaded || isSubmitting}>
            {isSubmitting ? "Verifying..." : "Verify email"}
          </button>
        </form>

        <button
          type="button"
          onClick={resendCode}
          style={{ marginTop: "1rem" }}
          disabled={!isLoaded || isSubmitting}
        >
          Resend code
        </button>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 420, margin: "4rem auto", padding: "0 1rem" }}>
      <h1>Create account</h1>
      <p>Sign up with your email and password.</p>

      <form onSubmit={onSignUp} style={{ display: "grid", gap: "0.75rem" }}>
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
          autoComplete="new-password"
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
          {isSubmitting ? "Creating account..." : "Sign up"}
        </button>
      </form>

      <p style={{ marginTop: "1rem" }}>
        Already have an account? <Link href="/sign-in">Sign in</Link>
      </p>
    </main>
  );
}
