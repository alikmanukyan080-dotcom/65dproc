(function(){'use strict';
var PW='leo65admin',$=LEO.$,E=LEO.esc,get=LEO.jget;
function set(k,a){try{localStorage.setItem(k,JSON.stringify(a));return true}catch(e){return false}}
var C1=['_t','parent','student','grade','stream','email','phone'],C2=['_t','name','email','message'];
function tbl(k,cols,el){var a=get(k);$(el).innerHTML=a.length?'<table><tr>'+cols.map(function(c){return '<th>'+c+'</th>'}).join('')+'<th></th></tr>'+a.map(function(r,i){return '<tr>'+cols.map(function(c){return '<td>'+E(r[c]||'')+'</td>'}).join('')+'<td><button data-k="'+k+'" data-i="'+i+'">✕</button></td></tr>'}).join('')+'</table>':'<p class="meta">—</p>'}
function draw(){tbl('leo_apps',C1,'#t1');tbl('leo_msgs',C2,'#t2');
 var h='';['leo_news','leo_events'].forEach(function(k){get(k).forEach(function(r,i){h+='<p>'+E(k.slice(4,-1))+' · '+E(r[0])+' — '+E(r[1].split('|')[1]||r[1])+' <button data-k="'+k+'" data-i="'+i+'">✕</button></p>'})});$('#nl').innerHTML=h;}
function csv(k,cols){var q=function(v){return '"'+String(v||'').replace(/"/g,'""')+'"'},s=cols.join(',')+'\n'+get(k).map(function(r){return cols.map(function(c){return q(r[c])}).join(',')}).join('\n'),l=document.createElement('a');l.href=URL.createObjectURL(new Blob(['\ufeff'+s],{type:'text/csv'}));l.download=k+'.csv';l.click()}
function gate(){var on=sessionStorage.getItem('leo_adm')==='1';$('#login').hidden=on;$('#panel').hidden=!on;if(on)draw()}
$('#login').addEventListener('submit',function(e){e.preventDefault();var m=$('#lm');if($('#pw').value===PW){sessionStorage.setItem('leo_adm','1');gate()}else{m.className='msg err';m.textContent='Wrong password'}});
$('#out').onclick=function(){sessionStorage.removeItem('leo_adm');gate()};
$('#x1').onclick=function(){csv('leo_apps',C1)};$('#x2').onclick=function(){csv('leo_msgs',C2)};
$('#panel').addEventListener('click',function(e){var b=e.target.closest('button[data-k]');if(b){var a=get(b.dataset.k);a.splice(+b.dataset.i,1);set(b.dataset.k,a);draw()}});
$('#nf').addEventListener('submit',function(e){e.preventDefault();var f=e.target,v=function(n){return f.elements[n].value.trim().replace(/\|/g,'/')},k=f.elements.k.value,a=get(k);
 a.push([v('d'),v('t0')+'|'+v('t1')+'|'+v('t2'),v('x0')+'|'+v('x1')+'|'+v('x2')]);set(k,a);f.reset();draw()});
window.__adminRender=draw;gate();})();
