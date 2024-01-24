import { Breadcrumb } from 'antd';

type Props = { title: string };

function Breadcrumbs({ title }: Props): JSX.Element {
    const items = [{ title: "Home", href: "/" }];
    items.push({ title, href: "" });
    return <Breadcrumb className="py-2" separator=">" items={items} />;
}

export default Breadcrumbs;