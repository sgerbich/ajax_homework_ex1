var stuff = $(".yeet");

$(".getallposts").click(function(){
    
    $.get(" https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts", function(posts){
    console.log(posts);
    posts.forEach(function(posts){
        var p = $('<p> </p>');
		stuff.text(posts.body);
		stuff.append(p);
    })
})
});


$(".getpost10").click(function(){
    
    $.get(" https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/10", function(posts){
    console.log(posts);
    
        var p = $('<p> </p>');
		stuff.text(posts.body);
		stuff.append(p);
    
})
});

$(".get12comment").click(function(){
    
    $.get(" https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments",{id:12}, function(comments){
    console.log(comments);
    comments.forEach(function(comments){
        var p = $('<p> </p>');
		stuff.text(comments.body);
		stuff.append(p);
    })
})
});

$(".getallposts2").click(function(){
    
    $.get(" https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts",{userID:2}, function(posts){
    console.log(posts);
    posts.forEach(function(posts){
        var p = $('<p> </p>');
		stuff.text(posts.body);
		stuff.append(p);
    })
})
});

$.post('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{
	userId: 1,
	title: "New post",
	body: "bodeeeeh"
}, function(data){
	console.log(data.id)
})
