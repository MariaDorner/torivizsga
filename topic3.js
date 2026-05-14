// ===== TOPIC 3 CONCEPTS =====
function buildTopic3Concepts(){
  const concepts=[
    {c:'purple',e:'👑',t:'IV. Béla',d:'Magyar király 1235–1270 között. Apja, II. András politikájával szakítva visszavette az eladományozott királyi birtokokat, ami konfliktushoz vezetett a nemesekkel. A tatárjárás után reformjaival újjáépítette az országot – ezért nevezi az utókor a "második honalapítónak".'},
    {c:'amber',e:'🗺️',t:'Julianus barát',d:'Domonkos rendi szerzetes, aki 1236-ban megtalálta az őshazában maradt magyarokat a Volga mentén (Magna Hungaria). 1237-es második útján már csak a pusztítás hírét hozta, és Batu kán fenyegető levelét adta át IV. Bélának.'},
    {c:'teal',e:'🏹',t:'Kunok',d:'Nomád lovasnép, akiket IV. Béla 1239-ben fogadott be a tatárok elől menekülve. Vezérük Kötöny volt. A pesti tömeg meggyilkolta Kötönyt, mire a kunok kivonultak az országból – Béla így elvesztette legfontosabb szövetségesét. A tatárjárás után visszahívta és az Alföldön telepítette le őket – máig él a nyomuk: Kiskunság és Nagykunság.'},
    {c:'rose',e:'👤',t:'Batu kán',d:'A mongol (tatár) fősereg vezére, Dzsingisz kán unokája. Az ő serege törte be a Vereckei-hágón 1241-ben, és vívta meg a muhi csatát. 1242 tavaszán – részben Ögödej nagykán halála miatt – kivonult Magyarországról.'},
    {c:'blue',e:'⚔️',t:'Muhi csata (1241. ápr. 11.)',d:'A tatárjárás döntő ütközete a Sajó folyó mentén. A magyarok szekérvárat építettek, de a tatárok éjszaka átkeltek a folyón és bekerítették a tábort. A vereség megsemmisítő volt: szinte a teljes magyar haderő elpusztult.'},
    {c:'green',e:'🛡️',t:'Szekérvár',d:'Védelmi taktika: szorosan egymás mellé állított szekerekből alkotott kerítés, amely mögé a hadsereg visszavonult. A muhi csatánál alkalmazták, de kelepcévé vált, mert a tatárok bekerítették, és a szűk helyen a lovasság nem tudott manőverezni.'},
    {c:'purple',e:'🏰',t:'Kővárak szerepe',d:'A tatárjárás bebizonyította, hogy csak a kőből épített várak képesek ellenállni a mongol ostromnak. Esztergom, Székesfehérvár és Pannonhalma sikeresen tartotta magát. Ezért rendelte el IV. Béla a tatárjárás után a kővárak tömeges építését.'},
    {c:'amber',e:'❓',t:'Ögödej nagykán',d:'A mongol birodalom nagykánja, Dzsingisz kán fia. 1241-ben bekövetkezett halála az egyik legfontosabb oka a tatárok 1242-es kivonulásának – Batu kánnak vissza kellett térnie a birodalmi fővárosba az utódlási gyűlésre.'},
    {c:'teal',e:'🏗️',t:'Második honalapítás',d:'IV. Béla jelzője, amelyet azért kapott, mert a tatárjárás pusztítása után képes volt újjáépíteni az országot. Várakat épített, kunokat és jászokat telepített be, városokat fejlesztett és új katonai rendszert hozott létre.'},
    {c:'rose',e:'👥',t:'Hospesek',d:'Betelepített külföldi (főként német) telepesek, akiket IV. Béla hívott be a tatárjárás után az elnéptelenedett területek benépesítésére. Különleges kiváltságokat (önkormányzat, adókedvezmény) kaptak, és hozzájárultak a városok fejlődéséhez.'},
    {c:'blue',e:'🌾',t:'Jászok',d:'Iráni eredetű nomád nép, akiket IV. Béla a tatárjárás után telepített be Magyarországra. A kunokkal együtt az Alföldön kaptak szállást. Harcedzett lovasaikkal erősítették az ország katonai erejét.'},
    {c:'green',e:'📜',t:'Birtokadományozás feltétele',d:'A tatárjárás tanulsága alapján IV. Béla új feltételt szabott a nemeseknek: csak annak adományozott földet, aki kővárat épít rajta és nehézpáncélos lovasságot (bandériumot) állít ki belőle. Ez alapjaiban változtatta meg a magyar hadszervezetet.'},
  ];
  return `<h2 style="font-family:'Fredoka One',cursive;font-size:1.4rem;color:var(--purple);margin-bottom:16px;">💡 Kulcsfogalmak – Kattints rá a fogalomra a magyarázathoz!</h2>
  <div class="concepts-grid">${concepts.map(c=>`
    <div class="concept-card ${c.c}" onclick="toggleConcept(this)">
      <div class="concept-emoji">${c.e}</div>
      <div class="concept-term">${c.t}</div>
      <div class="concept-def">${c.d}</div>
      <div class="concept-hint">👆 Kattints a magyarázathoz</div>
    </div>`).join('')}</div>`;
}

