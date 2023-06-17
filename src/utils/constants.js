//rows for works page
const text1 =
  <p className='card__text'>The main theme in my works is<br />
    <span>PEOPLE</span>. You can find illustrations<br />
    about cultural divercity, equality<br />
    inclusion, and human rights
  </p>
;

const test2 =
  <p className='card__text'>Modern silhouettes of<br />
    people can showcase<br />
    the diversity of society
  </p>
;

const test3 =
  <div className='card__circle-wrapper'>
      <svg viewBox='0 0 100 100' className='card__circle'>
        <defs>
          <path id='circle'
            d='
              M 50, 50
              m -37, 0
              a 37,37 0 1,1 74,0
              a 37,37 0 1,1 -74,0'/>
        </defs>
        <text className='card__circle-text'>
          <textPath href='#circle' textLength='235'>
          &#160; IDENTITY &#160; DIVERSITY &#160; EQUALITY &#160; INCLUSION &#160;
          </textPath>
        </text>
      </svg>
        <span className='card__circle-title'>SOCIETY</span>
  </div >
;

const test4 =
  <div className='card__vertical-text'>
    <span>SILHOUETTES</span>
    <p>OF PEOPLE - <br />
      VARIETY OF<br />
      SOCIETY
    </p>
  </div>
;

const text5 =
  <p className='card__text'>Also, I like to create<br />
    illustrations for<br />
    different holidays and<br />
    sales
  </p>
;

const text6 =
  <p className='card__text'>Modern design for any<br />
    events
  </p>
;

const text7 =
  <p className='card__inside-text'>I like minimal design<br />
  if you like it too <br />
  just let me know :)
  </p>
;

const text8 =
<p className='card__text'>Stay in touch<br />
  Stafeeva.site <br />
</p>
;

const text9 =
  <div className='card__large-text'>
    <span>Vector Illsutrations</span>
    <p>MODERN <br />
      <span>MINIMALIST</span>
      DESIGN
    </p>
  </div>
;

const text10 =
  <p className='card__text'>Modern silhouettes of people can showcase the diversity of society</p>
;

const text11 =
  <p className='card__text card__text_inside'>I like minimal design<br />
  if you like it too <br />
  just let me know :)
  </p>
;

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item).default; });
  return images;
}

const images = importAll(require.context('../images/light/images_s', false));
const imagesM = importAll(require.context('../images/light/images_m', false));
const imagesL = importAll(require.context('../images/light/images_l', false));

export let rows = [
  {
    row: [
      { src: images['img1_s.png'], src_m: imagesM['1.jpg'], src_l: imagesL['1.jpg'] },
      { src: images['img2_s.png'], src_m: imagesM['2.jpg'], src_l: imagesL['2.jpg'], prop: 'card_small' },
      { src: images['img3_s.png'], src_m: imagesM['3.jpg'], src_l: imagesL['3.jpg'] }
    ]
  },
  {
    row: [
      { src: images['img4_s.png'], src_m: imagesM['4.jpg'], src_l: imagesL['4.jpg'] },
      { text: text1 }
    ]
  },
  {
    row: [
      { text: text9 },
      { src: images['img5_s.png'], src_m: imagesM['5.jpg'], src_l: imagesL['5.jpg'] }
    ]
  },
  {
    row: [{ src: images['img6_s.png'], src_m: imagesM['6.jpg'], src_l: imagesL['6.jpg'] }]
  },
  {
    row: [
      { src: images['img7_s.png'], src_m: imagesM['7.jpg'], src_l: imagesL['7.jpg'] },
      { src: images['img30_s.png'], src_m: imagesM['30.jpg'], src_l: imagesL['30.jpg'] }
    ]
  },
  {
    row: [
      { text: test3 },
      { src: images['img8_s.png'], src_m: imagesM['8.jpg'], src_l: imagesL['8.jpg'] }
    ]
  },
  {
    row: [
      { src: images['img9_s.png'], src_m: imagesM['9.jpg'], src_l: imagesL['9.jpg'] },
      { text: test4 },
      { src: images['img10_s.png'], src_m: imagesM['10.jpg'], src_l: imagesL['10.jpg'] }
    ]
  },
  {
    row: [
      { src: images['img11_s.png'], src_m: imagesM['11.jpg'], src_l: imagesL['11.jpg'] },
      { src: images['img12_s.png'], src_m: imagesM['12.jpg'], src_l: imagesL['12.jpg'] },
      { src: images['img13_s.png'], src_m: imagesM['13.jpg'], src_l: imagesL['13.jpg'] }]
  },
  {
    row: [{ src: images['img14_s.png'], src_m: imagesM['14.jpg'], src_l: imagesL['14.jpg'] }]
  },
  {
    row: [{ text: text10, prop: 'card_typed' }]
  },
  {
    row: [{ src: images['img15_s.png'], src_m: imagesM['15.jpg'], src_l: imagesL['15.jpg'] }]
  },
  {
    row: [
      { src: images['img16_s.png'], src_m: imagesM['16.jpg'], src_l: imagesL['16.jpg'] },
      { text: text5 },
      { src: images['img17_s.png'], src_m: imagesM['17.jpg'], src_l: imagesL['17.jpg'] }
    ]
  },
  {
    row: [
      { src: images['img18_s.png'], src_m: imagesM['18.jpg'], src_l: imagesL['18.jpg'] },
      { src: images['img19_s.png'], src_m: imagesM['19.jpg'], src_l: imagesL['19.jpg'] }
    ]
  },
  {
    row: [
      { src: images['img20_s.png'], src_m: imagesM['20.jpg'], src_l: imagesL['20.jpg'] },
      { text: text6 },
      { src: images['img21_s.png'], src_m: imagesM['21.jpg'], src_l: imagesL['21.jpg'] }
    ]
  },
  {
    row: [
      { src: images['img22_s.png'], src_m: imagesM['22.jpg'], src_l: imagesL['22.jpg'] },
      { src: images['img23_s.png'], src_m: imagesM['23.jpg'], src_l: imagesL['23.jpg'] },
      { src: images['img24_s.png'], src_m: imagesM['24.jpg'], src_l: imagesL['24.jpg'] }
    ]
  },
  {
    row: [
      { src: images['img25_s.png'], src_m: imagesM['25.jpg'], src_l: imagesL['25.jpg'] },
      { src: images['img26_s.png'], prop: 'card_scaled', src_m: imagesM['26.jpg'], src_l: imagesL['26.jpg'] },
      { src: images['img27_s.png'], src_m: imagesM['27.jpg'], src_l: imagesL['27.jpg'] }
    ]
  },
  {
    row: [
      { text: text11 },
      { src: images['img28_s.png'], text: text7, src_m: imagesM['28.jpg'], src_l: imagesL['28.jpg'] },
    ]
  },
  {
    row: [{ text: text8 }]
  },
  {
    row: [{ src: images['img29_s.png'], src_m: imagesM['29.jpg'], src_l: imagesL['29.jpg'] }]
  },

]

