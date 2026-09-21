type TFormProps = {
    action: string;
    method: "get" | "post";
    children: React.ReactElement | React.ReactElement[];
};

export const Form = ({ action, method, children }: TFormProps) => (
    <form action={action} method={method}>
        {children}
    </form>
);
