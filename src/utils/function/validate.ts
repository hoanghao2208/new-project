export const validateEmail = (email: string) => {
    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        return 'Invalid email address';
    }
};

export const validatePhoneNumber = (phoneNumber: string) => {
    if (!phoneNumber.match(/^[0-9]{10,11}$/)) {
        return 'Invalid phone number';
    }
};
