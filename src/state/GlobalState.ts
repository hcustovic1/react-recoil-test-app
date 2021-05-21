import { atom } from 'recoil';

export const StartUser = atom({
    key: 'loggedInUser',
    default: 'Guest',
});
