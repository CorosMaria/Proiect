export type objectData = {
  Remote: number,
  Digi: number,
  Com: number,
  AI0: number,
  AI1: number,
  AI2: number,
  AI3: number,
  AI4: number,
  AI5: number,
  AI6: number,
  AI7: number,
  AO0: number,
  AO1: number,
  AO2: number,
  AO3: number,
  Sample_nr: number
}

export type buttonsState = {
  B0: number
  B1: number
  B2: number
  B3: number
  B4: number
  B5: number
  B6: number
  B7: number
  B8: number
  B9: number
  B10: number
  B11: number
  B12: number
  B13: number
  B14: number
  B15: number
}

export type lagarState = {
  lagar1: boolean,
  lagar2: boolean
}

export type history = {
  id: number
  date: string
  time: string
  type: string
  component: string
  text: string
}

export type MainState = {
  systemOn: boolean
  plc_data: objectData
  loading: boolean
  valves: {
    valve1On: boolean
    valve2On: boolean
  },
  history: history[]
  buttons: buttonsState
  operatingMode: boolean
  lagare: lagarState
  ventilation: boolean
}