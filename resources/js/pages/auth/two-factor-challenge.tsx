import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/components/ui/input-otp';
import { OTP_MAX_LENGTH } from '@/hooks/use-two-factor-auth';
import AuthLayout from '@/layouts/auth-layout';
import { store } from '@/routes/two-factor/login';
import { Form, Head } from '@inertiajs/react';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { useMemo, useState } from 'react';

export default function TwoFactorChallenge() {
    const [showRecoveryInput, setShowRecoveryInput] =
        useState<boolean>(false);
    const [code, setCode] = useState<string>('');

    const authConfigContent = useMemo(() => {
        if (showRecoveryInput) {
            return {
                title: 'Сэргээх код',
                description:
                    'Өөрийн нөөц сэргээх кодуудаас аль нэгийг оруулж нэвтрэх эрхээ баталгаажуулна уу.',
                toggleText: 'баталгаажуулах кодоор нэвтрэх',
            };
        }

        return {
            title: 'Баталгаажуулах код',
            description:
                'Authenticator апп-аас авсан баталгаажуулах кодыг оруулна уу.',
            toggleText: 'сэргээх кодоор нэвтрэх',
        };
    }, [showRecoveryInput]);

    const toggleRecoveryMode = (clearErrors: () => void): void => {
        setShowRecoveryInput(!showRecoveryInput);
        clearErrors();
        setCode('');
    };

    return (
        <AuthLayout
            title={authConfigContent.title}
            description={authConfigContent.description}
        >
            <Head title="Хоёр шатлалт баталгаажуулалт" />

            <div className="space-y-6">
                <Form
                    {...store.form()}
                    className="space-y-4"
                    resetOnError
                    resetOnSuccess={!showRecoveryInput}
                >
                    {({ errors, processing, clearErrors }) => (
                        <>
                            {showRecoveryInput ? (
                                <>
                                    <Input
                                        name="recovery_code"
                                        type="text"
                                        placeholder="Сэргээх код оруулна уу"
                                        autoFocus={showRecoveryInput}
                                        required
                                    />
                                    <InputError
                                        message={errors.recovery_code}
                                    />
                                </>
                            ) : (
                                <div className="flex flex-col items-center justify-center space-y-3 text-center">
                                    <InputOTP
                                        name="code"
                                        maxLength={OTP_MAX_LENGTH}
                                        value={code}
                                        onChange={(value) => setCode(value)}
                                        disabled={processing}
                                        pattern={REGEXP_ONLY_DIGITS}
                                    >
                                        <InputOTPGroup>
                                            {Array.from(
                                                { length: OTP_MAX_LENGTH },
                                                (_, index) => (
                                                    <InputOTPSlot
                                                        key={index}
                                                        index={index}
                                                    />
                                                ),
                                            )}
                                        </InputOTPGroup>
                                    </InputOTP>
                                    <InputError message={errors.code} />
                                </div>
                            )}

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={processing}
                            >
                                Үргэлжлүүлэх
                            </Button>

                            <div className="text-center text-sm text-muted-foreground">
                                <span>эсвэл </span>
                                <button
                                    type="button"
                                    className="underline"
                                    onClick={() =>
                                        toggleRecoveryMode(clearErrors)
                                    }
                                >
                                    {authConfigContent.toggleText}
                                </button>
                            </div>
                        </>
                    )}
                </Form>
            </div>
        </AuthLayout>
    );
}
