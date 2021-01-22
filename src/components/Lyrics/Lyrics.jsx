import React from 'react';

export default function PageLyrics({song}){
    console.log(song, " this is lyrics");
    return (
       <div>
           <span>{song.lyrics}</span>
       </div>
    )
}