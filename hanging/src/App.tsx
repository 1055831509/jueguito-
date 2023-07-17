import { useEffect, useState } from 'react';
import { HangImage } from './components/HangImage';
import { letters } from './helpers/letters';
import { getRandomWord } from './helpers/getRandomWord';

import './App.css';

function App() {


  const [ word, setWord ] = useState ( getRandomWord() );
  const [ hiddenWord, setHiddenWord ] = useState('_ '.repeat( word.length ));
  const [ attemps, setAttemps ] = useState (0);
  const [ lose, setLose ] = useState( false );
  const [ won, setWon ] = useState( false );

  //Para determinar si perdioo

  useEffect(() => {
    if( attemps >= 9 ){
      setLose( true );
    }
  }, [ attemps ]);

  //Para determinar si ganoo

  useEffect( () => {
   //console.log(hiddenWord);
    const currentHiddenWord = hiddenWord.split(' ').join('');
    if (currentHiddenWord === word) {
     setWon( true );
    }
    
  }, [ hiddenWord ])




  const checkLetter = ( letter: string ) => {
    if ( lose ) return;
    if ( won ) return;
  
   if ( !word.includes(letter) ){
     setAttemps( Math.min ( attemps + 1, 9 ) );
   return;
   }

   const hiddenWordArray = hiddenWord.split(' ')

   for ( let i = 0 ; i < word.length; i++ ){
     if ( word[i] === letter ) {
     hiddenWordArray[i] = letter;
     }
   }
   setHiddenWord(hiddenWordArray.join(' '));
  }
   
   const newGame = () => {
    const newWord = getRandomWord();
    

    setWord( newWord );
    setHiddenWord('_ '.repeat( newWord.length ));
    setAttemps(0);
    setWon( false );
    setLose( false );
     
     
   }

  return(
    <div className="App">

        <HangImage imageNumber={ attemps } />
        
        <h3></h3>

        <h3>{ hiddenWord }</h3>

        <h3>Intentos: { attemps }</h3>

        {
          ( lose ) 
          ? <h2>Perdio, intenta una vez mas
          { word } </h2>
          : ''
        }
         
        {
          ( won ) 
          ? <h2>Felicidades, usted acaba de ganar 
          { word } </h2>
          : ''
        }
         

        
        {
         letters.map ( (letter) => (
          <button
          onClick={ () => checkLetter(letter) }
          key={ letter }>
          {letter}</button>
         ))
        }
        
      <br /> <br />
      <button onClick={ newGame } >¿Quiere jugar una vez mas?</button>




    </div>
  )
  };
export default App;
