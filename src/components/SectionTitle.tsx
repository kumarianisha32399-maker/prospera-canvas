export function SectionTitle({
  eyebrow,
  title,
  text,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2
        className={`mt-4 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-5 text-[0.98rem] leading-relaxed ${
            light ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
