type TInputProps = {
    id: string,
    type: 'text' | 'password'
    name: string,
}

export const Input = ({
    id,
    type,
    name,
}: TInputProps) => (
    <input 
        id={id}
        type={type} 
        name={name}
    />
)