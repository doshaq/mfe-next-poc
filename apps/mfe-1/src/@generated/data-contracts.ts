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

export interface OverviewResponse {
  status?: string;
  copyright?: string;
  num_results?: number;
  results?: {
    bestsellers_date?: string;
    published_date?: string;
    lists?: {
      list_id?: number;
      list_name?: string;
      display_name?: string;
      updated?: string;
      list_image?: string;
      books?: {
        age_group?: string;
        author?: string;
        contributor?: string;
        contributor_note?: string;
        created_date?: string;
        description?: string;
        price?: number;
        primary_isbn13?: string;
        primary_isbn10?: string;
        publisher?: string;
        rank?: number;
        title?: string;
        updated_date?: string;
      }[];
    }[];
  };
}

export interface GetListsFormatParams {
  /**
   * The name of the Times best sellers list (hardcover-fiction, paperback-nonfiction, ...).
   * The /lists/names service returns all the list names.
   * The encoded list names are lower case with hyphens instead of spaces (e.g. e-book-fiction, instead of E-Book Fiction).
   * @default "hardcover-fiction"
   */
  list: string;
  /**
   * YYYY-MM-DD
   *
   * The week-ending date for the sales reflected on list-name. Times best sellers lists are compiled using available book sale data. The bestsellers-date may be significantly earlier than published-date. For additional information, see the explanation at the bottom of any best-seller list page on NYTimes.com (example: Hardcover Fiction, published Dec. 5 but reflecting sales to Nov. 29).
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  "bestsellers-date"?: string;
  /**
   * YYYY-MM-DD
   *
   * The date the best sellers list was published on NYTimes.com (different than bestsellers-date).  Use "current" for latest list.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  "published-date"?: string;
  /**
   * Sets the starting point of the result set (0, 20, ...).  Used to paginate thru books if list has more than 20. Defaults to 0.  The num_results field indicates how many books are in the list.
   * @multipleOf 20
   */
  offset?: number;
}

export interface GetListsDateListJsonParams {
  /**
   * Sets the starting point of the result set (0, 20, ...).  Used to paginate thru books if list has more than 20. Defaults to 0.  The num_results field indicates how many books are in the list.
   * @multipleOf 20
   */
  offset?: number;
  /**
   * YYYY-MM-DD or "current"
   *
   * The date the best sellers list was published on NYTimes.com.  Use "current" to get latest list.
   * @pattern ^(\d{4}-\d{2}-\d{2}|current)$
   */
  date: string;
  /** Name of the Best Sellers List (e.g. hardcover-fiction). You can get the full list of names from the /lists/names.json service. */
  list: string;
}

export interface GetListsFullOverviewFormatParams {
  /**
   * YYYY-MM-DD
   *
   * The best-seller list publication date.
   * You do not have to specify the exact date the list was published. The service will search forward (into the future) for the closest publication date to the date you specify. For example, a request for lists/overview/2013-05-22 will retrieve the list that was published on 05-26.
   *
   * If you do not include a published date, the current week's best sellers lists will be returned.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  published_date?: string;
}

export interface GetListsOverviewFormatParams {
  /**
   * YYYY-MM-DD
   *
   * The best-seller list publication date.
   * You do not have to specify the exact date the list was published. The service will search forward (into the future) for the closest publication date to the date you specify. For example, a request for lists/overview/2013-05-22 will retrieve the list that was published on 05-26.
   *
   * If you do not include a published date, the current week's best sellers lists will be returned.
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  published_date?: string;
}

export interface GetListsBestSellersHistoryJsonParams {
  /** The target age group for the best seller. */
  "age-group"?: string;
  /**
   * The author of the best seller. The author field does not include additional contributors (see Data Structure for more details about the author and contributor fields).
   *
   * When searching the author field, you can specify any combination of first, middle and last names.
   *
   * When sort-by is set to author, the results will be sorted by author's first name.
   */
  author?: string;
  /**
   * The author of the best seller, as well as other contributors such as the illustrator (to search or sort by author name only, use author instead).
   *
   * When searching, you can specify any combination of first, middle and last names of any of the contributors.
   *
   * When sort-by is set to contributor, the results will be sorted by the first name of the first contributor listed.
   */
  contributor?: string;
  /**
   * International Standard Book Number, 10 or 13 digits
   *
   * A best seller may have both 10-digit and 13-digit ISBNs, and may have multiple ISBNs of each type. To search on multiple ISBNs, separate the ISBNs with semicolons (example: 9780446579933;0061374229).
   */
  isbn?: string;
  /**
   * Sets the starting point of the result set (0, 20, ...).  Used to paginate thru results if there are more than 20. Defaults to 0. The num_results field indicates how many results there are total.
   * @multipleOf 20
   */
  offset?: number;
  /** The publisher's list price of the best seller, including decimal point. */
  price?: string;
  /** The standardized name of the publisher */
  publisher?: string;
  /**
   * The title of the best seller
   *
   * When searching, you can specify a portion of a title or a full title.
   */
  title?: string;
}

export interface GetReviewsFormatParams {
  /** Searching by ISBN is the recommended method. You can enter 10- or 13-digit ISBNs. */
  isbn?: number;
  /** You’ll need to enter the full title of the book. Spaces in the title will be converted into the characters %20. */
  title?: string;
  /** You’ll need to enter the author’s first and last name, separated by a space. This space will be converted into the characters %20. */
  author?: string;
}
