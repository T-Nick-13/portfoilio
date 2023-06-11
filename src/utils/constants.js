import site1 from '../images/light/sites/site1.jpg';
import site2 from '../images/light/sites/site2.jpg';
import site3 from '../images/light/sites/site3.jpg';
import site4 from '../images/light/sites/site4.jpg';
import site5 from '../images/light/sites/site5(1).jpg';

export const sites = [
  {
    link: site1,
    name: 'site1',
    src: 'https://www.lacers.org/article/mayor-proclaims-juneteenth-official-city-holiday'
  },
  {
    link: site2,
    name: 'site2',
    src: 'https://www.stl.tech/blog/diversity-equality-and-inclusion-a-willful-action-not-a-mandate-stl/'
  },
  {
    link: site3,
    name: 'site3',
    src: 'https://thesource.metro.net/2022/06/16/go-metro-to-celebrate-juneteenth/'
  },
  {
    link: site4,
    name: 'site4',
    src: 'https://premedinc.com/2022/10/05/breast-cancer-awareness-month/'
  },
  {
    link: site5,
    name: 'site5',
    src: 'https://alumni.ubc.ca/event/international-womens-day-embrace-equity/'
  },
]

//height 300px
import img1 from '../images/light/img1_s.png';
import img2 from '../images/light/img2_s.png';
import img3 from '../images/light/img3_s.png';
import img4 from '../images/light/img4_s.png';
import img6 from '../images/light/img6_s.png';
import img7 from '../images/light/img7_s.png';
import img8 from '../images/light/img8_s.png';
import img9 from '../images/light/img9_s.png';
import img10 from '../images/light/img10_s.png';
import img11 from '../images/light/img11_s.png';
import img12 from '../images/light/img12_s.png';
import img13 from '../images/light/img13_s.png';
import img14 from '../images/light/img14_s.png';
import img15 from '../images/light/img15_s.png';
import img16 from '../images/light/img16_s.png';
import img17 from '../images/light/img17_s.png';
import img18 from '../images/light/img18_s.png';
import img19 from '../images/light/img19_s.png';
import img20 from '../images/light/img20_s.png';
import img21 from '../images/light/img21_s.png';
import img22 from '../images/light/img22_s.png';
import img23 from '../images/light/img23_s.png';
import img24 from '../images/light/img24_s.png';
import img25 from '../images/light/img25_s.png';
import img26 from '../images/light/img26_s.png';
import img27 from '../images/light/img27_s.png';
import img28 from '../images/light/img28_s.png';
import img29 from '../images/light/img29_s.png';
import img30 from '../images/light/img30_s.png';
import img31 from '../images/light/img31_s.png';


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
          <textPath href='#circle' textLength='225'>
          &#160;SOCIETY &#160; SOCIETY &#160; SOCIETY &#160; SOCIETY &#160; SOCIETY
          </textPath>
        </text>
      </svg>
        <span className='card__circle-title'>DIVERSITY</span>
  </div >
;

const test4 =
  <div className='card__vertical-text'>
    <span>SILHOUETTES</span>
    <p>OF PEOPLE - <br />
      DIVERSITY OF<br />
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

export let rows = [
  {
    row: [{ src: img1 }, { src: img2 }, { src: img3 }]
  },
  {
    row: [{ src: img4 }, { text: text1 }]
  },
  {
    row: [{ text: text9 }, { src: img6 }]
  },
  {
    row: [{ src: img7 }]
  },
  {
    row: [{ src: img8 }, { src: img31 }]
  },
  {
    row: [{ text: test3 }, { src: img9 }]
  },
  {
    row: [{ src: img10 }, { text: test4 }, { src: img11 }]
  },
  {
    row: [{ src: img12 }, { src: img13 }, { src: img14 }]
  },
  {
    row: [{ src: img15 }]
  },
  {
    row: [{ text: text10, prop: 'card_typed' }]
  },
  {
    row: [{ src: img16 }]
  },
  {
    row: [{ src: img17 }, { text: text5 }, { src: img18 }]
  },
  {
    row: [{ src: img19 }, { src: img20 }]
  },
  {
    row: [{ src: img21 }, { text: text6 }, { src: img22 }]
  },
  {
    row: [{ src: img23 }, { src: img24 }, { src: img25 }]
  },
  {
    row: [{ src: img26 }, { src: img27, prop: 'card_scaled' }, { src: img28 }]
  },
  {
    row: [{ src: img29, text: text7 }]
  },
  {
    row: [{ text: text8 }]
  },
  {
    row: [{ src: img30 }]
  },

]

