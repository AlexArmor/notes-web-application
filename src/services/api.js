// import axios from 'axios';

// const instanceAxios = axios.create({
//     baseURL: 'https://quintadb.com/',
//     params: {
//         rest_api_key: 'cVwmknWO9cR6WSBmkayv5W',
//     },
// });

// export const createNote = async () => {
//     try {
//         const { data } = await instanceAxios.post('/apps//dtypes.json');
//         return data;
//     } catch (e) {
//         return e.message;
//     }
// };


export const createNote = async (note) => {
    const data = {
        "rest_api_key": "cVwmknWO9cR6WSBmkayv5W", "values": { "entity_id": "dcH0HMWQ1eAA_cJ2uyW4Cp", "bPzr7cQmjcqiT0auCMt8oy": `${note.text}`, "dcUmoojqvlz6GppColW518": `${note.title}`, }
    };
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    };
    return await fetch("https://quintadb.com/apps/ddNcdcRMvcTQLgdqFcSLWp/dtypes.json?rest_api_key=cVwmknWO9cR6WSBmkayv5W", options)
        .then(response => response.json())
        .then(post => console.log(post))
        .catch(error => console.log(error));
};

export const getNotes = async () => {
    return await fetch("https://quintadb.com/apps/ddNcdcRMvcTQLgdqFcSLWp/dtypes/entity/dcH0HMWQ1eAA_cJ2uyW4Cp.json?rest_api_key=cVwmknWO9cR6WSBmkayv5W&amp;view=")
        .then(response => response.json())
        .then(data => data.records)
        .catch(error => console.log(error));
};