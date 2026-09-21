type TLabelProps = {
    htmlFor: string;
    children: string;
}

export const Label = ({
    htmlFor,
    children,
}: TLabelProps) => (
    <label htmlFor={htmlFor}>
        {children}
    </label>
)