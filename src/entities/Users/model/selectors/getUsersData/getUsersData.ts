import { createSelector } from '@reduxjs/toolkit';

import {UserSchema} from "../../types/user";
import {getUsers} from "../getUsers/getUsers";

export const getUsersData = createSelector(
    getUsers,
    (users: UserSchema) => users.users,
);
