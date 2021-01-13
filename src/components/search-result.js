import ArtistCard from './artist-card';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class SearchResult extends React.Component{

  state = {
    artist: [
      {
      name: "Allie X",
      match: "1",
      url: "https://www.last.fm/music/Allie+X",
      image: "https://lastfm.freetls.fastly.net/i/u/770x0/90e26efbc55272110db3679578946780.webp#90e26efbc55272110db3679578946780"
      },
      {
      name: "Lorde",
      mbid: "8e494408-8620-4c6a-82c2-c2ca4a1e4f12",
      match: "0.827789",
      url: "https://www.last.fm/music/Lorde",
      image: "https://lastfm.freetls.fastly.net/i/u/770x0/45087744ac5d8504e5e0dc1549a2a535.webp#45087744ac5d8504e5e0dc1549a2a535"
      },
      {
      name: "Billie Eilish",
      match: "0.811899",
      url: "https://www.last.fm/music/Billie+Eilish",
      image: "https://lastfm.freetls.fastly.net/i/u/770x0/5e4fafe8fa1dcc2665a4d86dcca0776f.webp#5e4fafe8fa1dcc2665a4d86dcca0776f"
     }, 
     {
      name: "Marina",
      mbid: "fe0ad4d4-391b-4f43-b02f-4d2ed0ab2b5e",
      match: "0.648183",
      url: "https://www.last.fm/music/Marina",
      image: "https://lastfm.freetls.fastly.net/i/u/770x0/a194ba605344b4f00619e94ed8ca8025.webp#a194ba605344b4f00619e94ed8ca8025"
      },
      {
      name: "BROODS",
      mbid: "68205c8f-9518-4b49-8df7-bd297da67599",
      match: "0.573807",
      url: "https://www.last.fm/music/BROODS",
      image: "https://lastfm.freetls.fastly.net/i/u/770x0/8cde0d3b2f2a91c520b94d22831302f2.webp#8cde0d3b2f2a91c520b94d22831302f2"
      },
      {
      name: "Declan Mckenna",
      match: "0.525606",
      url: "https://www.last.fm/music/Declan+Mckenna",
      image: "https://lastfm.freetls.fastly.net/i/u/770x0/d21cb38b605900feaaac31025ce41025.webp#d21cb38b605900feaaac31025ce41025"
      },
      {
      name: "Susanne Sundfør",
      mbid: "f3f9e76a-0685-4a9a-97d1-6fa2b50f9fba",
      match: "0.463562",
      url: "https://www.last.fm/music/Susanne+Sundf%C3%B8r",
      image: "https://lastfm.freetls.fastly.net/i/u/770x0/a0b4b2abd76449ccc93a750d72f87786.webp#a0b4b2abd76449ccc93a750d72f87786"
      },
      {
      name: "iamamiwhoami",
      mbid: "9aaa99df-9383-47df-92af-8bb5e5595815",
      match: "0.457291",
      url: "https://www.last.fm/music/iamamiwhoami",
      image: "https://lastfm.freetls.fastly.net/i/u/770x0/613c8499813e4280c2b3fed411aee0ef.webp#613c8499813e4280c2b3fed411aee0ef"
      }
    ]
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {this.state.artist.map((artista, i)=>{
              return <ArtistCard img={artista.image} titulo={artista.name} alt={artista.name} key={i}/>
            })}

            {/* <ArtistCard 
              img="https://mariskalrock.com/wp-content/uploads/2011/06/ironmaiden.jpg" 
              titulo="Iron Maden" 
            />
            <ArtistCard 
              img="https://mariskalrock.com/wp-content/uploads/2018/11/dream-theater-scenes-memory.jpg" 
              titulo="Dream Theater" 
            />
            <ArtistCard 
              img="https://img.discogs.com/V0mb8RT_vbbE1-E3JeB4kiE7NLs=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2135713-1323884545.jpeg.jpg" 
              titulo="Slayer" 
            />
            <ArtistCard 
              img="https://img.discogs.com/afKAn5QLNVrrkIK4P3vEX1ss0ZY=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2863438-1339506952-9501.jpeg.jpg" 
              titulo="Fear Factory" 
            />  */}
            <h1>{this.props.busqueda}</h1> 
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
