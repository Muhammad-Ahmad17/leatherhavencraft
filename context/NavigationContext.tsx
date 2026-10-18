"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type NavigationContextType = {
  navigatingSlug: string | null;
  startNavigation: (slug: string) => boolean;
  clearNavigation: () => void;
};

const NavigationContext = createContext<NavigationContextType>({
  navigatingSlug: null,
  startNavigation: () => false,
  clearNavigation: () => {},
});

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [navigatingSlug, setNavigatingSlug] = useState<string | null>(null);
  const pathname = usePathname();

  // Reset when the page transition finishes
  useEffect(() => {
    setNavigatingSlug(null);
  }, [pathname]);

  const startNavigation = (slug: string) => {
    // If a navigation is already in progress, prevent any other card from spinning
    if (navigatingSlug) return false;
    setNavigatingSlug(slug);
    return true;
  };

  const clearNavigation = () => {
    setNavigatingSlug(null);
  };

  return (
    <NavigationContext.Provider
      value={{ navigatingSlug, startNavigation, clearNavigation }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}
