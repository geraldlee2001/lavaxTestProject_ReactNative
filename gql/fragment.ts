import { gql } from '@apollo/client'

export const fragmentJobs = gql`
fragment fragmentJobs on Job{
  id
  title
  slug
  commitment{
    title
    slug
  }
  cities{
    name
    slug
  }
  countries{
    name
    slug
  }
  remotes{
    name
    slug
  }
  description
  applyUrl
  company{
    name
    slug
    websiteUrl
  }
  tags{
    name
    slug
  }
  isPublished
  isFeatured
  locationNames
  userEmail
  postedAt
  createdAt
  updatedAt
}
`