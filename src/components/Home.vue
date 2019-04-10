<template>
 <div>
 <h1>home</h1>
 
 <SearchForm @make-the-search="makeSearch"></SearchForm>
 <div>
 <h1 v-if="falseResponse" style="color:red;"> no information found </h1>
 <Movie v-for="movie in movies" :movieInfo="movie"></Movie>
 </div>
 
 </div>
</template>
<script>
import SearchForm from './SearchForm.vue';
import Movie from  './Movie.vue';
export default {
name:"Home",
components:{
SearchForm,
Movie
},
data:()=>{
return {
movies:[],
falseResponse:false,
apiKey:"aed46b21"
}
},
methods:{
makeSearch(data){
this.movies=[];
this.falseResponse=false;

let request=`http://www.omdbapi.com/?apikey=${this.apiKey}&${data.searchBy}=${data.q}&type=${data.typeOfWork}&year=${data.year}`;
fetch(request).then((response)=>{
console.log(response);

return response.json();
}
).then((myjson)=>{
 if(myjson.Response!=="False"){
 if(myjson.hasOwnProperty("Search")){
 this.movies=myjson.Search;
 }
 else{
 this.movies.push(myjson);
 console.log(this.movies);
 }
 }
 else{
 throw new Error("no info for your searc");
 }
 
}).catch((err)=>{
this.falseResponse=true;
});
}
}
};
//methods etc
</script>