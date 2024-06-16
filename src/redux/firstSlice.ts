import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

type fetchItemsType = {
    fetchItems: any[],
    isLoading: boolean,
    inputValue: string,
    buyedItems: any[],
    descriptionItem: number
}

const initialState: fetchItemsType = {
    fetchItems: [],
    isLoading: false,
    inputValue: "",
    buyedItems: [],
    descriptionItem: 0
}

export const fetchingData = createAsyncThunk(
    "store/fetchingData",
    async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            if (!response.ok) {
                console.log("Response error")
            }
            const data = response.json()
            return data
        }
        catch (error) {
            console.log("Fetching data error")
        }
    }
)

const storeSlicer = createSlice({
    name: "shopy",
    initialState,
    reducers: {
        setInputValue(state, action) {
            state.inputValue = action.payload.toLowerCase()
        },
        setBuyedItems(state, action) {
            state.buyedItems.push(action.payload)
        },
        deleteBuyedItems(state, action) {
            state.buyedItems.splice(action.payload, 1)
        },
        displayCurrent(state, action) {
            state.descriptionItem = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchingData.pending, (state) => { state.isLoading = true })
            .addCase(fetchingData.fulfilled, (state, action) => { state.fetchItems = action.payload, state.isLoading = false })
    }
})

export const { setInputValue, setBuyedItems, deleteBuyedItems, displayCurrent } = storeSlicer.actions;
export const storeReducer = storeSlicer.reducer;