// ===== TOPIC 3 VIDEOS =====
function buildTopic3Videos(){
  const vids=[
    {e:'⚡',level:'alap',lt:'Villám',title:'A tatárjárás és az Árpád-ház kihalása – Gyorstalpaló',desc:'Néhány perces, rendkívül lényegre törő vizuális gyorsjelentés. Tökéletes a művelet lezárásához: villámgyorsan áttekinti a keleti fenyegetést, és elvezet egészen a korszak, valamint az uralkodói dinasztia végéig. Az utolsó utáni pillanatban történő ismétléshez a legjobb fegyver!',url:'https://www.youtube.com/watch?v=pMv9nsRo5EQ'},
    {e:'⚡',level:'alap',lt:'Pörgős',title:'Az Aranybulla és a tatárjárás – zanza.tv (Külső hírszerzési csatorna)',desc:'Gyors, rajzos áttekintés a belső hatalmi feszültségekről (Aranybulla) és a hirtelen lecsapó keleti fenyegetésről. A parancsnokság hivatalos oktatási anyaga, amely a legoptimálisabb ötperces alapozó a terepügynököknek az éles bevetés (számonkérés) előtt.',url:'https://www.youtube.com/watch?v=IlQzzOe0_i8'},
    {e:'😄',level:'alap',lt:'Könnyed',title:'Tatárjárás, Az Ország Újjáépítése, A Muhi Csata 1241 – Tökéletlen Történelem [TT]',desc:'Könnyen emészthető, humorral kódolt pörgős eligazítás. Lazább stílusban vázolja fel a pusztítást és célpontunk, IV. Béla várépítő túlélési stratégiáját. Kiváló moráljavító aktacsomag, ami végig ébren tartja a fiatal osztagok figyelmét!',url:'https://www.youtube.com/watch?v=YYTGNEU8MO4'},
    {e:'🎓',level:'kozepes',lt:'Alapkiképzés',title:'A tatárjárás és az ország újjáépítése: IV. Béla',desc:'Megbízható, átfogó tanári magyarázat a "második honalapítóként" is emlegetett IV. Béla király válságkezelő reformjairól. Nincs felesleges sallang, csak tiszta hírszerzési adatok és stabil alapok a komolyabb felkészüléshez.',url:'https://www.youtube.com/watch?v=Yxmg2ogpKWc'},
    {e:'🎯',level:'profi',lt:'Taktikai',title:'A muhi csata',desc:'Részletes vizuális és katonai elemzés a mongol invázió legkritikusabb összecsapásáról. Haladó szintű taktikai jelentés, amely modellezi az ellenséges sereg és a magyar védelem harctéri mozgásait. Szigorúan a hadtörténetért rajongó, kiemelt szakértői szintű ügynököknek!',url:'https://www.youtube.com/watch?v=xB30ompj5Wg'},
    {e:'🎬',level:'kozepes',lt:'Archív',title:'Magyarország története S01E07',desc:'Hivatalos, dokumentarista archív felvétel a hazai bázis pusztulásáról. Sűrű, rengeteg lexikális információt tartalmazó vizuális csomag a kitartó, elemző típusú diákoknak. Szigorú kódolt parancs a megtekintéshez: a megfigyelést a felesleges adatok elkerülése végett pontosan 13:40-től kezdd meg!',url:'https://www.youtube.com/watch?v=c-OAF8nzXvY'},
  ];
  return `<h2 style="font-family:'Fredoka One',cursive;font-size:1.4rem;color:var(--rose-d);margin-bottom:16px;">🎥 TITKOS VIDEÓARCHÍVUM: 3. AKTA - A "TATÁRJÁRÁS" MŰVELET (Biztonsági besorolás szerinti sorrendben)</h2>
  <div class="video-grid">${vids.map(v=>`
    <a href="${v.url}" target="_blank" class="video-card">
      <div class="video-thumb">${v.e}</div>
      <div class="video-info">
        <div class="video-level ${v.level}">${v.lt}</div>
        <div class="video-title">${v.title}</div>
        <div class="video-desc">${v.desc}</div>
      </div>
    </a>`).join('')}</div>`;
}
// ===== TOPIC 3 CONTENT =====
function buildTopic3Content(){
  return `
  <div class="info-card">
    <h3>👑 A király és a nemesek ellentéte</h3>
    <div style="float:right;margin:0 0 12px 16px;max-width:130px;">
      <img src="images/topic3_img0.png" alt="IV. Béla király középkori ábrázolása" style="width:100%;border-radius:8px;border:2px solid var(--border);"/>
      <p style="font-size:10px;color:var(--muted);text-align:center;margin-top:4px;">IV. Béla – középkori kódex</p>
    </div>
    <p><strong>IV. Béla (1235–1270)</strong> II. András fiaként került a trónra. Legfőbb célja a meggyengült királyi hatalom megerősítése volt. Apja politikájával szakítva elrendelte a korábban eladományozott <strong>királyi birtokok visszavételét</strong>. Ez a lépés hatalmas felháborodást váltott ki a nemesek és a főurak (bárók) körében. Továbbá a királyi tanácsban <strong>elégette a bárók székeit</strong>, hogy állni kényszerüljenek jelenlétében.</p>
  </div>

  <div class="info-card">
    <h3>🏹 Kik azok a tatárok (mongolok)?</h3>
    <p>A mongolok, akiket a magyar történelemben tatároknak is nevezünk, eredetileg Belső-Ázsia végtelen füves pusztáin éltek. A honfoglaló őseinkhez nagyon hasonló, félnomád lovasnép voltak: jurtákban laktak, állattartással foglalkoztak, és már gyerekkoruktól kezdve kiválóan lovagoltak, illetve bántak a visszacsapó íjjal. Sokáig egymással is folyton háborúzó, szétszórt törzsekben éltek, mígnem a 13. század elején egy zseniális és kegyetlen vezér, <strong>Dzsingisz kán</strong> egyesítette őket. Ő egy hihetetlenül szigorú és fegyelmezett, hatalmas lovashadsereget hozott létre, amely gyorsaságával és kegyetlenségével sorra hódította meg a környező országokat. Kínától egészen Oroszországig mindent letaroltak, így rövid idő alatt ők hozták létre a <strong>világtörténelem legnagyobb egybefüggő szárazföldi birodalmát</strong>.</p>
  </div>

    <div class="info-card">
    <h3>⚠️ A tatárveszély közeledte</h3>
    <p>Miközben az országon belül nőtt az elégedetlenség, keletről egy ismeretlen, félelmetes ellenség közeledett.</p>
    <div class="timeline" style="margin-top:16px;">
      <div class="tl-item">
        <div class="tl-dot purple"></div>
        <div class="tl-year">1236</div>
        <div class="tl-title">Julianus barát első útja</div>
        <div class="tl-desc">A domonkos szerzetes megtalálta az őshazában maradt magyarokat a Volga mentén (Magna Hungaria). Tőlük hallott először a mongolok hódításairól.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot amber"></div>
        <div class="tl-year">1237</div>
        <div class="tl-title">Julianus barát második útja</div>
        <div class="tl-desc">Már csak a pusztítás hírét hozta, és Batu kán fenyegető levelét, amelyben a magyar királyt megadásra szólította fel.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot teal"></div>
        <div class="tl-year">1239</div>
        <div class="tl-title">A kunok befogadása</div>
        <div class="tl-desc">Béla befogadta a tatárok elől menekülő kunokat Kötöny király vezetésével, hogy harcedzett lovasaikkal erősítsék a védelmet.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot purple"></div>
        <div class="tl-year">1241</div>
        <div class="tl-title">Kötöny meggyilkolása – a segítség elvész</div>
        <div class="tl-desc">A pesti lakosság megölte Kötönyt, mert tatár kémeknek hitte a kunokat. Emiatt a kunok rabolva kivonultak az országból – Béla a legfontosabb segéderő nélkül maradt.</div>
      </div>
    </div>
  </div>

  <div class="info-card">
    <h3>⚔️ A tatárjárás (1241–1242)</h3>
    <div style="margin:10px 0 14px;text-align:center;">
      <img src="images/topic3_img1.png" alt="A muhi csata térképe" style="max-width:100%;border-radius:8px;border:1px solid var(--border);"/>
      <p style="font-size:11px;color:var(--muted);margin-top:5px;">A muhi csata hadmozdulattérképe (1241. április 11.)</p>
    </div>
    <p>A tatárok <strong>1241 márciusában</strong> több irányból törtek be az országba. A fősereg <strong>Batu kán</strong> vezetésével a Vereckei-hágón keresztül érkezett, ahol legyőzték a nádor seregét.</p>
    <div class="highlight-box"><strong>A muhi csata – 1241. április 11.</strong><br>
    A döntő összecsapás a Sajó folyó mentén, Muhi mellett zajlott le:
    <ul style="margin-top:8px;">
      <li>A magyar sereg szorosan egymás mellé állított szekerekből épített <strong>szekérvárat</strong>.</li>
      <li>A tatárok éjszaka, titokban keltek át a folyón, és <strong>bekerítették</strong> a magyar tábort.</li>
      <li>A szűk helyen a magyar lovasság nem tudott rendesen felállni – a tábor <strong>kelepcévé vált</strong>.</li>
      <li>A vereség megsemmisítő volt: szinte a teljes magyar haderő elpusztult, érsekek és püspökök is életüket vesztették.</li>
    </ul></div>
    <p style="margin-top:12px;">IV. Béla elmenekült: előbb az osztrák herceghez ment (aki megzsarolta – területeket követelt tőle), majd az Adria-tenger partjára, <strong>Trau (Trogir)</strong> várába vonult vissza. A tatárok 1241–42 telén a befagyott Dunán átkelve a Dunántúlt is lerohanták. Csak a jól védhető <strong>kővárak</strong> (pl. Esztergom, Székesfehérvár, Pannonhalma) tudtak ellenállni.</p>
    <div class="highlight-box" style="margin-top:8px;">🔍 <strong>Érdekesség:</strong> Esztergom városa leégett és elpusztult a tatárok kezén – de a folyó fölé magasodó <strong>várhegy erődje</strong> sikeresen visszaverte az ostromot. Ez is megmutatta, hogy a kőből épített, jól védhető vár és a nyílt város között hatalmas különbség van.</div>
    <div class="highlight-box">💀 A pusztítás óriási volt: a lakosság <strong>15–25%-a</strong> meghalt, falvak százai égtek le, és éhínség követte a dúlást.</div>
  </div>

  <div class="info-card">
    <h3>❓ Miért vonultak ki a tatárok?</h3>
    <p>1242 tavaszán a mongolok váratlanul elhagyták az országot. Ennek okai ma is vitatottak:</p>
    <table class="data-table">
      <tr><th>#</th><th>Feltételezett ok</th></tr>
      <tr><td>1.</td><td>Meghalt <strong>Ögödej nagykán</strong> – Batu kán haza akart érni a választásra.</td></tr>
      <tr><td>2.</td><td>A tatár stratégia része volt az ország előzetes meggyengítése egy <strong>későbbi hódítás előtt</strong>.</td></tr>
      <tr><td>3.</td><td>Az ellenállás és az <strong>élelmiszerhiány</strong> miatt nem látták értelmét a maradandó megszállásnak.</td></tr>
    </table>
  </div>

  <div class="info-card">
    <div style="margin:0 0 16px;text-align:center;">
      <img src="images/topic3_img2.png" alt="Muhi csata emlékhelye" style="max-width:100%;border-radius:8px;border:1px solid var(--border);"/>
      <p style="font-size:11px;color:var(--muted);margin-top:5px;">A muhi csata emlékhelye – keresztek a dombon</p>
    </div>
    <h3>🏗️ Az ország újjáépítése – A &bdquo;második honalapítás"</h3>
    <p>Hazatérése után IV. Béla felismerte korábbi hibáit és gyökeresen megváltoztatta politikáját. Emiatt nevezzük őt a <strong>&bdquo;második honalapítónak"</strong>.</p>
    <table class="data-table">
      <tr><th>Intézkedés</th><th>Részletek</th></tr>
      <tr><td>🏰 <strong>Várépítések</strong></td><td>Engedélyezte a várépítést, maga is több mint 60 erődítményt emelt (pl. Visegrád, Buda).</td></tr>
      <tr><td>🌾 <strong>Birtokadományozás</strong></td><td>Földet adományozott a nemeseknek, feltétel: kővárat építsenek és nehézpáncélos lovasságot állítsanak fel.</td></tr>
      <tr><td>👥 <strong>Betelepítések</strong></td><td>Visszahívta a kunokat az Alföldre (máig él a nyomuk: <strong>Kiskunság, Nagykunság</strong>), jászokat és német telepeseket (hospeseket) hívott be.</td></tr>
      <tr><td>🏙️ <strong>Városfejlesztés</strong></td><td>Számos településnek adott városi rangot és kiváltságokat (falépítés joga, önkormányzat).</td></tr>
    </table>
  </div>

  <div class="info-card" style="border-color:rgba(212,175,55,.4);">
    <h3>⚠️ A királyi hatalom gyengülése</h3>
    <p>A 13. század második felében a királyi hatalom rohamosan gyengült. Trónharcok törtek ki – IV. Béla és saját fia, V. István között. Az évtizedekig tartó belviszály alatt a bárói réteg tovább erősödött, és az adományozások révén kiterjedt birtokokra tett szert. IV. Béla utódai már nem tudták megakadályozni a <strong>királyi vármegyerendszer szétesését</strong> és a bárók önkényeskedését.</p>
  </div>

  <div class="info-card" style="background:linear-gradient(135deg,#14532d,#052e16);border:2px solid #4ade80;color:#d1fae5;">
    <h3 style="color:#4ade80;">📋 Összefoglaló vázlat</h3>
    <ul>
      <li>👑 <strong>IV. Béla célja:</strong> királyi hatalom visszaállítása → nemesek ellenállása</li>
      <li>🔔 <strong>Figyelmeztetés:</strong> Julianus barát (1235, 1237) – tatár veszély híre</li>
      <li>🏹 <strong>Kunok befogadása (1239):</strong> Kötöny meggyilkolása → elvész a segítség</li>
      <li>⚔️ <strong>Muhi csata (1241. ápr. 11.):</strong> szekérvár → bekerítés → megsemmisítő vereség</li>
      <li>🏰 <strong>Ellenállók:</strong> csak kővárak (Esztergom, Pannonhalma) tartottak ki</li>
      <li>❓ <strong>Kivonulás (1242):</strong> Ögödej nagykán halála + élelmiszerhiány</li>
      <li>🏗️ <strong>Újjáépítés:</strong> várépítések, betelepítések, városfejlesztés → &bdquo;második honalapító"</li>
    </ul>
  </div>`;
}

