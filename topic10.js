// ===== TOPIC 10 CONTENT =====
function buildTopic10Content(){
  return `
  <div class="info-card">
    <h2>A nagy földrajzi felfedezések kora</h2>
    <p>A 15. század végén és a 16. első felében Európa és az egész emberiség történelme hatalmas fordulatot vett. Ebben az időszakban a bátor hajósok ismeretlen vizekre merészkedtek és új kontinenst találtak. Ezzel örökre megváltoztatták a gazdaságot, a tudományt és a mindennapi életünket. Ez a lecke segít megérteni, miért indultak útnak, kik voltak a legfontosabb szereplők, és mi történt azután, hogy az európaiak partot értek az „Újvilágban".</p>
  </div>

  <div class="info-card">
    <h3>🔍 A felfedezés okai, lehetőségei</h3>
    <p>A felfedezések hátterében több fontos gazdasági és politikai ok állt. A középkor végére Európa népessége megnőtt, és egyre nagyobb lett az igény a keleti luxuscikkekre (selyem, fűszerek, illatszerek).</p>
    <ul style="margin-top:8px;padding-left:20px;">
      <li><strong>Aranyéhség:</strong> A keleti árukért nemesfémmel kellett fizetni, így az arany és az ezüst fokozatosan kiáramlott Európából. Eközben a magyarországi és csehországi bányák kezdtek kimerülni, ezért új forrásokat kellett keresni.</li>
      <li><strong>A török terjeszkedés:</strong> 1453-ban a törökök elfoglalták Konstantinápolyt. A hagyományos szárazföldi kereskedelmi utak (levantei kereskedelem) bizonytalanná váltak, és a törökök által kivetett magas vámok miatt az áruk rendkívül megdrágultak.</li>
      <li><strong>Világkép változása:</strong> A reneszánsz és a humanizmus idején az emberek kíváncsibbak lettek. Toscanelli térképe alapján egyre többen hitték, hogy a Föld gömbölyű, és nyugat felé hajózva is el lehet jutni Indiába.</li>
      <li>A fentebb említetteken kívül további tényezők voltak a keresztény hittérítés, a hajózási ismeretek bővülése és a tudomány fejlődése is.</li>
    </ul>
    <div style="text-align:center;margin:16px 0 4px;">
      <img src="images/topic10_img0.png" alt="Középkori világtérkép" style="max-width:100%;border-radius:12px;box-shadow:0 4px 16px rgba(0,0,0,0.18);border:3px solid #854F0B;">
      <p style="font-size:.82rem;color:var(--muted);margin-top:6px;font-style:italic;">Középkori Mappa Mundi – így képzelték el a világot a felfedezések előtt</p>
    </div>
  </div>

  <div class="info-card">
    <h3>⛵ Technikai forradalom a tengeren</h3>
    <p>Ahhoz, hogy átkeljenek az óceánon, új eszközökre és hajókra volt szükség. A portugál <strong>Tengerész Henrik (1394–1460)</strong> herceg hajózási iskolát alapított Sagresben, ahol a kor legjobb térképészei és hajósai tanultak.</p>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0 4px;">
      <div style="text-align:center;">
        <img src="images/topic10_img1.png" alt="Iránytű" style="max-width:100%;border-radius:10px;box-shadow:0 4px 12px rgba(0,0,0,0.18);border:3px solid #BA7517;">
        <p style="font-size:.75rem;color:var(--muted);margin-top:4px;font-style:italic;">Iránytű (tájoló) – az északi irány meghatározásához</p>
      </div>
      <div style="text-align:center;">
        <img src="images/topic10_img2.png" alt="Asztrolábium" style="max-width:100%;border-radius:10px;box-shadow:0 4px 12px rgba(0,0,0,0.18);border:3px solid #3B82F6;">
        <p style="font-size:.75rem;color:var(--muted);margin-top:4px;font-style:italic;">Asztrolábium – a hajó pontos helyzetének meghatározásához</p>
      </div>
    </div>
    <div style="text-align:center;margin:16px 0 4px;">
      <img src="images/topic10_img3.png" alt="Santa Maria karavella" style="max-width:100%;border-radius:12px;box-shadow:0 4px 16px rgba(0,0,0,0.18);border:3px solid #185FA5;">
      <p style="font-size:.82rem;color:var(--muted);margin-top:6px;font-style:italic;">A Santa Maria – Kolumbusz zászlóshajója, a kor leghíresebb karavellája</p>
    </div>
    <table class="data-table" style="margin-top:12px;">
      <tr><th>Eszköz / Hajó</th><th>Leírása és fontossága</th></tr>
      <tr><td><strong>Karavella</strong></td><td>Gyors, jól kormányozható, magas oldalfalú hajó. Képes volt a széllel szemben is haladni.</td></tr>
      <tr><td><strong>Karakk</strong></td><td>Nagyobb testű, több árut befogadó hajó, alkalmas hosszú óceáni utakra.</td></tr>
      <tr><td><strong>Iránytű (tájoló)</strong></td><td>Segített a pontos északi irány meghatározásában a nyílt vízen.</td></tr>
      <tr><td><strong>Asztrolábium és szextáns</strong></td><td>A csillagok állása alapján segített meghatározni a hajó pontos helyzetét.</td></tr>
    </table>
  </div>

  <div class="info-card">
    <h3>🧭 A leghíresebb felfedezők és útjaik</h3>
    <p>A felfedezésekben kezdetben a portugálok és a spanyolok jártak az élen.</p><div style="float:right;margin:0 0 12px 16px;max-width:240px;clear:right;"><img src="images/topic10_img4.png" alt="Kolumbusz partraszállása" style="width:100%;border-radius:10px;box-shadow:0 4px 12px rgba(0,0,0,0.18);border:3px solid #D4460A;"><p style="font-size:.75rem;color:var(--muted);margin-top:4px;text-align:center;font-style:italic;">Kolumbusz partraszállása 1492-ben</p></div>
    <ul style="margin-top:8px;padding-left:20px;">
      <li><strong>Bartolomeu Dias (1487):</strong> Ő volt az első európai, aki elérte Afrika legdélebbi pontját, a Jóreménység fokát. (Afrika megkerülhető)</li>
      <li><strong>Vasco da Gama (1498):</strong> Afrika megkerülésével, a tengeren keresztül jutott el Indiába. Ezzel a portugálok közvetlen kapcsolatba kerültek a fűszerpiaccal.</li>
      <li><strong>Kolumbusz Kristóf (1492):</strong> A spanyol királynő támogatásával nyugat felé indult. Október 12-én érte el a Bahama-szigeteket (Amerika), de haláláig azt hitte, Indiában jár. Ezért nevezte az őslakosokat indiánoknak. A felfedezéshez használt hajói: Nina, Pinta, Santa Maria. Kolumbusznak ezen kívül még további két útja volt az új kontinensre. (A mai Kolumbia név adója)</li>
      <li><strong>Amerigo Vespucci:</strong> Ő volt az, aki felismerte, hogy amit Kolumbusz talált, az nem India, hanem egy új kontinens. Róla nevezték el a földrészt Amerikának.</li>
      <li><strong>Magellán (1519–1522):</strong> Először kísérelte meg a Föld körülhajózását. Bár ő maga a Fülöp-szigeteken életét vesztette a bennszülöttekkel vívott harcban, egyik hajója (a Victoria) visszatért Spanyolországba, bizonyítva, hogy a Föld körbehajózható.</li>
    </ul>
    <div style="text-align:center;margin:16px 0 4px;">
      <img src="images/topic10_img5.png" alt="A felfedezők útjainak térképe" style="max-width:100%;border-radius:12px;box-shadow:0 4px 16px rgba(0,0,0,0.18);border:3px solid #0D9488;">
      <p style="font-size:.82rem;color:var(--muted);margin-top:6px;font-style:italic;">A nagy felfedezők útvonalai: Kolumbusz, Vasco da Gama, Dias, Magellán</p>
    </div>
  </div>

  <div class="info-card">
    <h3>🏛️ Az amerikai kontinens ősi civilizációi</h3>
    <p>Mielőtt az európaiak megérkeztek, Amerikában fejlett kultúrák éltek, amelyeket <strong>prekolumbián</strong> (Kolumbusz előtti) civilizációknak nevezünk. Ezek a népek elszigetelten éltek, és bár nem ismerték a vasat vagy a kereket, a matematika, a csillagászat és az építészet terén kimagaslóak voltak.</p>
    <ol style="margin-top:8px;padding-left:20px;">
      <li><strong>Maják:</strong> A Yucatán-félszigeten éltek városállamokban. Saját írásuk és pontos naptáruk volt, piramisokat építettek.</li>
      <li><strong>Asztékok:</strong> A mai Mexikó területén hoztak létre hatalmas birodalmat. Fővárosuk Tenochtitlán. Jellemző volt rájuk a véráldozat és a despotikus államvezetés.</li>
      <li><strong>Inkák:</strong> Dél-Amerikában, az Andok hegységben éltek. Hatalmas úthálózatot és futárszolgálatot működtettek. Központjuk Machu Picchu volt.</li>
    </ol>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0 4px;">
      <div style="text-align:center;">
        <img src="images/topic10_img6.png" alt="Chichen Itza – maja piramis" style="max-width:100%;border-radius:10px;box-shadow:0 4px 12px rgba(0,0,0,0.18);border:3px solid #639922;">
        <p style="font-size:.75rem;color:var(--muted);margin-top:4px;font-style:italic;">Chichen Itza – a maják Kukulkán piramisa (Yucatán, Mexico)</p>
      </div>
      <div style="text-align:center;">
        <img src="images/topic10_img7.png" alt="Machu Picchu" style="max-width:100%;border-radius:10px;box-shadow:0 4px 12px rgba(0,0,0,0.18);border:3px solid #BA7517;">
        <p style="font-size:.75rem;color:var(--muted);margin-top:4px;font-style:italic;">Machu Picchu – az inkák legendás magashegyi városa (Peru)</p>
      </div>
    </div>
    <p style="margin-top:10px;">Az indiánok olyan növényeket termesztettek, amelyeket ma már naponta fogyasztunk: <strong>kukorica, burgonya, paradicsom, paprika, bab, tök, kakaó, dohány, vanília.</strong> Ezekkel a termékekkel az európaiak ekkor ismerkedtek meg. A 16. századtól kezdve pedig fokozatosan egyre inkább elterjed ezen növények termesztése és fogyasztása Európában is.</p>
  </div>

  <div class="info-card">
    <h3>⚔️ Hódítás és gyarmatosítás</h3>
    <p>A felfedezőket hamarosan a <strong>konkvisztádorok</strong> (hódítók) követték. Bár kevesen voltak, technikai fölényük (páncél, lovak, tűzfegyverek) és az indián népek belső ellentétei miatt gyorsan győzedelmeskedtek.</p>
    <ul style="margin-top:8px;padding-left:20px;">
      <li><strong>Cortés</strong> mindössze 500 katonával igázta le az asztékokat.</li>
      <li><strong>Pizarro</strong> 150 emberrel foglalta el az inka birodalmat.</li>
    </ul>
    <p style="margin-top:12px;"><strong>A gyarmatosítás következményei:</strong></p>
    <p style="margin-top:8px;">Az 1494-ben kötött <strong>tordesillasi szerződésben</strong> a kor két nagy tengeri hatalma, Spanyolország és Portugália békésen felosztotta egymás között a Kolumbusz által újonnan felfedezett területeket. A megállapodás szerint az Atlanti-óceánon húztak egy képzeletbeli, észak–déli irányú vonalat. Az ettől nyugatra eső részek, vagyis Amerika legnagyobb része a spanyoloké lett, míg a keletre fekvő területek – így Afrika, Ázsia és Dél-Amerika legkeletibb csücske – a portugálok uralma alá kerültek. Ennek a felosztásnak a történelmi hatása ma is jól érzékelhető: Dél- és Közép-Amerika legtöbb országában azért beszélnek spanyolul, mert spanyol területnek számítottak, kivéve Brazíliát, ahol a portugál a hivatalos nyelv, mivel az a terület átlógott a portugál térfélre.</p>

    <div style="text-align:center;margin:16px 0 4px;">
      <img src="images/topic10_img8.png" alt="A tordesillasi felosztás" style="max-width:100%;border-radius:12px;box-shadow:0 4px 16px rgba(0,0,0,0.18);border:3px solid #D4460A;">
      <p style="font-size:.82rem;color:var(--muted);margin-top:6px;font-style:italic;">A tordesillasi szerződés (1494): Spanyolország és Portugália felosztja a világot</p>
    </div>
    <p style="margin-top:10px;">A hódítók bányákat és ültetvényeket hoztak létre, melyeken a legtöbbször az őslakosok dolgoztak. Emiatt, illetve az Európából behurcolt betegségek miatt a bennszülött lakosság tömegesen pusztult el. Az így felmerülő munkaerőhiányt Afrikából elhurcolt feketékkel pótolták, ezzel megkezdődött a 19. századig tartó rabszolga-kereskedelem. Emellett fontos kiemelni a térítő munkát is, amit papok és szerzetesek végeztek.</p>
  </div>

  <div class="info-card">
    <h3>💰 Hogyan változott meg a világ gazdasága?</h3>
    <p>A felfedezések hatására kialakult a <strong>világkereskedelem</strong>, melynek központja az Atlanti-óceán lett. A régi kereskedelmi útvonalak (Hanza, Levante) háttérbe szorultak.</p>
    <table class="data-table" style="margin-top:10px;">
      <tr><th>Irány</th><th>Áruk</th></tr>
      <tr><td><strong>Amerika → Európa</strong></td><td>Nemesfémek (arany, ezüst), dohány, cukornád, gyapot</td></tr>
      <tr><td><strong>Európa → Amerika/Afrika</strong></td><td>Iparcikkek, fegyverek, alkohol</td></tr>
      <tr><td><strong>Afrika → Amerika</strong></td><td>Rabszolgák</td></tr>
    </table>
    <ul style="margin-top:12px;padding-left:20px;">
      <li><strong>Árforradalom:</strong> A rengeteg beáramló nemesfém miatt a pénz elértéktelenedett, az áruk (főleg az élelmiszerek) ára viszont drasztikusan emelkedett.</li>
      <li><strong>Manufaktúrák:</strong> A céheket felváltották a manufaktúrák. Itt a munkafolyamatokat részekre bontották, így olcsóbban és nagyobb mennyiségben tudtak termelni bérmunkások segítségével.</li>
      <li><strong>Világkereskedelmi háromszög:</strong> Európából iparcikkeket és alkoholt vittek Afrikába; onnan rabszolgákat Amerikába; Amerikából pedig nyersanyagot (aranyat, cukrot, dohányt) hoztak vissza Európába.</li>

    <div style="text-align:center;margin:16px 0 4px;">
      <img src="images/topic10_img9.png" alt="Világkereskedelmi háromszög" style="max-width:100%;border-radius:12px;box-shadow:0 4px 16px rgba(0,0,0,0.18);border:3px solid #0D9488;">
      <p style="font-size:.82rem;color:var(--muted);margin-top:6px;font-style:italic;">A világkereskedelmi háromszög: Európa – Afrika – Amerika kereskedelmi áramlásai</p>
    </div>
      <li><strong>Új központok:</strong> Lisszabon, Amszterdam és London váltak a világ legfontosabb kikötőivé és kereskedelmi központjaivá. Megalakultak az első kereskedőtársaságok (például a Kelet-indiai Társaság) és a tőzsdék.</li>
    </ul>
    <p style="margin-top:12px;"><strong>Új gazdasági, pénzügyi intézetek:</strong></p>
    <ul style="margin-top:8px;padding-left:20px;">
      <li><strong>Bankok:</strong> pénzváltással, betétek kezelésével és hitelnyújtással foglalkoztak.</li>
      <li><strong>Tőzsde:</strong> egy olyan szabályozott piac, ahol nem kellett az egész árut odavinni, elég volt mintát mutatni. Az üzletet ott megkötötték, viszont fizetni majd csak az áru megérkezésekor kellett. Ezen a helyen üzleteltek továbbá részvényekkel és értékpapírokkal is. Az első tőzsde Antwerpenben nyílt meg (1531).</li>
      <li><strong>Részvénytársaságok:</strong> több kereskedő közösen alapított vállalatot (pl. Angol Kelet-indiai Társaság). A tulajdonjogot részvények igazolták, a hasznon pedig a befektetett pénz arányában osztoztak.</li>
    </ul>
  </div>

  <div class="info-card" style="background:linear-gradient(135deg,#F0FFF4,#DCFCE7);border:2px solid #86EFAC;">
    <h3 style="color:#4ade80;">📋 Összefoglaló vázlat</h3>
    <ul>
      <li>🔍 <strong>Okok:</strong> Aranyéhség, fűszerhiány, török terjeszkedés (Konstantinápoly 1453), kereskedelmi utak elvágása + gömb Föld-kép (Toscanelli)</li>
      <li>⛵ <strong>Technikai feltételek:</strong> Tengerész Henrik (Sagres), karavella, karakk, iránytű, asztrolábium</li>
      <li>🗺️ <strong>Főbb felfedezők:</strong> Dias (1487, Jóreménység foka) → Vasco da Gama (1498, India tengeren) → Kolumbusz (1492, Amerika – Nina, Pinta, Santa Maria) → Amerigo Vespucci (felismeri: új kontinens) → Magellán (1519–22, első körülhajózás)</li>
      <li>🏛️ <strong>Prekolumbián civilizációk:</strong> Maják (Yucatán, naptár), Asztékok (Tenochtitlán, véráldozat), Inkák (Machu Picchu, úthálózat)</li>
      <li>⚔️ <strong>Hódítás:</strong> Cortés (500 katona → asztékok), Pizarro (150 fő → inkák); tordesillasi szerződés (1494) – Spanyolország és Portugália felosztja a világot</li>
      <li>🌽 <strong>Új növények Európában:</strong> kukorica, burgonya, paradicsom, paprika, bab, kakaó, dohány</li>
      <li>💰 <strong>Gazdasági hatások:</strong> Árforradalom (nemesfém → infláció), manufaktúrák (céhek helyett), világkereskedelmi háromszög (Európa–Afrika–Amerika), tőzsdék (Antwerpen, 1531)</li>
    </ul>
  </div>
`;
}

