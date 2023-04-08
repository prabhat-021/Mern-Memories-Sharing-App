import axios from "axios";

const url = "/posts";

axios.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
    }

    return req;
});

// POST 

export const fetchPosts = () => axios.get(url);
export const fetchPostsBySearch = (searchQuery) => axios.get(`/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${searchQuery.tags || ""}`);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

//  USER 

export const signIn = (formData) => axios.post('/user/signin', formData);
export const signUp = (formData) => axios.post('/user/signun', formData);