// ===== TOPIC 3 DATA =====
const topic3={
  title:'3. Tétel – A tatárjárás',
  subtitle:'A mongol invázió és IV. Béla újjáépítő munkája',
  emoji:'💀',
  content: buildTopic3Content,
  concepts: buildTopic3Concepts,
  quiz: buildTopic3Quiz,
  videos: buildTopic3Videos,
};
// ===== TOPIC 3 QUIZ =====
const questions3=[
  {q:'Mi volt a tatárok 1242-es váratlan kivonulásának legvalószínűbb oka?',a:['A magyar sereg egy döntő csatában visszaverte a tatárokat.','Meghalt Ögödej nagykán, és Batu kánnak haza kellett térnie az utódlási gyűlésre.','IV. Béla megadta a tatároknak a kért sarcot.','Az összes kővár egyszerre visszaverte a támadókat.'],correct:1},
  {q:'Melyik szerzetes hozott elsőként hírt a keletről közeledő mongol (tatár) veszélyről?',a:['Gellért püspök','Julianus barát','Capistranói János','Anonymus'],correct:1},
  {q:'Milyen lovas nomád népet fogadott be IV. Béla a tatárjárás előtt, hogy segítsenek a védekezésben?',a:['besenyőket','avarokat','kunokat','jászokat'],correct:2},
  {q:'Miért vonultak ki a kunok az országból, még a tatárok érkezése előtt?',a:['Mert nem kaptak elég legelőt.','Mert a pesti tömeg megölte a vezérüket, Kötönyt.','Mert megijedtek a tatárok létszámától.','Mert a király végül elűzte őket.'],correct:1},
  {q:'Mikor és hol zajlott le a tatárjárás döntő, magyar szempontból tragikus csatája?',a:['1241. április 11., Muhi','1242. március 15., Buda','1241. augusztus 20., Esztergom','1242. április 11., Mohács'],correct:0},
  {q:'Milyen védelmi taktikát alkalmaztak a magyarok a döntő csatában, ami végül kelepcének bizonyult?',a:['Kővárakba zárkóztak.','Szekérvárat építettek.','Mocsarakba rejtőztek.','Várárkokat ástak a folyó partján.'],correct:1},
  {q:'Hová menekült IV. Béla a vesztes csata után a tatár üldözők elől?',a:['Erdély hegyei közé','A lengyel király udvarába','Az Adriai-tenger partjára, Trau (Trogir) várába','Bécsbe, az osztrák herceghez véglegesen'],correct:2},
  {q:'Milyen típusú építmények tudtak egyedül ellenállni a tatárok pusztításának (pl. Esztergomban vagy Pannonhalmán)?',a:['A földvárak','A szekérvárak','A kővárak','A fatemplomok és kolostorok'],correct:2},
  {q:'Miért nevezi az utókor IV. Bélát a „második honalapítónak"?',a:['Mert új hazát keresett a magyaroknak a tengerparton.','Mert a pusztítás után sikeres reformokkal újjáépítette és megerősítette az országot.','Mert végül egyedül győzte le a tatár sereget.','Mert ő alapította az első magyar várost.'],correct:1},
  {q:'Milyen feltétellel adományozott földet IV. Béla a nemeseknek a tatárjárás után?',a:['Csak akkor, ha kővárat építenek rajta és páncélos katonákat állítanak ki.','Csak akkor, ha adót fizetnek a mongoloknak.','Csak akkor, ha lemondanak a korábbi rangjukról.','Csak akkor, ha kolostort alapítanak a birtokon.'],correct:0},
];

