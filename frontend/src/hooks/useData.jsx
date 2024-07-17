import { useQuery } from "@tanstack/react-query";

const useContacts = () => {
    
    const fetchContacts = async () => {
        const contacts = await fetch('http://localhost:8000/contacts');
        const data = await contacts.json();
        return data; 
    };

    const { data, isPending, isError, error } = useQuery({
        queryKey: ['contacts'], 
        queryFn: fetchContacts,

    })

    return {
        data,
        isPending,
        isError,
        error,
    };
};

export default useContacts;









// import { useQuery } from "@tanstack/react-query";

// const useContacts = () => {

//     const fetchContacts = async () => {
//         const contacts = await fetch('http://localhost:8000/contacts');
//         const data = await contacts.json();
//         return data;
//     }

//     const {data, isPending, isError, error} = useQuery({
//         queryKey: ['contacts'],
//         queryFn: fetchContacts,
//     })

//     return {
//         data,
//         isPending,
//         isError,
//         error,
//     }
// }

// export default useContacts;