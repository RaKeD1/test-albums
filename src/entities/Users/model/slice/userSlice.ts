import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema} from '../types/user';
import {fetchUsers} from "../services/fetchUsers/fetchUsers";
import {fetchAlbumsByUserId} from "../services/fetchAlbumsByUserId/fetchAlbumsByUserId"
import {
    fetchPhotosByAlbumId, FetchPhotosByAlbumIdResponse,
} from "../services/fetchPhotosByAlbumId/fetchPhotosByAlbumId";

const initialState: UserSchema = {
    users:[],
    isLoading:false,
    error:'',
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
                state.error = '';
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchAlbumsByUserId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchAlbumsByUserId.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = state.users.map(user => {
                    if (user.id === action.payload[0]?.userId) {
                        return {
                            ...user,
                            albums: action.payload
                        };
                    }
                    return user;
                })
            })
            .addCase(fetchAlbumsByUserId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchPhotosByAlbumId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchPhotosByAlbumId.fulfilled, (state, action:PayloadAction<FetchPhotosByAlbumIdResponse>) => {
                state.isLoading = false;
                state.users = state.users?.map((user) => {
                    if (user.id === action.payload.userId) {
                        const updatedAlbums = user.albums?.map((album) => {
                            if (album.albumId === action.payload.photos[0].albumId) {
                                return {
                                    ...album,
                                    photos: action.payload.photos,
                                };
                            }
                            return album;
                        });
                        // Возвращаем пользователя с обновленными альбомами
                        return {
                            ...user,
                            albums: updatedAlbums,
                        };
                    }
                    return user;
                });
            })
            .addCase(fetchPhotosByAlbumId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });

    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
