// TODO: Set the base URL for your API
export const fetchTaskById = async(id) =>{
    try{
        const response = await fetch('/api/tasks/${id}');
        if (!response.ok){
            throw new Error('No network response');
        }
        return await response.json();
    }
    catch(error){
        console.error("failed",error);
        return null;
    }
    
};

