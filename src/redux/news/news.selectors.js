import { createSelector } from "reselect";

const selectNewsStore = (state) => state.news;

export const selectNewsHeadlines = createSelector([selectNewsStore], (ns) => ns.newsHeadlines);

export const selectIsLoadingHeadlines = createSelector([selectNewsStore], (ns) => ns.isLoading);

export const selectError = createSelector([selectNewsStore], (ns) => ns.errorMsg);

export const selectPerPage = createSelector([selectNewsStore], (ns) => ns.perPage);
