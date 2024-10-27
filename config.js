const topBarCenterText = `PY3TX - GG40wb`;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  [
    "2196F3",
    "CALENDAR",
    "https://www.contestcalendar.com/weeklycont.php",
    "1",
  ],
  [
    "2196F3", 
    "CLUBLOG", 
    "https://clublog.org/livestream/PY3TX", 
    "1.7"
  ],
  [
    "2196F3",
    "CONTEST RUN",
    "https://contest.run",
    "1",
  ],
  [
    "2196F3",
    "DX CLUSTER",
    "https://dxcluster.ha8tks.hu/map/", 
    "1"
  ],
  [
    "2196F3",
    "DX HEAT",
    "https://www.dxheat.com/", 
    "1"
  ],
  [
    "2196F3",
    "LIGHTNING",
    "https://www.climaeradar.com.br/radarclima?center=-17.04,-52.56&zoom=4&layer=lr",
    "1",
    "R",
  ],
  [
    "2196F3",
    "TIME",
    "https://time.is/",
    "1",
    "R"
  ],
  [
    "2196F3",
    "VENTUSKY",
    "https://www.ventusky.com/?p=-29.6;-50.6;5&l=wind-10m",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=-30.2306&lon=-50.3943&zoom=6",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDY",
    "https://embed.windy.com/embed2.html?lat=-29.953&lon=-50.124&detailLat=-29.953&detailLon=-50.124&width=900&height=600&zoom=8&level=surface&overlay=clouds&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1",
    "1",
    "R"
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  [
    "RADAR",
    "https://s0.cptec.inpe.br/grafico/Satelite/goes16/realcadas/pagina/g16ch13_cptec.jpg",
  ],
  [
    "LOCAL RADAR",
    "https://ciram.epagri.sc.gov.br/mapas/Chuva_24h/prec24h.png",
  ],
  [
    "LIGHTNING",
    "https://satelite.cptec.inpe.br/repositoriowebdsa/ultimas/ult_glm.jpg",
  ],
  [
    "SAT LAST Hour",
    "https://ciram.epagri.sc.gov.br/ciram_arquivos/meteorologia/satelite/ultima1zoom.png",
  ],
  [
    "ISS & SO-50 POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=600&height=300&mode=M&satid=27607",
  ],
  [
    "SAT VIEW",
    "https://ciram.epagri.sc.gov.br/ciram_arquivos/meteorologia/satelite/animation.gif",
  ],
  [
    "SAT CGL",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/ssa/GEOCOLOR/GOES16-SSA-GEOCOLOR-900x540.gif",
  ],
  [
    " ", 
    "https://www.hamqsl.com/solarmuf.php", "https://www.hamqsl.com/solarmap.php", "https://services.swpc.noaa.gov/images/swx-overview-large.gif", "https://services.swpc.noaa.gov/images/animations/wam-ipe/wfs_ionosphere_new/latest.png"
  ],
  [
    "PROPAGATION",
    "https://www.tvcomm.co.uk/g7izu/Autosave/HF_ZERO1_AutoSave.JPG", "https://www.tvcomm.co.uk/g7izu/Autosave/ATL_HF10_AutoSave.JPG", "https://www.tvcomm.co.uk/g7izu/Autosave/PACIFIC_HF_AutoSave.JPG"
  ],
  [
    " ", 
    "https://img.propagation.dr2w.de/n-america/10M/dr2w_animation_10M.gif", "https://img.propagation.dr2w.de/n-america/20M/dr2w_animation_20M.gif", "https://img.propagation.dr2w.de/n-america/40M/dr2w_animation_40M.gif", "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png"  
  ],
  [
    "HF PROPAGATION",
    "https://www.hamqsl.com/solar101vhf.php",
    "https://www.hamqsl.com/solar100sc.php",
    "https://www.hamqsl.com/solarpich.php"
  ],
  [
    " ",
    "iframe|https://www.youtube.com/embed/FJT_f628QG8?autoplay=1&mute=1"
  ],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
const tileDelay = [11200,10000,11000,10100,10200,10500,10300,10600,30400,60700,60900,10800];
