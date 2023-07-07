import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'

import { NewsApi } from '../../../Api/NewsApi'
import { LocalPaperVersion } from '../../../Models/LocalPaperVersion'
import { RootState } from '../../Store'

/**
 * The state of the local paper version slice.
 */
export interface LocalPaperVersionState {
  /**
   * All available local paper versions.
   */
  papers: LocalPaperVersion[]
}

/**
 * The initial state of the local paper version slice.
 */
const initialState = {
  papers: []
} as LocalPaperVersionState

/**
 * The local paper version slice.
 */
const localPaperVersionSlice = createSlice({
  name: 'papers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLocalPaperVersions.fulfilled, (state, action) => {
      for (const paper of action.payload) {
        const exists = state.papers.find((p) => p.id === paper.id)

        if (exists) {
          continue
        }

        state.papers.push(paper)
      }
    })
  }
})

// export const {} = subscriptionSlice.actions

/**
 * Fetches all local paper versions from the server.
 */
export const fetchLocalPaperVersions = createAsyncThunk('subscription/fetchSubscriptions', async () => {
  return await NewsApi.fetchLocalPaperVersions()
})

/**
 * Selects all available local paper versions.
 */
export const availablePaperVersions = createSelector(
  (state: RootState) => state.papers,
  (state: LocalPaperVersionState) => state.papers
)

/**
 * The reducer for the local paper version slice.
 */
export default localPaperVersionSlice.reducer
