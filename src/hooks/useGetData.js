import useFetch from './useFetch';

export default function useGetData(reduxValue){
    if(reduxValue != null) return reduxValue;
    const { loading, error, value } = useFetch(
        `https://jsonplaceholder.typicode.com/todos/1`,
        {},
        [1]
    );
    return value;

    //console.log(value);
}