let quizState3={q:[],idx:0,correct:0,answered:false};

function buildTopic3Quiz(){
  return `<div class="quiz-container">
    <div class="quiz-header">
      <h3>🎯 Mesterlövész Tudáspróba – 3. Akta</h3>
      <div class="quiz-counter" id="q3-counter">1 / 10</div>
    </div>
    <div class="quiz-body" id="quiz3-body">
      <div class="progress-dots" id="progress3-dots"></div>
      <div class="question-text" id="q3-text"></div>
      <div class="answers-grid" id="q3-answers"></div>
      <div class="feedback-box" id="feedback3"></div>
      <div style="text-align:right;margin-top:8px;clear:both;">
        <button class="next-btn" id="next3-btn" onclick="nextQuestion3()">Következő →</button>
      </div>
    </div>
    <div class="quiz-result" id="quiz3-result"></div>
  </div>`;
}

function initQuiz3(){
  quizState3.q=[...questions3].sort(()=>Math.random()-.5);
  quizState3.idx=0;quizState3.correct=0;quizState3.answered=false;
  document.getElementById('quiz3-body').style.display='block';
  document.getElementById('quiz3-result').style.display='none';
  renderQuestion3();
}

function renderQuestion3(){
  const q=quizState3.q[quizState3.idx];
  document.getElementById('q3-counter').innerText=`${quizState3.idx+1} / 10`;
  document.getElementById('q3-text').innerText=q.q;
  const letters=['A','B','C','D'];
  const numOpts=q.a.length;
  const shuffled=Array.from({length:numOpts},(_,i)=>i).sort(()=>Math.random()-.5);
  document.getElementById('q3-answers').innerHTML=shuffled.map((origIdx,i)=>`
    <button class="answer-btn" data-correct="${origIdx===q.correct}" onclick="answerQ3(this)">
      <span class="answer-letter">${letters[i]}</span>${q.a[origIdx]}
    </button>`).join('');
  const dots=document.getElementById('progress3-dots');
  dots.innerHTML=Array.from({length:10},(_,i)=>`<div class="dot ${i<quizState3.idx?(quizState3.q[i]._result==='c'?'correct':'wrong'):''}${i===quizState3.idx?'current':''}"></div>`).join('');
  document.getElementById('feedback3').style.display='none';
  document.getElementById('next3-btn').style.display='none';
  quizState3.answered=false;
}

