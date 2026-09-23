import {
  useNavigate as tsNavigate,
  useLocation as tsLocation,
  useParams as tsParams,
  useRouter,
  Link as TSLink,
  Navigate as TSNavigate,
  Outlet as TSOutlet,
} from "@tanstack/react-router";
import { useMemo, useCallback, forwardRef, createElement, type ComponentProps, type ReactNode } from "react";

function parseTo(to: string): { pathname: string; search?: Record<string, string>; hash?: string } {
  const [beforeHash = "", hashStr] = (to ?? "").split("#");
  const [pathname = "", searchStr] = beforeHash.split("?");
  return { pathname: pathname || ".", search: searchStr ? Object.fromEntries(new URLSearchParams(searchStr)) : undefined, hash: hashStr || undefined };
}

type NavigateOptions = { replace?: boolean; state?: unknown };
type NavigateFn = { (to: string | number, options?: NavigateOptions): void; (delta: number): void };
export function useNavigate(): NavigateFn {
  const tsNav = tsNavigate();
  const router = useRouter();
  return useCallback((to: string | number, options?: NavigateOptions) => {
    if (typeof to === "number") { router.history.go(to); return; }
    const { pathname, search, hash } = parseTo(to);
    const navOptions = { to: pathname, ...(search ? { search } : {}), ...(hash ? { hash } : {}), ...(options?.state ? { state: options.state } : {}), ...(options?.replace !== undefined ? { replace: options.replace } : {}) };
    void tsNav(navOptions as never);
  }, [tsNav, router]) as NavigateFn;
}

export function useLocation() {
  const loc = tsLocation();
  return useMemo(() => ({ pathname: loc.pathname, search: loc.searchStr ? `?${loc.searchStr}` : "", hash: loc.hash ?? "", state: (loc.state ?? null) as unknown, key: loc.pathname + (loc.searchStr ?? "") }), [loc.pathname, loc.searchStr, loc.hash, loc.state]);
}

export function useParams<T extends Record<string, string | undefined> = Record<string, string | undefined>>(): T {
  return tsParams({ strict: false } as never) as T;
}

type LinkProps = Omit<ComponentProps<typeof TSLink>, "to"> & { to: string; replace?: boolean; state?: unknown; children?: ReactNode };
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link({ to, replace, state, children, ...rest }, ref) {
  const { pathname, search, hash } = parseTo(to);
  const linkOptions = { to: pathname, ...(search ? { search } : {}), ...(hash ? { hash } : {}), ...(replace !== undefined ? { replace } : {}), ...(state ? { state } : {}) };
  return createElement(TSLink, { ref, ...linkOptions, ...rest } as never, children);
});

export function Navigate({ to, replace, state }: { to: string; replace?: boolean; state?: unknown }) {
  const { pathname, search, hash } = parseTo(to);
  const navigateOptions = { to: pathname, ...(search ? { search } : {}), ...(hash ? { hash } : {}), ...(replace !== undefined ? { replace } : {}), ...(state ? { state } : {}) };
  return createElement(TSNavigate, navigateOptions as never);
}

export const Outlet = TSOutlet;
export const NavLink = Link;
export type NavLinkProps = LinkProps;