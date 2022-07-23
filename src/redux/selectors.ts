import { createSelector } from '@reduxjs/toolkit'
import { RootState } from './store'

export const selectApp = (state: RootState) => state.app
export const selectCms = createSelector(selectApp, (app) => app.cms)
export const selectCopyright = createSelector(selectCms, (cms) => cms.copyright)
export const selectLogoName = createSelector(selectCms, (cms) => cms.logoName)
