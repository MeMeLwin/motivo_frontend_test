(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){},25:function(e,t,a){e.exports=a(42)},30:function(e,t,a){},33:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(12),i=a.n(o),s=(a(30),a(6)),l=a(7),c=a(9),d=a(8),p=a(10),h=(a(21),a(11)),u=a.n(h),m=(a(33),function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={items:[]};return a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"handleAdd",value:function(e){var t=e.target.id;this.addToWatchList(t)}},{key:"addToWatchList",value:function(e){console.log("add to watchList : "+e)}},{key:"render",value:function(){return n.a.createElement("div",{key:this.props.movie.id,style:{width:200,height:400,paddingTop:25,color:"#00cca3",float:"left"}},n.a.createElement("div",{className:"poster-container"},n.a.createElement("div",{className:"poster"},n.a.createElement("img",{alt:"poster",src:this.props.movie.poster}),n.a.createElement("div",{className:"hoverText"},n.a.createElement("strong",null,this.props.movie.title),n.a.createElement("p",null,this.props.movie.overview)))),n.a.createElement("br",null),n.a.createElement("center",null,n.a.createElement("div",{className:"title"},this.props.movie.title,n.a.createElement("br",null),n.a.createElement("span",{style:{textAlign:"right"}},"Genres:"),n.a.createElement("span",null,"Fantasy"),n.a.createElement("span",{style:{textAlign:"left"}},"Year:"),n.a.createElement("span",null,this.props.movie.release_date))),n.a.createElement("center",null,n.a.createElement("div",{className:"vote"},this.props.movie.vote_average)),n.a.createElement("br",null),n.a.createElement("br",null))}}]),t}(r.Component)),v=(a(35),a(13)),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={},a.displayPopularMovies(),a.displayTopRatedMovies(),a.displayUpcomingMovies(),a.displayNowPlayingMovies(),a.displayAll(),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"displayAll",value:function(){var e=this;u.a.ajax({url:"https://api.themoviedb.org/3/movie/popular?api_key=9b2369d7210e25238f707ddca60ddd85&language=en-US&page=3",success:function(t){console.log("fetch data success");var a=t.results,r=[];a.forEach(function(e){e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=n.a.createElement(m,{key:e.id,movie:e});r.push(t)}),e.setState({rows:r})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"displayPopularMovies",value:function(){var e=this;u.a.ajax({url:"https://api.themoviedb.org/3/movie/popular?api_key=9b2369d7210e25238f707ddca60ddd85&language=en-US&page=1",success:function(t){console.log("fetch data success");var a=t.results,r=[];a.forEach(function(e){e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=n.a.createElement(m,{key:e.id,movie:e});r.push(t)}),e.setState({rows:r})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"displayTopRatedMovies",value:function(){var e=this;u.a.ajax({url:"https://api.themoviedb.org/3/movie/top_rated?api_key=9b2369d7210e25238f707ddca60ddd85",success:function(t){console.log("fetch data success");var a=t.results,r=[];a.forEach(function(e){e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=n.a.createElement(m,{key:e.id,movie:e});r.push(t)}),e.setState({rows:r})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"displayUpcomingMovies",value:function(){var e=this;u.a.ajax({url:"https://api.themoviedb.org/3/movie/upcoming?api_key=9b2369d7210e25238f707ddca60ddd85&language=en-US&page=2",success:function(t){console.log("fetch data success");var a=t.results,r=[];a.forEach(function(e){e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=n.a.createElement(m,{key:e.id,movie:e});r.push(t)}),e.setState({rows:r})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"displayNowPlayingMovies",value:function(){var e=this;u.a.ajax({url:"https://api.themoviedb.org/3/movie/now_playing?api_key=9b2369d7210e25238f707ddca60ddd85&language=en-US&page=1",success:function(t){console.log("fetch data success");var a=t.results,r=[];a.forEach(function(e){e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=n.a.createElement(m,{key:e.id,movie:e});r.push(t)}),e.setState({rows:r})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"performSearch",value:function(e){var t=this,a="https://api.themoviedb.org/3/search/movie?api_key=9b2369d7210e25238f707ddca60ddd85&query="+e;u.a.ajax({url:a,success:function(e){console.log("fetch data success");var a=e.results,r=[];a.forEach(function(e){e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=n.a.createElement(m,{key:e.id,movie:e});r.push(t)}),t.setState({rows:r})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"searchChangeHandler",value:function(e){var t=e.target.value;""===t.trim()?this.displayAll():this.performSearch(t)}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("table",{className:"titleBar"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("a",{className:"link",href:"#",onClick:this.displayAll.bind(this)},"All Movies"))))),n.a.createElement("input",{className:"searchBox",style:{fontSize:14,display:"block",width:"98%",paddingTop:8,paddingBottom:8,color:"white"},onChange:this.searchChangeHandler.bind(this),placeholder:"Search..."}),n.a.createElement("br",null),n.a.createElement("div",{className:"button-div"},n.a.createElement(v.a,{className:"btn",onClick:this.displayPopularMovies.bind(this)},"POPULAR")," ",n.a.createElement(v.a,{className:"btn",onClick:this.displayTopRatedMovies.bind(this)},"TOP RATED")," ",n.a.createElement(v.a,{className:"btn",onClick:this.displayUpcomingMovies.bind(this)},"UPCOMING")," ",n.a.createElement(v.a,{className:"btn",onClick:this.displayNowPlayingMovies.bind(this)},"NOW PLAYING")," "),n.a.createElement("div",{style:{position:"relative",maxHeight:"550px",overflowY:"scroll",overflowX:"hidden"}},this.state.rows))}}]),t}(r.Component),g=a(44),y=a(45),b=a(43),E=a(46),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(E.a,{to:"/"}),n.a.createElement(E.a,{to:"/watchlist"}))}}]),t}(r.Component),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"handleRemove",value:function(e){var t=e.target.id;this.removeFromWatchList(t)}},{key:"removeFromWatchList",value:function(e){console.log("remove from watch list: "+e)}},{key:"render",value:function(){return n.a.createElement("div",{key:this.props.movie.id,style:{width:250,height:400,paddingTop:5,color:"white",float:"left"}},n.a.createElement("img",{alt:"poster",src:this.props.movie.poster}),n.a.createElement("br",null),this.props.movie.title,n.a.createElement("br",null),n.a.createElement("button",{id:this.props.movie.id,onClick:this.handleRemove.bind(this)},"Remove"))}}]),t}(r.Component),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={},a.displayAll(),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"displayAll",value:function(){var e=this;u.a.ajax({url:"https://api.themoviedb.org/3/discover/movie?api_key=4ccda7a34189fcea2fc752a6ee339500",success:function(t){console.log("fetch data success");var a=t.results,r=[];a.forEach(function(e){e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=n.a.createElement(k,{key:e.id,movie:e});r.push(t)}),e.setState({rows:r})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"performSearch",value:function(e){var t=this,a="https://api.themoviedb.org/3/search/movie?api_key=4ccda7a34189fcea2fc752a6ee339500&query="+e;u.a.ajax({url:a,success:function(e){console.log("fetch data success");var a=e.results,r=[];a.forEach(function(e){e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=n.a.createElement(k,{key:e.id,movie:e});r.push(t)}),t.setState({rows:r})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"searchChangeHandler",value:function(e){var t=e.target.value;""===t.trim()?this.displayAll():this.performSearch(t)}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("table",{className:"titleBar"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"My WatchList")))),n.a.createElement("input",{style:{fontSize:14,display:"block",width:"100%",paddingTop:8,paddingBottom:8},onChange:this.searchChangeHandler.bind(this),placeholder:"Search..."}),n.a.createElement("hr",null),n.a.createElement("div",{style:{position:"relative",maxHeight:"550px",overflowY:"scroll",overflowX:"hidden"}},this.state.rows))}}]),t}(r.Component),O=(a(40),function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(g.a,null,n.a.createElement("div",null,n.a.createElement("div",{className:"sidenav"},n.a.createElement(w,{style:{position:"fix"}})),n.a.createElement("div",{className:"main"},n.a.createElement(y.a,null,n.a.createElement(b.a,{path:"/",component:f,exact:!0}),n.a.createElement(b.a,{path:"/watchlist",component:j})))))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.f1cc9cce.chunk.js.map