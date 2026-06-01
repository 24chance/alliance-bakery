import { Button } from "@/components/Button";
import { Cookie } from "@/components/Decor";

export default function NotFound() {
  return (
    <section className="grid min-h-[80vh] place-items-center px-6 pt-24 text-center">
      <div>
        <Cookie className="mx-auto w-28 animate-wiggle drop-shadow" />
        <h1 className="mt-8 font-display text-6xl font-bold text-choco-800">404</h1>
        <p className="mt-3 text-lg text-choco-500">
          Looks like this treat is all sold out. Let's get you back to fresh bakes.
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary">
            Back to home
          </Button>
        </div>
      </div>
    </section>
  );
}
