# Երևանի Լեոյի անվան N65 ավագ դպրոց — website

HTML5 + CSS3 + vanilla JavaScript only. Languages: Armenian / English / Russian.

## Run
Open `index.html`, or serve the folder: `python3 -m http.server 8000`.

## Pages
index, about, education (streams), community, news, events admissions, contact, admin.

## Real data used (public sources)
Address Frunze 56, Shengavit, Yerevan 0061; phones +374 10 480922 / 480111; info@leo65.am; founded 1951; first building 1956;
named after Leo in 1960; second building 1967; Spitak-earthquake children 1989; high school since 2010; ~5000 graduates;
streams (economics, physics-maths, biology-chemistry, history-law, linguistics); 120-seat hall; former directors
(Garnikyan 1951–87, Mnatsakanyan 1987–95, Khrimyan 1996–2015). Sources: school's existing site leo65.am, highschool65.web365.am,
hy.wikipedia, escs.am, yell.am, 2gis.am.

## Please verify before launch
- Current director (Rafael Barseghyan) comes from an undated public listing — confirm with the school (edit `DIRS` in `js/app.js`).
- Streams descriptions for economics, physics-maths, linguistics are general wording — ask the school for official text.
- "Last Bell" (25 May) and "Knowledge Day" (1 Sep) are traditional dates, not school-confirmed schedules.
- No news/teacher lists were invented: add news and events in `admin.html`; 
- Replace `leo65.am` in `sitemap.xml`/`robots.txt` if the final domain differs.

## Forms and admin
Static hosting has no server: forms are stored in the visitor's browser (localStorage) and `admin.html`
(password `leo65admin`, change it in `js/admin.js`) shows only data from the same browser. For production, set
`window.LEO_ENDPOINT="https://your-server/endpoint"` in a script tag before `js/app.js`; every form is then also
POSTed there as JSON `{type,data}`. A server-side backend and real authentication are needed for real use.
