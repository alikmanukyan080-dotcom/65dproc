import json,os
PAGES=['index','about','education','community','news','events','admissions','contact']
NAV=[('index','n.home'),('about','n.about'),('education','n.edu'),('community','n.com'),('news','n.news'),('events','n.events'),('admissions','n.adm'),('contact','n.contact')]
DESC={'index':'Leo High School No. 65 (Երևանի Լեոյի անվան N65 ավագ դպրոց), Yerevan, Shengavit. Founded 1951. Five high-school streams. Armenian, English, Russian.',
'about':'History of Leo High School No. 65 in Yerevan: founded 1951, named after historian Leo in 1960.','education':'Five high-school streams at Leo High School No. 65: economics, physics-mathematics, biology-chemistry, history-law, linguistics.',
'community':'School directors and councils of Leo High School No. 65, Yerevan.','news':'News from Leo High School No. 65, Yerevan.','events':'School calendar of Leo High School No. 65, Yerevan.',
'admissions':'Apply online to Leo High School No. 65, Frunze 56, Yerevan.','contact':'Contact Leo High School No. 65: Frunze St. 56, Yerevan. +374 10 480922, info@leo65.am','admin':'Admin'}
TK={'index':'n.home','about':'a.t','education':'e.t','community':'co.t','news':'nw.t','events':'ev.t','admissions':'ad.t','contact':'c.t','admin':'adm'}
LION='<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="30" fill="#0f1b3d"/><circle cx="32" cy="32" r="22" fill="#ff8a3d"/><circle cx="25" cy="29" r="3" fill="#0f1b3d"/><circle cx="39" cy="29" r="3" fill="#0f1b3d"/><path d="M26 41q6 6 12 0" stroke="#0f1b3d" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M29 35h6l-3 4z" fill="#0f1b3d"/></svg>'
LD=json.dumps({"@context":"https://schema.org","@type":"School","name":"Երևանի Լեոյի անվան N65 ավագ դպրոց","alternateName":"Leo High School No. 65","foundingDate":"1951","telephone":"+374-10-480922","email":"info@leo65.am","address":{"@type":"PostalAddress","streetAddress":"Frunze St. 56","addressLocality":"Yerevan","postalCode":"0061","addressCountry":"AM"}},ensure_ascii=False)
def head(p):
    nav=''.join('<li><a href="%s.html"%s data-i="%s"></a></li>'%(f,' class="on" aria-current="page"' if f==p else '',k) for f,k in NAV)
    return f'''<!DOCTYPE html>
<html lang="hy"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Leo High School No. 65</title><meta name="description" content="{DESC[p]}">{'<meta name="robots" content="noindex">' if p=='admin' else ''}
<meta property="og:title" content="Leo High School No. 65, Yerevan"><meta property="og:description" content="{DESC[p]}"><meta property="og:type" content="website">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="css/style.css">{'<script type="application/ld+json">'+LD+'</script>' if p=='index' else ''}</head>
<body data-t="{TK[p]}"><a href="#main" style="position:absolute;left:-999px">Skip to content</a>
<header><div class="wrap bar"><a class="brand" href="index.html">{LION}<span data-i="brand"></span></a>
<button id="burger" aria-label="Menu" aria-expanded="false">☰</button><nav aria-label="Main"><ul>{nav}</ul></nav>
<div class="lang"><button data-l="hy">ՀԱՅ</button><button data-l="en">EN</button><button data-l="ru">РУС</button></div></div></header><main id="main">'''
FOOT='</main><footer><div class="wrap fg"><div><a class="brand" style="color:#fff" href="index.html"><span data-i="brand"></span></a><p data-i="c.ad"></p></div><div><ul class="fl">'+''.join('<li><a href="%s.html" data-i="%s"></a></li>'%(f,k) for f,k in NAV)+'</ul></div><div><p><a href="tel:+37410480922">+374 10 480 922</a><br><a href="tel:+37410480111">+374 10 480 111</a><br><a href="mailto:info@leo65.am">info@leo65.am</a></p></div></div><div class="wrap fb"><span data-i="ft"></span> · <a href="admin.html" data-i="adm"></a></div></footer><script src="js/app.js"></script>'
def ph(t,p): return f'<div class="page-h"><div class="wrap"><h1 data-i="{t}"></h1><p data-i="{p}"></p></div></div>'
def w(b,c=''): return f'<section class="{c}"><div class="wrap">{b}</div></section>'
EM=['📈','⚛️','🧬','⚖️','🌍']
def streams(): return '<div class="grid">'+''.join(f'<div class="card sc rv"><i>{EM[n-1]}</i><h3 data-i="s{n}"></h3><p data-i="s{n}p"></p></div>' for n in range(1,6))+'</div>'
def fac(): return '<h2 data-i="fac.t"></h2><ul class="fac">'+''.join(f'<li data-i="fc{n}"></li>' for n in range(1,6))+'</ul>'
def tl(): return '<h2 class="sh" data-i="tl.t"></h2><div class="tl">'+''.join(f'<div class="rv"><b>{y}</b><span data-i="y{n}"></span></div>' for n,y in enumerate([1951,1956,1960,1967,1989,2010],1))+'</div>'
MT='<svg class="mt" viewBox="0 0 1440 210" preserveAspectRatio="none" aria-hidden="true"><g class="sun"><circle cx="1130" cy="80" r="70" fill="#ffb36b" opacity=".35"/><circle cx="1130" cy="80" r="40" fill="#ffd08a"/></g><ellipse class="cloud" cx="0" cy="40" rx="70" ry="14" fill="#fff" opacity=".25"/><path d="M0 210V150L170 125 320 85 450 25 560 85 640 118 720 108 800 92 900 125 1050 142 1250 132 1440 150V210Z" fill="#2c3a7a"/><path d="M450 25L405 62 430 56 450 74 478 56 508 66Z M800 92L772 112 795 108 812 118 830 106Z" fill="#fff" opacity=".9"/><path d="M0 210V185Q300 150 600 190T1200 180T1440 195V210Z" fill="#fff"/></svg>'
def stat(n,k): return f'<div class="stat"><b class="num" data-n="{n}">0</b><span data-i="{k}"></span></div>'
B={}
B['index']=f'''<div class="hero"><div class="wrap hg"><div><p style="font-weight:700;letter-spacing:.04em;color:#ffd08a;margin:0 0 10px" data-i="h.k"></p><h1 data-i="h.t"></h1><p data-i="h.p"></p><div class="btns"><a class="btn" href="admissions.html" data-i="h.c1"></a><a class="btn ghost" href="about.html" data-i="h.c2"></a></div></div>
<aside class="glass" id="cd" hidden><small data-i="nxt"></small><h3 id="cdt"></h3><div class="cdn"><div><b id="cdd">0</b><span data-i="u.d"></span></div><div><b id="cdh">0</b><span data-i="u.h"></span></div><div><b id="cdm">0</b><span data-i="u.m"></span></div></div><a href="events.html" data-i="n.events"></a></aside></div>{MT}</div>
<div class="tick" aria-hidden="true"><div class="track" id="ticker"></div></div>
<div class="stats"><div class="wrap grid">{stat('yrs','st1')}{stat(5000,'st2')}{stat(5,'st3')}{stat(120,'st4')}</div></div>'''
B['index']+=w('<h2 class="sh" data-i="str.t"></h2><p class="sh" data-i="str.p"></p>'+streams())
B['index']+=w(tl(),'alt')
B['index']+=w('<h2 data-i="leo.t"></h2><p data-i="leo.p"></p>','leo')
B['index']+=w(fac())
B['index']+=w('<h2 class="sh" data-i="vis.t"></h2><div class="two"><div class="card cinfo"><h3 data-i="c.a"></h3><p data-i="c.ad"></p><p><a href="tel:+37410480922">+374 10 480 922</a><br><a href="tel:+37410480111">+374 10 480 111</a></p><p><a href="mailto:info@leo65.am">info@leo65.am</a></p><p><a class="btn" style="background:var(--navy);color:#fff" href="contact.html" data-i="n.contact"></a></p></div><div class="map"><iframe title="Map" loading="lazy" src="https://maps.google.com/maps?q=Frunze+56+Yerevan&output=embed"></iframe></div></div>','alt')
B['index']+=w('<h2 data-i="latest"></h2><div class="grid" id="latest"></div><p><a class="btn" style="background:var(--navy);color:#fff" href="news.html" data-i="all"></a></p>')
B['index']+='<div class="cta"><div class="wrap"><h2 data-i="cta.t"></h2><p data-i="cta.p"></p><a class="btn" href="admissions.html" data-i="h.c1"></a></div></div>'
B['about']=ph('a.t','a.p')+w('<h2 data-i="a.m"></h2><p data-i="a.mp" style="max-width:68ch"></p>')+w(tl(),'alt')+w('<h2 data-i="leo.t"></h2><p data-i="leo.p"></p>','leo')+w(fac())
B['education']=ph('e.t','e.p')+w(streams())+w(fac(),'alt')
B['community']=ph('co.t','co.p')+w('<h2 data-i="dir.t"></h2><div class="dl" id="dirs"></div>')+w('<h2 data-i="cn.t"></h2><div class="grid">'+''.join(f'<div class="card rv"><h3 data-i="cn{n}"></h3></div>' for n in range(1,5))+'</div>','alt')
B['news']=ph('nw.t','nw.p')+w('<div class="grid" id="news"></div>')
B['events']=ph('ev.t','ev.p')+w('<div id="events"></div>')
def fld(k,n,ty='text',x=''): return f'<label><span data-i="{k}"></span><input name="{n}" type="{ty}" {x} required></label>'
B['admissions']=ph('ad.t','ad.p')+w('<div class="two"><div><ol class="steps">'+''.join(f'<li data-i="as{i}"></li>' for i in range(1,5))+'</ol><p><a href="tel:+37410480922">+374 10 480 922</a></p></div><form data-store="leo_apps" novalidate>'+fld('f.pn','parent')+fld('f.sn','student')+'<label><span data-i="f.gr"></span><select name="grade" required>'+''.join(f'<option>{i}</option>' for i in range(1,13))+'</select></label><label><span data-i="f.st"></span><select name="stream" required>'+''.join(f'<option data-i="s{i}"></option>' for i in range(1,6))+'</select></label>'+fld('f.em','email','email')+fld('f.ph','phone','tel','pattern="[0-9+() \\-]{6,}"')+'<button class="btn" type="submit" data-i="f.sa"></button><div class="msg" role="status"></div></form></div>')
B['contact']=ph('c.t','c.p')+w('<div class="two"><div><div class="card cinfo"><h3 data-i="c.a"></h3><p data-i="c.ad"></p><p><a href="tel:+37410480922">+374 10 480 922</a><br><a href="tel:+37410480111">+374 10 480 111</a></p><p><a href="mailto:info@leo65.am">info@leo65.am</a></p><p><a href="https://www.google.com/maps/search/?api=1&query=Frunze+56+Yerevan+Leo+School+65" target="_blank" rel="noopener" data-i="c.m"></a></p></div><div class="map"><iframe title="Map" loading="lazy" src="https://maps.google.com/maps?q=Frunze+56+Yerevan&output=embed"></iframe></div></div><form data-store="leo_msgs" novalidate>'+fld('f.nm','name')+fld('f.em','email','email')+'<label><span data-i="f.ms"></span><textarea name="message" rows="5" required></textarea></label><button class="btn" type="submit" data-i="f.sm"></button><div class="msg" role="status"></div></form></div>')
for p in PAGES: open(p+'.html','w',encoding='utf-8').write(head(p)+B[p]+FOOT+'</body></html>')
adm=head('admin')+'''<section><div class="wrap"><h1>Admin</h1>
<form id="login"><label>Password<input id="pw" type="password" required autocomplete="current-password"></label><button class="btn" type="submit">Login</button><div class="msg" id="lm"></div></form>
<div id="panel" hidden><div class="tools"><button class="btn" id="out">Logout</button><button class="btn" id="x1">CSV: applications</button><button class="btn" id="x2">CSV: messages</button></div>
<h2>Applications</h2><div style="overflow:auto" id="t1"></div><h2>Messages</h2><div style="overflow:auto" id="t2"></div>
<h2>Add news / event</h2><form id="nf"><label>Type<select name="k"><option value="leo_news">News</option><option value="leo_events">Event</option></select></label><label>Date<input name="d" type="date" required></label><label>Title (hy)<input name="t0" required></label><label>Title (en)<input name="t1" required></label><label>Title (ru)<input name="t2" required></label><label>Text (hy)<textarea name="x0" required></textarea></label><label>Text (en)<textarea name="x1" required></textarea></label><label>Text (ru)<textarea name="x2" required></textarea></label><button class="btn">Publish</button></form><div id="nl"></div>
</div></div></section>'''+FOOT+'<script src="js/admin.js"></script></body></html>'
open('admin.html','w',encoding='utf-8').write(adm)
open('assets/favicon.svg','w').write(LION.replace('<svg ','<svg xmlns="http://www.w3.org/2000/svg" '))
open('robots.txt','w').write('User-agent: *\nAllow: /\nDisallow: /admin.html\nSitemap: https://leo65.am/sitemap.xml\n')
open('sitemap.xml','w').write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+''.join(f'<url><loc>https://leo65.am/{p}.html</loc></url>' for p in PAGES)+'</urlset>')
