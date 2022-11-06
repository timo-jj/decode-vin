import { defineStore } from 'pinia'

import { reactive, onMounted } from 'vue'

import axios from 'axios'

import { ApiResponse, Result, VINDetails } from '../@types/api'

export const useAppStore = defineStore('app', () => {
  const state = reactive({
    vinDetails: {} as VINDetails,
    vin: '' as string,
  })

  const setVIN = (vin: string): void => {
    state.vin = vin
  }

  const findValue = (results: Result[], flag: string): string => {
    const property = results.find((item: Result) => item.Variable === flag) as Result

    if (property) {
      return property.Value
    } else {
      return 'no info'
    }
  }

  const getVINDetails = async (vin: string): Promise<void> => {
    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vin}?format=json`

    const response: ApiResponse = await axios.get(url)

    const results: Result[] = response.data.Results

    const name = findValue(results, 'Vehicle Descriptor')
    const maker = findValue(results, 'Make')
    const manufacturerName = findValue(results, 'Manufacturer Name')
    const model = findValue(results, 'Model')
    const modelYear = findValue(results, 'Model Year')

    if (name && maker && manufacturerName && model && modelYear) {
      state.vinDetails = {
        vin: state.vin,
        name: name,
        make: maker,
        manufacturerName: manufacturerName,
        model: model,
        modelYear: modelYear,
      }
    } else {
      state.vinDetails = {
        vin: state.vin,
        name: 'no info',
        make: 'no info',
        manufacturerName: 'no info',
        model: 'no info',
        modelYear: 'no info',
      }
    }
  }

  onMounted(() => {
    state.vinDetails = {
      vin: '',
      name: '',
      make: '',
      manufacturerName: '',
      model: '',
      modelYear: '',
    }
  })

  return {
    state,
    setVIN,
    getVINDetails,
  }
})
