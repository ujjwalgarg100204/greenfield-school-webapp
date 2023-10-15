import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useCallback } from "react";

const useUpdateSearchParams = (): ((
  searchParameters: Record<string, string>,
) => void) => {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  return useCallback(
    searchParameters => {
      const params = new URLSearchParams(searchParams);
      Object.entries(searchParameters).forEach(([key, value]) => {
        params.set(key, value);
      });

      router.push(`${path}?${params.toString()}`);
    },
    [searchParams, router, path],
  );
};

export default useUpdateSearchParams;