const topic10={title:'10. Tétel – Nagy felfedezések',subtitle:'Kolumbusz és az újvilág',emoji:'🌍',content:buildTopic10Content,concepts:buildTopic10Concepts,quiz:buildTopic10Quiz,videos:buildTopic10Videos};
// ===== TOPIC 10 VIDEOS =====
function buildTopic10Videos(){
  const vids=[
    {e:'⚡',level:'alap',lt:'Beavatás – Legkönnyebb',title:'A nagy földrajzi felfedezések – Gyorstalpaló',desc:'Háromperces, rendkívül pörgős és humoros animáció. Tökéletes első bevetés, amely rögtön beszippantja a diákokat a témába és megadja a legfontosabb alapokat.',url:'https://www.youtube.com/watch?v=1SvJlKAcDng'},
    {e:'🗺️',level:'alap',lt:'Beavatás – Legkönnyebb',title:'Nyugat felé Indiába',desc:'Rövid, tematikus kiegészítő animáció. Jól használható a fűszerek és a tengeri kereskedelmi útvonalak iránti igény gyors megértéséhez.',url:'https://www.youtube.com/results?search_query=Nyugat+fel%C3%A9+Indi%C3%A1ba'},
    {e:'😄',level:'alap',lt:'Kezdő – Könnyed',title:'Amerika Felfedezése 1 – Kolumbusz Kristóf Útjai – Tökéletlen Történelem [TT]',desc:'Fiatalos, humoros és internetes utalásokkal (mémekkel) tarkított videó Kolumbusz útjairól. Kiválóan oldja a téma szárazságát, szórakoztatva és észrevétlenül tanít.',url:'https://www.youtube.com/watch?v=g4sqvXKKO50'},
    {e:'😄',level:'alap',lt:'Kezdő – Könnyed',title:'Amerika Felfedezése 2 – A Felfedezés Hatásai – Tökéletlen Történelem [TT]',desc:'Az előző rész folytatása, ugyanolyan laza és diákbarát stílusban. Nagyon érthetően és logikusan vezeti le a fiatal ügynököknek, hogy milyen globális hatásai lettek az Újvilág meghódításának.',url:'https://www.youtube.com/watch?v=8ynZ6D26E2E'},
    {e:'📚',level:'kozepes',lt:'Középhaladó',title:'A földrajzi felfedezések okai és céljai – Videotanár',desc:'Letisztult, nagyon jól tagolt és képekkel gazdagon illusztrált digitális tananyag. Egy könnyen követhető, 13 perces áttekintés, ami kifejezetten hasznos egy dolgozat előtti otthoni ismétléshez.',url:'https://www.youtube.com/watch?v=RQOUVjELors'},
    {e:'🎬',level:'kozepes',lt:'Haladó',title:'A földrajzi felfedezések kora – Töri Érettségi',desc:'Bár kifejezetten érettségizőknek készült, vizualitása, térképei és tömör (8 perces) formátuma miatt a jobb képességű, figyelemmel bíró 6. osztályosok is kiválóan tudják használni összefoglalásként.',url:'https://www.youtube.com/watch?v=qBgCJqCPa7M'},
    {e:'🎯',level:'profi',lt:'Mesterlövész – Legnehezebb',title:'A földrajzi felfedezések és a kapitalista gazdaság jellemzői | Pécsi Tibor',desc:'Hosszú (közel 30 perces), klasszikus frontális tanári magyarázat, amely komolyabb gazdasági fogalmakkal (kapitalizmus, infláció) operál. A lexikális sűrűsége és a vizuális trükkök hiánya miatt ez a hatodikosok számára a legnehezebben befogadható anyag.',url:'https://www.youtube.com/watch?v=SK2-pG77Gtk'},
  ];
  return `<h2 style="font-family:'Fredoka One',cursive;font-size:1.4rem;color:var(--rose-d);margin-bottom:16px;">🎥 TITKOS VIDEÓARCHÍVUM: A FÖLDRAJZI FELFEDEZÉSEK AKTA (Nehézségi sorrendben)</h2>
  <div class="video-grid">${vids.map(v=>`
    <a href="${v.url}" target="_blank" class="video-card">
      <div class="video-thumb">${v.e}</div>
      <div class="video-info">
        <div class="video-level ${v.level}">${v.lt}</div>
        <div class="video-title">${v.title}</div>
        <div class="video-desc">${v.desc}</div>
      </div>
    </a>`).join("")}</div>`;
}
const questions10=[
  {q:'Ki volt Lehel kapitány vezetőtársa az augsburgi hadjárat során?',a:['Bulcsú','Koppány','Botond'],correct:0},
  {q:'Melyik évben érte el Kolumbusz Kristóf Amerikát?',a:['1487-ben', '1492-ben', '1498-ban'],correct:1},
  {q:'Mi volt a három hajó neve, amellyel Kolumbusz elindult?',a:['Győzelem, Bátorság, Remény', 'Nina, Pinta, Santa Maria', 'Argonauta, Vasco, Fernando'],correct:1},
  {q:'Ki érte el először a Jóreménység fokát?',a:['Vasco da Gama', 'Bartolomeu Dias', 'Magellán'],correct:1},
  {q:'Ki jutott el elsőként tengeri úton Indiába?',a:['Kolumbusz Kristóf', 'Bartolomeu Dias', 'Vasco da Gama'],correct:2},
  {q:'Miről kapta Amerika a nevét?',a:['Amerigo Vespucciról, aki felismerte, hogy új kontinensről van szó', 'Amerigo Kolombóról, a felfedező másik nevéről', 'Egy indián törzstől'],correct:0},
  {q:'Mit mondott ki a tordesillasi szerződés (1494)?',a:['Megtiltotta a felfedező utakat', 'Spanyolország és Portugália felosztotta egymás között a felfedezett területeket', 'Kolumbuszt az Újvilág helytartójává nevezték ki'],correct:1},
  {q:'Ki volt az első, akinek expedíciója körülhajózta a Földet?',a:['Kolumbusz Kristóf', 'Vasco da Gama', 'Fernão de Magellán'],correct:2},
  {q:'Hol élt az inka civilizáció?',a:['A mai Mexikóban', 'A Yucatán-félszigeten', 'Dél-Amerikában, az Andokban, Machu Picchu volt a központjuk'],correct:2},
  {q:'Mi az árforradalom?',a:['Az új kereskedési módszer neve', 'A sok nemesfém beáramlása miatt bekövetkező áremelkedés Európában', 'A tőzsde megalakulásának következménye'],correct:1},
  {q:'Mi a világkereskedelmi háromszög?',a:['Portugália, Spanyolország és Itália szövetsége', 'Európa-Afrika-Amerika közötti körforgás: iparcikk, rabszolga, nyersanyag', 'A három óceán közötti hajóút'],correct:1},
  {q:'Melyik városban nyílt az első tőzsde 1531-ben?',a:['Lisszabonban', 'Londonban', 'Antwerpenben'],correct:2},
  {q:'Mi volt a karavella?',a:['Egy navigációs műszer', 'Gyors vitorlás hajó, amely a szél ellen is haladni tudott', 'Az első tengeri térkép neve'],correct:1},
  {q:'Melyik növény NEM Amerikából került Európába?',a:['Burgonya', 'Kukorica', 'Búza'],correct:2}
];

