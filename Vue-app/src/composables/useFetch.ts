import { ref } from "vue";

const url = ref<string>('https://jsonplaceholder.typicode.com/posts?_page=1&_per_page')

export function useFetch() {
    const PostData = ref()
    const error = ref()

    fetch(url.value)
    .then((res) => res.json())
    .then((json) => (PostData.value = json))
    .catch((err) => (error.value = err))
    
    return { PostData, error }
}