<template>
<div class=" movie card">
<div class="card-img-top"> <img v-bind:src="movieInfo.Poster"></div>
<p><h1>title : {{movieInfo.Title}}</h1></p>
<p><h1>year : {{movieInfo.Year}}</h1></p>
<p><h1>imdb id : {{movieInfo.imdbID}}</h1></p>

</div>

</template>
<script>
export default{
name:"Movie",
props:["movieInfo"]
}
</script>
<style>

.movie{
margin-top:1%;
 /*width:80%;*/
 
 
/* display:block;*/
 background-color:white;
 position:relative;
 /*left:25%;*/
 border:1px solid green;
}
</style>