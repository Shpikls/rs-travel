import React from 'react'
import ContentLoader from 'react-content-loader'

export const NavSkeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={560}
    height={39}
    viewBox="0 0 560 39"
    backgroundColor="#b8b8b8"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="21" y="10" rx="5" ry="5" width="90" height="16" />
    <rect x="153" y="10" rx="5" ry="5" width="90" height="16" />
    <rect x="285" y="10" rx="5" ry="5" width="90" height="16" />
    <rect x="417" y="10" rx="5" ry="5" width="90" height="16" />
  </ContentLoader>
)
