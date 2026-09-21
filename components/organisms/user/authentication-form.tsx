import { Form } from "@/components/atoms/form";
import { InputGroup } from "@/components/molecules/input-group";
import { Button } from "@/components/atoms/button";

type TAuthenticationFormProps = {
    type: "sign-up" | "sign-in";
};

export const AuthenticationForm = ({ }: TAuthenticationFormProps) => (
    <Form action="" method="post">
        <InputGroup id="username" label="Username or Email" name="username" />

        <InputGroup id="password" label="Password" name="password" />

        <Button type="submit">Submit</Button>
    </Form>
);
