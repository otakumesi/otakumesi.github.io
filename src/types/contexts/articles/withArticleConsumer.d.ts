import * as React from 'react';
declare const withArticleConsumer: <T extends ArticleState, U = Pick<T, Exclude<keyof T, "articles" | "dispatch">>>(WrappedComponent: React.ComponentType<T>) => React.ComponentType<U>;
export default withArticleConsumer;