//rows for Usage page
const usageImgS = importAll(require.context('../images/light/sites/s', false));
const usageImgL = importAll(require.context('../images/light/sites/l', false));

const usageText1 =
<p className='card__text'>
  You can see the use of my<br />
  work in various fields<br />
</p>
;

const usageText2 =
<p className='card__text'>
  Here are links to several<br />
  websites featuring my works<br />
</p>
;

const usageText3 =
  <div className='card__circle-wrapper'>
    <svg viewBox='0 0 100 100' className='card__circle usage__circle'>
      <defs>
        <path id='circle'
          d='
            M 50, 50
            m -37, 0
            a 37,37 0 1,1 74,0
            a 37,37 0 1,1 -74,0'/>
      </defs>
      <text className='card__circle-text'>
        <textPath href='#circle' textLength='235'>
        &#160; STAY IN TOUCH &#160; STAY IN TOUCH &#160; STAY IN TOUCH &#160;
        </textPath>
      </text>
    </svg>
  </div >
;

export let usageRows = [
  {
    row: [
      { text: usageText1 },
      { src: usageImgS['1.png'], src_l: usageImgL['1.png'], link: 'https://www.instagram.com/p/Cs1H3m5PpLy/?hl=en' },
      { src: usageImgS['2.jpg'], src_l: usageImgL['2.jpg'], link: 'https://www.lacers.org/article/mayor-proclaims-juneteenth-official-city-holiday' }
    ]
  },
  {
    row: [
      { src: usageImgS['3.png'], src_l: usageImgL['3.png'], link: 'https://www.vendorship.net/category/in-the-news/' },
      { src: usageImgS['4.png'], src_l: usageImgL['4.png'], link: 'https://www.community-foundation.com/fun' }
    ]
  },
  {
    row: [
      { src: usageImgS['5.png'], src_l: usageImgL['5.png'], link: 'https://joiicare.com/journal/gender-bias-and-the-importance-of-equity-in-healthcare' },
      { text: usageText2 },
      { src: usageImgS['6.png'], src_l: usageImgL['6.png'], link: 'https://www.lboro.ac.uk/research/ias/events/2023/january/researchseminar-drandrepimentafreire/' }
    ]
  },
  {
    row: [
      { src: usageImgS['7.jpg'], src_l: usageImgL['7.jpg'], link: 'https://thesource.metro.net/2022/06/16/go-metro-to-celebrate-juneteenth/' },
      { src: usageImgS['8.png'], src_l: usageImgL['8.png'], link: 'https://twitter.com/PAVictimsOffice/status/1637881156711358468' },
      { src: usageImgS['9.jpg'], src_l: usageImgL['9.jpg'], link: 'https://premedinc.com/2022/10/05/breast-cancer-awareness-month/' }
    ]
  },
  {
    row: [
      { src: usageImgS['10.png'], src_l: usageImgL['10.png'], link: 'https://www.cdice.ac.uk/events/edi-workshop-2/' },
      { src: usageImgS['11.jpg'], src_l: usageImgL['11.jpg'], link: 'https://www.stl.tech/blog/diversity-equality-and-inclusion-a-willful-action-not-a-mandate-stl/' },
      { text: usageText3 }
    ]
  },
]
