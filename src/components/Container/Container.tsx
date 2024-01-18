import { ReactNode } from "react";

type Props = {
    children: ReactNode | JSX.Element;
    properties?: string[];
}

function Container({ children, properties = [] }: Props): JSX.Element {
    const props = properties.join(" ");
    return <div className={`container mx-auto ${props}`}>{children}</div>;
}

export default Container;