// @flow
export type PageNumber = number;

export type Category = 'popular' | 'recent' | 'debuts';

export type NavigationState = {
  categories: Array<{
    category: Category,
    currentPage: PageNumber,
  }>,
};

export type NavigationAction =
  | {
      type: 'CHANGE_CATEGORY',
      payload: { category: Category },
    }
  | { type: 'CHANGE_PAGE', payload: { page: PageNumber } };
