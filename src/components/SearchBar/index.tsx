import { useState } from 'react';
import './styles.css'
type Props = {
   onSearch: (text: string) => void;
}

export default function SearchBar({ onSearch }: Props) {

   const [text, setText] = useState("");

   function handleSubmit(e: any) {
      e.preventDefault();
      onSearch(text)
   }

   function handleChange(e: any) {
      setText(e.target.value)
   }

   function handleResertclick() {
      setText("")
      onSearch(text)
   }

   return (
      <form className="dsc-search-bar" onSubmit={handleSubmit}>
         <button type="submit">🔎︎</button>
         <input value={text} type="text" onChange={handleChange} placeholder="Nome do produto" />
         <button onClick={handleResertclick} >🗙</button>
      </form>
   )
}