import { getJob, getLocation, getCity } from '../gql/query'
import { useQuery } from '@apollo/client';
const { query } = require('graphql') 
export const useJobsListHook = () => {
    const { loading, error, data,refetch } = useQuery(getJob,
        {
            variables: { type: "" }
        })
    return {
        jobLoading: loading,
        jobError: error,
        jobData: data,
        jobRefetch: refetch,
    }
}

export const useLocationHook = (location) => {
    const { loading, error, data, refetch} = useQuery(getLocation, {
        variables: {
            input: {
                value: location
            }
        }
    })
    
    return {
        locationLoading: loading,
        locationError: error,
        locationData: data,
        locationRefetch:refetch,
    }
}

export const useCityHook = (cityslug) => {

    const { loading, error, data,refetch } = useQuery(getCity, {
        variables: {
            input:{
                slug:cityslug,
            }
        }
    })

    return {
        cityLoading: loading,
        cityError: error,
        cityData: data,
        cityRefetch:refetch
    }
}