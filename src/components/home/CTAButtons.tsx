import Button from "@/components/ui/Button";

export default function CTAButtons() {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
      <Button href="/contact">
        Cuéntanos tu problema
      </Button>

      <Button
        href="https://compumercado.shop/"
        variant="secondary"
      >
        Visitar la tienda
      </Button>
    </div>
  );
}
