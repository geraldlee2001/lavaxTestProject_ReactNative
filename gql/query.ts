import { gql } from '@apollo/client'
import {fragmentJobs} from './fragment'

export const getJob = gql`
  query getJob($input: JobsInput){
    jobs(input:$input) {
      ...fragmentJobs
    }
  }
  ${fragmentJobs}
`;

export const getLocation = gql`
query getLocation($input:LocationsInput){
  Locations(input: $input){
    id
    slug
    name
    type
  }
}
`

export const getCity= gql`
query getCity($input:LocationsInput){
  City(input: $input){
    id
    name
    slug
    type
    name
    slug
    country{
      id
      name
      slug
      type
    }
    type
    jobs{
      ...fragmentJobs
    }
    createdAt
    updatedAt
  }
}
${fragmentJobs}
`


