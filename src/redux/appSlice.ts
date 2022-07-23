import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type NonEmptyArray<T> = [T, ...T[]]

type StoryContent = {
  img: string
  title: string
  content: string
}

export type AppState = {
  cms: {
    nav?: string[]
    buttonLogin?: string
    logoName?: string
    header?: {
      title?: string
      description?: string
      startPlanningText?: string
      startPlanningButton?: string
    }
    steps?: {
      title?: string
      step01?: string
      step02?: string
      step03?: string
    }
    destinations?: {
      title?: string
      slide1?: string
      slide2?: string
      slide3?: string
    }
    stories?: {
      buttonSee?: string
      content?: NonEmptyArray<StoryContent>
    }
    copyright?: string
  }
  loader?: Loader
}

export type Loader = 'loading' | 'error' | 'loaded'

const initialState: AppState = {
  cms: {},
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateCMS: (state, action: PayloadAction<AppState>) => {
      state.cms = {
        ...state.cms,
        ...action.payload,
      }
    },
    setLoader: (state, action: PayloadAction<Loader>) => {
      state.loader = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateCMS, setLoader } = appSlice.actions

export default appSlice.reducer
