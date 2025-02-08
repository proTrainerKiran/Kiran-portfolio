import emailjs from "@emailjs/browser";

const setError = (error) => {
    console.error(error);
};

const setErrorMessage = (message) => {
    console.error(message);
};

export const sendEmail = async (emailData) => {
    const formattedEmailData = {
        from_name: emailData.name,
        from_phone: emailData.phone,
        from_email: emailData.email,
        from_plans: emailData.plans,
        from_comments: emailData.comments,
    };

    try {
        const result = await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formattedEmailData,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        console.log('Email successfully sent!', result.text);
        return { success: true, message: 'Email successfully sent!' };
    } catch (error) {
        console.error('There was an error sending the email:', error);
        setError(true);
        setErrorMessage("Failed to send email. Please try again later.");
        return { success: false, message: 'Failed to send email. Please try again later.' };
    }
};