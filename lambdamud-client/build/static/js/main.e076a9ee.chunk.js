(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(59)},33:function(e,t,a){},35:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),o=a(24),r=a.n(o),l=(a(33),a(7)),i=a(8),c=a(10),m=a(9),p=a(11),d=(a(35),a(61)),u=a(63),h=a(13),g=a(5),v=a.n(g),w=a(60),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).changeHandler=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.password1Toggle=function(){"Show"===a.state.password1Tag?a.setState({password1Tag:"Hide"}):a.setState({password1Tag:"Show"}),"password"===a.state.password1State?a.setState({password1State:"text"}):a.setState({password1State:"password"})},a.password2Toggle=function(){"Show"===a.state.password2Tag?a.setState({password2Tag:"Hide"}):a.setState({password2Tag:"Show"}),"password"===a.state.password2State?a.setState({password2State:"text"}):a.setState({password2State:"password"})},a.submitRegister=function(e){e.preventDefault(),a.state.password1===a.state.password2?(v.a.post("https://lambdamud-ghr.herokuapp.com/api/registration/",{username:a.state.username,password1:a.state.password1,password2:a.state.password2}).then(function(e){console.log(e.data),a.props.login(e.data.key,a.state.username)}).catch(function(e){console.log(e.response),alert(e.response.data.error)}),a.props.history.push("/")):alert("The passwords do not match.")},a.state={username:"",password1:"",password2:"",password1Tag:"Show",password2Tag:"Show",password1State:"password",password2State:"password"},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"registerBody"},n.a.createElement("h1",null,"Please register"),n.a.createElement("form",{onSubmit:this.submitRegister,className:"registerForm"},n.a.createElement("div",null,"Username",n.a.createElement("input",{type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.changeHandler})),n.a.createElement("div",null,"Password",n.a.createElement("input",{type:this.state.password1State,name:"password1",placeholder:"Password",value:this.state.password1,onChange:this.changeHandler}),n.a.createElement("button",{onClick:this.password1Toggle,type:"button"},this.state.password1Tag)),n.a.createElement("div",null,"Password, again",n.a.createElement("input",{type:this.state.password2State,name:"password2",placeholder:"Password, again",value:this.state.password2,onChange:this.changeHandler}),n.a.createElement("button",{onClick:this.password2Toggle,type:"button"},this.state.password2Tag)),n.a.createElement("button",{type:"submit"},"Submit")),n.a.createElement("h1",null,"Log in instead"),n.a.createElement(w.a,{to:"/login"},"Log in"))}}]),t}(n.a.Component),S=a(12),f=a(25),b=a.n(f),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){var e=localStorage.getItem("token");v.a.get("https://lambdamud-ghr.herokuapp.com/api/adv/init/",{headers:{Authorization:"Token ".concat(e)}}).then(function(e){a.setState({name:e.data.name,movesLog:[{title:e.data.title,description:e.data.description,players:e.data.players}],uuid:e.data.uuid,currentRoom:e.data.title});var t=new b.a("990ddef61491c8ebceb4",{cluster:"us2"});a.state.uuid&&(a.channel=t.subscribe("p-channel-".concat(a.state.uuid),a.state.uuid)),a.setState({channelSubbed:!0}),a.state.channelSubbed&&a.channel.bind("broadcast",function(e){a.setState({movesLog:Object(S.a)(a.state.movesLog).concat([{message:e.message}])})})});var t=setInterval(function(){return a.toggleFlicker()},5e3);a.setState({interval:t})},a.componentWillUnmount=function(){clearInterval(a.state.interval)},a.parseCommand=function(e){if(e.preventDefault(),"n"===a.state.input.toLowerCase()||"north"===a.state.input.toLowerCase())a.handleMove("n");else if("s"===a.state.input.toLowerCase()||"south"===a.state.input.toLowerCase())a.handleMove("s");else if("e"===a.state.input.toLowerCase()||"east"===a.state.input.toLowerCase())a.handleMove("e");else if("w"===a.state.input.toLowerCase()||"west"===a.state.input.toLowerCase())a.handleMove("w");else if(a.state.input.toLowerCase().startsWith("say"))a.handleSay(a.state.input.slice(4));else if(a.state.input.toLowerCase().startsWith("shout"))a.handleShout(a.state.input.slice(6));else if(a.state.input.toLowerCase().startsWith("whisper")){var t=a.state.input.split(" ");console.log(t[1]);var s=a.state.input.split(" ");s.shift(),s.shift();var n=s.join(" ");a.handleWhisper(n,t[1])}else"h"===a.state.input.toLowerCase()||"help"===a.state.input.toLowerCase()?a.handleHelp():"map"===a.state.input.toLowerCase()&&a.handleMap();a.setState({input:""})},a.handleMove=function(e){var t=localStorage.getItem("token"),s={Authorization:"Token ".concat(t),"Content-Type":"application/json"},n={direction:e};v.a.post("https://lambdamud-ghr.herokuapp.com/api/adv/move/",n,{headers:s}).then(function(e){a.setState({movesLog:Object(S.a)(a.state.movesLog).concat([{title:e.data.title,description:e.data.description,players:e.data.players,error:e.data.error_msg}]),currentRoom:e.data.title})}).catch(function(e){console.log(e)})},a.handleSay=function(e){var t=localStorage.getItem("token"),s={Authorization:"Token ".concat(t),"Content-Type":"application/json"},n={message:e};v.a.post("https://lambdamud-ghr.herokuapp.com/api/adv/say/",n,{headers:s}).then(function(e){a.setState({movesLog:Object(S.a)(a.state.movesLog).concat([{message:e.data.message,players:[a.state.name]}])})}).catch(function(e){console.log(e)})},a.handleShout=function(e){var t=localStorage.getItem("token"),s={Authorization:"Token ".concat(t),"Content-Type":"application/json"},n={message:e};v.a.post("https://lambdamud-ghr.herokuapp.com/api/adv/shout/",n,{headers:s}).then(function(e){a.setState({movesLog:Object(S.a)(a.state.movesLog).concat([{message:e.data.message}])})}).catch(function(e){console.log(e)})},a.handleWhisper=function(e,t){var s=localStorage.getItem("token"),n={Authorization:"Token ".concat(s),"Content-Type":"application/json"},o={message:e,toUser:"".concat(t),test:"anything"};v.a.post("https://lambdamud-ghr.herokuapp.com/api/adv/whisper/",o,{headers:n}).then(function(e){a.setState({movesLog:Object(S.a)(a.state.movesLog).concat([{message:e.data.message}])})}).catch(function(e){console.log(e)})},a.handleHelp=function(){a.setState({movesLog:Object(S.a)(a.state.movesLog).concat([{title:"Help",description:'To move North, type "n" or "north". To move South, type "s" or "south". To move East, type "e" or "east". To move West, type "w" or "west". To say something to players in your current room, type "say <something>". To shout to all players in the game, type "shout <something>". To whisper something to one player, type "whisper <person> <something>". To see the map, type "map".'}])})},a.handleMap=function(){a.setState({movesLog:Object(S.a)(a.state.movesLog).concat([{title:"Map",description:n.a.createElement("div",{className:"mapContainer"},n.a.createElement("div",{className:"mapRow1"},n.a.createElement("div",{className:"Sandy Beach"===a.state.currentRoom?"mapBox mapBoxHighlighted":"mapBox"},"Sandy Beach"),n.a.createElement("div",{className:"horizMapLine"}),n.a.createElement("div",{className:"Glimmering Lighthouse"===a.state.currentRoom?"mapBox mapBoxHighlighted":"mapBox"},"Glimmering Lighthouse"),n.a.createElement("div",{className:"horizMapLine"}),n.a.createElement("div",{className:"Hidden Room"===a.state.currentRoom?"mapBox mapBoxHighlighted":"mapBox"},"Hidden Room")),n.a.createElement("div",{className:"mapRow2"},n.a.createElement("div",{className:"mapBoxBlankShort"}),n.a.createElement("div",{className:"horizMapLineBlank"}),n.a.createElement("div",{className:"mapBoxBlankShort"}),n.a.createElement("div",{className:"horizMapLineBlank"}),n.a.createElement("div",{className:"vertMapLineSpecial"})),n.a.createElement("div",{className:"mapRow3"},n.a.createElement("div",{className:"mapBoxBlank"}),n.a.createElement("div",{className:"horizMapLineBlank"}),n.a.createElement("div",{className:"Grand Overlook"===a.state.currentRoom?"mapBox mapBoxHighlighted":"mapBox"},"Grand Overlook"),n.a.createElement("div",{className:"horizMapLineBlank"}),n.a.createElement("div",{className:"Treasure Chamber"===a.state.currentRoom?"mapBox mapBoxHighlighted":"mapBox"},"Treasure Chamber")),n.a.createElement("div",{className:"mapRow4"},n.a.createElement("div",{className:"mapBoxBlankShort"}),n.a.createElement("div",{className:"horizMapLineBlank"}),n.a.createElement("div",{className:"vertMapLine"}),n.a.createElement("div",{className:"mapBoxBlankShortSquished"}),n.a.createElement("div",{className:"vertMapLine"})),n.a.createElement("div",{className:"mapRow5"},n.a.createElement("div",{className:"mapBoxBlank"}),n.a.createElement("div",{className:"horizMapLineBlank"}),n.a.createElement("div",{className:"Foyer"===a.state.currentRoom?"mapBox mapBoxHighlighted":"mapBox"},"Foyer"),n.a.createElement("div",{className:"horizMapLine"}),n.a.createElement("div",{className:"Narrow Passage"===a.state.currentRoom?"mapBox mapBoxHighlighted":"mapBox"},"Narrow Passage")),n.a.createElement("div",{className:"mapRow6"},n.a.createElement("div",{className:"mapBoxBlankShort"}),n.a.createElement("div",{className:"horizMapLineBlank"}),n.a.createElement("div",{className:"vertMapLine"}),n.a.createElement("div",{className:"horizMapLineBlank"}),n.a.createElement("div",{className:"mapBoxBlankShort"})),n.a.createElement("div",{className:"mapRow7"},n.a.createElement("div",{className:"mapBoxBlank"}),n.a.createElement("div",{className:"horizMapLineBlank"}),n.a.createElement("div",{className:"Outside Cave Entrance"===a.state.currentRoome?"mapBox mapBoxHighlighted":"mapBox"},"Outside Cave Entrance"),n.a.createElement("div",{className:"horizMapLineBlank"}),n.a.createElement("div",{className:"mapBoxBlank"})))}])})},a.changeHandler=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.toggleFlicker=function(){a.state.isFlickering?a.setState({isFlickering:!1,flickerClass:"printList",flickerTag:"on"}):a.setState({isFlickering:!0,flickerClass:"printList crt",flickerTag:"off"})},a.state={input:"",name:"",movesLog:[],uuid:null,channelSubbed:!1,currentRoom:"",flickerClass:"printList crt",isFlickering:!0,flickerTag:"off",interval:null},a.channel=null,a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.movesLog.slice().reverse();return n.a.createElement("div",null,n.a.createElement("div",{className:"gameBox"},n.a.createElement("p",null,"Welcome, ",this.state.name),n.a.createElement("div",{className:this.state.flickerClass},t.map(function(e){return n.a.createElement("div",null,e.title?n.a.createElement("h4",{className:"titleH4"},e.title):"",e.description?n.a.createElement("p",{className:"descP"},e.description):"",e.players&&e.players.length?n.a.createElement("p",{className:"playersP"},"Players: ",e.players.join(", ")):"",e.message?n.a.createElement("p",{className:"messageP"},e.message):"",e.error?n.a.createElement("p",{className:"errorP"},e.error):"")})),n.a.createElement("form",{onSubmit:this.parseCommand,className:"inputAndButton"},n.a.createElement("input",{type:"text",name:"input",value:this.state.input,placeholder:"Type a direction or command or message here.",onChange:this.changeHandler,className:"gameInput",autocomplete:"off"}),n.a.createElement("button",{type:"submit",className:"gameSubmit"},"Submit")),n.a.createElement("button",{type:"button",onClick:function(){return clearInterval(e.state.interval)}},"Cancel screen flicker auto-toggle"),n.a.createElement("button",{type:"button",onClick:this.toggleFlicker},"Turn screen flicker ",this.state.flickerTag),n.a.createElement("button",{type:"button",onClick:this.props.logout},"Log out")))}}]),t}(n.a.Component),y=function(e){return function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).changeHandler=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.passwordToggle=function(){"Show"===a.state.passwordTag?a.setState({passwordTag:"Hide"}):a.setState({passwordTag:"Show"}),"password"===a.state.passwordState?a.setState({passwordState:"text"}):a.setState({passwordState:"password"})},a.handleLogin=function(e){e.preventDefault(),v.a.post("https://lambdamud-ghr.herokuapp.com/api/login/",{username:a.state.username,password:a.state.password}).then(function(e){a.props.login(e.data.key,a.state.username),e.data.key&&a.props.history.push("/")}).catch(function(e){console.log(e.response),alert(e.response.data.error)})},a.state={username:"",password:"",passwordState:"password",passwordTag:"Show"},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"loginBody"},n.a.createElement("h1",null,"Please log in"),n.a.createElement("form",{onSubmit:this.handleLogin,className:"loginForm"},n.a.createElement("div",null,"Username",n.a.createElement("input",{type:"text",name:"username",placeholder:"Username",value:this.state.username,onChange:this.changeHandler})),n.a.createElement("div",null,"Password",n.a.createElement("input",{type:this.state.passwordState,name:"password",placeholder:"Password",value:this.state.password,onChange:this.changeHandler}),n.a.createElement("button",{type:"button",onClick:this.passwordToggle},this.state.passwordTag)),n.a.createElement("button",{type:"submit"},"Submit")),n.a.createElement("h1",null,"Register instead"),n.a.createElement(w.a,{to:"/register"},"Register"))}}]),t}(n.a.Component)},L=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).componentDidMount=function(){var t=localStorage.getItem("token"),a=localStorage.getItem("username");t&&a?(e.setState({loggedIn:!0}),e.props.history.push("/")):(e.setState({loggedIn:!1}),e.props.history.push("/login"))},e.handleLogin=function(t,a){localStorage.setItem("token",t),localStorage.setItem("username",a),e.setState({loggedIn:!0})},e.handleLogout=function(){localStorage.removeItem("token"),localStorage.removeItem("username"),e.props.history.push("/login"),e.setState({loggedIn:!1})},e.state={loggedIn:!1},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.state.loggedIn?n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",null,"LambdaMUD - GHR"),n.a.createElement(d.a,{path:"/",render:function(t){return n.a.createElement(k,Object.assign({},t,{logout:e.handleLogout}))}}))):n.a.createElement("div",null,n.a.createElement(d.a,{path:"/login",render:function(t){return n.a.createElement(N,Object.assign({},t,{login:e.handleLogin}))}}),n.a.createElement(d.a,{path:"/register",render:function(t){return n.a.createElement(E,Object.assign({},t,{login:e.handleLogin}))}}))}}]),t}(s.Component),N=y(L),B=Object(u.a)(L),T=a(62);r.a.render(n.a.createElement(T.a,null,n.a.createElement(B,null)),document.getElementById("root"))}},[[28,2,1]]]);
//# sourceMappingURL=main.e076a9ee.chunk.js.map