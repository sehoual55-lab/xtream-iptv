import "react";

declare module "react" {
  interface HTMLAttributes<T> {
    /** WebMCP declarative API — araç adı (AI ajanları için). */
    toolname?: string;
    /** WebMCP declarative API — araç açıklaması. */
    tooldescription?: string;
  }
}
