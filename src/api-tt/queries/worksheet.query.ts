import starApi from '..'

interface DownloadCycleTemplateInput {
  params: {
    specieId: string
    farmId: string
    companyId: string
  }
}

export const downloadCycleTemplate = async (info: DownloadCycleTemplateInput) => {
  try {
    const data = await starApi.get('/worksheet/download-template-for-cycle', { params: info.params })

    return
  } catch (error: any) {
    console.log(JSON.stringify(error, null, 2))

    const message = error.response?.data?.message || 'Ocurrió un error inesperado'

    throw new Error(message)
  }
}

interface DownloadProductionPlanTemplateInput {
  params: {
    specieId: string
    farmId: string
    areaId: string
    companyId: string
  }
}
export const downloadProductionPlanTemplate = async (info: DownloadProductionPlanTemplateInput) => {
  try {
    const data = await starApi.get('/worksheet/download-template-for-production-plan', { params: info.params })

    return
  } catch (error: any) {
    console.log(JSON.stringify(error, null, 2))

    const message = error.response?.data?.message || 'Ocurrió un error inesperado'

    throw new Error(message)
  }
}

interface UploadProductionPlanInput {
  body: FormData
  params: {
    companyId: string
  }
}
export const uploadProductionPlan = async (info: UploadProductionPlanInput) => {
  try {
    const { data } = await starApi.post('/worksheet/upload-production-plan', info.body, { params: info.params })

    return data
  } catch (error: any) {
    console.log(JSON.stringify(error, null, 2))

    const message = error.response?.data?.message || 'Ocurrió un error inesperado'

    throw new Error(message)
  }
}

interface UploadPlantRequestInput {
  body: FormData
  params: {
    companyId: string
  }
}
export const uploadPlantRequest = async (info: UploadPlantRequestInput) => {
  try {
    const { data } = await starApi.post('/worksheet/upload-plant-request', info.body, { params: info.params })

    return data
  } catch (error: any) {
    console.log(JSON.stringify(error, null, 2))

    const message = error.response?.data?.message || 'Ocurrió un error inesperado'

    throw new Error(message)
  }
}