let quizState10={q:[],idx:0,correct:0,answered:false};

function buildTopic10Quiz(){
  return `<div class="quiz-container">
    <div class="quiz-header">
      <h3>🎯 Mesterlövész Tudáspróba – 10. Akta</h3>
      <div class="quiz-counter" id="q10-counter">1 / 13</div>
    </div>
    <div class="quiz-body" id="quiz10-body">
      <div class="progress-dots" id="progress10-dots"></div>
      <div class="question-text" id="q10-text"></div>
      <div class="answers-grid" id="q10-answers"></div>
      <div class="feedback-box" id="feedback10"></div>
      <div style="text-align:right;margin-top:8px;clear:both;">
        <button class="next-btn" id="next10-btn" onclick="nextQuestion10()">Következő →</button>
      </div>
    </div>
    <div class="quiz-result" id="quiz10-result"></div>
  </div>`;
}

function initQuiz10(){
  quizState10.q=[...questions10].sort(()=>Math.random()-.5);
  quizState10.idx=0;quizState10.correct=0;quizState10.answered=false;
  document.getElementById('quiz10-body').style.display='block';
  document.getElementById('quiz10-result').style.display='none';
  renderQuestion10();
}

function renderQuestion10(){
  const q=quizState10.q[quizState10.idx];
  document.getElementById('q10-counter').innerText=`${quizState10.idx+1} / ${quizState10.q.length}`;
  document.getElementById('q10-text').innerText=q.q;
  const letters=['A','B','C'];
  const shuffled=[0,1,2].sort(()=>Math.random()-.5);
  document.getElementById('q10-answers').innerHTML=shuffled.map((origIdx,i)=>`
    <button class="answer-btn" data-correct="${origIdx===q.correct}" onclick="answerQ10(this)">
      <span class="answer-letter">${letters[i]}</span>${q.a[origIdx]}
    </button>`).join('');
  const dots=document.getElementById('progress10-dots');
  dots.innerHTML=Array.from({length:quizState10.q.length},(_,i)=>`<div class="dot ${i<quizState10.idx?(quizState10.q[i]._result==='c'?'correct':'wrong'):''}${i===quizState10.idx?'current':''}"></div>`).join('');
  document.getElementById('feedback10').style.display='none';
  document.getElementById('next10-btn').style.display='none';
  quizState10.answered=false;
}

