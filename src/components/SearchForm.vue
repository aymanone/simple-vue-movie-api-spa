<template>
<div>
<p>search for movie or series or just one episode by titel or imdb id</p>
<form>
<input type="text" placeholder="type your search"  required>
<label>search by title or id or general search &nbsp</label>
<select name="search-by">
  <option value="t">title</option>
  <option value="i">id</option>
  <option value="s">general search</option>
</select>
<label>&nbsp type &nbsp; </label>
<select name="type-of-work">
<option value="">non determine</option>
<option value="movie">movie</option>
<option value="series">series</option>
<option value="episode">episode</option>
</select>
<label>&nbsp year &nbsp</label>
<select name="year">
<option value="">non determine</option>
<option v-for="year in years" :value="year">{{year}}</option>
</select>
<button  v-on:click="search" class="btn">search</button>
</form>
</div>
</template>
<script>
export default{
name:"SearchForm",

computed:{
 
years(){
let currentYear=new Date().getFullYear();
let firstYear=1940;
let years=[];
for (let i=currentYear;i>=firstYear;i--){years.push(i);}
return years;
}

},
methods:{
search(e){
e.preventDefault();
let q=document.querySelector("input[type='text']").value;
let searchBy=document.querySelector("select[name='search-by']").value;
let typeOfWork=document.querySelector("select[name='type-of-work']").value;
let year=document.querySelector("select[name='year']").value;
if(q===""){alert("must search for something");return false;}
let searchData={q:q,searchBy:searchBy,typeOfWork:typeOfWork,year:year};

this.$emit("make-the-search",searchData);

}
}
}
</script>
<style>
</style>