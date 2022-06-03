export interface Weather{
    current:current
    location:location
}

interface conditions{
    text: string,
     icon: string,
     code: number
}

interface current{
    feelslike_c: number
    humidity: number
    condition:conditions
    temp_c: number
    wind_kph: number
}

interface location{
    country: string
    lat:number
    localtime:string
    localtime_epoch:number
    lon: number
    name: string
    region: string
    tz_id: string
}