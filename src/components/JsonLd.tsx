/* Renders Schema.org structured data as a JSON-LD <script>. Server-rendered
   from trusted, hard-coded data — no user input — so it lands in the static
   HTML where crawlers read it. CSP allows it via script-src 'unsafe-inline'. */

type Schema = Record<string, unknown>;

export function JsonLd({ data }: { data: Schema | Schema[] }) {
  const json = JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
