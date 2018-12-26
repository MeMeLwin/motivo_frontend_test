(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},28:function(e,t,a){e.exports=a(48)},33:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var l=a(1),r=a.n(l),n=a(13),s=a.n(n),i=(a(33),a(8)),c=a(9),o=a(11),m=a(10),d=a(12),u=(a(35),a(37),a(23),a(24),a(5)),h=a.n(u),p=a(3),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={watchlist:[],items:[],show:!1,showTrailer:!1,crew:[],cast:[],relatedMovies:[],relatedMovieTitle:"",backgroundsTitle:"",backdrops:[],trailer:[{key:"QMtHZGn1Ka4"}],detail:[{genres:[{id:18,name:""}],percent_class:""}]},a.showModal=function(){a.movieDetail(),a.movieTrailer(),a.relatedMovie(),a.getBackgrounds(),a.setState({show:!0})},a.hideModal=function(){a.setState({show:!1})},a.showModalTrailer=function(){a.setState({showTrailer:!0})},a.hideModalTrailer=function(){a.setState({showTrailer:!1})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleAdd",value:function(e){var t=e.target.id;this.addToWatchList(t)}},{key:"addToWatchList",value:function(e){var t;t={id:e,title:this.props.movie.title,release_date:this.props.movie.release_date,poster:this.props.movie.poster,vote_average:this.props.movie.vote_average};var a=[];(a=JSON.parse(localStorage.getItem("watchlist")))?(a.push(t),a=this.getUnique(a,"id"),localStorage.setItem("watchlist",JSON.stringify(a)),this.setState({watchlist:a})):(this.setState({watchlist:t}),localStorage.setItem("watchlist",JSON.stringify(t)))}},{key:"getUnique",value:function(e,t){return e.map(function(e){return e[t]}).map(function(e,t,a){return a.indexOf(e)===t&&t}).filter(function(t){return e[t]}).map(function(t){return e[t]})}},{key:"movieDetail",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"?api_key=4ccda7a34189fcea2fc752a6ee339500&append_to_response=credits";h.a.ajax({url:t,success:function(t){var a=t,l=a.runtime,r=Math.trunc(l/60),n=l%60;a.runtime=r+"hr "+n+"min";var s=a.release_date.split("-");a.release_date=s[0],a.percent=10*a.vote_average,a.percent_class="c100 p"+a.percent+" dark small green";var i=[];i.push(a);var c=a.credits.cast;c.length>5&&(c=c.slice(0,5));var o=a.credits.crew;o.length>5&&(o=o.slice(0,5)),c.forEach(function(e){e.profile_path="https://image.tmdb.org/t/p/w185"+e.profile_path}),e.setState({detail:i}),e.setState({crew:o}),e.setState({cast:c})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"relatedMovie",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"/similar?api_key=4ccda7a34189fcea2fc752a6ee339500&language=en-US";h.a.ajax({url:t,success:function(t){var a=t.results;a.length>3&&(a=a.slice(0,3)),a.length>0&&e.setState({relatedMovieTitle:"Related Movies"}),a.forEach(function(e){e.poster_path="https://image.tmdb.org/t/p/w185"+e.poster_path}),e.setState({relatedMovies:a})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"getBackgrounds",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"/images?api_key=4ccda7a34189fcea2fc752a6ee339500&language=ru-RU&include_image_language=ru,null";h.a.ajax({url:t,success:function(t){var a=t.posters;a.length>4&&(a=a.slice(0,4)),a.length>0&&e.setState({backgroundsTitle:"Backgrounds"}),a.forEach(function(e){e.file_path="https://image.tmdb.org/t/p/w185"+e.file_path}),e.setState({backdrops:a})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"movieTrailer",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"/videos?api_key=4ccda7a34189fcea2fc752a6ee339500&language=en-US";h.a.ajax({url:t,success:function(t){var a=t.results,l=a;l.length>0&&(l[0].key="https://www.youtube.com/embed/"+a[0].key,e.setState({trailer:l}))},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"render",value:function(){return r.a.createElement("div",{key:this.props.movie.id,style:{width:230,height:420,paddingTop:25,color:"#00cca3",float:"left"}},r.a.createElement("main",null,r.a.createElement(E,{show:this.state.show,handleClose:this.hideModal},r.a.createElement("div",{className:"modal-div1"},r.a.createElement("img",{style:{position:"relative"},alt:"poster",src:this.props.movie.poster}),r.a.createElement("div",{className:"bookmark-div"},r.a.createElement("button",{className:"icon-btn"},r.a.createElement(p.a,null)),r.a.createElement("span",null,"Bookmark "),r.a.createElement("button",{className:"icon-btn",id:this.props.movie.id,onClick:this.handleAdd.bind(this)},r.a.createElement(p.e,null))," ","add to watchList"),r.a.createElement("div",{className:"related-div"},r.a.createElement("div",{className:"modal-header",style:{paddingLeft:20}},r.a.createElement("strong",null,this.state.relatedMovieTitle),r.a.createElement("br",null)),this.state.relatedMovies.map(function(e,t){return r.a.createElement("div",{className:"related-movie",key:t},r.a.createElement("img",{alt:"poster",src:e.poster_path}),r.a.createElement("br",null),e.title)}))),r.a.createElement("div",{className:"modal-div2"},r.a.createElement("h2",null,r.a.createElement("strong",null,r.a.createElement("span",{className:"green-text"},this.props.movie.title))),r.a.createElement("div",null,r.a.createElement("div",{className:"detail-top"},r.a.createElement("div",{className:this.state.detail[0].percent_class},r.a.createElement("span",{style:{color:"#fff"}},r.a.createElement("strong",null,this.state.detail[0].percent),r.a.createElement("sup",{style:{fontSize:12}},"%")),r.a.createElement("div",{className:"slice"},r.a.createElement("div",{className:"bar"}),r.a.createElement("div",{className:"fill"}))),r.a.createElement("div",{className:"links"},r.a.createElement("button",{className:"trailer-btn",onClick:this.showModalTrailer},r.a.createElement("span",{className:"green-text"},r.a.createElement("span",{style:{fontSize:32}},r.a.createElement(p.d,null)),r.a.createElement("br",null),"PlayTrailer"))),r.a.createElement("div",{className:"info-div"},"Genres:"," ",r.a.createElement("span",{className:"green-text"},this.state.detail[0].genres.map(function(e){return e.name}).join(", ")),r.a.createElement("br",null),"Release Year:"," ",r.a.createElement("span",{className:"green-text"},this.state.detail[0].release_date),r.a.createElement("br",null),"Duration:"," ",r.a.createElement("span",{className:"green-text"},this.state.detail[0].runtime)))),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("div",{className:"modal-header",style:{paddingBottom:0}},r.a.createElement("strong",null,"Overview")),r.a.createElement("p",{className:"overview"},this.state.detail[0].overview)),r.a.createElement("div",{className:"crew-div"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("strong",null,"Feature Crew"),r.a.createElement("br",null)),this.state.crew.map(function(e,t){return r.a.createElement("div",{key:t,className:"crew"},e.job," :"," ",r.a.createElement("span",{className:"green-text"},e.name))})),r.a.createElement("hr",null),r.a.createElement("div",{className:"modal-header"},r.a.createElement("strong",null,"Top Billed Cast"),r.a.createElement("br",null)),r.a.createElement("div",{className:"cast-div"},this.state.cast.map(function(e,t){return r.a.createElement("div",{className:"cast",key:t},r.a.createElement("img",{alt:"profile",src:e.profile_path}),r.a.createElement("br",null),e.name,r.a.createElement("br",null),r.a.createElement("span",{className:"green-text"},e.character))})),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("div",{className:"modal-header"},r.a.createElement("strong",null,this.state.backgroundsTitle),r.a.createElement("br",null)),this.state.backdrops.map(function(e,t){return r.a.createElement("div",{className:"backdrops",key:t},r.a.createElement("img",{alt:"backgrounds",src:e.file_path}))})),r.a.createElement(f,{show:this.state.showTrailer,handleCloseTrailer:this.hideModalTrailer},r.a.createElement("iframe",{title:this.state.trailer[0].key,src:this.state.trailer[0].key,width:"500",height:"400",frameBorder:"0",allowFullScreen:"allowFullScreen"}))),r.a.createElement("div",{className:"poster-container"},r.a.createElement("div",{className:"poster"},r.a.createElement("div",{className:"movie-poster"},r.a.createElement("img",{id:this.props.movie.id,onClick:this.showModal,alt:"poster",src:this.props.movie.poster})),r.a.createElement("div",{className:"hoverText"},r.a.createElement("strong",null,this.props.movie.title),r.a.createElement("p",null,this.props.movie.overview)))),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement("div",{className:"title"},r.a.createElement("strong",null," ",this.props.movie.title),r.a.createElement("br",null),r.a.createElement("span",{id:"genre",style:{color:"#fff",textAlign:"left",letterSpacing:"0.2mm"}},"Genres:"),r.a.createElement("span",{id:"g"},"Science Fiction "),r.a.createElement("span",{style:{color:"#fff",textAlign:"left",letterSpacing:"0.2mm"}},"Year:"),r.a.createElement("span",null," ",this.props.movie.release_date))),r.a.createElement("center",null,r.a.createElement("div",{className:"vote"},r.a.createElement("strong",null,this.props.movie.vote_average),r.a.createElement("span",{className:"icons"},r.a.createElement(p.c,null),r.a.createElement(p.a,null),r.a.createElement(p.e,null)))),r.a.createElement("br",null)))}}]),t}(l.Component),E=function(e){var t=e.handleClose,a=e.show,l=e.children,n=a?"modal display-block":"modal display-none";return r.a.createElement("div",{className:n},r.a.createElement("div",{className:"modal-main"},r.a.createElement("button",{className:"back-btn",onClick:t},r.a.createElement(p.b,null),"Back"),l))},f=function(e){var t=e.handleCloseTrailer,a=e.show,l=e.children,n=a?"modal display-block":"modal display-none";return r.a.createElement("div",{className:n},r.a.createElement("div",{className:"trailermodal-main"},r.a.createElement("button",{onClick:t,style:{background:"red"}},r.a.createElement(p.f,null)),r.a.createElement("br",null),l))},g=v,b=a(15),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={rows:[],watchList:[]},a.pageCnt=1,a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.filterMovie("popular")}},{key:"filterMovie",value:function(e){var t=this,a=[];this.setState({rows:[]});for(var l=function(l){a=[];var n="https://api.themoviedb.org/3/movie/"+e+"?api_key=9b2369d7210e25238f707ddca60ddd85&language=en-US&page="+l;h.a.ajax({url:n,success:function(e){e.results.forEach(function(e){e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=e.release_date.split("-");e.release_date=t[0];var l=r.a.createElement(g,{key:e.id,movie:e});a.push(l)}),l===t.pageCnt&&t.setState({rows:a})},error:function(e,t,a){console.error("Failed to fetch data")}})},n=1;n<=this.pageCnt;n++)l(n)}},{key:"performSearch",value:function(e){var t=this,a="https://api.themoviedb.org/3/search/movie?api_key=9b2369d7210e25238f707ddca60ddd85&query="+e;h.a.ajax({url:a,success:function(e){var a=e.results,l=[];a.forEach(function(e){e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=e.release_date.split("-");e.release_date=t[0];var a=r.a.createElement(g,{key:e.id,movie:e});l.push(a)}),t.setState({rows:l})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"searchChangeHandler",value:function(e){var t=e.target.value;""===t.trim()?this.filterMovie("popular"):this.performSearch(t)}},{key:"buttonHandler",value:function(e){var t=e.target.id;this.filterMovie(t)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("table",{className:"titleBar"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("h6",null,"All Movies"))))),r.a.createElement("input",{className:"searchBox",style:{fontSize:14,display:"block",width:"98%",paddingTop:8,paddingBottom:8,color:"white"},onChange:this.searchChangeHandler.bind(this),placeholder:"Search..."}),r.a.createElement("div",{className:"button-div"},r.a.createElement(b.a,{className:"ui inverted teal button",id:"popular",onClick:this.buttonHandler.bind(this)},"POPULAR")," ",r.a.createElement(b.a,{className:"btn",id:"top_rated",onClick:this.buttonHandler.bind(this)},"TOP RATED")," ",r.a.createElement(b.a,{className:"btn",id:"upcoming",onClick:this.buttonHandler.bind(this)},"UPCOMING")," ",r.a.createElement(b.a,{className:"btn",id:"now_playing",onClick:this.buttonHandler.bind(this)},"NOW PLAYING")," "),r.a.createElement("div",{style:{position:"relative",maxHeight:"430px",overflowY:"scroll",overflowX:"hidden"}},this.state.rows))}}]),t}(l.Component),w=a(50),k=a(52),N=a(49),S=a(51),_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S.a,{to:"/"},r.a.createElement("label",{style:{paddingLeft:3,fontSize:17}},"\u2630")),r.a.createElement(S.a,{to:"/watchlist"},r.a.createElement("label",{style:{paddingTop:5,fontSize:22}},"\u2605")))}}]),t}(l.Component),T=a(14),M=(a(44),function(e){function t(){var e,a;Object(i.a)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={watchlist:[],items:[],show:!1,showTrailer:!1,crew:[],cast:[],relatedMovies:[],backdrops:[],relatedMovieTitle:"",backgroundsTitle:"",trailer:[{key:"QMtHZGn1Ka4"}],detail:[{genres:[{id:18,name:""}],percent_class:""}]},a.showModal=function(){a.movieDetail(),a.movieTrailer(),a.relatedMovie(),a.getBackgrounds(),a.setState({show:!0})},a.hideModal=function(){a.setState({show:!1})},a.showModalTrailer=function(){a.setState({showTrailer:!0})},a.hideModalTrailer=function(){a.setState({showTrailer:!1})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleRemove",value:function(e){var t=e.target.id;this.removeMovie(t)}},{key:"removeMovie",value:function(e){var t=JSON.parse(localStorage.getItem("watchlist"));t=t.filter(function(t){return t.id!==e}),localStorage.setItem("watchlist",JSON.stringify(t)),this.props.displayWatchlist()}},{key:"movieDetail",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"?api_key=9b2369d7210e25238f707ddca60ddd85&append_to_response=credits";h.a.ajax({url:t,success:function(t){var a=t,l=a.runtime,r=Math.trunc(l/60),n=l%60;a.runtime=r+"hr "+n+"min";var s=a.release_date.split("-");a.release_date=s[0],a.percent=10*a.vote_average,a.percent_class="c100 p"+a.percent+" dark small green";var i=[];i.push(a);var c=a.credits.cast;c.length>5&&(c=c.slice(0,5));var o=a.credits.crew;o.length>5&&(o=o.slice(0,5)),c.forEach(function(e){e.profile_path="https://image.tmdb.org/t/p/w185"+e.profile_path}),e.setState({detail:i}),e.setState({crew:o}),e.setState({cast:c})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"relatedMovie",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"/similar?api_key=9b2369d7210e25238f707ddca60ddd85&language=en-US";h.a.ajax({url:t,success:function(t){var a=t.results;a.length>3&&(a=a.slice(0,3)),a.length>0&&e.setState({relatedMovieTitle:"Related Movies"}),a.forEach(function(e){e.poster_path="https://image.tmdb.org/t/p/w185"+e.poster_path}),e.setState({relatedMovies:a})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"getBackgrounds",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"/images?api_key=9b2369d7210e25238f707ddca60ddd85&language=ru-RU&include_image_language=ru,null";h.a.ajax({url:t,success:function(t){var a=t.posters;a.length>4&&(a=a.slice(0,4)),a.length>0&&e.setState({backgroundsTitle:"Backgrounds"}),a.forEach(function(e){e.file_path="https://image.tmdb.org/t/p/w185"+e.file_path}),e.setState({backdrops:a})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"movieTrailer",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"/videos?api_key=9b2369d7210e25238f707ddca60ddd85&language=en-US";h.a.ajax({url:t,success:function(t){var a=t.results,l=a;l.length>0&&(l[0].key="https://www.youtube.com/embed/"+a[0].key,e.setState({trailer:l}))},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"render",value:function(){return r.a.createElement("div",{key:this.props.movie.id,style:{width:230,height:460,paddingTop:25,color:"#00cca3",float:"left"}},r.a.createElement("main",null,r.a.createElement(j,{show:this.state.show,handleClose:this.hideModal},r.a.createElement("div",{className:"modal-div1"},r.a.createElement("img",{style:{position:"relative"},alt:"poster",src:this.props.movie.poster}),r.a.createElement("div",{className:"bookmark-div"},r.a.createElement("button",{className:"icon-btn"},r.a.createElement(p.a,null)),r.a.createElement("span",null,"Bookmark "),r.a.createElement("button",{className:"icon-btn"},r.a.createElement(p.e,null))," ","added to watchList"),r.a.createElement("div",{className:"related-div"},r.a.createElement("div",{className:"modal-header",style:{paddingLeft:20}},r.a.createElement("strong",null,this.state.relatedMovieTitle),r.a.createElement("br",null)),this.state.relatedMovies.map(function(e,t){return r.a.createElement("div",{className:"related-movie",key:t},r.a.createElement("img",{alt:"poster",src:e.poster_path}),r.a.createElement("br",null),e.title)}))),r.a.createElement("div",{className:"modal-div2"},r.a.createElement("h2",null,r.a.createElement("strong",null,r.a.createElement("span",{className:"green-text"},this.props.movie.title))),r.a.createElement("div",null,r.a.createElement("div",{className:"detail-top"},r.a.createElement("div",{className:this.state.detail[0].percent_class},r.a.createElement("span",{style:{color:"#fff"}},r.a.createElement("strong",null,this.state.detail[0].percent),r.a.createElement("sup",{style:{fontSize:12}},"%")),r.a.createElement("div",{className:"slice"},r.a.createElement("div",{className:"bar"}),r.a.createElement("div",{className:"fill"}))),r.a.createElement("div",{className:"links"},r.a.createElement("button",{className:"trailer-btn",onClick:this.showModalTrailer},r.a.createElement("span",{className:"green-text"},r.a.createElement("span",{style:{fontSize:32}},r.a.createElement(p.d,null)),r.a.createElement("br",null),"PlayTrailer"))),r.a.createElement("div",{className:"info-div"},"Genres:"," ",r.a.createElement("span",{className:"green-text"},this.state.detail[0].genres.map(function(e){return e.name}).join(", ")),r.a.createElement("br",null),"Release Year:"," ",r.a.createElement("span",{className:"green-text"},this.state.detail[0].release_date),r.a.createElement("br",null),"Duration:"," ",r.a.createElement("span",{className:"green-text"},this.state.detail[0].runtime)))),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("div",{className:"modal-header",style:{paddingBottom:0}},r.a.createElement("strong",null,"Overview")),r.a.createElement("p",{className:"overview"},this.state.detail[0].overview)),r.a.createElement("div",{className:"crew-div"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("strong",null,"Feature Crew"),r.a.createElement("br",null)),this.state.crew.map(function(e,t){return r.a.createElement("div",{key:t,className:"crew"},e.job," :"," ",r.a.createElement("span",{className:"green-text"},e.name))})),r.a.createElement("hr",null),r.a.createElement("div",{className:"modal-header"},r.a.createElement("strong",null,"Top Billed Cast"),r.a.createElement("br",null)),r.a.createElement("div",{className:"cast-div"},this.state.cast.map(function(e,t){return r.a.createElement("div",{className:"cast",key:t},r.a.createElement("img",{alt:"profile",src:e.profile_path}),r.a.createElement("br",null),e.name,r.a.createElement("br",null),r.a.createElement("span",{className:"green-text"},e.character))})),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("div",{className:"modal-header"},r.a.createElement("strong",null,this.state.backgroundsTitle),r.a.createElement("br",null)),this.state.backdrops.map(function(e,t){return r.a.createElement("div",{className:"backdrops",key:t},r.a.createElement("img",{alt:"backgrounds",src:e.file_path}))})),r.a.createElement(O,{show:this.state.showTrailer,handleCloseTrailer:this.hideModalTrailer},r.a.createElement("iframe",{title:this.state.trailer[0].key,src:this.state.trailer[0].key,width:"500",height:"400",frameBorder:"0",allowFullScreen:"allowFullScreen"}))),r.a.createElement("div",{className:"poster"},r.a.createElement("div",{className:"movie-poster"},r.a.createElement("img",{id:this.props.movie.id,onClick:this.showModal,alt:"poster",src:this.props.movie.poster})),r.a.createElement("div",{className:"hoverText"},r.a.createElement("strong",null,this.props.movie.title),r.a.createElement("p",null,this.props.movie.overview))),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement("div",{className:"title"},r.a.createElement("strong",null,this.props.movie.title),r.a.createElement("br",null),r.a.createElement("span",{style:{textAlign:"left",letterSpacing:"0.2mm",color:"#fff"}},"Year :"),r.a.createElement("span",null," ",this.props.movie.release_date))),r.a.createElement("center",null,r.a.createElement("div",{className:"vote"},r.a.createElement("strong",null,this.props.movie.vote_average),r.a.createElement("span",{className:"icons"},r.a.createElement(p.c,null),r.a.createElement(p.a,null),r.a.createElement(p.e,null))),r.a.createElement("button",{className:"btn-remove",id:this.props.movie.id,onClick:this.handleRemove.bind(this)},"Remove")),r.a.createElement("br",null)))}}]),t}(l.Component)),j=function(e){var t=e.handleClose,a=e.show,l=e.children,n=a?"modal display-block":"modal display-none";return r.a.createElement("div",{className:n},r.a.createElement("div",{className:"modal-main"},r.a.createElement("button",{className:"back-btn",onClick:t},r.a.createElement(p.b,null),"Back to all movie"),r.a.createElement("br",null),l))},O=function(e){var t=e.handleCloseTrailer,a=e.show,l=e.children,n=a?"modal display-block":"modal display-none";return r.a.createElement("div",{className:n},r.a.createElement("div",{className:"trailermodal-main"},r.a.createElement("button",{onClick:t,style:{background:"red"}},r.a.createElement(p.f,null)),r.a.createElement("br",null),l))},C=M,x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={watchList:[]},a.displayWatchlist=a.displayWatchlist.bind(Object(T.a)(Object(T.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.displayWatchlist()}},{key:"displayWatchlist",value:function(){var e=this;console.log("in display watchlist");var t,a=[],l=[];(t=JSON.parse(localStorage.getItem("watchlist")))&&(l=t,console.log("saved watchlist: "+t)),l.forEach(function(t){var l=r.a.createElement(C,{displayWatchlist:e.displayWatchlist,key:t.id,movie:t});a.push(l)}),this.setState({rows:a})}},{key:"performSearch",value:function(e){var t=this,a="https://api.themoviedb.org/3/search/movie?api_key=9b2369d7210e25238f707ddca60ddd85&query="+e;h.a.ajax({url:a,success:function(e){console.log("fetch data success");var a=e.results,l=[];a.forEach(function(e){e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=r.a.createElement(g,{key:e.id,movie:e});l.push(t)}),t.setState({rows:l})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"searchChangeHandler",value:function(e){var t=e.target.value;""===t.trim()?this.displayWatchlist():this.performSearch(t)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"watchlist-title-box"},"My Watchlist",r.a.createElement("hr",null)),r.a.createElement("input",{className:"search-box",style:{fontSize:20,display:"block",width:"95%",marginTop:30,marginBottom:20,borderTop:0,borderLeft:0,borderRight:0,borderBottom:"0.3px solid #8091A5",marginLeft:"30px",backgroundColor:"#262d40",color:"white"},onChange:this.searchChangeHandler.bind(this),placeholder:"Search..."}),r.a.createElement("div",{style:{position:"relative",height:"520px",overflowY:"scroll",overflowX:"hidden"}},this.state.rows))}}]),t}(l.Component),B=(a(46),function(e){function t(){var e,a;Object(i.a)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(w.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:"sidenav"},r.a.createElement(_,{style:{position:"fix"}})),r.a.createElement("div",{className:"main"},r.a.createElement(k.a,null,r.a.createElement(N.a,{path:"/",component:y,exact:!0}),r.a.createElement(N.a,{path:"/watchlist",component:x})))))}}]),t}(l.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.bd30537a.chunk.js.map