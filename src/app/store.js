import { configureStore, getDefaulMiddleware } from '@reduxjs/toolkit'



export default configureStore({
	reducer: {
		user: userReducer,
		movie: movieReducer,
	},
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});
