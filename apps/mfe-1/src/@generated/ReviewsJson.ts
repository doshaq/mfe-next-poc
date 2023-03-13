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

import { GetReviewsFormatParams } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ReviewsJson<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get book reviews.
   *
   * @name GetReviewsFormat
   * @summary Reviews
   * @request GET:/reviews.json
   * @secure
   */
  getReviewsFormat = (query: GetReviewsFormatParams, params: RequestParams = {}) =>
    this.request<
      {
        status?: string;
        copyright?: string;
        num_results?: number;
        results?: {
          url?: string;
          publication_dt?: string;
          byline?: string;
          book_title?: string;
          book_author?: string;
          summary?: string;
          isbn13?: string[];
        }[];
      },
      any
    >({
      path: `/reviews.json`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
