export const DRIVER_INFO = 'DRIVER_INFO'

export const setDriverInfo = (data: any) => {
  return {
    type: DRIVER_INFO,
    data,
  }
}
