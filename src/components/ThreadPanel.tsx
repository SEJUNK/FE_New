import { useMemo } from "react";
import { findConnections, type Receipt } from "@/lib/receipts";
import { FragmentRow } from "@/components/receipt-bits";

export function ThreadPanel({
  anchor,
  onSelect,
  limit = 6,
}: {
  anchor: Receipt;
  onSelect?: (r: Receipt) => void;
  limit?: number;
}) {
  const links = useMemo(() => findConnections(anchor, limit), [anchor, limit]);
  const kinds = new Set(links.map((l) => l.receipt.type));

  return (
    <section className="relative border-y border-cloud/15 py-6">
      <div className="flex items-center justify-between gap-2">
        <p className="eyebrow">A discovered thread</p>
        <span className="border border-gold/30 bg-gold/10 px-2 py-1 font-mono text-[9px] font-semibold uppercase text-gold">
          {links.length} links found
        </span>
      </div>

      <div className="mt-5 flex flex-col gap-2.5">
        <FragmentRow receipt={anchor} active />
        {links.map((l) => (
          <div key={l.receipt.id} className="flex flex-col gap-2.5">
            <div className="ml-4 h-3 w-px bg-accent/50" aria-hidden="true" />
            <FragmentRow receipt={l.receipt} reason={l.reason} onSelect={onSelect} />
          </div>
        ))}
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-muted">
        {links.length
          ? `These ${links.length} fragments are connected by observable signals in the archive and span ${kinds.size} different kinds of record. Follow any of them to continue exploring the thread.`
          : "No related fragment was found using the connection signals available in this archive."}
      </p>
    </section>
  );
}