(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(6),o=a.n(s),i=(a(14),a(8)),c=a(1),l=a(2),u=a(4),m=a(3),h=a(7),d=a.n(h);a(15);function p(e){return n.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"renderSquare",value:function(e){var t=this;return n.a.createElement(p,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),n.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),n.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(n.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],xIsNext:!0,stepNumber:0},r}return Object(l.a)(a,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();N(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,a=this.state.history,r=a[this.state.stepNumber],s=N(r.squares),o=a.map((function(e,a){var r=a?"Go to move #"+a:"Go to game start";return n.a.createElement("li",{key:a},n.a.createElement("button",{onClick:function(){return t.jumpTo(a)}},r))}));return e=s?"Winner"+s:"Next player: "+(this.state.xIsNext?"X":"O"),n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-board"},n.a.createElement(v,{squares:r.squares,onClick:function(e){return t.handleClick(e)}})),n.a.createElement("div",{className:"game-info"},n.a.createElement("div",null,e),n.a.createElement("ol",null,o)))}}]),a}(n.a.Component);var b=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),n.a.createElement(f,null)))};function N(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(i.a)(t[a],3),n=r[0],s=r[1],o=r[2];if(e[n]&&e[n]===e[s]&&e[n]===e[o])return e[n]}return null}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.f8c4d0de.chunk.js.map