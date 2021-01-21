import React from 'react';

export default function PageLyrics({song}){
    return (
       <div>
           <span>{song.lyrics}</span>
       </div>
    )
}