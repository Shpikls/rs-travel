import React from 'react'
import ContentLoader from 'react-content-loader'

export const LogoSkeleton = (props: any) => {
  return (
    <ContentLoader
      width={172}
      height={39}
      speed={2}
      backgroundColor="#c5c5c5"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="5" ry="5" width="160" height="36" />
    </ContentLoader>
  )
}