function answerQ3(btn){
  if(quizState3.answered)return;
  quizState3.answered=true;
  const isCorrect=btn.dataset.correct==='true';
  document.querySelectorAll('#q3-answers .answer-btn').forEach(b=>{
    b.disabled=true;
    if(b.dataset.correct==='true')b.classList.add('correct');
  });
  if(isCorrect){
    btn.classList.add('correct');
    quizState3.correct++;
    quizState3.q[quizState3.idx]._result='c';
    const fb=document.getElementById('feedback3');
    fb.className='feedback-box correct';fb.innerText='🎉 Helyes! Zseniális válasz!';fb.style.display='block';
    startConfetti(30);
    if(window.mascotCorrect)mascotCorrect();
  } else {
    btn.classList.add('wrong');
    quizState3.q[quizState3.idx]._result='w';
    const fb=document.getElementById('feedback3');
    fb.className='feedback-box wrong';fb.innerText='❌ Sajnos nem ez volt a helyes válasz. Nézd meg a zöld gombot!';fb.style.display='block';
    if(window.mascotWrong)mascotWrong();
  }
  document.getElementById('next3-btn').style.display='block';
  document.getElementById('next3-btn').innerText=quizState3.idx===9?'Eredmény megtekintése 🏆':'Következő kérdés →';
}

