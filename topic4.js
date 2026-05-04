// ===== TOPIC 4 VIDEOS =====
function buildTopic4Videos(){
  const vids=[
    {e:'⚡',level:'alap',lt:'Villám',title:'Trónviszályok és I. Károly uralkodása – Gyorstalpaló',desc:'Mindössze 3 perces, animált jelentés. Ha már csak percek vannak hátra a Tudáspróbáig, ez a legjobb ismétlőanyag!',url:'https://www.youtube.com/watch?v=nshL8eOsB94'},
    {e:'⚡',level:'alap',lt:'Pörgős',title:'Az Anjouk birodalma | zanza.tv (Külső hírszerzési csatorna)',desc:'Gyors, rajzos összefoglaló az Anjou-dinasztia magyarországi szerepéről és Károly Róbert konszolidációjáról.',url:'https://zanza.tv/tortenelem/magyarsag-tortenete-kezdetektol-1490-ig/az-anjouk-birodalma'},
    {e:'😄',level:'alap',lt:'Könnyed',title:'Károly Róbert Útja A Királysághoz – Tökéletlen Történelem [TT]',desc:'Pörgős és szórakoztató eligazítás arról, hogyan küzdött meg Károly Róbert a trónért, és hogyan számolt le a hatalmaskodó tartományurakkal.',url:'https://www.youtube.com/watch?v=A5HQa_lMI2E'},
    {e:'😄',level:'alap',lt:'Könnyed',title:'Károly Róbert Uralkodása – Tökéletlen Történelem [TT]',desc:'A sikeres trónfoglalás utáni intézkedések titkos aktája lazább stílusban bemutatva. Kiderül belőle, hogyan töltötte fel a király a kincstárat.',url:'https://www.youtube.com/watch?v=zDuFjBQad7I'},
    {e:'🎓',level:'kozepes',lt:'Stratégiai',title:'Károly Róbert – Történelem érettségi tétel | Erettsegi.com',desc:'Komolyabb hangvételű, tényekre fókuszáló összefoglaló a király gazdasági reformjairól. Pluszpontokra hajtó ügynököknek kötelező!',url:'https://www.youtube.com/watch?v=i4BGwQFBf5o'},
    {e:'🎯',level:'profi',lt:'Mesterlövész',title:'A középkori magyar állam megerősödése I. Károly idején | dr. Kulcsár Árpád',desc:'Középiskolai szintű, nagyon alapos tanári eligazítás. Ha a legapróbb részletekre is kíváncsi vagy a kiskirályokkal kapcsolatban, nyisd meg ezt a fájlt!',url:'https://www.youtube.com/watch?v=bsmp37P-mX4'},
    {e:'🎬',level:'kozepes',lt:'Archív',title:'Magyarország története S01E09',desc:'Hivatalos dokumentumfilm a kiskirályok koráról és az ország újraegyesítéséről. Mélyebb nyomozáshoz és otthoni megfigyeléshez ideális aktacsomag.',url:'https://www.youtube.com/watch?v=yG8WUMPrjUc'},
  ];
  return `<h2 style="font-family:'Fredoka One',cursive;font-size:1.4rem;color:var(--rose-d);margin-bottom:16px;">🎥 TITKOS VIDEÓARCHÍVUM: 5. AKTA - AZ ANJOU-MŰVELET (Biztonsági besorolás szerinti sorrendben)</h2>
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
// ===== TOPIC 4 CONCEPTS =====
function buildTopic4Concepts(){
  const concepts=[
    {c:'amber',e:'👑',t:'Tartományúr (kiskirály)',d:'A 13. század végére elhatalmaskodó hatalmas főurak, akik saját területüket a királytól teljesen függetlenül irányították. Saját hadseregük, udvartartásuk és néha saját pénzük is volt. I. Károly 1310–1323 között felszámolta uralmukat.'},
    {c:'purple',e:'⚜️',t:'Anjou-ház',d:'Francia–nápolyi királyi dinasztia, amely hivatalosan 1310-től uralta Magyarországot. Az Anjou-háznak két jelentős alakja volt Magyarországon, I. Károly és fia I. (Nagy) Lajos. Lajos fiú utód nélkül halt meg 1382-ben, így a magyarországi Anjou dinasztia férfiágon kihalt.'},
    {c:'rose',e:'👑',t:'A törvényes koronázás 3 feltétele',d:'Ahhoz, hogy valaki törvényes magyar király legyen, egyszerre kellett: (1) a Szent Koronával, (2) az esztergomi érsek által, (3) Székesfehérváron megkoronáztatnia magát. Károly Róbert csak 1310-ben teljesítette mindhármat.'},
    {c:'teal',e:'🏰',t:'Honorbirtok',d:'I. Károly által bevezetett új birtok-adományozási rendszer. A király nem örökölhető, hanem tisztséghez (pl. nádori, vajdai) kötött földet adott. Ha valaki elvesztette a tisztségét, a birtok visszaszállt a királyra – ez hűségre kényszerítette a főurakat.'},
    {c:'rose',e:'⚔️',t:'Rozgonyi csata (1312)',d:'A tartományúri hatalom megtörésének fordulópontja. I. Károly itt mért döntő vereséget az Aba-nembeliekre. Ezután sorra szűnt meg a kiskirályok hatalma. Az egyetlen, akivel katonailag nem bírt, Csák Máté volt – ő 1321-ben természetes halállal halt meg.'},
    {c:'amber',e:'🪙',t:'Aranyforint',d:'Károly Róbert pénzreformjának legfontosabb eredménye (1325). A firenzei mintára vert stabil, tiszta aranyból készült érme. Értékálló fizetőeszköz lett, amely elősegítette a kereskedelem fellendülését és az ország gazdagodását.'},
    {c:'blue',e:'⛏️',t:'Urbura (bányabér)',d:'Korábban a nemesek eltitkolták a földjükön talált nemesfémet (arany/ezüst), mert a király elvette volna, vagy nagyon keveset fizetett volna a birtokért. Károly Róbert viszont nekik adta a bányajövedelem egyharmadát, így érdekelté váltak abban, hogy bejelentsék a bányát. Ennek köszönhetően Magyarország Európában az egyik legtöbb aranyat és ezüstöt bányászta.'},
    {c:'green',e:'🛡️',t:'Banderiális hadszervezet',d:'I. Károly által bevezetett új katonai rendszer. A nagybirtokosoktól megkövetelte, hogy saját zászlójuk (bandérium) alatt nehézfegyverzetű lovasokat állítsanak ki. Így a király egy jól felszerelt, professzionális hadsereget gyűjthetett össze hadjáratokhoz.'},
    {c:'teal',e:'🚪',t:'Kapuadó',d:'I. Károly által bevezetett adónem. A jobbágyok után, a telek kapujának száma alapján vetette ki a király. Kiszámítható, stabil bevételt biztosított az államnak, és az ország belső fejlesztéseit finanszírozta.'},
    {c:'purple',e:'🧔',t:'Csák Máté',d:'A legerősebb tartományúr, a Felvidék nyugati részének ura (Trencsén központtal). Saját önálló "birodalmát" irányított. I. Károly katonailag nem tudta legyőzni, de 1321-es természetes halála után területei visszaszálltak a királyra – anélkül, hogy csatát kellett volna nyerni.'},
    {c:'blue',e:'🤝',t:'Visegrádi királytalálkozó (1335)',d:'I. Károly, Luxemburgi János (cseh) és III. Kázmér (lengyel) király találkozója Visegrádon. Célja: Bécs árumegállítójogának megkerülése. Új kereskedelmi útvonalakat jelöltek ki, amelyek kihagyták Bécset, és közvetlen kapcsolatot teremtettek Közép-Európa között.'},
    {c:'green',e:'👶',t:'Nagy Lajos',d:'I. Károly fia és utódja (1342-től). Apja megszilárdította az ország gazdasági és katonai alapjait, így Nagy Lajos egy erős, stabil Magyarországot örökölt. Ezt használta fel katonai hadjáratokhoz és Magyarország középkori fénykorának megteremtéséhez.'},
  ];
  return `<h2 style="font-family:'Fredoka One',cursive;font-size:1.4rem;color:var(--amber);margin-bottom:16px;">💡 Kulcsfogalmak – Kattints rá a fogalomra a magyarázathoz!</h2>
  <div class="concepts-grid">${concepts.map(c=>`
    <div class="concept-card ${c.c}" onclick="toggleConcept(this)">
      <div class="concept-emoji">${c.e}</div>
      <div class="concept-term">${c.t}</div>
      <div class="concept-def">${c.d}</div>
      <div class="concept-hint">👆 Kattints a magyarázathoz</div>
    </div>`).join('')}</div>`;
}

// ===== TOPIC 4 CONTENT =====
function buildTopic4Content(){
  return `
  <div class="info-card">
    <h2>I. Károly és a magyar állam újjászervezése</h2>
    <p>Ez a tétel bemutatja az Anjou-házból származó I. Károly (közismert nevén Károly Róbert, vagy Caroberto – ahogy szülőhazájában hívták) uralkodását, aki az Árpád-ház kihalása utáni zűrzavarból kimentette és Európa egyik legerősebb államává tette Magyarországot.</p>
  </div>

  <div class="info-card">
    <h3>👑 Az Árpád-ház kihalása és a trónért folyó harc (1301–1310)</h3>
    <div style="float:right;margin:0 0 12px 16px;max-width:130px;">
      <img src="images/topic4_img0.png" alt="I. Károly középkori ábrázolása" style="width:100%;border-radius:8px;border:2px solid var(--border);"/>
      <p style="font-size:10px;color:var(--muted);text-align:center;margin-top:4px;">I. Károly – kódex</p>
    </div>
    <p>1301-ben III. András halálával a férfiágon kihalt az Árpád-ház. Ezután egy viharos időszak következett, amelyet interregnumnak (király nélküli állapotnak) is nevezünk, bár valójában egyszerre három jelölt is versengett a trónért. Mindhárman nőágon kapcsolódtak az Árpádokhoz:</p>
    <table class="data-table">
      <tr><th>Trónkövetelő</th><th>Dinasztia</th><th>Támogatók</th></tr>
      <tr><td>Anjou Károly (Károly Róbert)</td><td>Anjou-ház (Nápoly)</td><td>A pápa, délvidéki főurak</td></tr>
      <tr><td>Vencel</td><td>Přemysl-ház (Csehország)</td><td>Buda városa, a tartományurak többsége</td></tr>
      <tr><td>Ottó</td><td>Wittelsbach-ház (Bajorország)</td><td>Kőszegiek, erdélyi szászok</td></tr>
    </table>
    <p style="margin-top:14px;"><strong>A koronázás feltételei</strong></p>
    <p>Ahhoz, hogy valaki törvényes magyar király legyen, három feltételnek kellett egyszerre teljesülnie:</p>
    <ol style="margin-top:8px;padding-left:20px;">
      <li>A Szent Koronával kell megkoronázni.</li>
      <li>Az esztergomi érseknek kell végeznie a szertartást.</li>
      <li>Székesfehérváron kell megtörténnie.</li>
    </ol>
    <p style="margin-top:10px;">Károly Róbertet háromszor is megkoronázták (1301, 1309, 1310), de csak az utolsó, 1310-es koronázás felelt meg minden feltételnek, mivel a Szent Korona korábban ellenfeleinél vagy Kán László erdélyi vajdánál volt.</p>
    <p style="margin-top:10px;"><em>Érdekesség: Amikor a pápa kiátkozta Buda lakóit, mert nem támogatták Károlyt, a budai polgárok Lajos pap vezetésével válaszul magát a pápát közösítették ki!</em></p>
  </div>

  <div class="info-card">
    <h3>⚔️ Harc a „kiskirályok" ellen</h3>
    <div style="margin:10px 0 14px;text-align:center;">
      <img src="images/topic4_img1.png" alt="Kiskirályok uralmi területei a 14. század elején" style="max-width:100%;border-radius:8px;border:1px solid var(--border);"/>
      <p style="font-size:11px;color:var(--muted);margin-top:5px;">Kiskirályok uralmi területei a 14. század elején</p>
    </div>
    <p>A 13. század végére a hatalmas birtokokkal rendelkező főurak, a tartományurak vagy „kiskirályok" saját országrészeket irányítottak. Saját udvartartásuk, hadseregük, sőt néha saját pénzük is volt. Nem engedelmeskedtek a királynak, és fosztogatták a kereskedőket.</p>
    <p style="margin-top:10px;"><strong>A legfontosabb tartományurak:</strong></p>
    <ul style="margin-top:8px;padding-left:20px;">
      <li><strong>Csák Máté:</strong> A Felvidék nyugati részének ura (Trencsén központtal).</li>
      <li><strong>Aba Amadé:</strong> Az ország északkeleti részének ura.</li>
      <li><strong>Kán László:</strong> Erdély ura.</li>
      <li><strong>Kőszegiek:</strong> A Dunántúl urai.</li>
    </ul>
    <div style="float:right;margin:0 0 10px 14px;max-width:150px;">
      <img src="images/topic4_img2.png" alt="Rozgonyi csata – középkori miniatúra" style="width:100%;border-radius:8px;border:2px solid var(--border);"/>
      <p style="font-size:10px;color:var(--muted);text-align:center;margin-top:4px;">Rozgonyi csata – miniatúra</p>
    </div>
    <p style="margin-top:10px;">Károly Róbert több mint tíz évig harcolt ellenük. A döntő fordulat 1312-ben a rozgonyi csatában következett be, ahol a király legyőzte az Aba-nembeliek seregét. Bár Csák Mátéval katonailag nem bírt, 1321-es halála után az ő területei is a király kezére kerültek. 1323-ra az egész ország felett helyreállt a királyi hatalom.</p>
    <div class="highlight-box" style="margin-top:8px;">🔍 <strong>Érdekesség:</strong> A rozgonyi csata közvetlen kiváltója egy gyilkosság volt: a kassai polgárok 1311-ben megölték Aba Amádét, a tartományurat. Fiai a királyra fogták a felelősséget, és ezért lázadtak fel – így indult el az az ütközet, amely végül megtörte a kiskirályok hatalmát.</div>
  </div>

  <div class="info-card">
    <h3>🏰 Az új államrend: honorbirtok és banderiális hadsereg</h3>
    <p>I. Károly a korábbi, örökölhető birtokadományozás helyett új rendszert vezetett be a hatalma megszilárdítására.</p>
    <ul style="margin-top:8px;padding-left:20px;">
      <li><strong>Honorbirtokok:</strong> A király tisztségekhez (például nádor, vajda, ispán) kötött birtokokat adományozott. Ezeket a birtokokat a nemesek csak addig birtokolhatták, amíg a tisztséget viselték. Ha a király elvette a tisztséget, a birtok is visszaszállt rá. Ez hűségre kényszerítette a főurakat.</li>
      <li><strong>Banderiális hadszervezet:</strong> A nagyobb birtokokkal rendelkező nemeseknek kötelező volt saját zászlójuk (<em>bandérium</em>) alatt felfegyverzett, nehézpáncélos lovasokat kiállítani. Ezeket a csapatokat a király hadjárat idején összegyűjtötte – így állandó zsoldos hadsereg nélkül is ütőképes sereget tudott felállítani.</li>
    </ul>
  </div>

  <div class="info-card">
    <h3>💰 Gazdasági reformok és bevételek</h3>
    <div style="float:right;margin:0 0 12px 16px;max-width:120px;">
      <img src="images/topic4_img3.png" alt="Magyar aranyforint – 14. század" style="width:100%;border-radius:50%;border:2px solid #d4af37;"/>
      <p style="font-size:10px;color:var(--muted);text-align:center;margin-top:4px;">Magyar aranyforint</p>
    </div>
    <p>Mivel a királyi birtokok aránya 20% alá csökkent, Károlynak új jövedelmekre volt szüksége. Ezeket regálénak (királyi felségjogon szedett jövedelemnek) nevezzük.</p>
    <p style="margin-top:12px;"><strong>Bányászat és az „Urbura"</strong></p>
    <p>Magyarország ebben az időben Európa leggazdagabb nemesfém-lelőhelye volt (az aranytermelés 75%-át adta).</p>
    <ul style="margin-top:8px;padding-left:20px;">
      <li><strong>Régi szabály:</strong> Ha valaki aranyat talált a földjén, a király elvette a birtokát. Emiatt mindenki eltitkolta a lelőhelyeket.</li>
      <li><strong>1327-es bányareform (urbura):</strong> A földbirtokos megtarthatta a földjét, és megkapta a királynak járó bányabér (urbura) egyharmadát. Ezután mindenki érdekelt lett az új bányák megnyitásában.</li>
    </ul>
    <p style="margin-top:12px;"><strong>Pénzreform és adózás</strong></p>
    <ul style="margin-top:8px;padding-left:20px;">
      <li><strong>Aranyforint (1325):</strong> Károly firenzei mintára értékálló, tiszta aranypénzt veretett, amely egész Európában kedvelt fizetőeszköz lett.</li>
      <li><strong>Kapuadó:</strong> Mivel az új pénz értékálló volt, a király elesett a korábbi pénzrontásból származó haszontól. Ennek pótlására bevezette a kapuadót. Minden olyan kapu után adót kellett fizetni, amelyen egy megrakott szénásszekér be tudott hajtani.</li>
      <li><strong>Harmincad:</strong> A külkereskedelemre kivetett vám, az áru értékének harmincadrésze.</li>
    </ul>
  </div>

  <div class="info-card">
    <h3>🤝 Külpolitika: A Visegrádi Királytalálkozó (1335)</h3>
    <div style="float:right;margin:0 0 12px 16px;max-width:200px;">
      <img src="images/visegradi-var-2.jpg" alt="Visegrádi vár" style="width:100%;border-radius:8px;border:2px solid var(--border);"/>
      <p style="font-size:10px;color:var(--muted);text-align:center;margin-top:4px;">Visegrádi vár – a királytalálkozó helyszíne</p>
    </div>
    <p>Károly Róbert udvarát Visegrádra helyezte át, ahol fényes palotát építtetett. Itt rendezték meg 1335-ben a középkori diplomácia egyik legfontosabb eseményét.</p>
    <div class="highlight-box" style="margin-top:8px;">🔍 <strong>Érdekesség:</strong> Visegrád nem volt mindig az ország központja: Károly Róbert 1315-től egészen 1323-ig <strong>Temesváron</strong> tartotta az udvarát, ahol biztonságban volt, amíg a tartományurakkal harcolt. Csak az ország pacifikálása után költözött a reprezentatívabb Visegrádra.</div>
    <p style="margin-top:10px;"><strong>Résztvevők:</strong></p>
    <ol style="margin-top:8px;padding-left:20px;">
      <li>I. Károly (magyar király)</li>
      <li>III. Kázmér (lengyel király)</li>
      <li>Luxemburgi János (cseh király)</li>
    </ol>
    <p style="margin-top:10px;"><strong>Eredmények:</strong></p>
    <ul style="margin-top:8px;padding-left:20px;">
      <li>Kibékítette a lengyel és cseh királyt (János lemondott a lengyel trónigényéről).</li>
      <li>Új kereskedelmi útvonalat jelöltek ki Csehország felé, hogy kikerüljék Bécs városát és annak „árumegállító jogát" (ami kötelezte a kereskedőket, hogy Bécsben adják el az áruikat).</li>
      <li>Megállapodtak, hogy ha a lengyel király utód nélkül hal meg, a magyar Anjouk öröklik a lengyel trónt (így lett később Nagy Lajos lengyel király is).</li>
    </ul>
  </div>

  <div class="info-card">
    <h3>🗡️ A lovagi kultúra és a Zách Felicián-merénylet</h3>
    <div style="float:right;margin:0 0 12px 16px;max-width:180px;">
      <img src="images/Zách_Felícián.jpg" alt="Zách Felicián merénylete" style="width:100%;border-radius:8px;border:2px solid var(--border);"/>
      <p style="font-size:10px;color:var(--muted);text-align:center;margin-top:4px;">Zách Felicián merénylete (1330)</p>
    </div>
    <p>Károly honosította meg Magyarországon a lovagi kultúrát és a címertant. Megalapította a Szent György-rendet, az első világi lovagrendet.</p>
    <p style="margin-top:10px;">Uralkodását azonban egy véres esemény is beárnyékolta: 1330-ban Zách Felicián, egy udvari nemes, ebéd közben karddal támadt a királyi családra Visegrádon. A király sértetlen maradt, de Erzsébet királyné négy ujját levágta a támadó. A megtorlás kegyetlen volt: Felicián családját harmadíziglen kiirtották.</p>
  </div>

  <div class="info-card">
    <h3>📋 Összegzés: Mit hagyott hátra I. Károly?</h3>
    <p>I. Károly 1342-ben halt meg. Halálakor Magyarország:</p>
    <ul style="margin-top:8px;padding-left:20px;">
      <li>Politikailag egységes és stabil volt.</li>
      <li>Európa vezető nemesfémtermelőjévé vált.</li>
      <li>Tele kincstárral és erős hadsereggel rendelkezett.</li>
      <li>Fiára, Lajosra egy virágzó és tekintélyes birodalmat hagyott.</li>
    </ul>
  </div>

  <div class="info-card" style="background:linear-gradient(135deg,#14532d,#052e16);border:2px solid #4ade80;color:#d1fae5;">
    <h3 style="color:#4ade80;">📋 Történeti Gyorsvázlat (Szigorúan kulcsszavak)</h3>
    <ul>
      <li>👑 <strong>Interregnum (1301–1310):</strong> Árpád-ház kihal → Trónharcok → I. Károly (Anjou) győz (Érvényes koronázás: 1310, Székesfehérvár).</li>
      <li>⚔️ <strong>Kiskirályok letörése:</strong> Tartományurak (pl. Csák Máté, Abák) hatalmának felszámolása → 1312: Rozgonyi csata (Abák). A folyamat 1321-ben zárul Csák Máté halálával.</li>
      <li>🏰 <strong>Honorbirtok:</strong> Tisztséghez (pl. ispán) kötött, nem örökölhető birtok → hűséges nemesi réteg kialakítása.</li>
      <li>💰 <strong>Gazdaság (Regálék):</strong> Urbura (bányareform): földesúr is kap bányabért → arany- és ezüsttermelés fellendül. Aranyforint (1325): értékálló, új valuta. Kapuadó (jobbágyoktól), Harmincadvám (külkereskedelem).</li>
      <li>🤝 <strong>Visegrádi találkozó (1335):</strong> Magyar–cseh–lengyel csúcs → Cél: Bécs árumegállító jogának kikerülése + lengyel trónöröklés biztosítása + cseh és lengyel uralkodó kibékítése.</li>
      <li>🏰 <strong>Udvar:</strong> Visegrádi központ → Lovagi kultúra → Zách Felicián merénylete (1330).</li>
    </ul>
  </div>
`;
}

const topic4={
  title:'4. Tétel – Károly Róbert',
  subtitle:'Az Anjouk és az ország újraegyesítése',
  emoji:'💰',
  content: buildTopic4Content,
  concepts: buildTopic4Concepts,
  quiz: buildTopic4Quiz,
  videos: buildTopic4Videos,
};
// ===== TOPIC 2 CONCEPTS =====
const questions4=[
  {q:'Mit nevezünk tartományúrnak?',a:['A király által kinevezett vármegyei vezető', 'Hatalmas birtokokkal rendelkező főúr, aki saját területét a királytól függetlenül irányította', 'Külföldi hűbérúr, aki magyar területeket szerzett meg'],correct:1},
  {q:'Melyik dinasztia tagja volt I. Károly (Károly Róbert)?',a:['A Piast-dinasztia', 'Az Anjou-dinasztia', 'A Habsburg-dinasztia'],correct:1},
  {q:'Hogyan szerezte meg Károly Róbert a hatalmat Magyarországon?',a:['Egyből elfoglalta a trónt', 'Hosszú küzdelem után, 1310 körülre szilárdult meg a hatalma', 'A pápa ajándékozta neki a koronát'],correct:1},
  {q:'Mit veretett Károly Róbert pénzreformja során?',a:['Ezüst dénárt', 'Aranyforintot', 'Réz garast'],correct:1},
  {q:'Mi volt a visegrádi királytalálkozó (1335) célja?',a:['Háborút indítani Velence ellen', 'Kereskedelmi szövetséget kötni Bécs árumegállítójogával szemben (Bécs megkerülése), valamint a cseh és a lengyel király kibékítése magyar közreműködéssel', 'Megünnepelni Károly Róbert trónra lépését'],correct:1},
  {q:'Hol volt Károly Róbert székhelye?',a:['Esztergomban', 'Visegrádon', 'Budán'],correct:1},

  {q:'Mi volt a rozgonyi csata (1312) jelentősége?',a:['A tatárokat verték vissza', 'Döntő győzelmet aratott az Aba-nembeliek felett, ezzel megtört a tartományurak ellenállásának gerince.', 'Magyarország visszaszerezte Dalmáciát'],correct:1},
  {q:'Ki volt Csák Máté?',a:['Külföldi hadvezér, aki megtámadta Magyarországot', 'Az egyik legerősebb tartományúr, aki az ország észak-nyugati részét birtokolta', 'Károly Róbert legfőbb szövetségese'],correct:1},
  {q:'Mit jelent a harmincadvám?',a:['Az áru értékének 1/30-a, amelyet a kereskedőknek kellett fizetni a határon', 'A jobbágyok által fizetett évi adó', 'A nemesek által fizetett hadiadó'],correct:0},
  {q:'Ki volt Károly Róbert fia, aki 1342-ben követte a trónon?',a:['Zsigmond', 'I. (Nagy) Lajos', 'V. István'],correct:1},
  {q:'Mit jelent a honorbirtok?',a:['Örökölhető nemesi birtok, amelyet a király adományozott', 'Tisztséghez kötött birtok, amelyet a király visszavehetett, ha elvette a tisztséget', 'Egyházi tulajdonban lévő, adómentesen kezelt birtok'],correct:1},
  {q:'I. Károllyal szemben, melyik tartományúr állt ellen legtovább?',a:['Csák Máté', 'Kőszegi Henrik', 'Borsa Kopasz'],correct:0}
];

let quizState4={q:[],idx:0,correct:0,answered:false};

function buildTopic4Quiz(){
  return `<div class="quiz-container">
    <div class="quiz-header">
      <h3>🎯 Mesterlövész Tudáspróba – 4. Akta</h3>
      <div class="quiz-counter" id="q4-counter">1 / 12</div>
    </div>
    <div class="quiz-body" id="quiz4-body">
      <div class="progress-dots" id="progress4-dots"></div>
      <div class="question-text" id="q4-text"></div>
      <div class="answers-grid" id="q4-answers"></div>
      <div class="feedback-box" id="feedback4"></div>
      <div style="text-align:right;margin-top:8px;clear:both;">
        <button class="next-btn" id="next4-btn" onclick="nextQuestion4()">Következő →</button>
      </div>
    </div>
    <div class="quiz-result" id="quiz4-result"></div>
  </div>`;
}

function initQuiz4(){
  quizState4.q=[...questions4].sort(()=>Math.random()-.5);
  quizState4.idx=0;quizState4.correct=0;quizState4.answered=false;
  document.getElementById('quiz4-body').style.display='block';
  document.getElementById('quiz4-result').style.display='none';
  renderQuestion4();
}

function renderQuestion4(){
  const q=quizState4.q[quizState4.idx];
  document.getElementById('q4-counter').innerText=`${quizState4.idx+1} / ${quizState4.q.length}`;
  document.getElementById('q4-text').innerText=q.q;
  const letters=['A','B','C'];
  const shuffled=[0,1,2].sort(()=>Math.random()-.5);
  document.getElementById('q4-answers').innerHTML=shuffled.map((origIdx,i)=>`
    <button class="answer-btn" data-correct="${origIdx===q.correct}" onclick="answerQ4(this)">
      <span class="answer-letter">${letters[i]}</span>${q.a[origIdx]}
    </button>`).join('');
  const dots=document.getElementById('progress4-dots');
  dots.innerHTML=Array.from({length:quizState4.q.length},(_,i)=>`<div class="dot ${i<quizState4.idx?(quizState4.q[i]._result==='c'?'correct':'wrong'):''}${i===quizState4.idx?'current':''}"></div>`).join('');
  document.getElementById('feedback4').style.display='none';
  document.getElementById('next4-btn').style.display='none';
  quizState4.answered=false;
}

function answerQ4(btn){
  if(quizState4.answered)return;
  quizState4.answered=true;
  const isCorrect=btn.dataset.correct==='true';
  document.querySelectorAll('#q4-answers .answer-btn').forEach(b=>{
    b.disabled=true;
    if(b.dataset.correct==='true')b.classList.add('correct');
  });
  if(isCorrect){
    btn.classList.add('correct');
    quizState4.correct++;
    quizState4.q[quizState4.idx]._result='c';
    const fb=document.getElementById('feedback4');
    fb.className='feedback-box correct';fb.innerText='🎉 Helyes! Zseniális válasz!';fb.style.display='block';
    startConfetti(30);
    if(window.mascotCorrect)mascotCorrect();
  } else {
    btn.classList.add('wrong');
    quizState4.q[quizState4.idx]._result='w';
    const fb=document.getElementById('feedback4');
    fb.className='feedback-box wrong';fb.innerText='❌ Sajnos nem ez volt a helyes válasz. Nézd meg a zöld gombot!';fb.style.display='block';
    if(window.mascotWrong)mascotWrong();
  }
  document.getElementById('next4-btn').style.display='block';
  document.getElementById('next4-btn').innerText=quizState4.idx===quizState4.q.length-1?'Eredmény megtekintése 🏆':'Következő kérdés →';
}

function nextQuestion4(){
  quizState4.idx++;
  if(quizState4.idx<quizState4.q.length){renderQuestion4();}
  else{showResult4();}
}

function showResult4(){
  document.getElementById('quiz4-body').style.display='none';
  const res=document.getElementById('quiz4-result');
  res.style.display='block';
  const score=quizState4.correct;
  const emoji=score>=10?'🏆':score>=8?'🥇':score>=6?'🥈':score>=4?'🥉':'💪';
  const msg=score>=10?'Fenomenális! Igazi mesterlövész vagy!':score>=8?'Kiváló munka, felderítő!':score>=6?'Szép teljesítmény! Még egy kis gyakorlás...':score>=4?'Jó próbálkozás! Olvass még egy kicsit!':'Gyakorolj sokat, ügynök!';
  const earnedXP=score*15;
  addXP(earnedXP);
  let unlockHtml='';
  if(score>=10){
    unlockHtml=`<div class="unlock-notice">🔓 Következő dosszié feloldható! A kód: <strong>Rozgony</strong></div>`;
  } else {
    unlockHtml=`<div class="unlock-notice" style="background:var(--rose-l);border-color:var(--rose);color:var(--rose-d);">⚠️ Legalább 10/12 pont kell a következő dosszié kódjához! Próbáld újra!</div>`;
  }
  res.innerHTML=`<div class="result-emoji">${emoji}</div>
    <div class="result-score">${score} / 12</div>
    <div class="result-msg">${msg}</div>
    <div class="result-xp">⭐ +${earnedXP} XP megszerezve!</div>
    ${unlockHtml}
    <button class="retry-btn" onclick="initQuiz4()">🔄 Újra próbálom</button>`;
}
