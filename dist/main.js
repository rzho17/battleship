(()=>{"use strict";const t=class{constructor(t,e,o){this.length=t,this.hits=e,this.sunk=o}isHit(){return this.hits+=1}isSunk(){return this.hits===this.length&&(this.sunk=!0)}},e=t=>{let e=0;for(let o=0;o<10;o++){for(let o=0;o<10;o++){const r=document.createElement("div");t.appendChild(r),r.className="gridSquare",r.dataset.gridPosition=`${e}${o}`}e++}},o=(t,e,o)=>{t.placeShip(t.shipHolder.shift(),e,o),a(t.gameBoard.board,"initialBoard")},r=t=>[parseInt(t[0]),parseInt(t[1])],i=(t,e,o,r)=>{document.querySelector(`.${r} [data-grid-position="${t}${e}"]`).style.backgroundColor=o},a=(e,o)=>{for(let r=0;r<e.length;r++)for(let a=0;a<e[r].length;a++)e[r][a]instanceof t&&i([r],[a],"orange",o),"x"===e[r][a]?i([r],[a],"red",o):"o"===e[r][a]&&i([r],[a],"grey",o)},n=e,s=class{constructor(){this.board=this.createBoard()}createBoard(){const t=[];for(let e=0;e<10;e++){const e=[];for(let t=0;t<10;t++)e.push(null);t.push(e)}return t}checkShip(e,o,r){const i=o[0],a=o[1],n=10-e.length>=a,s=10-e.length>=i;let l=!1;if("x"===r&&n)for(let o=0;o<e.length;o++)this.board[i][a+o]instanceof t&&(l=!0);if("y"===r&&s)for(let o=0;o<e.length;o++)this.board[i+o][a]instanceof t&&(l=!0);return l}placeShip(t,e,o){const r=e[0],i=e[1],a=10-t.length>=i,n=10-t.length>=r;if(!1===this.checkShip(t,e,o)){if("x"===o&&a)for(let e=0;e<t.length;e++)this.board[r][i+e]=t;if("y"===o&&n)for(let e=0;e<t.length;e++)this.board[r+e][i]=t}}receiveAttack(e){const o=e[0],r=e[1];let i=this.board[o][r];if(i instanceof t&&(i.isHit(),i.hits===i.length&&i.isSunk(),this.board[o][r]="x"),null===i&&(this.board[o][r]="o"),"x"===i)return"invalid move"}findValidPosition(){for(let t=0;t<this.board.length;t++)for(let e=0;e<this.board[t].length;e++)"o"===this.board[t][e]||this.board[t][e]}allShipsSunk(){for(let e=0;e<this.board.length;e++)for(let o=0;o<this.board[e].length;o++)if(this.board[e][o]instanceof t)return!1;return!0}},l=class{constructor(e,o){this.gameBoard=new s,this.carrier=new t(5,0,!1),this.battleship=new t(4,0,!1),this.destroyer=new t(3,0,!1),this.submarine=new t(3,0,!1),this.patrolBoat=new t(2,0,!1),this.shipHolder=[this.carrier,this.battleship,this.destroyer,this.submarine,this.patrolBoat]}placeShip(t,e,o){this.gameBoard.placeShip(t,e,o)}receiveAttack(t){this.gameBoard.receiveAttack(t)}computerAttack(){const t=Math.floor(10*Math.random()),e=Math.floor(10*Math.random());"o"===this.gameBoard.board[t][e]&&"x"===this.gameBoard.board[t][e]||this.receiveAttack([t,e])}},d=document.querySelector(".playerBoard"),c=document.querySelector(".computerBoard");n(d),n(c);const h=new l;new l,(t=>{const i=document.querySelector("main"),a=document.createElement("div");a.className="loadContainer";const n=document.createElement("div");n.className="loadInfo";const s=document.createElement("h2");s.className="loadTitle",s.innerText="Let's play Battleship!";const l=document.createElement("div");l.className="displayShip",l.innerText="Place your ship(change ship name)";const d=document.createElement("button");d.className="rotateBtn",d.innerText="Rotate Ship";const c=document.createElement("div");c.className="gameBoard initialBoard",e(c),n.append(s,l,d,c),a.append(n),i.append(a),(t=>{const e=document.querySelectorAll(".initialBoard .gridSquare"),i=document.querySelector(".rotateBtn");let a="x";i.addEventListener("click",(()=>{a=(t=>"x"===t?"y":"x")(a),console.log(a)})),(t=>{document.querySelectorAll(".initialBoard .gridSquare").forEach((e=>{e.addEventListener("mouseover",(()=>{const o=t.shipHolder[0];let r=e.dataset.gridPosition[0],i=e.dataset.gridPosition[1];for(let t=0;t<o.length;t++){i=parseInt(i);let t=document.querySelector(`.initialBoard [data-grid-position="${r}${i}"]`);i+=1,t.style.backgroundColor="red"}})),e.addEventListener("mouseout",(()=>{const o=t.shipHolder[0];let r=e.dataset.gridPosition[0],i=e.dataset.gridPosition[1];for(let t=0;t<o.length;t++){i=parseInt(i);let t=document.querySelector(`.initialBoard [data-grid-position="${r}${i}"]`);i+=1,t.style.backgroundColor="white"}}))}))})(t),e.forEach((e=>{e.addEventListener("click",(e=>{const i=r(e.target.dataset.gridPosition),n=t.shipHolder[0],s=10-n.length>=i[1],l=10-n.length>=i[0],d=!1===t.gameBoard.checkShip(n,i,a);console.log(i),"x"===a&&s&&d&&o(t,i,a),"y"===a&&l&&d&&o(t,i,a)}))}))})(t)})(h)})();