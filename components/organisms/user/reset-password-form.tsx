import { Form } from "@/components/atoms/form";
import { InputGroup } from "@/components/molecules/input-group";

export const ResetPasswordForm = () => (
    <Form action="" method="post">
        <InputGroup
            id="reset-password-email"
            label="Email of the account to reset"
            name="Reset Password Email"
        />
    </Form>
);
