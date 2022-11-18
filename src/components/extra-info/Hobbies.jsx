import React, { useState } from 'react'
import FadeInOut from '../fade/FadeInOut'

function Hobbies() {
  const [text1, setText1] = useState(true)
  const [text2, setText2] = useState(false)
  const [text3, setText3] = useState(false)
  const [text4, setText4] = useState(false)
  const [text5, setText5] = useState(false)
  const [text6, setText6] = useState(false)
  const [text7, setText7] = useState(false)
  const [text8, setText8] = useState(false)

  const handleText1 = () =>{
    setText1(!text1); setText2(false);setText3(false);setText4(false);setText5(false);setText6(false);setText7(false); setText8(false)
  } 
  const handleText2= () =>{
    setText1(false); setText2(!text2);setText3(false);setText4(false);setText5(false);setText6(false);setText7(false); setText8(false)
  } 
  const handleText3 = () =>{
    setText1(false); setText2(false);setText3(!text3);setText4(false);setText5(false);setText6(false);setText7(false); setText8(false)
  } 
  const handleText4 = () =>{
    setText1(false); setText2(false);setText3(false);setText4(!text4);setText5(false);setText6(false);setText7(false); setText8(false)
  } 
  const handleText5 = () =>{
    setText1(false); setText2(false);setText3(false);setText4(false);setText5(!text5);setText6(false);setText7(false); setText8(false)
  } 
  const handleText6 = () =>{
    setText1(false); setText2(false);setText3(false);setText4(false);setText5(false);setText6(!text6);setText7(false); setText8(false)
  } 
  const handleText7 = () =>{
    setText1(false); setText2(false);setText3(false);setText4(false);setText5(false);setText6(false);setText7(!text7);setText8(false)
  } 
  const handleText8 = () =>{
    setText1(false); setText2(false);setText3(false);setText4(false);setText5(false);setText6(false);setText7(false);setText8(!text8)
  } 

  return (
    <div>
        <div className='info-sub-titles'>My hobbies</div>
        <div className='hobbies-box box-shadows'>
          <button onClick={handleText1}> <i className={text1? "fa-solid fa-dice fa-spin":"fa-solid fa-dice"}></i> </button>
          <button onClick={handleText2}> <i className={text2? "fa-solid fa-puzzle-piece fa-spin":"fa-solid fa-puzzle-piece"}></i> </button>
          <button onClick={handleText3}> <i className={text3? "fa-solid fa-tv fa-spin":"fa-solid fa-tv"}></i> </button>
          <button onClick={handleText4}> <i className={text4? "fa-solid fa-plane-departure fa-spin":"fa-solid fa-plane-departure"}></i> </button>
          <button onClick={handleText5}> <i className={text5? "fa-solid fa-gamepad fa-spin":"fa-solid fa-gamepad"}></i> </button>
          <button onClick={handleText6}> <i className={text6? "fa-solid fa-children fa-spin":"fa-solid fa-children"}></i> </button>
          <button onClick={handleText7}> <i className={text7? "fa-solid fa-music fa-spin":"fa-solid fa-music"}></i> </button>
          <button onClick={handleText8}> <i className={text8? "fa-solid fa-user-ninja fa-spin":"fa-solid fa-user-ninja"}></i> </button>
        </div>
        <div className='hobbie-example-text'>
            <FadeInOut show={text1} duration={500}>
                {text1 && <div> I have a big collection of Board Games and ...</div>}
            </FadeInOut>
            <FadeInOut show={text2} duration={500}>
                {text2 && <div> Since i was kid i liked solvin problems, riddles, puzzles and so on, thats why I enjoy so much learning programming</div>}
            </FadeInOut>
            <FadeInOut show={text3} duration={500}>
                {text3 && <div> I`m big fan of cinema...</div>}
            </FadeInOut>
            <FadeInOut show={text4} duration={500}>
                {text4 && <div> I`ve travelled enough end seen a lot of people</div>}
            </FadeInOut>
            <FadeInOut show={text5} duration={500}>
                {text5 && <div> In my free time sometimes i like sumerging myself in a fantasy world... blablabla</div>}
            </FadeInOut>
            <FadeInOut show={text6} duration={500}>
                {text6 && <div> My kids and family</div>}
            </FadeInOut>
            <FadeInOut show={text7} duration={500}>
                {text7 && <div> Soy aficionado a muchas artes y la música es una de ellas. Aparte de tocar varios instrumentos de modo mediocre y cantar como un gato estreñido,
                disfruto de casi todos los estilos musicales a los que encuentro algo sonoro</div>}
            </FadeInOut>
            <FadeInOut show={text8} duration={500}>
                {text8 && <div> i've practiced martial arts since i have memory</div>}
            </FadeInOut>
        </div>
    </div>
  )
}

export default Hobbies