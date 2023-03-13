/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { GetListsFormatParams } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ListsJson<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get Best Sellers list.  If no date is provided returns the latest list.
   *
   * @name GetListsFormat
   * @summary Best Sellers List
   * @request GET:/lists.json
   * @secure
   */
  getListsFormat = (query: GetListsFormatParams, params: RequestParams = {}) =>
    this.request<
      {
        status?: string;
        copyright?: string;
        num_results?: number;
        last_modified?: string;
        results?: {
          list_name?: string;
          display_name?: string;
          bestsellers_date?: string;
          published_date?: string;
          rank?: number;
          rank_last_week?: number;
          weeks_on_list?: number;
          asterisk?: number;
          dagger?: number;
          amazon_product_url?: string;
          isbns?: {
            isbn10?: string;
            isbn13?: string;
          }[];
          book_details?: {
            title?: string;
            description?: string;
            contributor?: string;
            author?: string;
            contributor_note?: string;
            price?: number;
            age_group?: string;
            publisher?: string;
            primary_isbn13?: string;
            primary_isbn10?: string;
          }[];
          reviews?: {
            book_review_link?: string;
            first_chapter_link?: string;
            sunday_review_link?: string;
            article_chapter_link?: string;
          }[];
        }[];
      },
      any
    >({
      path: `/lists.json`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
