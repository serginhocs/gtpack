import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { createRootRouteWithContext, HeadContent, Outlet, Scripts, useRouter } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import NotFound from "@/pages/NotFound";
import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "GTPACK — Copos e potes de papel e embalagens sustentáveis" },
      { name: "description", content: "GTPACK produz copos de papel e embalagens 100% biodegradáveis e compostáveis. Design honesto, fibra FSC, zero plástico." },
      { name: "author", content: "GTPACK" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "GTPACK — Copos e potes de papel e embalagens sustentáveis" },
      { property: "og:description", content: "GTPACK produz copos de papel e embalagens 100% biodegradáveis e compostáveis. Design honesto, fibra FSC, zero plástico." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/09d34bf2-23bc-44ea-95e5-336a35c375e8/id-preview-815e8175--4233e638-c18a-4a50-ade8-e173e765353d.lovable.app-1777458435506.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "GTPACK — Copos e potes de papel e embalagens sustentáveis" },
      { name: "twitter:description", content: "GTPACK produz copos de papel e embalagens 100% biodegradáveis e compostáveis. Design honesto, fibra FSC, zero plástico." },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/09d34bf2-23bc-44ea-95e5-336a35c375e8/id-preview-815e8175--4233e638-c18a-4a50-ade8-e173e765353d.lovable.app-1777458435506.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600&display=swap" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: RootError,
});

function RootShell({ children }: { children: ReactNode }) {
  return <html lang="pt-BR" suppressHydrationWarning><head><HeadContent /></head><body>{children}<Scripts /></body></html>;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return <QueryClientProvider client={queryClient}><TooltipProvider><Toaster /><Sonner /><Outlet /></TooltipProvider></QueryClientProvider>;
}

function RootError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { console.error(error); reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return <main className="grid min-h-screen place-items-center bg-background p-6 text-foreground"><div className="max-w-md text-center"><h1 className="mb-2 text-2xl font-semibold">Esta página não carregou</h1><p className="mb-6 text-muted-foreground">Algo deu errado. Tente novamente ou volte ao início.</p><div className="flex justify-center gap-2"><button className="rounded-md bg-primary px-4 py-2 text-primary-foreground" onClick={() => { void router.invalidate(); reset(); }}>Tentar novamente</button><a className="rounded-md border border-border bg-background px-4 py-2" href="/">Início</a></div></div></main>;
}