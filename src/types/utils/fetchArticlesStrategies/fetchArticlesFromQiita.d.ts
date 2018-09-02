declare const fetchArticlesFromQiita: () => Promise<{
    uniqueKey: string;
    media: string;
    title: string;
    description: string;
    url: string;
    color: string;
    date: string;
}[] | null>;
export default fetchArticlesFromQiita;
