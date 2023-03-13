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

import {
  GetListsBestSellersHistoryJsonParams,
  GetListsDateListJsonParams,
  GetListsFullOverviewFormatParams,
  GetListsOverviewFormatParams,
  OverviewResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Lists<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get Best Sellers list by date.
   *
   * @name GetListsDateListJson
   * @summary Best Sellers List by Date
   * @request GET:/lists/{date}/{list}.json
   * @secure
   */
  getListsDateListJson = ({ date, list, ...query }: GetListsDateListJsonParams, params: RequestParams = {}) =>
    this.request<
      {
        status?: string;
        copyright?: string;
        num_results?: number;
        last_modified?: string;
        results?: {
          list_name?: string;
          bestsellers_date?: string;
          published_date?: string;
          display_name?: string;
          normal_list_ends_at?: number;
          updated?: string;
          books?: {
            rank?: number;
            rank_last_week?: number;
            weeks_on_list?: number;
            asterisk?: number;
            dagger?: number;
            primary_isbn10?: string;
            primary_isbn13?: string;
            publisher?: string;
            description?: string;
            price?: number;
            title?: string;
            author?: string;
            contributor?: string;
            contributor_note?: string;
            book_image?: string;
            amazon_product_url?: string;
            age_group?: string;
            book_review_link?: string;
            first_chapter_link?: string;
            sunday_review_link?: string;
            article_chapter_link?: string;
            isbns?: {
              isbn10?: string;
              isbn13?: string;
            }[];
          }[];
          corrections?: object[];
        };
      },
      any
    >({
      path: `/lists/${date}/${list}.json`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get all books for all the Best Sellers lists for specified date.
   *
   * @name GetListsFullOverviewFormat
   * @summary Best Sellers List Full Overview
   * @request GET:/lists/full-overview.json
   * @secure
   */
  getListsFullOverviewFormat = (query: GetListsFullOverviewFormatParams, params: RequestParams = {}) =>
    this.request<OverviewResponse, any>({
      path: `/lists/full-overview.json`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get top 5 books for all the Best Sellers lists for specified date.
   *
   * @name GetListsOverviewFormat
   * @summary Best Sellers List Overview
   * @request GET:/lists/overview.json
   * @secure
   */
  getListsOverviewFormat = (query: GetListsOverviewFormatParams, params: RequestParams = {}) =>
    this.request<OverviewResponse, any>({
      path: `/lists/overview.json`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get Best Sellers list names.
   *
   * @name GetListsNamesFormat
   * @summary Best Sellers List Names
   * @request GET:/lists/names.json
   * @secure
   */
  getListsNamesFormat = (params: RequestParams = {}) =>
    this.request<
      {
        status?: string;
        copyright?: string;
        num_results?: number;
        results?: {
          list_name?: string;
          display_name?: string;
          list_name_encoded?: string;
          oldest_published_date?: string;
          newest_published_date?: string;
          updated?: "WEEKLY" | "MONTHLY";
        }[];
      },
      any
    >({
      path: `/lists/names.json`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get Best Sellers list history.
   *
   * @name GetListsBestSellersHistoryJson
   * @summary Best Sellers List History
   * @request GET:/lists/best-sellers/history.json
   * @secure
   */
  getListsBestSellersHistoryJson = (query: GetListsBestSellersHistoryJsonParams, params: RequestParams = {}) =>
    this.request<
      {
        status?: string;
        copyright?: string;
        num_results?: number;
        results?: {
          title?: string;
          description?: string;
          contributor?: string;
          author?: string;
          contributor_note?: string;
          price?: number;
          age_group?: string;
          publisher?: string;
          isbns?: {
            isbn10?: string;
            isbn13?: string;
          }[];
          ranks_history?: {
            primary_isbn10?: string;
            primary_isbn13?: string;
            rank?: number;
            list_name?: string;
            display_name?: string;
            published_date?: string;
            bestsellers_date?: string;
            weeks_on_list?: number;
            ranks_last_week?: any;
            asterisk?: number;
            dagger?: number;
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
      path: `/lists/best-sellers/history.json`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
