type TButtonProps = {
    type: "button" | "reset" | "submit";
    children: string;
}

export const Button = ({
    type,
    children,
}: TButtonProps) => (
    <button type={type}>
        { children }
    </button>
)