function answerQ10(btn){
  if(quizState10.answered)return;
  quizState10.answered=true;
  const isCorrect=btn.dataset.correct==='true';
  document.querySelectorAll('#q10-answers .answer-btn').forEach(b=>{
    b.disabled=true;
    if(b.dataset.correct==='true')b.classList.add('correct');
  });
  if(isCorrect){
    btn.classList.add('correct');
    quizState10.correct++;
    quizState10.q[quizState10.idx]._result='c';
    const fb=document.getElementById('feedback10');
    fb.className='feedback-box correct';fb.innerText='🎉 Helyes! Zseniális válasz!';fb.style.display='block';
    startConfetti(30);
    if(window.mascotCorrect)mascotCorrect();
  } else {
    btn.classList.add('wrong');
    quizState10.q[quizState10.idx]._result='w';
    const fb=document.getElementById('feedback10');
    fb.className='feedback-box wrong';fb.innerText='❌ Sajnos nem ez volt a helyes válasz. Nézd meg a zöld gombot!';fb.style.display='block';
    if(window.mascotWrong)mascotWrong();
  }
  document.getElementById('next10-btn').style.display='block';
  document.getElementById('next10-btn').innerText=quizState10.idx===quizState10.q.length-1?'Eredmény megtekintése 🏆':'Következő kérdés →';
}

