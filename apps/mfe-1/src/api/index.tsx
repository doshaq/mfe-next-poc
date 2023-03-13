import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "react-query";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Lists } from "../@generated/Lists";
import {
  GetListsBestSellersHistoryJsonParams,
  GetListsFullOverviewFormatParams,
  GetListsBestSellersHistoryJson,
  OverviewResponse,
} from "../@generated/data-contracts";
export * from "../@generated/Lists";
export * from "../@generated/ListsJson";
export * from "../@generated/data-contracts";
export const listsClient = new Lists();
type CustomUseQueryOptions<T> = Omit<
  UseQueryOptions<T, any, T, any[]>,
  "queryKey" | "queryFn"
>;
type CustomUseInfiniteQueryOptions<T, P> = Omit<
  UseInfiniteQueryOptions<T, unknown, T, T, (string | P)[]>,
  "queryKey" | "queryFn"
>;
type CustomUseMutationOptions<T> = Omit<
  UseMutationOptions<any, any, T, unknown>,
  "mutationFn"
>;
listsClient.instance.interceptors.request.use((config) => {
    config.params['api-key'] = 'N74LZseiB4LHhmRs4Y9m6fSG5Y5xZ8ip'
  return config;
});
export const useBooksQuery = (
  inputs: GetListsBestSellersHistoryJsonParams,
  opt?: CustomUseQueryOptions<GetListsBestSellersHistoryJson>
) => {
  return useQuery(
    ["useBooksQuery", inputs],
    () => {
      return new Promise<GetListsBestSellersHistoryJson>((resolve, reject) => {
        listsClient
          .getListsBestSellersHistoryJson(inputs)
          .then((result) => {
            if (result.data) resolve(result.data);
            else reject(new Error("[useBooksQuery] " + JSON.stringify(result)));
          })
          .catch((err) => reject(err));
      });
    },
    opt
  );
};
export const QueryWrapper: React.FC<{ client: QueryClient, children: JSX.Element; }> = ({
    children,
    client,
  }) => {
    return (
      <QueryClientProvider client={client}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    );
  };
  