import useSWR from "swr";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

export const useSwr = <T>(url?: string | null) => {
  const { data, error, isLoading, ...res } = useSWR<T>(url, fetcher);

  return {
    data,
    isLoading,
    isError: error,
    error,
    ...res,
  };
};
