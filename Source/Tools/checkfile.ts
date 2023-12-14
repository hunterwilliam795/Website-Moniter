import axios from "axios"



export const checkurl = async (url: string, config = {}): Promise<void> => {
  try {
    console.time(url)
    const response = await axios.get(url,config)
    const data = await response.data
    if(response.status === 200){
        console.log(url, "OK")
    }
    console.timeEnd(url)
}catch (e: any){
    console.log(e.code)
}
}
;

