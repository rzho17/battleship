(()=>{"use strict";const t=class{constructor(t,e,r){this.length=t,this.hits=e,this.sunk=r}isHit(){return this.hits+=1}isSunk(){return this.hits===this.length&&(this.sunk=!0)}},e=t=>[parseInt(t[0]),parseInt(t[1])],r=(r,o)=>{document.querySelectorAll(`.${o} .gridSquare`).forEach((a=>{a.addEventListener("click",(a=>{const s=e(a.target.dataset.gridPosition),n=s[0],l=s[1];r[n][l]instanceof t&&(a.target.style.backgroundColor="orange"),null===r[n][l]&&(a.target.style.backgroundColor="grey"),i(r,o)}))}))},o=(t,e,r,o)=>{const i=document.querySelector(`.${o} [data-grid-position="${t}${e}"]`);i.classList.add("ship"),i.style.backgroundColor=r},i=(e,r)=>{for(let i=0;i<e.length;i++)for(let a=0;a<e[i].length;a++)"playerBoard"===r||"initialBoard"===r?(e[i][a]instanceof t&&o([i],[a],"orange",r),"x"===e[i][a]?o([i],[a],"red",r):"o"===e[i][a]&&o([i],[a],"grey",r)):"x"===e[i][a]?o([i],[a],"red",r):"o"===e[i][a]&&o([i],[a],"grey",r)},a=t=>{let e=0;for(let r=0;r<10;r++){for(let r=0;r<10;r++){const o=document.createElement("div");t.appendChild(o),o.className="gridSquare",o.dataset.gridPosition=`${e}${r}`}e++}},s=class{constructor(){this.board=this.createBoard()}createBoard(){const t=[];for(let e=0;e<10;e++){const e=[];for(let t=0;t<10;t++)e.push(null);t.push(e)}return t}checkShip(e,r,o){const i=r[0],a=r[1],s=10-e.length>=a,n=10-e.length>=i;let l=!1;if("x"===o&&s)for(let r=0;r<e.length;r++)this.board[i][a+r]instanceof t&&(l=!0);if("y"===o&&n)for(let r=0;r<e.length;r++)this.board[i+r][a]instanceof t&&(l=!0);return l}placeShip(t,e,r){const o=e[0],i=e[1],a=10-t.length>=i,s=10-t.length>=o;if(!1===this.checkShip(t,e,r)){if("x"===r&&a)for(let e=0;e<t.length;e++)this.board[o][i+e]=t;if("y"===r&&s)for(let e=0;e<t.length;e++)this.board[o+e][i]=t}}receiveAttack(e){const r=e[0],o=e[1];let i=this.board[r][o];if(i instanceof t&&(i.isHit(),i.hits===i.length&&i.isSunk(),this.board[r][o]="x"),null===i&&(this.board[r][o]="o"),"x"===i)return"invalid move"}findValidPosition(){for(let t=0;t<this.board.length;t++)for(let e=0;e<this.board[t].length;e++)"o"===this.board[t][e]||this.board[t][e]}allShipsSunk(){let e=!0;for(let r=0;r<this.board.length;r++)for(let o=0;o<this.board[r].length;o++)this.board[r][o]instanceof t&&(e=!1);return e}},n=class{constructor(e,r){this.gameBoard=new s,this.carrier=new t(5,0,!1),this.battleship=new t(4,0,!1),this.destroyer=new t(3,0,!1),this.submarine=new t(3,0,!1),this.patrolBoat=new t(2,0,!1),this.shipHolder=[this.carrier,this.battleship,this.destroyer,this.submarine,this.patrolBoat]}placeShip(t,e,r){this.gameBoard.placeShip(t,e,r)}receiveAttack(t){this.gameBoard.receiveAttack(t)}computerAttack(){const t=Math.floor(10*Math.random()),e=Math.floor(10*Math.random());"o"===this.gameBoard.board[t][e]&&"x"===this.gameBoard.board[t][e]||this.receiveAttack([t,e])}},l=(()=>{(()=>{const t=document.querySelector(".playerBoard"),e=document.querySelector(".computerBoard");a(t),a(e)})();const t=new n,o=new n;return o.placeShip(o.shipHolder[0],[1,2],"x"),o.placeShip(o.shipHolder[1],[2,2],"x"),o.placeShip(o.shipHolder[2],[3,2],"x"),o.placeShip(o.shipHolder[3],[4,2],"x"),o.placeShip(o.shipHolder[4],[5,2],"x"),document.querySelectorAll(".computerBoard .gridSquare ").forEach((t=>{t.addEventListener("click",(t=>{const i=e(t.target.dataset.gridPosition);o.receiveAttack(i),r(o.gameBoard.board,"computerBoard"),!0===l.computer.gameBoard.allShipsSunk()?console.log("player win"):console.log("nno winner yet")}))})),r(o.gameBoard.board,"computerBoard"),{player:t,computer:o}})()})();