import { useState } from "react"


function App() {

  const [Joined, setJoined] = useState(false)

  window.onscroll = (e) =>{
    handleHomeScreenMoveDown()
  }

  const handleHomeScreenMoveDown = () =>{

    const top = document.getElementById('top')
    const logo = document.getElementById('logo')
    const logo2 = document.getElementById('logo2')
    const top2 = document.getElementById('top2')

    if(window.scrollY > 0){
      top.className = "hidden"
      logo.className = "hidden"
      top2.className = "h-[40px] shadow-md shadow-black bg-[#000000] border-2 border-white ml-2 max-lg:hidden text-white w-[calc(100%-200px)] justify-self-center flex justify-evenly items-center"
      logo2.className = "w-[159.5px] cursor-pointer max-lg:w-[105.5px] max-lg:h-[100px] shadow-md shadow-black h-[150px] bg-[#000000]"
    }else if(window.scrollY === 0){
      top.className = "absolute duration-200 ease-in bottom-0 h-[40px] bg-[#000000] rounded-t-full border-t-4 border-x-4 border-white max-lg:hidden text-white w-[calc(100%-200px)] justify-self-center flex justify-evenly items-center"
      logo.className = "absolute duration-200 ease-in top-4 left-4 w-[159.5px] h-[150px] bg-black bg-cover"
      top2.className="sticky hidden"
      logo2.className="sticky hidden"
    }

  }

  return (
    <div id="second" className="relative flex flex-col w-full h-full overflow-y-hidden">
      <header className="fixed top-2 z-50 flex w-3/4 justify-center max-lg:justify-start max-lg:w-full max-lg:left-6 max-lg:top-6 self-center">
        <div id="logo2" onClick={()=>(window.scrollTo(0,0))} className="hidden cursor-pointer w-[159.5px] max-lg:hidden h-[150px] bg-[#000000]">
          <div className="flex flex-col w-full h-full border-2 border-white">
            <h1 className="text-6xl max-lg:text-4xl font-bold text-center max-lg:p-2 p-4 pb-2 text-white">BHL</h1>
            <p className="text-center max-lg:text-xs font-bold text-white">Bulderointi HarrastusLiitto</p>
          </div>
        </div>
        <div id="top2" className = "hidden border-2 border-white h-[40px] bg-[#000000] ml-2 max-lg:hidden text-white w-[calc(100%-200px)] justify-self-center flex justify-evenly items-center">
          <button onClick={()=>(window.scrollTo(0,document.getElementById("johdanto").offsetTop))} className="font-bold cursor-pointer text-lg hover:underline decoration-4 decoration-cyan-300 text-center">Johdanto</button>
          <button onClick={()=>(window.scrollTo(0,document.getElementById("harrastus").offsetTop - 100))} className="font-bold cursor-pointer text-lg text-center hover:underline decoration-4 decoration-cyan-300">Harrastus</button>
          <button onClick={()=>(window.scrollTo(0,document.getElementById("varustus").offsetTop - 100))} className="font-bold cursor-pointer text-lg text-center hover:underline decoration-4 decoration-cyan-300">Varustus</button>
          <button onClick={()=>(window.scrollTo(0,document.getElementById("kilpailu").offsetTop - 100))} className="font-bold cursor-pointer text-lg text-center hover:underline decoration-4 decoration-cyan-300">Kilpailu</button>
          <button onClick={()=>(window.scrollTo(0,document.getElementById("yhteistiedot").offsetTop))} className="font-bold cursor-pointer text-lg text-center hover:underline decoration-4 decoration-cyan-300">Yhteistiedot</button>
        </div>
      </header>
      <div id="homeScreen" className="flex flex-col justify-center w-screen h-screen">
        <header id="relative" className="flex justify-center self-center relative w-3/4 h-3/4 max-lg:w-full max-lg:bg-left bg-[url(/src/assets/TAUSTAKUVA1.jpg)] bg-cover bg-center" 
        style={{clipPath: 'polygon(0 calc(100% - 100px), 0 0, 100% 0,100% calc(100% - 100px), calc(100% - 100px) 100%, 100px 100%)'}}>
          <div id="logo" className="absolute top-4 left-4 w-[159.5px] h-[150px] bg-black bg-cover">
            <div className="flex flex-col w-full h-full border-2 border-white">
              <h1 className="text-6xl font-bold text-center p-4 pb-2 text-white">BHL</h1>
              <p className="text-center font-bold text-white">Bulderointi HarrastusLiitto</p>
            </div>
          </div>
          <div id="top" className="absolute bottom-0 h-[40px] bg-[#000000] rounded-t-full border-t-4 border-x-4 border-white max-lg:hidden text-white w-[calc(100%-200px)] justify-self-center flex justify-evenly items-center">
            <button onClick={()=>(window.scrollTo(0,document.getElementById("johdanto").offsetTop))} className="font-bold cursor-pointer text-lg hover:underline decoration-4 decoration-cyan-300 text-center">Johdanto</button>
            <button onClick={()=>(window.scrollTo(0,document.getElementById("harrastus").offsetTop - 100))} className="font-bold cursor-pointer text-lg text-center hover:underline decoration-4 decoration-cyan-300">Harrastus</button>
            <button onClick={()=>(window.scrollTo(0,document.getElementById("varustus").offsetTop - 100))} className="font-bold cursor-pointer text-lg text-center hover:underline decoration-4 decoration-cyan-300">Varustus</button>
            <button onClick={()=>(window.scrollTo(0,document.getElementById("kilpailu").offsetTop - 100))} className="font-bold cursor-pointer text-lg text-center hover:underline decoration-4 decoration-cyan-300">Kilpailu</button>
            <button onClick={()=>(window.scrollTo(0,document.getElementById("yhteistiedot").offsetTop))} className="font-bold cursor-pointer text-lg text-center hover:underline decoration-4 decoration-cyan-300">Yhteistiedot</button>
          </div>
          
        </header>
        <div className="flex self-center w-3/4 h-1/4 justify-center max-lg:w-full">
          <h1 className="text-center self-center font-bold text-3xl max-lg:text-2xl">
              BOULDERING<br/>
              /ˈbəʊld(ə)rɪŋ/<br/>
              climbing on large boulders, either for practice or as a sport in its own right.
          </h1>
        </div>
      </div>
      {/* JOHDANTO Screen */}
      <div id="johdanto" className="mb-10 border-b-4 border-cyan-300 flex flex-col bg-[url(/src/assets/ISOKUVA1.jpg)] bg-fixed bg-cover bg-center justify-center w-screen h-[1200px]">
        <div className="w-[1000px] h-fit max-lg:w-5/6 text-white bg-black rounded-2xl self-center max-lg:p-6 p-10"
        style={{background: "rgba(0,0,0,0.85)"}}>
          <h1 className="text-center text-6xl max-lg:text-5xl">JOHDANTO</h1>
          <p className="text-4xl max-lg:text-2xl max-lg:mt-6 mt-10">Boulderointi eli vapaa kiipeily on kiipeilyn sivulaji, jossa kiipeilijä kiipeilee tiettyjä joko luonnosta löydettyjä tai sisäsaliin rakennettuja ratoja. Tämä eriytyy enemmän tunnetusta köysikiipeilystä sillä että kiipeilyssä ei käytetä köyttä ja radat ovat vain maksimissaan viiden metriä korkeita. Turvallisuus syistä kiipeilijän alla tulee olla paksu patja, johon putoaminen on jopa viiden metrin korkaudesta turvallista.</p>
        </div>
      </div>
      {/* HARRASTUS Screen */}
      <div id="harrastus" className="pt-10 pb-10 border-b-8 border-cyan-300 border-dashed flex flex-row justify-center w-screen h-fit">
        <div className="w-1/4 h-[100%-100px] flex justify-center max-lg:h-[fit-content] py-20 max-lg:w-screen bg-[url(/src/assets/PIENIKUVA1.jpg)] max-lg:rounded-none max-lg:bg-fixed rounded-r-4xl bg-cover bg-right">
          <div className="w-[1000px] hidden max-lg:inline h-fit max-lg:w-5/6 text-white bg-black rounded-2xl self-center max-lg:p-6 p-10"
          style={{background: "rgba(0,0,0,0.85)"}}>
            <h1 className="text-center text-6xl max-lg:text-5xl">HARRASTUS</h1>
            <p className="text-4xl max-lg:text-2xl max-lg:mt-6 mt-10">Boulderointi on harrastuksena todella aloittelija ystävällinen, sillä monessa
            kiipeilysalissa on myös aloittelijoille sunnattuja ratoja ja moni kiipeilysali tarjoaa
            ensikertalaisille edullista alotuskoulutusta jotta pääsee vauhtiin. 
            
            <br/><br/>Boulderointi kehittää
            todella hyvin kehon aivojen ja lihasten välistä kommunikaatiota, koska koko kehon on
            toimittava harmoniassa saadakseen tehtyä ratojen määrittämiä liikkeitä.
            Boulderointi kehittää montaa eri lihasryhmää, joista isoimmissa rasituksessa on
            yläselkä ja käsien lihakset. Jalkojen lihakset ovat myös tärkeitä pitämään jalat seinässä
            kiinni.
            <br/><br/>
            Boulderointi on myös hyvä tapa parantaa ongelmanratkaisutaitoja, sillä kaikkien ratojen
            kiipeämistyyli on vapaa ja radoissa on yleensä monta hieman eri tapaa päästä ylös.
            Tekniikka on siis lihasvoiman kanssa suuressa vaikutuksessa kiipeilysuoritukseen</p>
          </div>
        </div>
        <div className="w-3/4 max-lg:hidden text-left max-lg:p-0 pt-20 p-10 px-40">
          <h1 className="text-black text-center text-5xl mb-10">HARRASTUS</h1>
          <p className="text-4xl">Boulderointi on harrastuksena todella aloittelija ystävällinen, sillä monessa
            kiipeilysalissa on myös aloittelijoille sunnattuja ratoja ja moni kiipeilysali tarjoaa
            ensikertalaisille edullista alotuskoulutusta jotta pääsee vauhtiin. 
            
            <br/><br/>Boulderointi kehittää
            todella hyvin kehon aivojen ja lihasten välistä kommunikaatiota, koska koko kehon on
            toimittava harmoniassa saadakseen tehtyä ratojen määrittämiä liikkeitä.
            Boulderointi kehittää montaa eri lihasryhmää, joista isoimmissa rasituksessa on
            yläselkä ja käsien lihakset. Jalkojen lihakset ovat myös tärkeitä pitämään jalat seinässä
            kiinni.
            <br/><br/>
            Boulderointi on myös hyvä tapa parantaa ongelmanratkaisutaitoja, sillä kaikkien ratojen
            kiipeämistyyli on vapaa ja radoissa on yleensä monta hieman eri tapaa päästä ylös.
            Tekniikka on siis lihasvoiman kanssa suuressa vaikutuksessa kiipeilysuoritukseen</p>
        </div>
      </div>
      {/* VARUSTUS Screen */}
      <div id="varustus" className="pt-10 pb-10 border-b-8 border-cyan-300 border-dashed flex flex-row justify-center w-screen h-fit">
        <div className="w-3/4 max-lg:hidden text-left max-lg:p-0 p-10 pt-20 px-40">
          <div className="flex flex-row justify-between">            
            <h1 className="text-black text-start self-center text-5xl mb-10">VARUSTUS</h1> 
            <div className="w-1/2 h-fit flex flex-row justify-evenly">
              <a href="https://rockrun.com/ja/products/evolv-kira-womens" className="bg-[url(/src/assets/LINKKIKUVA1.jpg)] bg-center bg-cover w-[100px] rounded-2xl h-[100px] border-3 hover:border-cyan-300 cursor-pointer"></a>
              <a href="https://www.monodsports.com/products/black-diamond-mojo-zip-chalk-bag" className="bg-[url(/src/assets/LINKKIKUVA2.jpg)] bg-center rounded-2xl bg-cover w-[100px] h-[100px] border-3 hover:border-cyan-300 cursor-pointer"></a>
            </div>
          </div>
          <p className="text-4xl">Boulderointi varustus on hyvin minimaalinen verrattuna köysikiipeilyyn sillä köyttä tai
            muita lisävarustusta ei tarvitse. Tavallisimmat varustukset ovat kiipeilykengät ja mankka
            eli kiipeily jauhe.
            <br/><br/>
            Kiipeilykengät ovat ainut pakollinen varustus kiipeilyyn, koska ne auttavat jalkoja
            pysymään seinän pidoissa kiinni ja mahdollistavat pienen kontakti kohdan pienillä
            jalkapidoilla pysymisen auttamiseksi.
            <br/><br/>
            Kiipeily mankka on toinen hyvin standardisoitu kiipeily tuote, jota laitetaan käsiin
            auttamaan käsien ihon pysymistä kiipeily pidoissa. Mankan suurin tehtävä on pitää
            kädet kuivina, jotta käsistä erittynyt hiki ei muuta pitoja liukkaaksi.</p>
        </div>
        <div className="w-1/4 h-[100%-100px] flex justify-center max-lg:h-[fit-content] py-20 max-lg:w-screen bg-[url(/src/assets/PIENIKUVA2.jpg)] max-lg:rounded-none max-lg:bg-fixed rounded-l-4xl bg-cover bg-left">
          <div className="w-[1000px] hidden max-lg:inline h-fit max-lg:w-5/6 text-white bg-black rounded-2xl self-center max-lg:p-6 p-10"
          style={{background: "rgba(0,0,0,0.85)"}}>
            <h1 className="text-center text-6xl max-lg:text-5xl">VARUSTUS</h1>
            <div className="w-full mt-10 h-fit flex flex-row justify-evenly">
              <a href="https://rockrun.com/ja/products/evolv-kira-womens" className="bg-[url(/src/assets/LINKKIKUVA1.jpg)] bg-center bg-cover w-[100px] rounded-2xl h-[100px] border-3 border-cyan-300 hover:border-cyan-300 cursor-pointer"></a>
              <a href="https://www.monodsports.com/products/black-diamond-mojo-zip-chalk-bag" className="bg-[url(/src/assets/LINKKIKUVA2.jpg)] bg-center rounded-2xl bg-cover w-[100px] h-[100px] border-3 border-cyan-300 hover:border-cyan-300 cursor-pointer"></a>
            </div>
            <p className="text-4xl max-lg:text-2xl max-lg:mt-6 mt-10">Boulderointi varustus on hyvin minimaalinen verrattuna köysikiipeilyyn sillä köyttä tai
            muita lisävarustusta ei tarvitse. Tavallisimmat varustukset ovat kiipeilykengät ja mankka
            eli kiipeily jauhe.
            <br/><br/>
            Kiipeilykengät ovat ainut pakollinen varustus kiipeilyyn, koska ne auttavat jalkoja
            pysymään seinän pidoissa kiinni ja mahdollistavat pienen kontakti kohdan pienillä
            jalkapidoilla pysymisen auttamiseksi.
            <br/><br/>
            Kiipeily mankka on toinen hyvin standardisoitu kiipeily tuote, jota laitetaan käsiin
            auttamaan käsien ihon pysymistä kiipeily pidoissa. Mankan suurin tehtävä on pitää
            kädet kuivina, jotta käsistä erittynyt hiki ei muuta pitoja liukkaaksi.</p>
          </div>
        </div>
      </div>
      {/* KILPAILU Screen */}
      <div id="kilpailu" className="pt-10 pb-10 border-b-8 border-cyan-300 border-dashed flex flex-row justify-center w-screen h-fit">
        <div className="w-1/4 h-[100%-100px] flex justify-center max-lg:h-[fit-content] py-20 max-lg:w-screen bg-[url(/src/assets/PIENIKUVA3.jpg)] max-lg:rounded-none max-lg:bg-fixed rounded-r-4xl bg-cover bg-center">
          <div className="w-[1000px] hidden max-lg:inline h-fit max-lg:w-5/6 text-white bg-black rounded-2xl self-center max-lg:p-6 p-10"
          style={{background: "rgba(0,0,0,0.85)"}}>
            <h1 className="text-center text-6xl max-lg:text-5xl">KILPAILU</h1>
            <p className="text-4xl max-lg:text-2xl max-lg:mt-6 mt-10">Boulderoinnista on tullut viimeisen 5-10 vuoden aikana hyvin tunnettu laji, tähän on
              korkeatasoisesti vaikuttanut boulderointi kilpailuiden suosion nousu ja varsinkin
              olymppialaiset, jotka ottivat ”Sport Climbing” nimellä kiipeilyn mukaan lajierään 2020
              Tokyo olymppialaisissa. Sport Climbing oli myös osana 2024 Pariisin olymppialaisia.
              <br/><br/>
              Ennen olymppialaisia boulderointi on ollut kovassa suosiossa euroopassa ja
              amerikassa lokaalien kisojen ja joidenkin maailmanlaajuisten kisojen myötä. IFSC –
              International Federation Of Sport Climbing on järjestänyt maailmanlaajuisia kiipeily
              kisoja 2007 asti. Näiden kisojen myötä jotkut hyvin taitavat ovat saaneet rakennettua
              uran pelkällä kiipeillyllä.
              <br/><br/>
              Suomessa boulderointi kilpailuita järjestetään lokaalisesti omien kiipeilysalien kanssa
              ja on myös olemassa Boulderoinnin Suomen-Mestaruus, jota järjestää Suomen
              Kiipeilyliitto. Kilpailussa on eri luokkia iän mukaan: Aikuiset, U20, U18, U16, U14 ja U12.
              Viimeiset aikuisten kilpailut järjestettiin Espoossa.</p>
          </div>
        </div>
        <div className="w-3/4 max-lg:hidden text-left max-lg:p-0 pt-20 p-10 px-40">
          <h1 className="text-black text-center text-5xl mb-10">KILPAILU</h1>
          <p className="text-4xl">Boulderoinnista on tullut viimeisen 5-10 vuoden aikana hyvin tunnettu laji, tähän on
              korkeatasoisesti vaikuttanut boulderointi kilpailuiden suosion nousu ja varsinkin
              olymppialaiset, jotka ottivat ”Sport Climbing” nimellä kiipeilyn mukaan lajierään 2020
              Tokyo olymppialaisissa. Sport Climbing oli myös osana 2024 Pariisin olymppialaisia.
              <br/><br/>
              Ennen olymppialaisia boulderointi on ollut kovassa suosiossa euroopassa ja
              amerikassa lokaalien kisojen ja joidenkin maailmanlaajuisten kisojen myötä. IFSC –
              International Federation Of Sport Climbing on järjestänyt maailmanlaajuisia kiipeily
              kisoja 2007 asti. Näiden kisojen myötä jotkut hyvin taitavat ovat saaneet rakennettua
              uran pelkällä kiipeillyllä.
              <br/><br/>
              Suomessa boulderointi kilpailuita järjestetään lokaalisesti omien kiipeilysalien kanssa
              ja on myös olemassa Boulderoinnin Suomen-Mestaruus, jota järjestää Suomen
              Kiipeilyliitto. Kilpailussa on eri luokkia iän mukaan: Aikuiset, U20, U18, U16, U14 ja U12.
              Viimeiset aikuisten kilpailut järjestettiin Espoossa.</p>
        </div>
      </div>
      {/* YHTEISTIEDOT Screen */}
      <div id="yhteistiedot" className="pt-10 pb-10 border-b-8 border-cyan-300 border-dashed flex justify-center w-screen h-fit">
        <div className="space-x-10 space-y-10 flex flex-row justify-evenly w-3/4 h-fit max-lg:w-9/10 max-lg:flex-col">
          <div className="w-full flex flex-col justify-center space-y-10">
            <h1 className="text-5xl font-bold text-center">Yhteystiedot</h1>
            <p className="text-3xl text-center">BoulderointiHarrastusLiitto OY RY COM</p>
            <p className="text-3xl text-center">045 1234567890</p>
            <p className="text-3xl text-center">@BoulderointiHarrastusLiitto</p>
          </div>
          {!Joined && <div className="p-10 w-full flex flex-col justify-center space-y-10 border-4 bg-cyan-500 border-cyan-300 rounded-2xl" >
            <h1 className="text-5xl font-bold text-center">Liity Jäseneksi</h1>
            <input className="text-center font-bold bg-white text-black rounded-md border-2 h-[40px] w-3/5 self-center" type="text" placeholder="Kokonimi*" />
            <input className="text-center font-bold bg-white text-black rounded-md border-2 h-[40px] w-4/5 self-center" type="text" placeholder="Sähköposti*" />
            <input className="text-center font-bold bg-white text-black rounded-md border-2 h-[40px] w-3/5 self-center" type="text" placeholder="Puhelin*" />
            <input className="text-center font-bold bg-white text-black rounded-md border-2 h-[40px] w-4/5 self-center" type="text" placeholder="Osoite" />
            <button onClick={()=>setJoined(!Joined)} className="text-3xl bg-rose-600 border-2 border-black font-bold rounded-2xl w-1/2 self-center text-black h-[60px]">Liity</button>
          </div>}
          {Joined && <div className="p-10 w-full flex flex-col justify-center space-y-10 border-4 bg-cyan-500 border-cyan-300 rounded-2xl" >
            <h1 className="text-5xl font-bold text-center">Kiitos Liittymisestä</h1>
            <p className="text-3xl text-center">Olet nyt jäsen</p>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default App
