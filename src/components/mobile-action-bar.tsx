import Link from "next/link";
import { PhoneCall } from "lucide-react";

/** Always-visible call + quote actions on small screens. */
export function MobileActionBar({ phoneHref }: { phoneHref: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a href={phoneHref} className="btn btn-navy min-h-12">
          <PhoneCall className="size-5" aria-hidden="true" />
          Call Now
        </a>
        <Link href="/contact" className="btn btn-gold min-h-12">
          Free Quote
        </Link>
      </div>
    </div>
  );
}
