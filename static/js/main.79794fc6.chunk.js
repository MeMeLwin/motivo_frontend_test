(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){},26:function(e,t,a){e.exports=a(45)},31:function(e,t,a){},34:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(12),o=a.n(r),s=(a(31),a(7)),i=a(8),c=a(10),d=a(9),m=a(11),p=(a(22),a(4)),h=a.n(p),u=a(16),v=a(13),f=(a(34),function(e){var t=e.handleClose,a=e.show,n=e.children,r=a?"modal display-block":"modal display-none";return l.a.createElement("div",{className:r},l.a.createElement("div",{className:"modal-main"},l.a.createElement("button",{onClick:t},"Close"),l.a.createElement(v.a,{bsStyle:"link",onClick:t},"Back to all movies"),l.a.createElement("br",null),n))}),E=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={items:[]},a.showModal=function(){a.movieDetail(),a.movieTrailer(),a.setState({show:!0})},a.hideModal=function(){h()(".popup").hide(),h()(".links").show(),a.setState({show:!1})};return a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleAdd",value:function(e){var t=e.target.id;this.addToWatchList(t)}},{key:"addToWatchList",value:function(e){console.log("add to watchList : "+e)}},{key:"movieDetail",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"?api_key=9b2369d7210e25238f707ddca60ddd85&append_to_response=credits";h.a.ajax({url:t,success:function(t){console.log("Movie data fetch success");var a=t,n=a.runtime,l=Math.trunc(n/60),r=n%60;a.runtime=l+"hr "+r+"min";var o=a.release_date.split("-");a.release_date=o[0],a.percent=10*a.vote_average,a.percent_class="c100 p"+a.percent+" dark small green";var s=[];s.push(a);var i=a.credits.cast;i.length>5&&(i=i.slice(0,5));var c=a.credits.crew;c.length>5&&(c=c.slice(0,5)),i.forEach(function(e){e.profile_path="https://image.tmdb.org/t/p/w185"+e.profile_path}),e.setState({detail:s}),e.setState({crew:c}),e.setState({cast:i})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"movieTrailer",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"/videos?api_key=9b2369d7210e25238f707ddca60ddd85&language=en-US";h.a.ajax({url:t,success:function(t){console.log("fetch data success");var a=t.results,n=a;console.log(n[0].key),n[0].key="https://www.youtube.com/embed/"+a[0].key,e.setState({trailer:n})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"render",value:function(){return l.a.createElement("div",{key:this.props.movie.id,style:{width:200,height:400,paddingTop:25,color:"#00cca3",float:"left"}},l.a.createElement("main",null,l.a.createElement(f,{show:this.state.show,handleClose:this.hideModal},l.a.createElement("div",{className:"modal-div1"},l.a.createElement("img",{style:{position:"relative"},alt:"poster",src:this.props.movie.poster}),l.a.createElement("div",{className:"bookmark-div"},l.a.createElement("span",null,l.a.createElement(u.a,null),"Bookmark"),l.a.createElement("span",null,l.a.createElement(u.b,null),"add to watchList"),l.a.createElement("button",{id:this.props.movie.id,onClick:this.handleAdd.bind(this)},"ADD")),l.a.createElement("div",{className:"related-div"},l.a.createElement("h4",null,"Related Movies"))),l.a.createElement("div",{className:"modal-div2"},l.a.createElement("h2",null,l.a.createElement("strong",null,this.props.movie.title)),l.a.createElement("div",null,"\xa0\xa0",l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"popup"},l.a.createElement("a",{href:"#",class:"close"},"X")))),l.a.createElement("br",null)," ",l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h4",null,l.a.createElement("strong",null,"Overview"))),l.a.createElement("h4",null,l.a.createElement("strong",null,"Feature Crew")),"); })}",l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("h4",null,l.a.createElement("strong",null,"Top Billed Cast")),"); })}")),l.a.createElement("div",{className:"poster-container"},l.a.createElement("div",{className:"poster"},l.a.createElement("img",{id:this.props.movie.id,onClick:this.showModal,alt:"poster",src:this.props.movie.poster}),l.a.createElement("div",{className:"hoverText"},l.a.createElement("strong",null,this.props.movie.title),l.a.createElement("p",null,this.props.movie.overview)))),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("div",{className:"title"},this.props.movie.title,l.a.createElement("br",null),l.a.createElement("span",{id:"genre",style:{textAlign:"right"}},"Genres:"),l.a.createElement("span",{id:"g"},"Fantasy"),l.a.createElement("span",{id:"year",style:{textAlign:"left"}},"Year:"),l.a.createElement("span",{id:"y"},this.props.movie.release_date))),l.a.createElement("center",null,l.a.createElement("div",{className:"vote"},this.props.movie.vote_average)),l.a.createElement("br",null),l.a.createElement("br",null)))}}]),t}(n.Component),g=(a(38),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={},a.displayPopularMovies(),a.displayTopRatedMovies(),a.displayUpcomingMovies(),a.displayNowPlayingMovies(),a.displayAll(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"displayAll",value:function(){var e=this;h.a.ajax({url:"https://api.themoviedb.org/3/movie/popular?api_key=9b2369d7210e25238f707ddca60ddd85&language=en-US&page=3",success:function(t){console.log("fetch data success");var a=t.results,n=[];a.forEach(function(e){e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=l.a.createElement(E,{key:e.id,movie:e});n.push(t)}),e.setState({rows:n})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"displayPopularMovies",value:function(){var e=this;h.a.ajax({url:"https://api.themoviedb.org/3/movie/popular?api_key=9b2369d7210e25238f707ddca60ddd85&language=en-US&page=1",success:function(t){console.log("fetch data success");var a=t.results,n=[];a.forEach(function(e){e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=l.a.createElement(E,{key:e.id,movie:e});n.push(t)}),e.setState({rows:n})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"displayTopRatedMovies",value:function(){var e=this;h.a.ajax({url:"https://api.themoviedb.org/3/movie/top_rated?api_key=9b2369d7210e25238f707ddca60ddd85",success:function(t){console.log("fetch data success");var a=t.results,n=[];a.forEach(function(e){e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=l.a.createElement(E,{key:e.id,movie:e});n.push(t)}),e.setState({rows:n})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"displayUpcomingMovies",value:function(){var e=this;h.a.ajax({url:"https://api.themoviedb.org/3/movie/upcoming?api_key=9b2369d7210e25238f707ddca60ddd85&language=en-US&page=2",success:function(t){console.log("fetch data success");var a=t.results,n=[];a.forEach(function(e){e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=l.a.createElement(E,{key:e.id,movie:e});n.push(t)}),e.setState({rows:n})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"displayNowPlayingMovies",value:function(){var e=this;h.a.ajax({url:"https://api.themoviedb.org/3/movie/now_playing?api_key=9b2369d7210e25238f707ddca60ddd85&language=en-US&page=1",success:function(t){console.log("fetch data success");var a=t.results,n=[];a.forEach(function(e){e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=l.a.createElement(E,{key:e.id,movie:e});n.push(t)}),e.setState({rows:n})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"performSearch",value:function(e){var t=this,a="https://api.themoviedb.org/3/search/movie?api_key=9b2369d7210e25238f707ddca60ddd85&query="+e;h.a.ajax({url:a,success:function(e){console.log("fetch data success");var a=e.results,n=[];a.forEach(function(e){e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=l.a.createElement(E,{key:e.id,movie:e});n.push(t)}),t.setState({rows:n})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"searchChangeHandler",value:function(e){var t=e.target.value;""===t.trim()?this.displayAll():this.performSearch(t)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("table",{className:"titleBar"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("a",{className:"link",href:"#",onClick:this.displayAll.bind(this)},"All Movies"))))),l.a.createElement("input",{className:"searchBox",style:{fontSize:14,display:"block",width:"98%",paddingTop:8,paddingBottom:8,color:"white"},onChange:this.searchChangeHandler.bind(this),placeholder:"Search..."}),l.a.createElement("br",null),l.a.createElement("div",{className:"button-div"},l.a.createElement(v.a,{className:"ui inverted teal button",onClick:this.displayPopularMovies.bind(this)},"POPULAR")," ",l.a.createElement(v.a,{className:"btn",onClick:this.displayTopRatedMovies.bind(this)},"TOP RATED")," ",l.a.createElement(v.a,{className:"btn",onClick:this.displayUpcomingMovies.bind(this)},"UPCOMING")," ",l.a.createElement(v.a,{className:"btn",onClick:this.displayNowPlayingMovies.bind(this)},"NOW PLAYING")," "),l.a.createElement("div",{style:{position:"relative",maxHeight:"550px",overflowY:"scroll",overflowX:"hidden"}},this.state.rows))}}]),t}(n.Component)),y=a(47),b=a(48),k=a(46),w=a(49),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w.a,{to:"/"},l.a.createElement("label",{style:{paddingLeft:3,fontSize:17}},"\u2630")),l.a.createElement(w.a,{to:"/watchlist"},l.a.createElement("label",{style:{paddingTop:5,fontSize:22}},"\u2605")))}}]),t}(n.Component),N=(a(41),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleRemove",value:function(e){var t=e.target.id;this.removeFromWatchList(t)}},{key:"removeFromWatchList",value:function(e){console.log("remove from watch list: "+e)}},{key:"render",value:function(){return l.a.createElement("div",{key:this.props.movie.id,style:{width:200,height:400,paddingTop:5,color:"white",float:"left"}},l.a.createElement("div",{className:"poster-container"},l.a.createElement("div",{className:"poster"},l.a.createElement("img",{id:this.props.movie.id,alt:"poster",src:this.props.movie.poster}),l.a.createElement("div",{className:"hoverText"},l.a.createElement("strong",null,this.props.movie.title),l.a.createElement("p",null,this.props.movie.overview)))),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("div",{className:"title"},this.props.movie.title,l.a.createElement("br",null),l.a.createElement("span",{id:"genre",style:{textAlign:"right"}},"Genres:"),l.a.createElement("span",{id:"g"},"Fantasy"),l.a.createElement("span",{id:"year",style:{textAlign:"left"}},"Year:"),l.a.createElement("span",{id:"y"},this.props.movie.release_date))),l.a.createElement("center",null,l.a.createElement("div",{className:"vote"},this.props.movie.vote_average)),l.a.createElement("button",{className:"removeBtn",id:this.props.movie.id,onClick:this.handleRemove.bind(this)},"Remove"))}}]),t}(n.Component)),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={},a.displayAll(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"displayAll",value:function(){var e=this;h.a.ajax({url:"https://api.themoviedb.org/3/movie/now_playing?api_key=9b2369d7210e25238f707ddca60ddd85&language=en-US&page=3",success:function(t){console.log("fetch data success");var a=t.results,n=[];a.forEach(function(e){e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=l.a.createElement(N,{key:e.id,movie:e});n.push(t)}),e.setState({rows:n})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"performSearch",value:function(e){var t=this,a="https://api.themoviedb.org/3/search/movie?api_key=4ccda7a34189fcea2fc752a6ee339500&query="+e;h.a.ajax({url:a,success:function(e){console.log("fetch data success");var a=e.results,n=[];a.forEach(function(e){e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=l.a.createElement(N,{key:e.id,movie:e});n.push(t)}),t.setState({rows:n})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"searchChangeHandler",value:function(e){var t=e.target.value;""===t.trim()?this.displayAll():this.performSearch(t)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("table",{className:"titleBar"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("a",{className:"link",href:"#",onClick:this.displayAll.bind(this)},"My WatchList"))))),l.a.createElement("input",{className:"searchBox",style:{fontSize:14,display:"block",width:"98%",paddingTop:8,paddingBottom:8,color:"white"},onChange:this.searchChangeHandler.bind(this),placeholder:"Search..."}),l.a.createElement("hr",null),l.a.createElement("div",{style:{position:"relative",maxHeight:"550px",overflowY:"scroll",overflowX:"hidden"}},this.state.rows))}}]),t}(n.Component),_=(a(43),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(y.a,null,l.a.createElement("div",null,l.a.createElement("div",{className:"sidenav"},l.a.createElement(j,{style:{position:"fix"}})),l.a.createElement("div",{className:"main"},l.a.createElement(b.a,null,l.a.createElement(k.a,{path:"/",component:g,exact:!0}),l.a.createElement(k.a,{path:"/watchlist",component:O})))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.79794fc6.chunk.js.map