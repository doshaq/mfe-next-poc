import { Text, Grid, Checkbox, Container, Button } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { useBooksQuery } from "../api";
import {
  DataGrid,
  stringFilterFn,
  numberFilterFn,
  dateFilterFn,
  DataGridPaginationState,
} from "mantine-data-grid";
import { Link } from "react-router-dom";

const PAGE_SIZES = [10, 15, 20, 25];

export default function OrderPage() {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(25);

  const booksQuery = useBooksQuery({
    offset: page * 20,
  });
  return (
    <Container>
      <Text>MFE2</Text>
      <Link to={'form'}>
      <Button>
        Go to form
      </Button>
      </Link>
      <Grid align="center" mb="md">
        <DataGrid
          withGlobalFilter
          data={booksQuery.data?.results ?? []}
          total={booksQuery.data?.num_results}
          withPagination
          loading={booksQuery.isLoading}
          state={{
            pagination: {
              pageIndex: page,
              pageSize: limit,
            },
          }}
          onPageChange={(e) => {
            setPage(e.pageIndex);
            setLimit(e.pageSize);
          }}
          columns={[
            {
              accessorKey: "title",
              header: "title",
              filterFn: stringFilterFn,
            },
            {
              header: "author",
              columns: [
                { accessorKey: "author", filterFn: stringFilterFn },
                { accessorKey: "contributor", filterFn: stringFilterFn },
              ],
            },
            {
              accessorKey: "age_group",
              filterFn: stringFilterFn,
            },
            { accessorKey: "price", filterFn: numberFilterFn },
          ]}
        />
      </Grid>
    </Container>
  );
}
