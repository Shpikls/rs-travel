import React from 'react'
import ContentLoader from 'react-content-loader'

export const LoginButtonSkeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={103}
    height={41}
    viewBox="0 0 103 41"
    backgroundColor="#b8b8b8"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="6" y="1" rx="5" ry="5" width="91" height="39" />
  </ContentLoader>
)
