import axios from "axios";
// const Product_base_url="http://localhost:8080/products/add";
class UserService{
//   getProducts(){
//     return axios.get(Product_base_url);
//   }
     saveProducts(users){
        return axios.post("http://localhost:8080/user/add",users);
     }
     getUserById(id){
        return axios.get("http://localhost:8080/user/get/"+id);
     }
     updateUser(user,id){
         return axios.put("http://localhost:8080/user/update/"+id,user);
      }
      deleteProducts(id){
         return axios.delete("http://localhost:8080/user/delete/"+id);
      }
      getProductByFirstLetter(ch){
        return axios.get("http://localhost:8080/user/getByLetter/"+ch);
      }
}
export default new UserService();