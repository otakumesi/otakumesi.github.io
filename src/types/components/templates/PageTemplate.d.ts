/// <reference types="react" />
export interface Props {
    header: JSX.Element;
    footer: JSX.Element;
    children: JSX.Element[] | JSX.Element;
}
declare const PageTemplate: ({ header, footer, children, ...props }: Props) => JSX.Element;
export default PageTemplate;
