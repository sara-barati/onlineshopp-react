// import http from 'services/http.service'
// import {CATEGORY, ORDERS, PRODUCTS, SUBCATEGORY} from "configs/url.config";
import axios from "axios"
const productAPIs = {

    // async postProduct(data) {
    //     try {
    //         const response = await http.post(`${PRODUCTS}`, data)
    //     } catch (e) {
    //         return Promise.reject(e)

    //     }

    // },

    // async putProduct(id, data) {
    //     try {
    //         const response = await http.patch(`${PRODUCTS}/${id}`, data);
    //         return response.data
    //     } catch (e) {
    //         return Promise.reject(e)
    //     }
    // },

    // async patchProduct(id, data) {
    //     try {
    //         const response = await http.patch(`${PRODUCTS}/${id}`, data);
    //         return response.data
    //     } catch (e) {
    //         return Promise.reject(e)
    //     }
    // },

    async getProducts(page = 1) {
        try {
            const response = await axios.get('http://localhost:3002/products?page=1')
     
            return {
                data: response.data,
                total: response.headers['x-total-count']
            }
        } catch (e) {
            return Promise.reject(e)
        }
    },
    

//     async getCategoryProducts(page = 1, id, limit) {
//         try {
//             const response = await http.get(`${PRODUCTS}?category=${id}&_page=${page}&_limit=${limit}`)
//             // console.log("new res:", response)

//             return {
//                 data: response.data,
//                 total: response.headers['x-total-count']
//             }
//         } catch (e) {
//             return Promise.reject(e)
//         }
//     },

//     async getAllProducts() {
//         try {
//             const response = await http.get(PRODUCTS)
//             // console.log("new res:", response)

//             return {
//                 data: response.data,
//                 total: response.headers['x-total-count']
//             }
//         } catch (e) {
//             return Promise.reject(e)
//         }
//     },

//     async getProduct(id) {
//         try {
//             const response = await http.get(`${PRODUCTS}/${id}`)
//             return {
//                 data: response.data
//             }
//         } catch (e) {

//             return Promise.reject(e)
//         }
//     },

//     async patchOrder(id, data) {
//         try {
//             await http.patch(`${ORDERS}/${id}`, data)
//         } catch (e) {
//             return Promise.reject(e)
//         }
//     },

    // async getOrders() {
    //     try {
    //         const response = await http.get(ORDERS)
    //         return response.data
    //     } catch (e) {
    //         return Promise.reject(e)
    //     }
    // },

//     async postOrder(data) {
//         try {
//             const response = await http.post(ORDERS, data)
//             return response.data
//         } catch (e) {
//             return Promise.reject(e)
//         }
//     },


    // async getOrdersPaging(page, limit, filter) {
    //     try {
    //         const response = await http.get(`${ORDERS}?_page=${page}&_limit=${limit}&delivered=${filter}&_sort=deliveredAt&_order=desc`)
    //         return {
    //             data: response.data,
    //             total: response.headers['x-total-count']
    //         }
    //     } catch (e) {
    //         return e
    //     }
    // },

//     async getCategories() {
//         try {
//             const response = await http.get(`${CATEGORY}`)
//             return response.data
//         } catch (e) {
//             return Promise.reject(e)
//         }
//     },
//     async getCategory(id) {
//         try {
//             const response = await http.get(`${CATEGORY}/${id}`)
//             return response.data
//         } catch (e) {
//             return Promise.reject(e)
//         }
//     },

//     async postCategory(data) {
//         try {
//             const response = await http.post(`${CATEGORY}`, data)
//         } catch (e) {
//             return Promise.reject(e)

//         }

//     },

//     async deleteProduct(id) {
//         try {
//             const response = await http.delete(`${PRODUCTS}/${id}`)
//         } catch (e) {
//             return Promise.reject(e)

//         }

//     },

//     async getSubCategories() {
//         try {
//             const response = await http.get(`${SUBCATEGORY}`)
//             return response.data
//         } catch (e) {
//             return Promise.reject(e)
//         }
//     },


//     async getOrdersLength(filter = false) {
//         try {
//             const response = await http.get(`${ORDERS}?delivered=${filter}`)
//             return response.data.length
//         } catch (e) {
//             return e
//         }
//     }
}

export {productAPIs}