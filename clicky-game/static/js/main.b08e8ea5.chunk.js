(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e){e.exports=[{id:0,name:"SpongeBob",image:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",clicked:"false"},{id:1,name:"Mr. Krabs",image:"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",clicked:"false"},{id:2,name:"Squidward",image:"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",clicked:"false"},{id:3,name:"Dexter",image:"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",clicked:"false"},{id:4,name:"Courage",image:"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423",clicked:"false"},{id:5,name:"Doug Funnie",image:"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511",clicked:"false"},{id:6,name:"Bugs Bunny",image:"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607",clicked:"false"},{id:7,name:"Johnny Bravo",image:"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist",clicked:"false"},{id:8,name:"Tommy Pickles",image:"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641",clicked:"false"},{id:9,name:"Rocko",image:"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416",clicked:"false"},{id:10,name:"Captain Planet",image:"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836",clicked:"false"},{id:11,name:"Ickis",image:"http://static.tvtropes.org/pmwiki/pub/images/ickis.png",clicked:"false"}]},35:function(e,t,a){e.exports=a(83)},40:function(e,t,a){},42:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(23),c=a.n(o),r=(a(40),a(24)),s=a(25),l=a(33),d=a(26),m=a(34),g=a(85),u=(a(42),function(e){return i.a.createElement(g.a,{onClick:function(){return e.handleClicked(e.clicked,e.id)},src:e.image,alt:"cards",className:"border border-dark",responsive:!0})}),h=(a(75),function(e){return i.a.createElement("div",{className:"bg-info border rounded"},i.a.createElement("nav",{className:"navbar navbar-light row justify-cotent-md-center border border-bottom",id:"override"},i.a.createElement("span",{className:"navbar-band h3 col col-lg-4 text-center border-right text-white"},"Clicky Game"),i.a.createElement("span",{className:"navbar-band h3 col col-lg-4 text-center border-right text-white"},"Click an Image to begin!"),i.a.createElement("span",{className:"navbar-band h3 col col-lg-4 text-center text-white"},"Score:",e.state.scores,"|Top Score:",e.state.highscores)),i.a.createElement("div",{className:"jumbotron jumbotron-fluid middleSection rounded"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"rows text-white text-center"},i.a.createElement("h1",null,"This is the clicky game!")))))}),k=(a(77),function(e){return i.a.createElement("div",{className:"contain"},e.children)}),p=(a(79),function(e){return i.a.createElement("footer",null)}),f=a(32),b=(a(81),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={cards:f,scores:0,highscores:0},a.suffle=function(e){var t,a,n;for(n=e.length-1;n>0;n--)t=Math.floor(Math.random()*(n+1)),a=e[n],e[n]=e[t],e[t]=a;return e},a.handleClicked=function(e,t){console.log(e);var n=a.state,i=n.cards,o=n.scores,c=n.highscores;if(console.log(i),console.log(o),"true"===e){o>c&&(c=o,console.log(c));for(var r=0;r<i.length;r++)i[r].clicked="false";o=0,console.log("clicked")}else i[t].clicked="true",o++,console.log("nonclicked");i=a.suffle(i),a.setState({cards:i,scores:o,highscores:c})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(h,{state:this.state}),i.a.createElement(k,null,this.state.cards.map(function(t){return i.a.createElement(u,{key:t.id,handleClicked:e.handleClicked,id:t.id,name:t.name,image:t.image,clicked:t.clicked})})),i.a.createElement(p,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,2,1]]]);
//# sourceMappingURL=main.b08e8ea5.chunk.js.map