function nextQuestion10(){
  quizState10.idx++;
  if(quizState10.idx<quizState10.q.length){renderQuestion10();}
  else{showResult10();}
}

function showResult10(){
  document.getElementById('quiz10-body').style.display='none';
  const res=document.getElementById('quiz10-result');
  res.style.display='block';
  const score=quizState10.correct;
  const emoji=score>=11?'🏆':score>=9?'🥇':score>=6?'🥈':score>=4?'🥉':'💪';
  const msg=score>=11?'Fenomenális! Igazi mesterlövész vagy!':score>=9?'Kiváló munka, felderítő!':score>=6?'Szép teljesítmény! Még egy kis gyakorlás...':score>=4?'Jó próbálkozás! Olvass még egy kicsit!':'Gyakorolj sokat, ügynök!';
  const earnedXP=score*15;
  addXP(earnedXP);
  let unlockHtml='';
  if(score>=9){
    unlockHtml=`<div class="unlock-notice">🔓 Következő dosszié feloldható! A kód: <strong>1492</strong></div>`;
  } else {
    unlockHtml=`<div class="unlock-notice" style="background:var(--rose-l);border-color:var(--rose);color:var(--rose-d);">⚠️ Legalább 9/13 pont kell a következő dosszié kódjához! Próbáld újra!</div>`;
  }
  res.innerHTML=`<div class="result-emoji">${emoji}</div>
    <div class="result-score">${score} / 13</div>
    <div class="result-msg">${msg}</div>
    <div class="result-xp">⭐ +${earnedXP} XP megszerezve!</div>
    ${unlockHtml}
    <button class="retry-btn" onclick="initQuiz10()">🔄 Újra próbálom</button>`;
}
function buildTopic10Concepts(){
  const concepts=[
    {c:'purple',e:'🌍',t:'Karavella',d:"A 15. században kifejlesztett, gyors és manőverezhető vitorlás hajó, amely a szél ellen is haladni tudott. A portugál és spanyol felfedezők ezt a hajótípust használták az óceánon."},
    {c:'amber',e:'🧭',t:'Asztrolábium',d:"Csillagászati mérőeszköz, amellyel a hajósok a csillagok állása alapján meg tudták határozni pontos helyzetüket a nyílt tengeren. A biztonságos óceáni hajózás nélkülözhetetlen eszköze volt."},
    {c:'teal',e:'🗺️',t:'Tordesillasi szerződés',d:"1494-ben Spanyolország és Portugália felosztotta egymás között a felfedezett területeket. A képzeletbeli vonaltól nyugatra Spanyolországé, keletre Portugáliáé lett minden. Brazília ezért portugál."},
    {c:'rose',e:'🏛️',t:'Prekolumbián',d:"Kolumbusz előtti amerikai civilizációkat jelöl. Ilyen volt a maja (Yucatán), az azték (mai Mexikó) és az inka (Andok) kultúra – fejlett matematikával, csillagászattal és építészettel."},
    {c:'blue',e:'💰',t:'Árforradalom',d:"A felfedezések után Amerikából beáramlott rengeteg nemesfém (arany, ezüst) miatt a pénz értéke csökkent, az árak pedig meredeken emelkedtek. Ez alapjaiban forgatta fel az európai gazdaságot."},
    {c:'green',e:'🔺',t:'Világkereskedelmi háromszög',d:"Európa – Afrika – Amerika között kialakult kereskedelmi rendszer: Európából iparcikket vittek Afrikába, onnan rabszolgákat Amerikába, Amerikából nyersanyagot (cukrot, aranyat) Európába."},
    {c:'purple',e:'🏭',t:'Manufaktúra',d:"A céhrendszert felváltó új termelési mód: a munkát részfeladatokra bontották, amelyeket különböző bérmunkások végeztek. Olcsóbb és nagyobb mennyiségű termelést tett lehetővé."},
    {c:'amber',e:'📈',t:'Tőzsde',d:"Szabályozott piachely, ahol árukat, részvényeket és értékpapírokat adtak-vesznek. Nem kellett az egész árut odavinni, elég volt mintát mutatni. Az első 1531-ben nyílt Antwerpenben."},
    {c:'teal',e:'⚔️',t:'Gyarmatosítás',d:"Európai hatalmak által idegen területek katonai és gazdasági uralom alá vonása. A felfedezők után érkező konkvisztádorok elvették a bennszülöttek földjét, kincset és munkaerejét."},
    {c:'rose',e:'🌽',t:'Columbian Exchange',d:"A felfedezések nyomán indult meg növények, állatok és betegségek kicserélődése a két félteke között. Európába kerültek: burgonya, kukorica, paradicsom, paprika, kakaó, dohány."},
    {c:'blue',e:'🚢',t:'Tengerész Henrik',d:"Portugál herceg (1394–1460), aki Sagresben hajózási iskolát alapított. Szorgalmazta az Afrika körüli tengeri út feltárását. Bár maga nem vett részt felfedező utakon, nélküle nem lett volna kor."},
    {c:'green',e:'🌐',t:'Magellán körülhajózása',d:"Magellán 1519-ben indult el, és bár ő maga a Fülöp-szigeteken halt meg, egyik hajója (a Victoria) 1522-ben visszaért Spanyolországba. Ezzel bizonyította, hogy a Föld valóban gömbölyű."}
  ];
  return `<h2 style=font-family:'Fredoka One',cursive;font-size:1.4rem;color:var(--purple);margin-bottom:16px;>💡 Kulcsfogalmak – Kattints rá a fogalomra a magyarázathoz!</h2>
  <div class=concepts-grid>${concepts.map(c=>`
    <div class=concept-card ${c.c} onclick=toggleConcept(this)>
      <div class=concept-emoji>${c.e}</div>
      <div class=concept-term>${c.t}</div>
      <div class=concept-def>${c.d}</div>
      <div class=concept-hint>👆 Kattints a magyarázathoz</div>
    </div>`).join('')}</div>`;
}

