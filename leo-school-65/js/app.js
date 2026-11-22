(function(){
'use strict';
var D={
brand:"Լեոյի անվան N65 ավագ դպրոց|Leo High School No. 65|Школа № 65 имени Лео",
"n.home":"Գլխավոր|Home|Главная","n.about":"Դպրոցի մասին|About|О школе","n.edu":"Հոսքեր|Streams|Потоки","n.com":"Համայնք|Community|Сообщество","n.news":"Նորություններ|News|Новости","n.events":"Միջոցառումներ|Events|События","n.gallery":"Պատկերասրահ|Gallery|Галерея","n.adm":"Ընդունելություն|Admissions|Поступление","n.contact":"Կապ|Contact|Контакты",
"h.k":"Երևան · Շենգավիթ · 1951 թվականից|Yerevan · Shengavit · Since 1951|Ереван · Шенгавит · С 1951 года",
"h.t":"Լեոյի անվան №65 ավագ դպրոց|Leo High School No. 65|Школа № 65 имени Лео",
"h.p":"Ավելի քան յոթ տասնամյակ Երևանում պատրաստում ենք աշակերտներին բժշկության, իրավունքի, գիտության, տնտեսագիտության և լեզուների ուղղություններով։|For over seven decades in Yerevan we have prepared students for medicine, law, science, economics and languages.|Более семи десятилетий в Ереване мы готовим учеников к медицине, праву, науке, экономике и языкам.",
"h.c1":"Դիմել ընդունելության|Apply now|Подать заявку","h.c2":"Մեր պատմությունը|Our story|Наша история",
"nxt":"Հաջորդ միջոցառումը|Next event|Ближайшее событие","u.d":"օր|days|дней","u.h":"ժամ|hours|часов","u.m":"րոպե|min|мин",
"tk1":"1951 թվականից Երևանում|In Yerevan since 1951|В Ереване с 1951 года","tk2":"Հինգ հոսք ավագ դպրոցում|Five high-school streams|Пять потоков в старшей школе","tk3":"Շուրջ 5000 շրջանավարտ|About 5,000 graduates|Около 5000 выпускников","tk4":"Լեոյի անունով՝ 1960-ից|Named after Leo since 1960|Имя Лео с 1960 года",
"st1":"տարվա պատմություն|years of history|лет истории","st2":"շրջանավարտ|graduates|выпускников","st3":"ավագ դպրոցի հոսք|high-school streams|профильных потоков","st4":"տեղանոց դահլիճ|seat assembly hall|мест в актовом зале",
"str.t":"Հինգ հոսք՝ քո ապագայի համար|Five streams for your future|Пять потоков для вашего будущего","str.p":"Ավագ դպրոցում աշակերտն ընտրում է իր ուղղությունը և խորացնում համապատասխան առարկաները։|In high school each student chooses a direction and studies the key subjects in depth.|В старшей школе ученик выбирает направление и углублённо изучает профильные предметы.",
"s1":"Տնտեսագիտական|Economics|Экономический","s1p":"Խորացված ուսուցում տնտեսագիտական և հարակից առարկաներով։|In-depth study of economics and related subjects.|Углублённое изучение экономики и смежных предметов.",
"s2":"Ֆիզիկամաթեմատիկական|Physics & Mathematics|Физико-математический","s2p":"Մաթեմատիկա և ֆիզիկա՝ գիտական, ճարտարագիտական և ՏՏ մասնագիտությունների համար։|Maths and physics for science, engineering and IT careers.|Математика и физика для научных, инженерных и IT-профессий.",
"s3":"Կենսաքիմիական|Biology & Chemistry|Биолого-химический","s3p":"Կենսաբանություն և քիմիա՝ նախապատրաստություն բժշկական և կենսաբանական բուհերին։|Biology and chemistry, preparing students for medical and life-science universities.|Биология и химия: подготовка к медицинским и биологическим вузам.",
"s4":"Պատմաիրավագիտական|History & Law|Историко-правовой","s4p":"Հայոց և համաշխարհային պատմություն, հայոց լեզու, անգլերեն և հասարակագիտություն։|Armenian and world history, Armenian, English and social studies.|История Армении и мира, армянский, английский и обществознание.",
"s5":"Լեզվաբանական|Linguistics|Лингвистический","s5p":"Լեզուների խորացված ուսուցում և լայն մշակութային պատրաստվածություն։|Advanced language study and a broad cultural education.|Углублённое изучение языков и широкая гуманитарная подготовка.",
"tl.t":"Մեր պատմությունը|Our story|Наша история",
"y1":"Հիմնվում է դպրոցը։ Մինչև 1956 թվականը այն գործում է Երևանի N32 դպրոցի տարածքում։|The school is founded and works inside Yerevan School No. 32 until 1956.|Основана школа; до 1956 года она работает на территории ереванской школы № 32.",
"y2":"Շահագործման է հանձնվում դպրոցի առաջին մասնաշենքը։|The first school building opens.|Открывается первый корпус школы.",
"y3":"Մեծ պատմաբան Լեոյի 100-ամյակի կապակցությամբ դպրոցը կոչվում է նրա անունով։|On the 100th anniversary of the great historian Leo, the school is named after him.|К 100-летию великого историка Лео школа получает его имя.",
"y4":"Բացվում է երկրորդ մասնաշենքը։|The second building opens.|Открывается второй корпус.",
"y5":"Դպրոցը իր դռները բացում է Սպիտակի երկրաշարժից տուժած երեխաների առաջ։|The school opens its doors to children affected by the Spitak earthquake.|Школа принимает детей, пострадавших от Спитакского землетрясения.",
"y6":"Դպրոցը դառնում է ավագ։|The school becomes a high school.|Школа становится старшей.",
"leo.t":"Ո՞վ էր Լեոն|Who was Leo?|Кем был Лео","leo.p":"Լեոն (Առաքել Բաբախանյան, 1860–1932)՝ հայ մեծ պատմաբան, գրող և հրապարակախոս։ Դպրոցը կրում է նրա անունը 1960 թվականից։|Leo (Arakel Babakhanyan, 1860–1932) was a great Armenian historian, writer and publicist. The school has carried his name since 1960.|Лео (Аракел Бабаханян, 1860–1932) — великий армянский историк, писатель и публицист. Школа носит его имя с 1960 года.",
"fac.t":"Ուսումնական միջավայր|Learning environment|Учебная среда",
"fc1":"Գրադարան|Library|Библиотека","fc2":"120 տեղանոց դահլիճ ժամանակակից բեմահարթակով|120-seat hall with a modern stage|Зал на 120 мест с современной сценой","fc3":"Քիմիայի և ֆիզիկայի կաբինետներ|Chemistry and physics rooms|Кабинеты химии и физики","fc4":"Կենսաբանության և աշխարհագրության կաբինետներ|Biology and geography rooms|Кабинеты биологии и географии","fc5":"Պատմության կաբինետ|History room|Кабинет истории",
"gp.t":"Դպրոցական միջավայր|Around the school|Школьная среда","gp.n":"Պատկերները պատկերազարդումներ են. դպրոցի լուսանկարները կավելացվեն ադմինից։|These are illustrations; real school photos can be added from the admin panel.|Это иллюстрации; реальные фото школы можно добавить из админ-панели.",
"g1":"Դպրոցի շենքը|School building|Здание школы","g2":"Գրադարան|Library|Библиотека","g3":"Դահլիճ|Assembly hall|Актовый зал","g4":"Քիմիայի կաբինետ|Chemistry room|Кабинет химии","g5":"Սպորտ|Sports|Спорт","g6":"Շրջանավարտներ|Graduates|Выпускники",
"latest":"Վերջին նորությունները|Latest news|Последние новости","all":"Բոլոր նորությունները|All news|Все новости","nw.e":"Նորություններ դեռ չկան։ Հաճախ այցելեք մեր կայք։|No news published yet. Please check back soon.|Новостей пока нет. Заходите позже.",
"a.t":"Դպրոցի մասին|About the school|О школе","a.p":"Լեոյի անվան №65 ավագ դպրոցը Երևանի Շենգավիթ վարչական շրջանի հանրակրթական հաստատություն է։|Leo High School No. 65 is a public school in Yerevan's Shengavit district.|Школа № 65 имени Лео — общеобразовательное учреждение в ереванском районе Шенгавит.",
"a.m":"Մեր մասին|Who we are|Кто мы","a.mp":"Հիմնադրման օրվանից դպրոցը աչքի է ընկել կրթական, մշակութային և սպորտային հաջողություններով՝ ներկայացնելով Հայաստանը տարբեր երկրներում։ Այն ավարտել են շուրջ 5000 աշակերտներ։|Since its founding the school has stood out for educational, cultural and sporting achievements, representing Armenia in different countries. About 5,000 students have graduated.|С основания школа известна успехами в учёбе, культуре и спорте и представляла Армению в разных странах. Её окончили около 5000 учеников.",
"e.t":"Հոսքեր|Streams|Потоки","e.p":"Ավագ դպրոցի հինգ ուղղություն՝ ուսուցում ըստ աշակերտի նպատակների։|Five high-school directions matched to each student's goals.|Пять направлений старшей школы под цели ученика.",
"co.t":"Համայնք|Community|Сообщество","co.p":"Մարդիկ, ովքեր կառուցել են և շարունակում են կառուցել մեր դպրոցը։|The people who built and keep building our school.|Люди, которые строили и продолжают строить нашу школу.",
"dir.t":"Դպրոցի տնօրենները|School directors|Директора школы","dir.c":"Այժմ|Current|Сейчас",
"cn.t":"Դպրոցի խորհուրդները|School councils|Советы школы","cn1":"Աշակերտական|Student|Ученический","cn2":"Ծնողական|Parents'|Родительский","cn3":"Ուսուցչական|Teachers'|Учительский","cn4":"Մանկավարժական|Pedagogical|Педагогический",
"nw.t":"Նորություններ|News|Новости","nw.p":"Ինչ է կատարվում դպրոցում։|What is happening at school.|Что происходит в школе.",
"ev.t":"Միջոցառումներ|Events|События","ev.p":"Դպրոցական օրացույց՝ ավանդական և նոր միջոցառումներ։|The school calendar: traditional and new events.|Школьный календарь: традиционные и новые события.",
"ev1":"Գիտելիքի օր|Knowledge Day|День знаний","ev1p":"Ուսումնական տարվա մեկնարկը։|The start of the school year.|Начало учебного года.","ev2":"Վերջին զանգ|Last Bell|Последний звонок","ev2p":"Շրջանավարտների հրաժեշտի ավանդական տոնը։|The traditional graduation farewell.|Традиционный праздник прощания выпускников.",
"g.t":"Պատկերասրահ|Gallery|Галерея","g.p":"Սեղմեք նկարի վրա՝ մեծացնելու համար։|Select a picture to enlarge it.|Нажмите на изображение, чтобы увеличить.",
"lb.p":"Նախորդ|Previous|Назад","lb.n":"Հաջորդ|Next|Вперёд","lb.c":"Փակել|Close|Закрыть",
"ad.t":"Ընդունելություն|Admissions|Поступление","ad.p":"Դիմեք առցանց, և մենք կկապվենք ձեզ հետ։|Apply online and we will get in touch.|Подайте заявку онлайн, и мы свяжемся с вами.",
"as1":"Լրացրեք դիմումը|Fill in the application|Заполните заявку","as2":"Մենք կկապվենք՝ զրույցի համար|We contact you to arrange a meeting|Мы свяжемся для встречи","as3":"Ներկայացրեք փաստաթղթերը|Submit the documents|Подайте документы","as4":"Ստացեք որոշումը|Receive the decision|Получите решение",
"f.pn":"Ծնողի անուն|Parent name|Имя родителя","f.sn":"Աշակերտի անուն|Student name|Имя ученика","f.gr":"Դասարան|Grade|Класс","f.st":"Հետաքրքրող հոսք|Preferred stream|Интересующий поток","f.em":"Էլ. փոստ|Email|Эл. почта","f.ph":"Հեռախոս|Phone|Телефон","f.nm":"Անուն|Name|Имя","f.ms":"Հաղորդագրություն|Message|Сообщение",
"f.sa":"Ուղարկել դիմումը|Send application|Отправить заявку","f.sm":"Ուղարկել հաղորդագրությունը|Send message|Отправить сообщение",
"f.ok":"Շնորհակալություն։ Ստացանք ձեր հայտը։|Thank you. We received your request.|Спасибо. Мы получили ваше обращение.","f.er":"Լրացրեք բոլոր դաշտերը ճիշտ։|Please fill in all fields correctly.|Пожалуйста, правильно заполните все поля.",
"c.t":"Կապ|Contact|Контакты","c.p":"Գրեք կամ զանգահարեք մեզ։|Write or call us.|Напишите или позвоните нам.","c.a":"Հասցե|Address|Адрес","c.ad":"Ֆրունզեի փող., 56, Շենգավիթ, Երևան 0061|56 Frunze St., Shengavit, Yerevan 0061|ул. Фрунзе, 56, Шенгавит, Ереван 0061","c.m":"Բացել քարտեզում|Open in maps|Открыть на карте",
"vis.t":"Այցելեք մեզ|Visit us|Приходите к нам","cta.t":"Պատրա՞ստ եք միանալ մեզ|Ready to join us?|Готовы присоединиться?","cta.p":"Լրացրեք դիմումը՝ մի քանի րոպեում։|Fill in the application in a few minutes.|Заполните заявку за несколько минут.",
"ft":"© 2026 Լեոյի անվան N65 ավագ դպրոց, Երևան|© 2026 Leo High School No. 65, Yerevan|© 2026 Школа № 65 имени Лео, Ереван","adm":"Ադմին|Admin|Админ"};
var MO={hy:['Հուն','Փետ','Մար','Ապր','Մայ','Հուն','Հուլ','Օգս','Սեպ','Հոկ','Նոյ','Դեկ'],en:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],ru:['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек']};
var L=localStorage.getItem('leo_lang');if(!/^(hy|en|ru)$/.test(L||''))L='hy';
var LI={hy:0,en:1,ru:2};
function t(k){var v=(D[k]||k).split('|');return v[LI[L]]||v[1]||v[0]}
function tr(s){var v=s.split('|');return v[LI[L]]||v[1]||v[0]}
function $(s,r){return (r||document).querySelector(s)}function $$(s,r){return [].slice.call((r||document).querySelectorAll(s))}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function jget(k){try{var a=JSON.parse(localStorage.getItem(k)||'[]');return Array.isArray(a)?a:[]}catch(e){return []}}
var DIRS=[["1951–1987","Հովսեփ Գառնիկյան|Hovsep Garnikyan|Овсеп Гарникян"],["1987–1995","Աշոտ Մնացականյան|Ashot Mnatsakanyan|Ашот Мнацаканян"],["1996–2015","Նորայր Խրիմյան|Norayr Khrimyan|Нораир Хримян"],["dir.c","Ռաֆայել Բարսեղյան|Rafael Barseghyan|Рафаэль Барсегян"]];
var DEF=[["09-01","ev1","ev1p"],["05-25","ev2","ev2p"]];
var GAL=[["#0f1b3d","#d6336c","bld","g1"],["#7a1a4e","#ffb36b","book","g2"],["#1c2f66","#ff8a3d","stage","g3"],["#0b6b6b","#a9f0d1","flask","g4"],["#2d6a4f","#d8f3dc","ball","g5"],["#4a2a73","#ffd08a","cap","g6"]];
var IC={bld:'<path d="M180 400V240l130-70 130 70v160z" fill="#fff" opacity=".92"/><path d="M270 400v-80h80v80z" fill="#0f1b3d" opacity=".6"/>',book:'<path d="M190 250h120v150H190zM310 250h120v150H310z" fill="#fff" opacity=".92"/>',stage:'<path d="M160 400V230h300v170z" fill="#fff" opacity=".9"/><path d="M160 230q150-90 300 0z" fill="#ffd08a"/>',flask:'<path d="M280 190h60v90l70 120H210l70-120z" fill="#fff" opacity=".92"/>',ball:'<circle cx="310" cy="300" r="90" fill="#fff" opacity=".92"/><path d="M220 300h180M310 210v180" stroke="#2d6a4f" stroke-width="7"/>',cap:'<path d="M310 200l150 70-150 70-150-70z" fill="#fff" opacity=".95"/><path d="M230 310v60q80 40 160 0v-60l-80 36z" fill="#fff" opacity=".85"/>'};
function img(g){var s='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 460"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="'+g[0]+'"/><stop offset="1" stop-color="'+g[1]+'"/></linearGradient></defs><rect width="620" height="460" fill="url(#g)"/>'+IC[g[2]]+'</svg>';return 'data:image/svg+xml;utf8,'+encodeURIComponent(s)}
function fmt(d){return {d:d.getDate(),m:MO[L][d.getMonth()],y:d.getFullYear()}}
function evs(){var now=new Date(),y=now.getFullYear(),r=[],today=new Date(y,now.getMonth(),now.getDate());
 DEF.forEach(function(x){var d=new Date(y+'-'+x[0]+'T09:00:00');if(d<now)d=new Date((y+1)+'-'+x[0]+'T09:00:00');r.push({d:d,t:t(x[1]),p:t(x[2])})});
 jget('leo_events').forEach(function(x){var d=new Date(x[0]+'T09:00:00');if(!isNaN(d)&&d>=today)r.push({d:d,t:tr(x[1]),p:tr(x[2])})});
 return r.sort(function(a,b){return a.d-b.d})}
function news(){return jget('leo_news').sort(function(a,b){return a[0]<b[0]?1:-1})}
function nCard(x){var d=new Date(x[0]+'T09:00:00'),f=fmt(d);return '<article class="card"><p class="meta">'+f.d+' '+f.m+' '+f.y+'</p><h3>'+esc(tr(x[1]))+'</h3><p>'+esc(tr(x[2]))+'</p></article>'}
function photos(){var p=jget('leo_photos');return p.length?p.map(function(s){return {s:s,c:''}}):GAL.map(function(g){return {s:img(g),c:t(g[3])}})}
var cdT=null;
function setNum(e){var n=e.dataset.n==='yrs'?new Date().getFullYear()-1951:+e.dataset.n;if(e._d)return;e._d=1;var s=Date.now();(function f(){var p=Math.min(1,(Date.now()-s)/1200);e.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})()}
function home(){
 var tk=$('#ticker');if(tk){var h=['tk1','tk2','tk3','tk4'].map(function(k){return '<span>◆ '+esc(t(k))+'</span>'}).concat(news().map(function(x){return '<span>◆ '+esc(tr(x[1]))+'</span>'})).join('');tk.innerHTML=h+h}
 var cd=$('#cd');if(cd){var e=evs()[0];if(e){cd.hidden=false;$('#cdt').textContent=e.t;var up=function(){var m=Math.max(0,e.d-Date.now());$('#cdd').textContent=Math.floor(m/864e5);$('#cdh').textContent=Math.floor(m%864e5/36e5);$('#cdm').textContent=Math.floor(m%36e5/6e4)};up();clearInterval(cdT);cdT=setInterval(up,30000)}}
 var gp=$('#gp');if(gp)gp.innerHTML=photos().slice(0,4).map(function(p){return '<a href="gallery.html" aria-label="Gallery"><img alt="" src="'+p.s+'"></a>'}).join('');
 $$('.num').forEach(function(e){if(!('IntersectionObserver' in window)){e._d=1;e.textContent=e.dataset.n==='yrs'?new Date().getFullYear()-1951:e.dataset.n}else if(!e._o){e._o=1;new IntersectionObserver(function(es,o){if(es[0].isIntersecting){setNum(e);o.disconnect()}}).observe(e)}});
}
function render(){
 $$('[data-i]').forEach(function(e){e.textContent=t(e.dataset.i)});
 $$('[data-ph]').forEach(function(e){e.placeholder=t(e.dataset.ph)});
 document.documentElement.lang=L;
 $$('.lang button').forEach(function(b){b.classList.toggle('on',b.dataset.l===L);b.setAttribute('aria-pressed',b.dataset.l===L)});
 var pk=document.body.dataset.t;if(pk)document.title=t(pk)+' — '+t('brand');
 var n=news(),lt=$('#latest');if(lt)lt.innerHTML=n.length?n.slice(0,3).map(nCard).join(''):'<p class="meta">'+esc(t('nw.e'))+'</p>';
 var nl=$('#news');if(nl)nl.innerHTML=n.length?n.map(nCard).join(''):'<p class="meta">'+esc(t('nw.e'))+'</p>';
 var ec=$('#events');if(ec)ec.innerHTML=evs().map(function(x){var f=fmt(x.d);return '<div class="ev"><div class="date"><b>'+f.d+'</b>'+f.m+' '+f.y+'</div><div><h3>'+esc(x.t)+'</h3><p>'+esc(x.p)+'</p></div></div>'}).join('');
 var dl=$('#dirs');if(dl)dl.innerHTML=DIRS.map(function(x){return '<div class="row"><b>'+esc(D[x[0]]?t(x[0]):x[0])+'</b><span>'+esc(tr(x[1]))+'</span></div>'}).join('');
 var gl=$('#gallery');if(gl){var P=photos();gl.innerHTML=P.map(function(p,i){return '<button data-i2="'+i+'" aria-label="'+(i+1)+'"><img alt="'+esc(p.c)+'" src="'+p.s+'">'+(p.c?'<span class="cap">'+esc(p.c)+'</span>':'')+'</button>'}).join('');var gn=$('#gnote');if(gn)gn.hidden=jget('leo_photos').length>0}
 $$('[data-year]').forEach(function(e){e.textContent=new Date().getFullYear()-1951});
 home();
}
$$('.lang button').forEach(function(b){b.addEventListener('click',function(){L=b.dataset.l;localStorage.setItem('leo_lang',L);render();if(window.__adminRender)window.__adminRender()})});
var bg=$('#burger'),nv=$('nav');if(bg)bg.addEventListener('click',function(){var o=nv.classList.toggle('open');bg.setAttribute('aria-expanded',o)});
var gal=$('#gallery');
if(gal){var cur=0,lb=$('#lb'),li=$('#lbimg');
 var show=function(i){var P=photos();cur=(i+P.length)%P.length;li.src=P[cur].s;$('#lbcap').textContent=P[cur].c};
 gal.addEventListener('click',function(e){var b=e.target.closest('button');if(b){show(+b.dataset.i2);lb.classList.add('open');$('#lbc').focus()}});
 $('#lbp').onclick=function(){show(cur-1)};$('#lbn').onclick=function(){show(cur+1)};$('#lbc').onclick=function(){lb.classList.remove('open')};
 lb.addEventListener('click',function(e){if(e.target===lb)lb.classList.remove('open')});
 document.addEventListener('keydown',function(e){if(!lb.classList.contains('open'))return;if(e.key==='Escape')lb.classList.remove('open');if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)})}
$$('form[data-store]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();var m=$('.msg',f),o={_t:new Date().toISOString(),_lang:L};
 var ok=f.checkValidity();$$('input,select,textarea',f).forEach(function(i){o[i.name]=i.value.trim()});
 if(!ok){m.className='msg err';m.textContent=t('f.er');f.reportValidity();return}
 var k=f.dataset.store,a=jget(k);a.push(o);localStorage.setItem(k,JSON.stringify(a));
 var ep=window.LEO_ENDPOINT;if(ep){fetch(ep,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({type:k,data:o})}).catch(function(){})}
 f.reset();m.className='msg ok';m.textContent=t('f.ok')})});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1});$$('.rv').forEach(function(e){io.observe(e)})}else $$('.rv').forEach(function(e){e.classList.add('in')});
window.LEO={t:t,tr:tr,esc:esc,render:render,$:$,$$:$$,jget:jget};
render();
})();
