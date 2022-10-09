import { Tag } from "./style";

type LabelProps = {
    content: string;
}

export function Label(props: LabelProps) {
    return (
        <Tag>
            {props.content}
        </Tag>
    )
}