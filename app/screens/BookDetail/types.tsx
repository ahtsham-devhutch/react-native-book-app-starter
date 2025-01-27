export interface Props {
    books: {
        numberOfPages: string | number;
        createdAt: string;
        title: string;
        shortSummary: string;
    };
}