function nextQuestion3(){
  quizState3.idx++;
  if(quizState3.idx<10){renderQuestion3();}
  else{showResult3();}
}

function showResult3(){
  document.getElementById('quiz3-body').style.display='none';
  const res=document.getElementById('quiz3-result');
  res.style.display='block';
  const score=quizState3.correct;
  const emoji=score>=9?'🏆':score>=7?'🥇':score>=5?'🥈':score>=3?'🥉':'💪';
  const msg=score>=9?'Fenomenális! Igazi mesterlövész vagy!':score>=7?'Kiváló munka, felderítő!':score>=5?'Szép teljesítmény! Még egy kis gyakorlás...':score>=3?'Jó próbálkozás! Olvass még egy kicsit!':'Gyakorolj sokat, ügynök!';
  const earnedXP=score*15;
  addXP(earnedXP);
  let unlockHtml3='';
  if(score>=8){
    unlockHtml3=`<div class="unlock-notice">🔓 Dosszié 04 feloldható! A kód: <strong>Muhi</strong></div>`;
  } else {
    unlockHtml3=`<div class="unlock-notice" style="background:var(--rose-l);border-color:var(--rose);color:var(--rose-d);">⚠️ Legalább 8/10 pont kell a következő dosszié kódjához! Próbáld újra!</div>`;
  }
  res.innerHTML=`<div class="result-emoji">${emoji}</div>
    <div class="result-score">${score} / 10</div>
    <div class="result-msg">${msg}</div>
    <div class="result-xp">⭐ +${earnedXP} XP megszerezve!</div>
    ${unlockHtml3}
    <button class="retry-btn" onclick="initQuiz3()">🔄 Újra próbálom</button>`;
}
