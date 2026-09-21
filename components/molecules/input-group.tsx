import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";

type TInputGroupProps = {
    id: string;
    label: string;
    name: string;
};

export const InputGroup = ({ id, label, name }: TInputGroupProps) => (
    <div className="">
        <Label htmlFor={id}>{label}</Label>

        <Input id={id} type="text" name={name} />
    </div>
);
