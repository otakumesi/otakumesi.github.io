declare const fetchArticles: () => Promise<{
    uniqueKey: string;
    media: string;
    title: string;
    description: string;
    url: string;
    color: string;
    date: string;
}[]>;
export default fetchArticles;
