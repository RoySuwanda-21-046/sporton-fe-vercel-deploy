

export async function fetchAPI<T>(
    endpoint : string,
    options?: RequestInit

): Promise<T>{  
     const res = await fetch (`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,{
        ...options,
        cache: options?.cache || "no-store", //set no-store untuk mendapatkan data lebih real time
    })

    if (!res.ok){
        let errorMessage = `failed to fetch data from ${endpoint}`;
        try{
            const errorData = await res.json();
            errorMessage = errorData.massage || errorData.error || errorData.errorMessage;
        }catch(e){
            console.log(e)
        }

        throw new Error(JSON.stringify(errorMessage));
  
        
        
    }
    return res.json();
}

export function getImageUrl(path:string){
    if(path.startsWith("http")) return path;

    return `${process.env.NEXT_PUBLIC_API_ROOT}/${path}`;
}

